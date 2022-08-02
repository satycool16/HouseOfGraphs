import {Link} from "./Link";
import {GraphInvariantEntity} from "./GraphInvariant";
import {Page} from "./Page";

export interface GraphSearch {
  graphId: number,
  graphName: string|undefined,
  invariantValues: GraphInvariantEntity[],
  adjacencyList: number[][],
  embedding: number[][],
  _links?: {[key: string]: Link}
}

export interface GraphSearchCollection {
  _embedded: { graphSearchModelList: GraphSearch[]},
  _links?: {[key: string]: Link}
  page?: Page
}
