import {BiLinkExternal} from "react-icons/bi";
import styles from '../MetaDirectory.module.css';

const CriticalHFree = () => {
  return (
    <div>
      <h3>Critical H-free graphs</h3>
      <p> This page contains complete lists of critical H-free graphs. An <i>H-free</i> graph is a graph that does not contain
        <i>H</i> as an induced subgraph. A graph <i>G</i> is <i>k-chromatic</i> if it is k-colourable but not (k-1)-colourable.
        We say that a graph <i>G</i> is <i>k-critical H-free</i> if <i>G</i> is H-free, k-chromatic, and every H-free proper subgraph
        of <i>G</i> is (k-1)-colourable. </p>
      <p> In <a href={"#ref1"}>[1]</a> and <a href={"#ref2"}>[2]</a> it is described how the following complete lists of critical H-free
        graphs were obtained. The program <i>CriticalPfreeGraphs</i> which was used to generate these lists can be
        downloaded <a href={"http://caagt.ugent.be/criticalpfree/"}>here <BiLinkExternal/></a>.
      </p>
      <p> The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. We abbreviate the set of (k+1)-critical (Pt,Cu)-free graphs
        as <i>NkPtCu</i> and the set of (k+1)-critical (Pt+Pu)-free graphs as <i>NkPt+Pu</i> (where Pt is a path with t vertices and
        Pt+Pu stands for the disjoint union of a Pt and a Pu).
      </p>
      <table className={`${styles.table}`}>
        <thead>
        <tr>
          <th>Case</th>
          <th>Critical graphs</th>
          <th>Vertex-critical graphs</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>N3P6</td>
          <td><a href={"/data/critical/N3P6_all_sorted.g6"}>24</a></td>
          <td><a href={"/data/critical/N3P6_vertexcritical_all_sorted.g6"}>80</a></td>
        </tr>
        <tr>
          <td>planar N3P7</td>
          <td><a href={"/data/critical/N3P7_all_sorted_planar.g6"}>52</a></td>
          <td><a href={"/data/critical/N3P7_vertexcritical_all_sorted_planar.g6"}>462</a></td>
        </tr>
        <tr>
          <td>N3P7C4</td>
          <td><a href={"/data/critical/N3P7C4_all_sorted.g6"}>17</a></td>
          <td><a href={"/data/critical/N3P7C4_vertexcritical_all_sorted.g6"}>35</a></td>
        </tr>
        <tr>
          <td>N3P7C5</td>
          <td><a href={"/data/critical/N3P7C5_all_sorted.g6"}>6</a></td>
          <td><a href={"/data/critical/N3P7C5_vertexcritical_all_sorted.g6"}>27</a></td>
        </tr>
        <tr>
          <td>N3P8C4</td>
          <td><a href={"/data/critical/N3P8C4_all_sorted.g6"}>94</a></td>
          <td><a href={"/data/critical/N3P8C4_vertexcritical_all_sorted.g6"}>164</a></td>
        </tr>
        <tr>
          <td>N3P3+P2</td>
          <td><a href={"/data/critical/N3P3P2_all_sorted.g6"}>17</a></td>
          <td><a href={"/data/critical/N3P3P2_vertexcritical_all_sorted.g6"}>50</a></td>
        </tr>
        <tr>
          <td>N3P4+P1</td>
          <td><a href={"/data/critical/N3P4P1_all_sorted.g6"}>4</a></td>
          <td><a href={"/data/critical/N3P4P1_vertexcritical_all_sorted.g6"}>9</a></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <p> In <a href={"#ref1"}>[1]</a> it is proven that there are infinitely many 4-critical P7-free graphs.
        Nevertheless, in Table 2 of <a href={"#ref1"}>[1]</a> all 4-critical and 4-vertex-critical P7-free graphs were determined for small orders.
        More specifically, there are exactly <a href={"/data/critical/N3P7_crit_max16vert-sorted.g6"}>2608</a> 4-critical and
        exactly <a href={"/data/critical/N3P7_vertex_crit_max16vert-sorted.g6"}>62126</a> 4-vertex-critical P7-free graphs with at most 16 vertices. </p>
      <div>
        <h5>Obstructions for list 3-colouring</h5>
        <p> Let <i>G</i> be a graph and let <i>L</i> be a mapping that maps each vertex of <i>G</i> to a subset of &#123;1,...,k&#125;.
          We say that the pair <i>(G,L)</i> is <i>colourable</i> if there is a proper colouring <i>c</i> of <i>G</i> with <i>c(v) &isin; L(v)</i>
          for each <i>v &isin; V(G)</i>. To this end, a pair <i>(G,L)</i> with <i>L(v) &sube; &#123;1,...,k&#125;</i> is called a <i>list-obstruction</i>
          for k-colourability if <i>(G,L)</i> is not colourable. If, moreover, for all proper induced subgraphs <i>H</i> of <i>G</i> the pair <i>(H,L<sub>V(H)</sub>)</i>
          is colourable, we call <i>(G,L)</i> a <i>minimal list-obstruction</i>. (Here <i>L<sub>V(H)</sub></i> denotes the restriction
          of <i>L</i> to the domain <i>V(H)</i>). </p>
        <p> The table below contains the counts of all P<sub>6</sub>-free minimal list-obstructions for 3-colourability up to 9 vertices.
          The obstructions up to 8 vertices can also be downloaded as adjacency lists. In <a href={"#ref3"}>[3]</a> it was proven that there
          are only finitely many P<sub>6</sub>-free minimal list-obstructions for 3-colourability, but the exact number of obstructions is not known.
          The program <i>ListCriticalPfreeGraphs</i> which was used to generate these minimal list-obstructions can be
          downloaded <a href={"http://caagt.ugent.be/listcriticalpfree/"}>here <BiLinkExternal/></a>. </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of list-obstructions</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v1.txt"}>1</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v2.txt"}>1</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v3.txt"}>4</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v4.txt"}>43</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v5.txt"}>117</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v6.txt"}>1806</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v7.txt.gz"}>34721</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v8.txt.gz"}>196231</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/critical/obstructions_list_3-colouring_P6free_v9.txt.gz"}>1208483</a></td>
          </tr>
          <tr>
            <td>≥ 10</td>
            <td>?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <p id={"ref1"}>[1] M. Chudnovsky, J. Goedgebeur, O. Schaudt, and M. Zhong, Obstructions for three-coloring graphs with one
          forbidden induced subgraph, Proc. Twenty-Seventh Annual ACM-SIAM Symposium on Discrete Algorithms (SODA16), Arlington,
          Virginia, USA, pages 1774-1783, 2016. Preprint: arXiv:1504.06979</p>
        <p id={"ref2"}>[2] J. Goedgebeur and O. Schaudt, Journal of Graph Theory, 87(2):188-207, 2018.</p>
        <p id={"ref3"}>[3] M. Chudnovsky, J. Goedgebeur, O. Schaudt, and M. Zhong, Obstructions for three-coloring and list three-coloring
          H-free graphs, to appear in SIAM Journal on Discrete Mathematics, 40 pages, 2019.</p>
      </div>
      <br/>
    </div>
  );
}

export default CriticalHFree;