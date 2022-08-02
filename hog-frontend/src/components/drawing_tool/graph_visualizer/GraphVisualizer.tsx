// @ts-nocheck
import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import "./GraphVisualizer.css";
import {clamp, getNeighbourIds, linksToAdjacencyMatrix, nodeTooClose, rescale, scaleBack} from "./GraphVisualizerUtil";
import {Edge, Node, Visualization, VisualizationType as vt} from "../../../entities/GraphVisualization";
import {DrawingEnquiry} from "../../../entities/Enquiries";
import {BsFillInfoCircleFill} from "react-icons/bs";
import {FaTimes} from "react-icons/fa";
import ToolTip from "../ToolTip";

interface Props {
  propNodes: Node[],
  propLinks: Edge[],
  type: vt,
  size: number,
  onSearch?: (denq: DrawingEnquiry) => void,
  saveEmbedding?: (nodes: Node[]) => void,
  addGraph?: (nodes: Node[], adjacencyMatrix: boolean[][]) => void,
  canSave?: boolean
  newGraph?: boolean
}

//TODO - fix null graph

const GraphVisualizer = ({propNodes, propLinks, type, size, onSearch, saveEmbedding, addGraph, canSave, newGraph}: Props) => {
  const vis: Visualization = rescale(propNodes, propLinks, size);
  const [nodes, setNodes] = useState<Node[]>(vis.nodes);
  const [links, setLinks] = useState<Edge[]>(vis.edges);
  const [source, setSource] = useState<Node | undefined>(undefined);
  const [deleter, setDeleter] = useState<boolean>(false);
  const [live, setLive] = useState<boolean>(type === vt.Editable);
  const [edgeLength, setEdgeLength] = useState<number>(size / 4);
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [showToolTips, setShowToolTips] = useState<boolean>(false);
  const svgRef = useRef(null);
  const updater = useRef(null);
  const radius: number = size <= 100 ? 3 : (size <= 500 ? 8 : 10);
  const nodeStrokeWidth: number = size <= 100 ? 1 : 4;
  const edgeStrokeWidth: number = size <= 100 ? 1 : 2;

  useEffect(() => {
    updater.current = drawChart(svgRef, nodes, links, deleter, live, source, edgeLength);
  }, [])

  useEffect(() => {
    if (updater.current) {
      updater.current(nodes, links, deleter, source, live, edgeLength)
    }
  }, [nodes, links, deleter, source, live, edgeLength])

  const clearOrReset = () => {
    setNodes(vis.nodes);
    setLinks(vis.edges);
    setLive(type === vt.Editable)
    setIsEdited(false);
    setEdgeLength(size / 4);
  }

  const toggleLive = () => {
    if (live) {
      let newNodes = [...nodes].map(n => ({...n, fx: n.x, fy: n.y}));
      let newLinks: Edge[] = [];
      links.forEach(l => {
        newLinks.push({
          source: newNodes.find(n => n.id === l.source.id),
          target: newNodes.find(n => n.id === l.target.id)
        })
      })
      setNodes(newNodes);
      setLinks(newLinks);
    } else {
      let newNodes = [...nodes];
      newNodes.forEach(n => delete n.fx);
      newNodes.forEach(n => delete n.fy);
      setNodes(newNodes);
    }
    setLive(!live);
    setIsEdited(true);
  }

  const handleNodeAdd = (nodes: Node[], x: number, y: number, zoomLevel: number, live: boolean) => {
    let newNodes = [...nodes];
    if (!nodeTooClose(nodes, x, y, zoomLevel, radius)) {
      let maxId = newNodes.length === 0 ? 0 : Math.max(...newNodes.map(n => n.id)) + 1;
      if (live) {
        newNodes.push({id: maxId, x: x, y: y})
      } else {
        newNodes.push({id: maxId, x: x, y: y, fx: x, fy: y})
      }
      setNodes(newNodes);
    }
  }

  const handleNodeDelete = (nodes: Node[], links: Edge[], id: number) => {
    setNodes([...nodes].filter(n => n.id !== id));
    setLinks([...links].filter(l => l.source.id !== id && l.target.id !== id));
  }

  const handleNodesSelection = (links: Edge[], source: Node | undefined, target: Node | undefined) => {
    let newLinks = [...links];
    if (target === undefined) {
      setSource(source)
    } else if (source === target) {
      setSource(undefined)
    } else {
      if (source) {
        let selectedLink = newLinks.findIndex(l => (l.source.id === source.id && l.target.id === target.id) || (l.source.id === target.id && l.target.id === source.id));
        if (selectedLink !== -1) { // link already exists, thus remove it
          newLinks.splice(selectedLink, 1)
        } else { // link is new, thus add it
          newLinks.push({source: source, target: target})
        }
        setLinks(newLinks);
        setSource(undefined)
      }
    }
  }

  const handleSaveEmbedding = () => {
    saveEmbedding(scaleBack(d3.select(svgRef.current).selectAll(".node").nodes().map(n => n.__data__), size));
  }

  const handleAddGraph = (adjacency: boolean[][]) => {
    let addLinks = linksToAdjacencyMatrix(links, nodes.length)
    let addNodes: Node[] = scaleBack(d3.select(svgRef.current).selectAll(".node").nodes().map(n => n.__data__), size);
    addGraph(addNodes, addLinks);
  }

  return (<>
    <div style={{display: "flex", flexDirection: "row"}}>
      <div className={"card"} style={{height: "fit-content", minWidth: size/*, backgroundColor: "#DDFFDD"*/}}>
        <div ref={svgRef}/>
      </div>
      { !showToolTips &&
        <div style={{display: "flex", flexDirection: "column"}}>
        {type !== vt.Static &&
            <div className={"card"} style={{display: "flex", flexDirection: "column", height: "fit-content", padding: "10px", marginLeft: "10px"}}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
                  <BsFillInfoCircleFill style={{color: "grey", cursor: "pointer"}} onClick={_ => setShowToolTips(true)}/>
              </div>

              <div className={"form-check"}>
                  <input className={"form-check-input"} type={"checkbox"} id={"checkLive"} checked={live}
                         onChange={toggleLive}/>
                  <label className={"form-check-label"} htmlFor={"checkLive"}>
                      Live
                  </label>
              </div>

            {type === vt.Editable && (
              <div className={"form-check"}>
                <input className={"form-check-input"} type={"checkbox"} id={"checkDelete"} checked={deleter}
                       onChange={_ => setDeleter(!deleter)}/>
                <label className={"form-check-label"} htmlFor={"checkLive"}>
                  Delete nodes
                </label>
              </div>)
            }
            <label htmlFor={"lengthRange"} className={"form-label"} style={{marginBottom: 0, marginTop: "10px"}}>Edge
                length</label>
            <input type={"range"} className={"form-range"} min={radius} max={size / 2} step={"1"}
                   value={edgeLength} id={"lengthRange"} onChange={(e) => setEdgeLength(Number(e.target.value))}/>
            {type !== vt.Static &&
              <button type={"button"} className={"btn btn-primary"} onClick={clearOrReset}
                      style={{margin: "5px 40px 0 0", fontSize: "15px"}}>
                {type === vt.Draggable ? "Reset" : "Clear all"}
              </button>
            }
            </div>
        }
        {type === vt.Editable && newGraph === false &&
            <button type={"button"} className={"btn btn-primary"} style={{margin: "10px 0 0 10px"}}
                    onClick={_ => onSearch({adjacencyMatrix: linksToAdjacencyMatrix(links, nodes.length)})}
            >Search</button>
        }
        {type === vt.Editable && newGraph === true &&
            <button type={"button"} className={"btn btn-primary"} style={{margin: "10px 0 0 10px"}}
                    onClick={handleAddGraph}
            >Add graph</button>
        }
        {
          type === vt.Draggable && canSave &&
            <button type={"button"} className={"btn btn-primary"} style={{margin: "10px 0 0 10px"}} disabled={!isEdited}
                    onClick={handleSaveEmbedding} data-bs-dismiss={"modal"}
            >Save embedding</button>
        }
      </div>}
      { showToolTips && (
        <div>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end"}}>
            <FaTimes style={{color: "grey", cursor: "pointer", fontSize: "20px"}} onClick={_ => setShowToolTips(false)}/>
          </div>
          <ToolTip type={type}/>
        </div>
        )
      }
    </div>

  </>);

  function drawChart(ref: any, nodes: Node[], links: Edge[], deleter: boolean, live: boolean, source: Node | undefined, edgeLength: number) {
    // Handle panning and zooming
    const handleZoom = (event: any) => {
      let zoomLevel = event.transform.k;
      svg.selectAll('svg g')
        .attr('transform', event.transform);
      svg.selectAll(".node")
        .attr("r", radius / zoomLevel)
        .attr("stroke-width", 5 / zoomLevel);
      svg.selectAll(".link")
        .attr("stroke-width", 2 / zoomLevel);
      svg.selectAll(".link.remove")
        .attr("stroke-width", 5 / zoomLevel);
    }

    const zoom = d3.zoom()
      .scaleExtent([1, 10])
      .translateExtent([[0, 0], [size, size]])
      .on('zoom', handleZoom);

    d3.select(svgRef.current).select("svg").remove();
    d3.select(svgRef.current).selectAll(".link").remove();
    d3.select(svgRef.current).selectAll(".node").remove();

    // Main SVG
    const svg = d3.select(svgRef.current)
      .append("svg")
      .attr("width", size)
      .attr("height", size);
    svg.append("g").attr("id", "links");
    svg.append("g").attr("id", "nodes");

    if (type !== vt.Static) {
      svg.call(zoom)
        .on("dblclick.zoom", null);
    }

    const addLinks = (links: Edge[]) => {
      svg.select("#links")
        .selectAll(".link")
        .data(links)
        .join("line")
        .attr("stroke-width", edgeStrokeWidth)
        .classed("link", true);
    }

    const addNodes = (nodes: Node[]) => {
      svg.select("#nodes")
        .selectAll(".node")
        .data(nodes)
        .join("circle")
        .attr("r", radius)
        .attr("stroke-width", nodeStrokeWidth)
        .classed("node", true);
    }

    const simulation = d3.forceSimulation();
    const addSimulation = (nodes: Node[], links: Edge[]) => {
      simulation
        .nodes(nodes)
        .alpha(0.1)
        .force("collision", d3.forceCollide(radius / d3.zoomTransform(svg.node()).k))
        .force("link", d3.forceLink(links).distance(edgeLength).strength(0.2))
        .on("tick", tick);
    }

    function tick() {
      svg.selectAll('.link')
        .attr("x1", d => clamp(d.source.x, radius, size - radius))
        .attr("y1", d => clamp(d.source.y, radius, size - radius))
        .attr("x2", d => clamp(d.target.x, radius, size - radius))
        .attr("y2", d => clamp(d.target.y, radius, size - radius));
      svg.selectAll('.node')
        .attr("cx", d => clamp(d.x, radius, size - radius))
        .attr("cy", d => clamp(d.y, radius, size - radius))
    }

    const change = function (nodes: Node[], links: Edge[], deleter: boolean, source: Node | undefined, live: boolean, edgeLength: number) {
      let sourceNeighbours = source === undefined ? [] : getNeighbourIds(links, source.id);
      addLinks(links);
      addNodes(nodes);
      addSimulation(nodes, links);
      simulation.force("link", d3.forceLink(links).distance(edgeLength).strength(0.2))
      if (type === vt.Editable) {
        svg.on("click", addNode);
        svg.selectAll('.node')
          .on("mouseover", mouseOver)
          .on("mouseout", mouseOut)
          .on("click", deleter ? deleteNode : clickNode);
      }
      if (type !== vt.Static) {
        svg.selectAll('.node')
          .attr("cursor", "pointer")
          .call(d3.drag()
            .on("start", dragstart)
            .on("drag", dragged)
            .on("end", dragEnd));
        svg.transition().call(zoom.scaleBy, 1);
      }

      svg.selectAll('.node')
        .classed("fixed", !live)

      simulation.alpha(1).restart();

      function dragstart(event: any, d: any) {
        d3.select(this).classed("dragged", true);
      }

      function dragged(event: any, d: any) {
        d.x = clamp(event.x, radius, size - radius);
        d.y = clamp(event.y, radius, size - radius);
        if (!live) {
          d.fx = d.x;
          d.fy = d.y;
        }
        simulation.alpha(1).restart();
      }

      function dragEnd(event: any, d: any) {
        d3.select(this).classed("dragged", false);
        setIsEdited(true);
      }

      function deleteNode(event: any, d: any) {
        handleNodeDelete(nodes, links, d.id);
        d3.selectAll(".node.remove").classed("remove", false);
        event.stopPropagation();
      }

      function addNode(event: any, d: any) {
        let pos = d3.zoomTransform(svg.node()).invert(d3.pointer(event, svg.node()));
        handleNodeAdd(nodes, pos[0], pos[1], d3.zoomTransform(svg.node()).k, live)
        event.stopPropagation();
      }

      function clickNode(event: any, d: any) {
        if (source === undefined) {
          d3.select(this).classed("source", true).attr("id", "sourceNode");
          handleNodesSelection(links, d, undefined)
        } else { // source and target are known
          d3.select(this).classed("target", false)
          svg.select("#sourceNode").classed("source", false).attr("id", null);
          d3.selectAll(".link").classed("remove", false);
          handleNodesSelection(links, source, d)
        }
        event.stopPropagation();
        simulation.alpha(1).restart();
      }

      function mouseOver(event: any, d: any) {
        if (deleter) {
          d3.select(this).classed("remove", true);
        } else if (source !== undefined) {
          d3.select(this).classed("target", true);
          if (sourceNeighbours.includes(d.id)) {
            svg.selectAll('.link').filter(l => (l.source.id === source.id && l.target.id === d.id) || (
              l.source.id === d.id && l.target.id === source.id
            )).classed("remove", true).attr("stroke-width", nodeStrokeWidth / d3.zoomTransform(svg.node()).k)
          }
        }
      }

      function mouseOut(event: any, d: any) {
        d3.select(this).classed("remove", false);
        d3.select(this).classed("target", false);
        d3.selectAll(".link.remove").classed("remove", false).attr("stroke-width", edgeStrokeWidth / d3.zoomTransform(svg.node()).k);
      }
    }

    change(nodes, links, deleter, source, live, edgeLength)
    return change;
  }
}

export default GraphVisualizer;