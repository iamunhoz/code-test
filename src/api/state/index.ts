import create from 'zustand'

type AppStore = {
  postId: number
  setPostId: (id: number) => void
}

export const useAppStore = create<AppStore>((set) => ({
  postId: 0,
  setPostId(id: number) {
    set(() => ({ postId: id }))
  }
}))
