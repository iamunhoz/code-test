import { AppStore } from 'types'
import create from 'zustand'
import { getPosts } from 'api'

export const useAppStore = create<AppStore>((set) => ({
  postId: '0',
  setPostId(id: string) {
    set(() => ({ postId: id }))
  },
  posts: [],
  getPosts: async (params) => {
    const response = await getPosts(params)
    set({ posts: await response.data })
  }
}))
