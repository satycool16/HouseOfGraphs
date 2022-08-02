import {Link} from "./Link";

export interface EmbeddingEntity {
  embeddingId: number,
  graphId: number,
  embedding: number[][],
  dimension: number
}

export interface Embedding {
  entity: EmbeddingEntity,
  _links?: {[key: string]: Link}
}

export interface EmbeddingCollection {
  _embedded: { embeddingModelList: Embedding[]},
  _links?: {[key: string]: Link}
}

export interface AddEmbeddingRequest {
  embedding: number[][],
  graphId: number
}