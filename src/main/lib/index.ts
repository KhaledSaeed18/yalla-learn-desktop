import { appDirectoryName, fileEncoding, welcomeNoteFilename } from "@shared/constants"
import { NoteInfo } from "@shared/models"
import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from "@shared/types"
import { dialog } from "electron"
import { ensureDir, readdir, readFile, remove, stat, writeFile } from "fs-extra"
import { homedir } from "os"
import path from "path"
import { isEmpty } from 'lodash'
import welcomeNoteFile from '../../../resources/welcomeNote.md?asset'

// get the root directory of the app
export const getRootDir = () => {
    return path.join(homedir(), appDirectoryName)
}

export const getNotes: GetNotes = async () => {
    const rootDir = getRootDir()

    // ensure the root directory exists, if not create it
    await ensureDir(rootDir)

    // get all the files in the root directory
    const notesFileNames = await readdir(rootDir, {
        encoding: fileEncoding,
        withFileTypes: false
    })

    // filter out only the notes, which are markdown files
    const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

    // if no notes are found, show a welcome note to the user
    if (isEmpty(notes)) {
        const content = await readFile(welcomeNoteFile, { encoding: fileEncoding })

        await writeFile(`${rootDir}/${welcomeNoteFilename}`, content, { encoding: fileEncoding })

        notes.push(welcomeNoteFilename)
    }

    return Promise.all(notes.map(getNoteInfoFromFilename))
}

// get the note info from the filename
export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {

    // get the file stats for the file to get the last edit time of the note
    const fileStats = await stat(`${getRootDir()}/${filename}`)

    // return the note info object with the title and last edit time
    return {
        title: filename.replace(/\.md$/, ''), // remove the .md extension from the filename
        lastEditTime: fileStats.mtimeMs // get the last edit time of the file in milliseconds
    }
}

// read the note content from the file
export const readNote: ReadNote = async (filename) => {
    const rootDir = getRootDir()

    // read the file content and return the promise with the content
    return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

// write the note content to the file
export const writeNote: WriteNote = async (filename, content) => {
    const rootDir = getRootDir()

    // write the content to the file and return the promise
    return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}


// create a new note file
export const createNote: CreateNote = async () => {
    const rootDir = getRootDir()

    // ensure the root directory exists, if not create it
    await ensureDir(rootDir)

    // show the save dialog to get the file path to save the new note file
    const { filePath, canceled } = await dialog.showSaveDialog({
        title: 'New note', // dialog title
        defaultPath: path.join(rootDir, 'Untitled.md'), // default file path to save the note
        buttonLabel: 'Create', // button label for the save button
        properties: ['showOverwriteConfirmation'],
        showsTagField: false,
        filters: [{ name: 'Markdown', extensions: ['md'] }] // file extension filter, only markdown files are allowed
    })

    // if the dialog is canceled or no file path is selected return false
    if (canceled || !filePath) {
        return false
    }

    // get the filename and parent directory of the file path
    const { name: filename, dir: parentDir } = path.parse(filePath)

    // show an error dialog if the parent directory is not the root directory and return false
    if (path.normalize(parentDir) !== path.normalize(rootDir)) {
        await dialog.showMessageBox({
            type: 'error',
            title: 'Creation failed',
            message: `All notes must be saved under ${rootDir}.\nAvoid using other directories!`
        })

        return false
    }

    // create the file with the filename and return the filename
    await writeFile(filePath, '')

    return filename
}

// delete the note file
export const deleteNote: DeleteNote = async (filename) => {
    const rootDir = getRootDir()

    // show a warning dialog to confirm the deletion of the note0
    const { response } = await dialog.showMessageBox({
        type: 'warning',
        title: 'Delete note',
        message: `Are you sure you want to delete ${filename}?`,
        buttons: ['Delete', 'Cancel'],
        defaultId: 1,
        cancelId: 1
    })

    if (response === 1) {
        return false
    }

    await remove(`${rootDir}/${filename}.md`)
    return true
}