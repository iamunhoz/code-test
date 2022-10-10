import { useAppStore } from 'state'

export default function TopBar() {
  const { setPostId, setShowContactFormModal, setShowPostFormModal } =
    useAppStore((state) => state)

  const goToTimeline = () => {
    setPostId('0')
  }

  const openContactFormModal = () => {
    setShowContactFormModal(true)
  }

  const openNewPostFormModal = () => {
    setShowPostFormModal(true)
  }

  return (
    <div
      className="flex h-24 items-baseline justify-around sticky top-0 z-40"
      style={{
        background: '#2D2D2D'
      }}
    >
      <h1 className="text-2xl font-bold my-auto">Rockr Blog</h1>
      <div className="h-full flex items-baseline">
        <button
          onClick={goToTimeline}
          className="mr-3 text-base lg:text-xl text-white h-8 my-auto pt-2"
        >
          Posts
        </button>
        <button
          onClick={openContactFormModal}
          className="mr-3 text-base lg:text-xl text-white h-8 my-auto pt-2"
        >
          Contact
        </button>
        <button
          onClick={openNewPostFormModal}
          className="text-base lg:text-xl text-white h-10 w-24 lg:w-28 font-bold my-auto mt-8 rounded-full"
          style={{ background: '#F1A10A' }}
        >
          New Post
        </button>
      </div>
    </div>
  )
}
