import React, {useEffect} from "react";
import {BiLinkExternal} from "react-icons/bi";

interface Props {
  expandFormat: string
}

const SupportedFormatsOverview = ({expandFormat}: Props) => {

  useEffect(() => {
    if(expandFormat !== ""){
      const anchorEl = document.getElementById(expandFormat);
      const buttonEl = document.querySelectorAll('[data-bs-target="#' + expandFormat + '"]')[0];
      if(anchorEl !== null && buttonEl !== null){
        anchorEl.classList.add("show");
        buttonEl.classList.remove("collapsed");
        anchorEl.scrollIntoView({behavior: 'auto', block: 'center', inline: 'center'});
      }
    }
  }, [expandFormat])

  return (
    <div>
      <p>The graphs from our database can be downloaded in one of the following formats:</p>
      <div className={"accordion"} id={"supportedFormatsAccordion"}>
        <div className={"accordion-item"}>
          <h2 className={"accordion-header"} id={"hOne"}>
            <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                    data-bs-target={"#mat"} aria-expanded={"false"} aria-controls={"mat"}>
              Adjacency matrices
            </button>
          </h2>
          <div id={"mat"} className={"accordion-collapse collapse"} aria-labelledby={"hOne"}>
            <div className={`accordion-body`}>
              <p>
                The adjacency matrix of a graph is a symmetric square matrix with zero diagonal, where rows and columns
                correspond to vertices. An entry denotes whether the vertex that corresponds to the row is connected by
                an edge to the vertex that corresponds to the column. (1 = connected, 0 = not). In this format we print
                one line for each row, with 0-1 entries separated by spaces. The resulting file is a text file consisting
                of ASCII characters only.
              </p>
            </div>
          </div>
        </div>
        <div className={"accordion-item"}>
          <h2 className={"accordion-header"} id={"hTwo"}>
            <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                    data-bs-target={"#lst"} aria-expanded={"false"} aria-controls={"lst"}>
              Adjacency lists
            </button>
          </h2>
          <div id={"lst"} className={"accordion-collapse collapse"} aria-labelledby={"hTwo"}>
            <div className={`accordion-body`}>
              <p>
                In this format we represent the graph by a line for each vertex. The line starts with the sequence number
                of that vertex (we count starting from 1), followed by a colon, and then a list of all sequence numbers
                of the vertices that are connected by an edge to the reference vertex. Sequence numbers are expressed in
                decimal notation and are separated by blanks. The resulting file is a text file consisting of ASCII
                characters only.
              </p>
            </div>
          </div>
        </div>
        <div className={"accordion-item"}>
          <h2 className={"accordion-header"} id={"hThree"}>
            <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                    data-bs-target={"#g6"} aria-expanded={"false"} aria-controls={"g6"}>
              Graph6 code
            </button>
          </h2>
          <div id={"g6"} className={"accordion-collapse collapse"} aria-labelledby={"hThree"}>
            <div className={`accordion-body`}>
              <p>
                The graph6 format is for storing undirected graphs in a compact manner, using only printable ASCII
                characters. Files in this format have text type and contain one line per graph. The formal definition of
                this format can be found on <a href={"http://cs.anu.edu.au/~bdm/data/formats.html"}>Brendan McKay's website <BiLinkExternal/></a>.
                <br/> <br/>
                Graphs encoded in 'graph6' format can be converted to human-readable adjacency lists using the
                program <a href={"http://cs.anu.edu.au/~bdm/data/formats.html"}>showg <BiLinkExternal/></a>. A precompiled Linux binary of showg can
                be downloaded <a href={"/data/generators/decoders/showg"}>here</a> and a Mac OS X
                binary <a href={"/data/generators/decoders/showg-mac"}>here</a>. The graphs in 'graph6' format can be converted
                as follows:
                <br/> <br/>
                <div style={{display: "flex", justifyContent: "center"}}><i>./showg &lt; Graphs.g6</i></div>
                <br/>
                Of course, if your primary intention is to obtain the graphs in a human readable format, then it is more
                convenient to use either the adjacency matrix or the adjacency list format directly.
              </p>
            </div>
          </div>
        </div>
        <div className={"accordion-item"}>
          <h2 className={"accordion-header"} id={"hFour"}>
            <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                    data-bs-target={"#inv"} aria-expanded={"false"} aria-controls={"inv"}>
              Invariant values
            </button>
          </h2>
          <div id={"inv"} className={"accordion-collapse collapse"} aria-labelledby={"hFour"}>
            <div className={`accordion-body`}>
              <p>
                This format lists the adjacency list of a graph followed by its invariant values. We use the following
                format to display these invariant values: "&lt;invariant name&gt;: &lt;invariant value&gt;". The
                resulting file is a text file consisting of ASCII characters only.
              </p>
            </div>
          </div>
        </div>
        <div className={"accordion-item"}>
          <h2 className={"accordion-header"} id={"hFive"}>
            <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                    data-bs-target={"#mc"} aria-expanded={"false"} aria-controls={"mc"}>
              Multicode
            </button>
          </h2>
          <div id={"mc"} className={"accordion-collapse collapse"} aria-labelledby={"hFive"}>
            <div className={`accordion-body`}>
              <p>
                Multicode is a binary code for storing undirected graphs. The first entry is the number of vertices.
                Vertices are numbered 1,...,n. To each vertex x there is a list of neighbours with higher numbers than x,
                followed by a zero. The last list is always empty (no neighbours of n with a higher number than n), so
                the last "list" is not followed by a zero. After the last byte the next graph follows. The length of a
                multicode is number of vertices + number of edges.
                <br/> <br/>
                Graphs encoded in 'multicode' format can be converted to human-readable adjacency lists using the program
                multiread. A precompiled Linux binary of multiread can be downloaded <a href={"/data/generators/decoders/multiread"}>here</a> and
                a Mac OS X binary <a href={"/data/generators/decoders/multiread-mac"}>here</a>.
                The C source file can be found <a href={"/data/generators/decoders/multiread.c"}>here</a>. The graphs in
                'multicode' format can be converted as follows:
                <br/> <br/>
                <div style={{display: "flex", justifyContent: "center"}}><i>./multiread &lt; Graphs.mc</i></div>
                <br/>
                Of course, if your primary intention is to obtain the graphs in a human readable format, then it is more
                convenient to use either the adjacency matrix or the adjacency list format directly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <p>In addition, for our list of <a href={"/meta-directory/planar"}>planar graphs</a>, we use so-called planar code.</p>
      <div className={"accordion"} id={"supportedFormatsAccordion2"}>
        <div className={"accordion-item"}>
          <h2 className={"accordion-header"} id={"hSix"}>
            <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                    data-bs-target={"#pc"} aria-expanded={"false"} aria-controls={"pc"}>
              Planar code
            </button>
          </h2>
          <div id={"pc"} className={"accordion-collapse collapse"} aria-labelledby={"hSix"}>
            <div className={`accordion-body`}>
              <p>
                Planar code is for storing planar graphs. It is a binary code that is easy and fast to compute and to decode.
                Every entry of the code is an unsigned char. The first entry is the number of vertices. After that there
                is a list of the vertices adjacent to vertex number 1 in clockwise orientation. This list is ended with a 0.
                Then you have the vertices adjacent to number 2 ended with a 0, etc. In case that the numbers are too large
                for unsigned char (i.e. &gt; 255), the first unsigned char written is 0 (!!!). After that the code is as above
                - only with unsigned short instead of unsigned char. The unsigned shorts are written in little-endian order
                (low order byte first). A 0 character is written before EVERY code.
                <br/> <br/>
                In addition to the encodings of graphs, a planar code file by default begins with the 15 characters
                &gt;&gt;planar_code&lt;&lt; without end-of-line characters.
                <br/> <br/>
                Graphs encoded in this format can be read and visualized by software such as <a href={"http://caagt.ugent.be/CaGe/"}>CaGe <BiLinkExternal/></a>.
                They can also be converted to human-readable adjacency lists using the program planarread. A precompiled Linux
                binary of planarread can be downloaded <a href={"/data/generators/decoders/planarread"}>here</a> and
                a Mac OS X binary <a href={"/data/generators/decoders/planarread-mac"}>here</a>. The C source file
                can be found <a href={"/data/generators/decoders/planarread.c"}>here</a>.
                The graphs in planar_code can be converted as follows:
                <br/> <br/>
                <div style={{display: "flex", justifyContent: "center"}}><i>./planarread &lt; Planar_graphs.pl</i></div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportedFormatsOverview;