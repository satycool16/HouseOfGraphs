import {Link} from "./Link";
import {SearchConditions} from "./Enquiries";

export interface GraphEntity {
  graphId: number,
  canonicalForm: string,
  graphName: string,
  userId: number,
  uploadId: number
}

export interface Graph {
  entity: GraphEntity,
  adjacencyMatrix: boolean[][],
  adjacencyList: number[][],
  _links?: {[key: string]: Link}
}

export interface GraphCollection {
  _embedded: { graphModelList: Graph[]},
  _links?: {[key: string]: Link}
}

export interface AddGraphRequest {
  graphName: string,
  graphInfo: string,
  userId: number,
  embedding: number[][],
  interestingInvariants: number[],
  adjacencyMatrix: boolean[][]
}

export interface AddGraphFileRequest {
  graphName: string,
  graphInfo: string,
  userId: number,
  interestingInvariants: number[],
  fileFormat: string
}

export interface DownloadGraphRequest {
  graphId: number,
  format: string,
  searchConditions: SearchConditions|null
}