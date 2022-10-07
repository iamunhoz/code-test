import { useAppStore } from 'state'
import { Post, ContactFormModal, Timeline, TopBar } from 'components'

export default function App() {
  const { postId } = useAppStore((state) => state)

  return (
    <div>
      <TopBar />
      {postId === 0 ? <Timeline /> : <Post />}
      <ContactFormModal />
    </div>
  )
}
