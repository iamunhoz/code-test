import { useAppStore } from 'state'

export default function ContactFormModal() {
  const { setShowContactFormModal } = useAppStore((state) => state)

  const closeModal = () => {
    setShowContactFormModal(false)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault()
    const formFields = ['name', 'email', 'phone', 'post']

    const values: Record<string, string> = {}
    formFields.forEach((field) => {
      values[field] = evt.target[field].value
    })
    console.log('submit values', values)
  }

  return (
    <div
      className="fixed h-screen w-screen flex justify-center items-center top-0 left-0"
      style={{ backgroundColor: 'rgba(45, 45, 45, 0.7)' }}
    >
      <div
        className="w-1/2 h-1/2 relative"
        style={{ backgroundColor: 'white' }}
      >
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" />
          </label>

          <label>
            E-mail:
            <input type="text" name="email" />
          </label>

          <label>
            Phone:
            <input type="text" name="phone" />
          </label>

          <label>
            Post:
            <textarea name="post" />
          </label>

          <input type="submit" value="Submit" />
        </form>
        <button
          className="absolute top-3 right-3 font-bold"
          onClick={closeModal}
        >
          X
        </button>
      </div>
    </div>
  )
}
