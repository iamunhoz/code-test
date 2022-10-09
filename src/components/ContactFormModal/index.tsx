import { useAppStore } from 'state'
import { ParamsPostContact } from 'types'

import { useForm } from 'react-form'
import { NameField, EmailField, PhoneField, MessageField } from './fields'
import { IconSend } from 'components/icons'

export default function ContactFormModal() {
  const { setShowContactFormModal, sendContact } = useAppStore((state) => state)

  const {
    Form,
    meta: { isSubmitting, canSubmit }
  } = useForm({
    onSubmit: async (values: ParamsPostContact) => {
      await sendContact(values)
    }
    //debugForm: true
  })

  const closeModal = () => {
    setShowContactFormModal(false)
  }

  return (
    <div
      className="fixed h-screen w-screen flex justify-center items-center top-0 left-0"
      style={{ backgroundColor: 'rgba(45, 45, 45, 0.7)' }}
    >
      <div
        className="w-3/4 h-4/5 relative"
        style={{ backgroundColor: 'white' }}
      >
        <Form>
          <div className="flex flex-col p-8">
            <h2 className="text-2xl text-center mb-4">Contact</h2>
            <label className="flex flex-col mb-4">
              Name
              <NameField />
            </label>
            <label className="flex flex-col mb-4">
              Email
              <EmailField />
            </label>
            <label className="flex flex-col mb-4">
              Phone
              <PhoneField />
            </label>
            <label className="flex flex-col mb-4">
              Message
              <MessageField />
            </label>
            <button
              disabled={!canSubmit}
              type="submit"
              className="text-white flex p-2 w-1/2 mx-auto justify-center gap-2"
              style={{ background: '#2D2D2D' }}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                />
              ) : (
                <IconSend />
              )}
              Submit
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
