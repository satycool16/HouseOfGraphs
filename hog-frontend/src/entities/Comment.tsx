import {Link} from "./Link";

export interface CommentEntity {
  commentId: number,
  graphId: number
  userId: number,
  commentTime: string,
  text: string
}

export interface Comment {
  entity: CommentEntity,
  _links?: {[key: string]: Link}
}

export interface CommentCollection {
  _embedded: { commentModelList: Comment[]},
  _links?: {[key: string]: Link}
}

export interface AddCommentRequest {
  graphId: number,
  userId: number,
  text: string
}

export interface UpdateCommentRequest {
  commentId: number,
  newText: string
}