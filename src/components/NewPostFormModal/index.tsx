import { useAppStore } from 'state'
import { ParamsNewPost } from 'types'
import { useForm } from 'react-form'
import { TitleField, AuthorField, ImageURLField, PostField } from './fields'
import { IconPencil, IconPencilFunnySpinner } from 'components/icons'
import placeholder from 'components/icons/placeholder.png'

export default function NewPostFormModal() {
  const { setShowPostFormModal, sendPost, newPostImgURL } = useAppStore(
    (state) => state
  )

  const {
    Form,
    meta: { isSubmitting, canSubmit }
  } = useForm({
    onSubmit: async (values: ParamsNewPost) => {
      await sendPost(values)
    }
  })

  const closeModal = () => {
    setShowPostFormModal(false)
  }

  return (
    <div
      className="fixed h-screen w-screen flex justify-center items-center top-0 left-0 z-50"
      style={{ backgroundColor: 'rgba(45, 45, 45, 0.7)' }}
    >
      <div
        className="w-[95%] h-[95%] relative"
        style={{ backgroundColor: 'white' }}
      >
        <Form>
          <div className="flex flex-col p-6 lg:px-32 xl:px-64">
            <img
              src={newPostImgURL || placeholder}
              className="rounded-full w-24 h-24 mx-auto mb-6"
            />
            <h2 className="text-2xl text-center mb-3">New Post</h2>
            <label className="flex flex-col mb-3">
              Title
              <TitleField />
            </label>
            <label className="flex flex-col mb-3">
              Author
              <AuthorField />
            </label>
            <label className="flex flex-col mb-3">
              Image URL
              <ImageURLField />
            </label>
            <label className="flex flex-col mb-3">
              Post
              <PostField />
            </label>
            <button
              disabled={!canSubmit}
              type="submit"
              className="text-white flex p-2 w-full md:w-1/2 mx-auto justify-center gap-2"
              style={{ background: '#2D2D2D' }}
            >
              {isSubmitting ? <IconPencilFunnySpinner /> : <IconPencil />}
              Create Post
            </button>
          </div>
        </Form>
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
