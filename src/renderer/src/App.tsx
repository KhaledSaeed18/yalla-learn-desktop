import { ActionButtonsRow, Content, FloatingNoteTitle, HomePage, MarkdownEditor, NotePreviewList, RootLayout, Sidebar } from "@/components"
import { useRef, useState } from "react"

function App() {
  const [showHomePage, setShowHomePage] = useState(true)
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  const handleGetStarted = () => {
    setShowHomePage(false)
  }

  if (showHomePage) {
    return <HomePage onGetStarted={handleGetStarted} />
  }

  return (
    <RootLayout>
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </Sidebar>
      <Content ref={contentContainerRef} className="border-l bg-zinc-900/50 border-l-white/20">
        <FloatingNoteTitle className="pt-2" />
        <MarkdownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
