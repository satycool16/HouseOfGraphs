export interface Node {
  id: number,
  x: number,
  y: number,
  fx?: number,
  fy?: number
}

export interface Edge {
  source: Node,
  target: Node
}

export enum VisualizationType {
  Static = 0,
  Draggable = 1,
  Editable= 2
}

export interface Visualization {
  nodes: Node[],
  edges: Edge[]
}