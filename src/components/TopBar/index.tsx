import { useAppStore } from 'state'

export default function TopBar() {
  const { setPostId, setShowContactFormModal } = useAppStore((state) => state)

  const goToTimeline = () => {
    setPostId('0')
  }
  const openContactFormModal = () => {
    setShowContactFormModal(true)
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
          className="text-base lg:text-xl text-white h-8 my-auto pt-2"
        >
          Contact
        </button>
      </div>
    </div>
  )
}
