export type ParamsFetchPosts =
  | {
      _page: number
      _limit: number
    }
  | undefined

export type ParamsPostContact = {
  name: string
  email: string
  phone: string
  post: string
}

export type AppStore = {
  postId: string
  setPostId: (id: string) => void

  loadingGet: boolean
  loadingPost: boolean

  posts: PostPayload[]
  fetchPosts: (params: ParamsFetchPosts) => void

  showContactFormModal: boolean
  setShowContactFormModal: (choice: boolean) => void

  sendContact: (params: ParamsPostContact) => Promise<void>
}

export type PostPayload = {
  id: string
  author: string
  authorEmail: string
  title: string
  article: string
  date: string
  imageUrl: string
}
