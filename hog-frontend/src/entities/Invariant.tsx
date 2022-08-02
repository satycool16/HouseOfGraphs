import {Link} from "./Link";

export interface InvariantEntity {
  invariantId: number,
  calculateInvariantId: number,
  definition: string,
  keyword: string,
  invariantName: string,
  typeName: string
}

export interface Invariant {
  entity: InvariantEntity,
  _links?: {[key: string]: Link}
}

export interface InvariantCollection {
  _embedded: { invariantModelList: Invariant[]},
  _links?: {[key: string]: Link}
}