import { CreateNote, DeleteNote, GetNotes, ReadNote, WriteNote } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      // Expose the electronAPI object to the renderer process
      locale: string,
      getNotes: GetNotes,
      readNote: ReadNote,
      writeNote: WriteNote,
      createNote: CreateNote,
      deleteNote: DeleteNote
    }
  }
}
