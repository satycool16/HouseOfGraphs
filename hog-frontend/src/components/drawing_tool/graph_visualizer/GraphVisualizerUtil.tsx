import {Edge, Node, Visualization} from "../../../entities/GraphVisualization";
import {Embedding} from "../../../entities/Embedding";
import * as d3 from "d3";

export function clamp(coord: number, lo: number, hi: number) {
    return coord < lo ? lo : coord > hi ? hi : coord;
}

export function getNeighbourIds(links: Edge[], id: number) {
    let neighbours: number[] = [];
    links.forEach(l => {
        if(l.source.id === id){
            neighbours.push(l.target.id);
        } else if (l.target.id === id){
            neighbours.push(l.source.id);
        }
    })
    return neighbours;
}

export function nodeTooClose(nodes: Node[], x: number, y: number, zoomLevel: number, radius: number) {
    let i = 0;
    let tooClose = false;
    while(!tooClose && i < nodes.length){
        let a = nodes[i].x - x;
        let b = nodes[i].y - y;
        if(Math.sqrt(a * a + b * b) < (radius * 2)/zoomLevel){
            tooClose = true;
        }
        i++;
    }
    return tooClose;
}

export function prepareForVisualization(adjList: number[][], embedding: number[][]): Visualization {
    let nodes: Node[] = embedding.map((e, i) => {
        return {id: i, x: e[0], y: e[1], fx: e[0], fy: e[1]}
    });

    let edges: Edge[] = [];
    adjList.forEach((ar, i) => {
        ar.forEach(neighbour => {
            if(neighbour > i){
                let sourceNode: Node|undefined = nodes.find(n => n.id === i);
                let targetNode: Node|undefined = nodes.find(n => n.id === neighbour);
                if(sourceNode && targetNode){
                    edges.push({
                        source: sourceNode,
                        target: targetNode
                    })
                }
            }
        })
    })

    return {nodes: nodes, edges: edges};
}

export function rescale(nodes: Node[], edges: Edge[], size: number): Visualization {
    const xScale = d3.scaleLinear()
      .domain([-1.5, 1.5])
      .range([0, size]);

    const yScale = d3.scaleLinear()
      .domain([-1.5, 1.5])
      .range([0, size]);

    let newNodes: Node[] = nodes.map(n => ({id: n.id, x: xScale(n.x), y: yScale(n.y), fx: xScale(n.x), fy: yScale(n.y)}));

    let newEdges: Edge[] = [];
    edges.forEach(e => {
        let source: Node|undefined = newNodes.find(n => n.id === e.source.id);
        let target: Node|undefined = newNodes.find(n => n.id === e.target.id);
        if(source && target){
            newEdges.push({source: source, target: target})
        }
    });

    return {nodes: newNodes, edges: newEdges};
}

export function scaleBack(nodes: Node[], size: number) {
    const xScale = d3.scaleLinear()
      .domain([0, size])
      .range([-1.5, 1.5]);

    const yScale = d3.scaleLinear()
      .domain([0, size])
      .range([-1.5, 1.5]);

    let newNodes: Node[] = nodes.map(n => ({id: n.id, x: xScale(n.x), y: yScale(n.y), fx: xScale(n.x), fy: yScale(n.y)}));
    return newNodes;
}

export function linksToAdjacencyMatrix(links: Edge[], nrOfNodes: number): boolean[][] {
    console.log(links);
    let adjMatrix: boolean[][] = Array.from({length: nrOfNodes}, () => Array.from({length: nrOfNodes}, () => false));
    links.forEach(l => {
        adjMatrix[l.source.id][l.target.id] = true;
        adjMatrix[l.target.id][l.source.id] = true;
    })
    return adjMatrix;
}