import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Snarks = () => {
  return (
    <div>
      <h3>Snarks</h3>
      <p>Multiple definitions of snarks exist which vary in strength. In the definition we used, snarks are (simple) cyclically 4-edge
        connected cubic graphs with chromatic index 4 (i.e. they cannot be properly edge-coloured using 3 colours).</p>
      <p>In some definitions snarks are cyclically 5-edge connected or have girth at least 5. But the most important part is the colourability
        requirement, which is the same in all definitions.</p>
      <p> We denote the cyclic edge connectivity of a graph by &lambda;<sub>c</sub>.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#snarks"}>Snarks</a></li>
          <li><a href={"#flow_critical"}>Flow-critical snarks</a></li>
          <li><a href={"#hypo_hamil"}>Hypohamiltonian snarks</a></li>
          <li><a href={"#k2_hamil"}>K2-hamiltonian snarks</a></li>
          <li><a href={"#permutation"}>Permutation snarks</a></li>
          <li><a href={"#circular_flow_5"}>Snarks with circular flow number 5</a></li>
          <li><a href={"#oddness_4"}>Snarks with oddness 4</a></li>
        </ul>
      </div>
      <div id={"snarks"}>
        <h5>Snarks</h5>
        <p>All numbers up to 32 vertices were independently verified
          by <a href={"http://caagt.ugent.be/minibaum/"}>minibaum <BiLinkExternal/></a> and <a href={"http://caagt.ugent.be/cubic/"}>snarkhunter <BiLinkExternal/></a>.
          The graphs with more than 32 vertices were generated with <a href={"http://caagt.ugent.be/cubic/"}>snarkhunter <BiLinkExternal/></a>.
          Several conjectures were refuted by these new lists of snarks (see <a href={"#ref1"}>[1]</a> and <a href={"#ref2"}>[2]</a> for more information).</p>
        <p>For snarks with 38 vertices and snarks with girth 6 and 40 vertices only a sample was generated as it is currently computationally
          infeasible to generate the complete lists in these cases (see <a href={"#ref3"}>[3]</a> for more information). The counts of these
          incomplete cases are indicated with a '≥' in the table. In all other cases the numbers are the counts of the complete sets of snarks.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 5</th>
            <th>Girth ≥ 6</th>
            <th>Girth ≥ 7</th>
            <th>&lambda;<sub>c</sub> ≥ 5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td><a href={"/data/snarks/Generated_graphs.10.04.sn.cyc4.g6"}>1</a></td>
            <td><a href={"/data/snarks/Generated_graphs.10.05.sn.cyc4.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.10.05.sn.cyc5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/snarks/Generated_graphs.18.04.sn.cyc4.g6"}>2</a></td>
            <td><a href={"/data/snarks/Generated_graphs.18.05.sn.cyc4.g6"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/snarks/Generated_graphs.20.04.sn.cyc4.g6"}>6</a></td>
            <td><a href={"/data/snarks/Generated_graphs.20.05.sn.cyc4.g6"}>6</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.20.05.sn.cyc5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/snarks/Generated_graphs.22.04.sn.cyc4.g6"}>31</a></td>
            <td><a href={"/data/snarks/Generated_graphs.22.05.sn.cyc4.g6"}>20</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.22.05.sn.cyc5.g6"}>2</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/snarks/Generated_graphs.24.04.sn.cyc4.g6"}>155</a></td>
            <td><a href={"/data/snarks/Generated_graphs.24.05.sn.cyc4.g6"}>38</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.24.05.sn.cyc5.g6"}>2</a></td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/snarks/Generated_graphs.26.04.sn.cyc4.g6"}>1297</a></td>
            <td><a href={"/data/snarks/Generated_graphs.26.05.sn.cyc4.g6"}>280</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.26.05.sn.cyc5.g6"}>10</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"/data/snarks/Generated_graphs.28.04.sn.cyc4.g6"}>12517</a></td>
            <td><a href={"/data/snarks/Generated_graphs.28.05.sn.cyc4.g6"}>2900</a></td>
            <td><a href={"/data/snarks/Generated_graphs.28.06.sn.cyc4.g6"}>1</a></td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.28.05.sn.cyc5.g6"}>75</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/snarks/Generated_graphs.30.04.sn.cyc4.g6.gz"}>139854</a></td>
            <td><a href={"/data/snarks/Generated_graphs.30.05.sn.cyc4.g6.gz"}>28399</a></td>
            <td><a href={"/data/snarks/Generated_graphs.30.06.sn.cyc4.g6"}>1</a></td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.30.05.sn.cyc5.g6"}>509</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href={"/data/snarks/Generated_graphs.32.04.sn.cyc4.g6.gz"}>1764950</a></td>
            <td><a href={"/data/snarks/Generated_graphs.32.05.sn.cyc4.g6.gz"}>293059</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.32.05.sn.cyc5.g6"}>2953</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/snarks/Generated_graphs.34.04.sn.cyc4.g6.gz"}>25286953</a></td>
            <td><a href={"/data/snarks/Generated_graphs.34.05.sn.cyc4.g6.gz"}>3833587</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.34.05.sn.cyc5.g6"}>19935</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"/data/snarks/Generated_graphs.36.04.sn.cyc4.g6.gz"}>404899916</a></td>
            <td><a href={"/data/snarks/Generated_graphs.36.05.sn.cyc4.g6.gz"}>60167732</a></td>
            <td><a href={"/data/snarks/Generated_graphs.36.06.sn.cyc4.g6"}>1</a></td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.36.05.sn.cyc5.g6"}>180612</a></td>
          </tr>
          <tr>
            <td>38</td>
            <td>?</td>
            <td><a href={"/data/snarks/Generated_graphs.38.05.sn.cyc4.some.g6.gz"}>≥19775768</a></td>
            <td><a href={"/data/snarks/Generated_graphs.38.06.sn.cyc4.g6"}>39</a></td>
            <td>0</td>
            <td><a href={"/data/snarks/cyc5/Generated_graphs.38.05.sn.cyc5.some.g6"}>≥35429</a></td>
          </tr>
          <tr>
            <td>40</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/snarks/Generated_graphs.40.06.sn.cyc4.some.g6"}>≥25</a></td>
            <td>0</td>
            <td>?</td>
          </tr>
          <tr>
            <td>42</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"flow_critical"}>
        <h5>Flow-critical snarks</h5>
        <p>A graph G without k-flow is <i>k-edge-critical</i> (or <i>k-vertex-critical</i>) if, for every edge e (or for every pair (u,v) of
          vertices) of G, contracting e (or identifying u and v) yields (without simplifying multiple edges) a graph that has a k-flow.
          In <a href={"#ref13"}>[13]</a> Fiol, Mazzuoccolo and Steffen showed that this definition of k-edge-critical is equivalent to the
          following: a graph G without k-flow is k-edge-critical if, for every edge e of G, removing e yields a graph that has a k-flow.</p>
        <p>The table below lists all 4-edge-critical and 4-vertex-critical snarks of order at most 36. They were determined by Carneiro,
          da Silva and McKay (see <a href={"#ref4"}>[4]</a> for more information).</p>
        <p>In <a href={"#ref7"}>[7]</a> Edita Máčajová and Martin Škoviera showed that a snark is 4-edge-critical if and only if it
          is <i>critical</i> and that a snark is 4-vertex-critical if and only if it is <i>bicritical</i>. (A snark is <i>critical</i> if
          the removal of any two adjacent vertices produces a 3-edge-colourable graph and <i>bicritical</i> if the removal of any two distinct
          vertices produces a 3-edge-colourable graph). Furthermore, in <a href={"#ref8"}>[8]</a> Roman Nedela and Martin Škoviera showed that
          a snark is <i>irreducible</i> if and only if it is bicritical. (A snark is <i>irreducible</i> if the removal of every edge-cut
          which is not the set of all edges incident with a vertex yields a 3-edge-colourable graph).</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>girth ≥ 5</th>
            <th>Edge-critical</th>
            <th>Vertex-critical</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td>1</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.10.g6"}>1</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.10.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td>2</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.18.g6"}>2</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.18.g6"}>2</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td>6</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.20.g6"}>1</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.20.g6"}>1</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td>20</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.22.g6"}>2</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.22.g6"}>2</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td>38</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td>280</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.26.g6"}>111</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.26.g6"}>111</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td>2900</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.28.g6"}>33</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.28.g6"}>33</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td>28399</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.30.g6"}>115</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.30.g6"}>115</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td>293059</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.32.g6"}>29</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.32.g6"}>13</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td>3833587</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.34.g6.gz"}>40330</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.34.g6.gz"}>40328</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td>60167732</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.36.g6.gz"}>14548</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.36.g6.gz"}>13720</a></td>
          </tr>
          <tr>
            <td>&le; 36</td>
            <td>64326024</td>
            <td><a href={"/data/snarks/flowcritical/4_edge_critical_snarks.g6.gz"}>55172</a></td>
            <td><a href={"/data/snarks/flowcritical/4_vertex_critical_snarks.g6.gz"}>54326</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"hypo_hamil"}>
        <h5>Hypohamiltonian snarks</h5>
        <p>A graph G is <i>hypohamiltonian</i> if G is non-hamiltonian and G-v is hamiltonian for every vertex v of G.</p>
        <p>The table below lists all hypohamiltonian snarks of order at most 36. They were determined by Brinkmann et al.
          in <a href={"#ref1"}>[1]</a>. In <a href={"#ref6"}>[6]</a> all hypohamiltonian snarks with at least 38 and at most
          44 vertices which can be obtained by performing a dot product on two smaller hypohamiltonian snarks were determined.
          These graphs are also listed in the table.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>All</th>
            <th>&lambda;<sub>c</sub> ≥ 5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.10.05.sn.cyc4.g6"}>1</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.10.05.sn.cyc4.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.18.05.sn.cyc4.g6"}>2</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.20.05.sn.cyc4.g6"}>1</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.20.05.sn.cyc5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.22.05.sn.cyc4.g6"}>2</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.22.05.sn.cyc5.g6"}>2</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.26.05.sn.cyc4.g6"}>95</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.26.05.sn.cyc5.g6"}>8</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.28.05.sn.cyc4.g6"}>31</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.28.05.sn.cyc5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.30.05.sn.cyc4.g6"}>104</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.30.05.sn.cyc5.g6"}>11</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.32.05.sn.cyc4.g6"}>13</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.32.05.sn.cyc5.g6"}>13</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.34.05.sn.cyc4.g6"}>31198</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.34.05.sn.cyc5.g6"}>1497</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.36.05.sn.cyc4.g6"}>10838</a></td>
            <td><a href={"/data/snarks/hypoham/Hypohamiltonian_graphs.36.05.sn.cyc5.g6"}>464</a></td>
          </tr>
          <tr>
            <td>38</td>
            <td><a href={"/data/snarks/hypoham/Hypoham_snarks_38v_dot_prod_all_hypo.g6"}>≥51431</a></td>
            <td>?</td>
          </tr>
          <tr>
            <td>40</td>
            <td><a href={"/data/snarks/hypoham/Hypoham_snarks_40v_dot_prod_all_hypo.g6"}>≥8820</a></td>
            <td>?</td>
          </tr>
          <tr>
            <td>42</td>
            <td><a href={"/data/snarks/hypoham/Hypoham_snarks_42v_dot_prod_all_hypo-nauty.g6.gz"}>≥20575458</a></td>
            <td>?</td>
          </tr>
          <tr>
            <td>44</td>
            <td><a href={"/data/snarks/hypoham/Hypoham_snarks_44v_dot_prod_all_hypo-nauty.g6.gz"}>≥8242146</a></td>
            <td>?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"k2_hamil"}>
        <h5>K2-hamiltonian snarks</h5>
        <p>A graph is <i>K2-hamiltonian</i> if the removal of any pair of adjacent vertices yields a hamiltonian graph.</p>
        <p>The table below lists all K2-hamiltonian snarks of order at most 36 as well as the snarks which are both K2-hamiltonian
          and hypohamiltonian. They were determined by Goedgebeur et al. in <a href={"#ref14"}>[14]</a>.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>K2-ham</th>
            <th>K2-ham and hypoham</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.10.05.sn.cyc4.g6"}>1</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.10.05.sn.cyc4.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.20.05.sn.cyc4.g6"}>1</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.20.05.sn.cyc4.g6"}>1</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.22.05.sn.cyc4.g6"}>2</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.22.05.sn.cyc4.g6"}>2</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.26.05.sn.cyc4.g6"}>6</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.26.05.sn.cyc4.g6"}>5</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.28.05.sn.cyc4.g6"}>14</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.28.05.sn.cyc4.g6"}>12</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.30.05.sn.cyc4.g6"}>9</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.30.05.sn.cyc4.g6"}>9</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.32.05.sn.cyc4.g6"}>11</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.32.05.sn.cyc4.g6"}>11</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.34.05.sn.cyc4.g6"}>1036</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.34.05.sn.cyc4.g6"}>936</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"/data/snarks/k2ham/K2-hypohamiltonian_graphs.36.05.sn.cyc4.g6"}>3849</a></td>
            <td><a href={"/data/snarks/k2ham/Hypohamiltonian_K2-hamiltonian_graphs.36.05.sn.cyc4.g6"}>3008</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"permutation"}>
        <h5>Permutation snarks</h5>
        <p>A snark is a permutation snark if it has a 2-factor that consists of two induced cycles. Permutation snarks must be of order
          2 mod 4 since otherwise they would have a 2-factor that consists of two even components and therefore be colourable.
          All known permutation snarks have 8k + 2 vertices (for ≥ 1). It is not known if there exist permutation snarks with 8k + 6 vertices.</p>
        <p>The table below lists all permutation snarks of order at most 36. They were determined by Brinkmann et al. in <a href={"#ref1"}>[1]</a>.
          The 12 permutation snarks on 34 vertices with &lambda;<sub>c</sub> ≥ 5 are counterexamples to a conjecture of Zhang <a href={"#ref11"}>[11]</a> that
          the Petersen graph is the only cyclically 5-edge-connected permutation graph.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>All</th>
            <th>&lambda;<sub>c</sub> ≥ 5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td><a href={"/data/snarks/permutation/Permutation_graphs.10.05.sn.cyc4.g6"}>1</a></td>
            <td><a href={"/data/snarks/permutation/Permutation_graphs.10.05.sn.cyc5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/snarks/permutation/Permutation_graphs.18.05.sn.cyc4.g6"}>2</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/snarks/permutation/Permutation_graphs.26.05.sn.cyc4.g6"}>64</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>28</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>30</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>32</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/snarks/permutation/Permutation_graphs.34.05.sn.cyc4.g6"}>10771</a></td>
            <td><a href={"/data/snarks/permutation/Permutation_graphs.34.05.sn.cyc5.g6"}>12</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"circular_flow_5"}>
        <h5>Snarks with circular flow number 5</h5>
        <p>Let <i>r ≥ 2</i> be a real number, a <i>circular nowhere-zero r-flow</i> in a graph <i>G</i> is a flow in some orientation
          of <i>G</i> such that the flow value on each edge lies in the interval [1,r-1] and such that the sum of the inner and outer
          flow in every vertex is zero. The circular flow number of a graph <i>G</i>, denoted by &Phi;(G), is the infimum of the real
          numbers <i>r</i> such that <i>G</i> has a circular nowhere-zero r-flow.</p>
        <p>The table below lists the circular flow number of all snarks of order at most 36. They were determined
          in <a href={"#ref5"}>[5]</a> and <a href={"#ref12"}>[12]</a>.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>&nbsp;&Phi;=4+1/4&nbsp;</th>
            <th>&nbsp;&Phi;=4+1/3&nbsp;</th>
            <th>&nbsp;&Phi;=4+1/2&nbsp;</th>
            <th>&nbsp;&Phi;=4+2/3&nbsp;</th>
            <th>&Phi;=5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><a href={"/data/snarks/cfn5/Generated_graphs.10.05.sn.cyc4-circ_flownr_5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td></td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.18.05.sn.cyc4-circ_flownr_4.5.g6"}>2</a></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>20</td>
            <td></td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.20.05.sn.cyc4-circ_flownr_4.5.g6"}>6</a></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>22</td>
            <td></td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.22.05.sn.cyc4-circ_flownr_4.5.g6"}>20</a></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>24</td>
            <td></td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.24.05.sn.cyc4-circ_flownr_4.5.g6"}>38</a></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>26</td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.26.05.sn.cyc4-circ_flownr_4.3333.g6"}>57</a></td>
            <td>223</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>28</td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.28.05.sn.cyc4-circ_flownr_4.3333.g6"}>1258</a></td>
            <td>1641</td>
            <td></td>
            <td><a href={"/data/snarks/cfn5/Generated_graphs.28.05.sn.cyc4-circ_flownr_5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.30.05.sn.cyc4-circ_flownr_4.3333.g6"}>10500</a></td>
            <td>17897</td>
            <td></td>
            <td><a href={"/data/snarks/cfn5/Generated_graphs.30.05.sn.cyc4-circ_flownr_5.g6"}>2</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td></td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.32.05.sn.cyc4-circ_flownr_4.3333.g6"}>60008</a></td>
            <td>233042</td>
            <td></td>
            <td><a href={"/data/snarks/cfn5/Generated_graphs.32.05.sn.cyc4-circ_flownr_5.g6"}>9</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.34.05.sn.cyc4-circ_flownr_4.25.g6"}>3627</a></td>
            <td>372708</td>
            <td>3457227</td>
            <td></td>
            <td><a href={"/data/snarks/cfn5/Generated_graphs.34.05.sn.cyc4-circ_flownr_5.g6"}>25</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"/data/snarks/mincfn/Generated_graphs.36.05.sn.cyc4-circ_flownr_4.25.g6.gz"}>199338</a></td>
            <td>3339506</td>
            <td>56628773</td>
            <td>17</td>
            <td><a href={"/data/snarks/cfn5/Generated_graphs.36.05.sn.cyc4-circ_flownr_5.g6"}>98</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"oddness_4"}>
        <h5>Snarks with oddness 4</h5>
        <p>The <i>oddness</i> of a bridgeless cubic graph is the minimum number of odd components in any 2-factor of the graph. Snarks
          have oddness at least 2. In <a href={"#ref2"}>[2]</a> it was proven that the smallest snarks with oddness 4 and cyclic edge
          connectivity 4 have 44 vertices and in <a href={"#ref9"}>[9]</a> it was proven that there are exactly 31 snarks on 44 vertices with
          oddness 4 and cyclic edge connectivity 4. In the latter article also samples of snarks with oddness 4 were determined up to 52 vertices.
          These can be downloaded in the table below. We refer to <a href={"#ref10"}>[10]</a> for the smallest snarks of oddness 4 with lower
          connectivity.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Oddness 4</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>44</td>
            <td><a href={"/data/snarks/oddness4/snarks_44.04.oddness4.cyc4.g6"}>31</a></td>
          </tr>
          <tr>
            <td>46</td>
            <td><a href={"/data/snarks/oddness4/snarks_46.04.oddness4.cyc4.some.g6"}>≥484</a></td>
          </tr>
          <tr>
            <td>48</td>
            <td><a href={"/data/snarks/oddness4/snarks_48.04.oddness4.cyc4.some.g6"}>≥5905</a></td>
          </tr>
          <tr>
            <td>50</td>
            <td><a href={"/data/snarks/oddness4/snarks_50.04.oddness4.cyc4.some.g6"}>≥66990</a></td>
          </tr>
          <tr>
            <td>52</td>
            <td><a href={"/data/snarks/oddness4/snarks_52.04.oddness4.cyc4.some.g6.gz"}>≥813773</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] G. Brinkmann, J. Goedgebeur, J. Hagglund and K. Markstrom, Generation and properties of Snarks, Journal of Combinatorial Theory, Series B, 103(4):468-488, 2013.</p>
        <p id={"ref2"}>[2] J. Goedgebeur, E. Macajova and M. Skoviera, Smallest snarks with oddness 4 and cyclic connectivity 4 have order 44, Ars Mathematica Contemporanea, 16(2): 277-298, 2019.</p>
        <p id={"ref3"}>[3] G. Brinkmann and J. Goedgebeur, Generation of cubic graphs and snarks with large girth, Journal of Graph Theory, 86(2):255-272, 2017.</p>
        <p id={"ref4"}>[4] A.B. Carneiro, C.N. da Silva and B.D. McKay, A Faster Test for 4-Flow-Criticality in Snarks, In: VIII Latin-American Algorithms, Graphs and Optimization Symposium, Electronic Notes in Discrete Mathematics, 50:193-198, 2015.</p>
        <p id={"ref5"}>[5] J. Goedgebeur, D. Mattiolo and G. Mazzuoccolo, A unified approach to construct snarks with circular flow number 5, submitted, 2018. Preprint: arXiv:1804.00957.</p>
        <p id={"ref6"}>[6] J. Goedgebeur and C.T. Zamfirescu, On Hypohamiltonian Snarks and a Theorem of Fiorini, Ars Mathematica Contemporanea, 14(2):227-249, 2018.</p>
        <p id={"ref7"}>[7] E. Máčajová and M. Škoviera, Critical and flow-critical snarks coincide, to appear in Discussiones Mathematicae Graph Theory, 9 pages, 2019.</p>
        <p id={"ref8"}>[8] R. Nedela and M. Škoviera, Decompositions and reductions of snarks, Journal of Graph Theory, 22(3):253-279, 1996.</p>
        <p id={"ref9"}>[9] J. Goedgebeur, E. Macajova and M. Skoviera, The smallest nontrivial snarks of oddness 4, to appear in Discrete Applied Mathematics, 38 pages, 2019.</p>
        <p id={"ref10"}>[10] J. Goedgebeur, On the smallest snarks with oddness 4 and connectivity 2, Electronic Journal of Combinatorics, 25(2), 2018.</p>
        <p id={"ref11"}>[11] C.Q. Zhang, Integer flows and cycle covers of graphs, Monographs and Textbooks in Pure and Applied Mathematics, vol. 205, Marcel Dekker Inc., New York, 1997.</p>
        <p id={"ref12"}>[12] J. Goedgebeur, D. Mattiolo and G. Mazzuoccolo, Computational results and new bounds for the circular flow number of snarks, Discrete Mathematics, 343(10):112026, 11 pages, 2020.</p>
        <p id={"ref13"}>[13] M.A. Fiol, G. Mazzuoccolo and E. Steffen, Measures of edge-uncolorability of cubic graphs, Electronic Journal of Combinatorics, 25(4), 2018.</p>
        <p id={"ref14"}>[14] J. Goedgebeur, J. Renders, G. Wiener and C.T. Zamfirescu, K2-Hamiltonian Graphs: II, manuscript, 2022.</p>
      </div>
      <br/>
    </div>
  );
}

export default Snarks;