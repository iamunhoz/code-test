import { AppStore } from 'types'
import create from 'zustand'
import { fetchPosts } from 'api'

export const useAppStore = create<AppStore>((set) => ({
  postId: '0',
  setPostId(id: string) {
    set(() => ({ postId: id }))
  },

  posts: [],
  getPosts: async (params) => {
    const response = await fetchPosts(params)
    const newPosts = await response.data
    set((state) => ({ posts: [...state.posts, ...newPosts] }))
  },

  showContactFormModal: false,
  setShowContactFormModal(choice: boolean) {
    set(() => ({ showContactFormModal: choice }))
  }
}))
