import { useAppStore } from 'state'
import { Post, ContactFormModal, Timeline, TopBar } from 'components'
import './global.style.css'

export default function App() {
  const { postId, showContactFormModal } = useAppStore((state) => state)

  return (
    <div className="relative">
      <TopBar />
      {postId === '0' ? <Timeline /> : <Post />}
      {showContactFormModal && <ContactFormModal />}
    </div>
  )
}
