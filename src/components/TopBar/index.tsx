import { useAppStore } from 'state'

export default function TopBar() {
  const { setPostId } = useAppStore((state) => state)

  const goToTimeline = () => {
    setPostId('0')
  }
  const openContactFormModal = () => {
    //
  }
  return (
    <div
      className="flex h-24 items-center justify-around"
      style={{
        background: '#2D2D2D'
      }}
    >
      <h1 className="text-4xl font-bold">Rockr Blog</h1>
      <div>
        <button onClick={goToTimeline} className="mr-12 text-2xl text-white">
          Posts
        </button>
        <button onClick={openContactFormModal} className="text-2xl text-white">
          Contact
        </button>
      </div>
    </div>
  )
}
