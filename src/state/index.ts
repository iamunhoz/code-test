import { AppStore } from 'types'
import create from 'zustand'
import { getPosts, postContact } from 'api'

export const useAppStore = create<AppStore>((set, get) => ({
  postId: '0',
  setPostId(id: string) {
    set(() => ({ postId: id }))
  },

  posts: [],
  fetchPosts: async (params) => {
    if (!get().loadingGet) {
      set(() => ({ loadingGet: true }))
    }

    const response = await getPosts(params)

    if (response.status >= 200 && response.status < 300) {
      const newPosts = await response.data
      set((state) => ({ posts: [...state.posts, ...newPosts] }))
      set(() => ({ loadingGet: false }))
    } else {
      // never stop trying
      get().fetchPosts(params)
    }
  },

  showContactFormModal: false,
  setShowContactFormModal(choice: boolean) {
    set(() => ({ showContactFormModal: choice }))
  },

  sendContact: async (params) => {
    set(() => ({ loadingPost: true }))
    const response = await postContact(params)
    if (response.status >= 200 && response.status < 300) {
      set(() => ({ loadingPost: false }))
    }
  },

  loadingGet: false,
  loadingPost: false
}))
