import {Link} from "./Link";

export interface GraphInvariantEntity {
  graphId: number,
  invariantId: number,
  invariantValue: number|undefined,
  invariantStatus: number,
  ofInterest: boolean
}

export interface GraphInvariant {
  entity: GraphInvariantEntity,
  _links?: {[key: string]: Link}
}

export interface GraphInvariantCollection {
  _embedded: { graphInvariantModelList: GraphInvariant[]},
  _links?: {[key: string]: Link}
}