import { NoteContent, NoteInfo } from '@shared/models'
import { atom } from 'jotai'
import { unwrap } from 'jotai/utils'

const loadNotes = async () => {
    // get the notes from the main process using the context bridge
    const notes = await window.context.getNotes()

    // sort them by most recently edited
    return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

// create an atom to store the notes and load them asynchronously
const notesAtomAsync = atom<NoteInfo[] | Promise<NoteInfo[]>>(loadNotes())

// export the notes atom with the resolved value using the unwrap utility
export const notesAtom = unwrap(notesAtomAsync, (prev) => prev)

// create an atom to store the selected note index and initialize it with null
export const selectedNoteIndexAtom = atom<number | null>(null)

const selectedNoteAtomAsync = atom(async (get) => {
    const selectedNoteIndex = get(selectedNoteIndexAtom)
    const notes = get(notesAtom)

    if (selectedNoteIndex == null || !notes) return null

    const selectedNote = notes[selectedNoteIndex]

    const noteContent = await window.context.readNote(selectedNote.title)

    return {
        ...selectedNote,
        content: noteContent
    }
})

export const selectedNoteAtom = unwrap(
    selectedNoteAtomAsync,
    (prev) =>
        prev ?? {
            title: '',
            content: '',
            lastEditTime: Date.now()
        }
)

export const createEmptyNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)

    if (!notes) return

    const title = await window.context.createNote()

    if (!title) return

    const newNote: NoteInfo = {
        title,
        lastEditTime: Date.now()
    }

    set(notesAtom, [newNote, ...notes.filter((note) => note.title !== newNote.title)])

    set(selectedNoteIndexAtom, 0)
})


export const deleteNoteAtom = atom(null, async (get, set) => {
    const notes = get(notesAtom)
    const selectedNote = get(selectedNoteAtom)

    if (!selectedNote || !notes) return

    const isDeleted = await window.context.deleteNote(selectedNote.title)

    if (!isDeleted) return

    set(
        notesAtom,
        notes.filter((note) => note.title !== selectedNote.title)
    )

    set(selectedNoteIndexAtom, null)
})

export const saveNoteAtom = atom(null, async (get, set, newContent: NoteContent) => {
    const notes = get(notesAtom)
    const selectedNote = get(selectedNoteAtom)

    if (!selectedNote || !notes) return

    // write the new content to the file using the context bridge
    await window.context.writeNote(selectedNote.title, newContent)

    // update the notes atom
    set(
        notesAtom,
        notes.map((note) => {
            // select the note to update 
            if (note.title === selectedNote.title) {
                return {
                    ...note,
                    lastEditTime: Date.now()
                }
            }

            return note
        })
    )
})