export type ParamsGetPosts =
  | {
      _page: number
      _limit: number
    }
  | undefined

export type AppStore = {
  postId: string
  setPostId: (id: string) => void
  posts: PostPayload[]
  getPosts: (params: ParamsGetPosts) => void
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
