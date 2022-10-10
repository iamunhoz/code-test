import { useAppStore } from 'state'
import {
  Post,
  ContactFormModal,
  Timeline,
  TopBar,
  NewPostFormModal
} from 'components'
import './global.style.css'

export default function App() {
  const { postId, showContactFormModal, showPostFormModal } = useAppStore(
    (state) => state
  )

  return (
    <div className="relative">
      <TopBar />
      {postId === '0' ? <Timeline /> : <Post />}
      {showContactFormModal && <ContactFormModal />}
      {showPostFormModal && <NewPostFormModal />}
    </div>
  )
}
