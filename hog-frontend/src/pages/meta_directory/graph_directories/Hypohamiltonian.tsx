import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Hypohamiltonian = () => {
  return (
    <div>
      <h3>Hypohamiltonian graphs</h3>
      <p>A graph G is <i>hypohamiltonian</i> if G is non-hamiltonian and G-v is hamiltonian for every vertex v of G.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format.</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#hypo"}>Hypohamiltonian graphs</a></li>
          <li><a href={"#cubic_hypo"}>Cubic hypohamiltonian graphs</a></li>
          <li><a href={"#hypo_snarks"}>Hypohamiltonian snarks</a></li>
        </ul>
      </div>
      <p>Reza Jooyandeh also maintains a page with lists of planar hypohamiltonian graphs. This page can be
        found <a href={"http://www.jooyandeh.com/planar_hypo/"}>here <BiLinkExternal/></a>.</p>
      <p>Lists of <i>almost hypohamiltonian</i> graphs can be found <a href={"/meta-directory/almost-hypohamiltonian"}>here</a>.</p>
      <div id={"hypo"}>
        <h5>Hypohamiltonian graphs</h5>
        <p>All results up to 17 vertices were independently verified by Aldred, McKay and Wormald <a href={"#ref1"}>[1]</a> and
          Goedgebeur and Zamfirescu <a href={"#ref2"}>[2]</a>. The results with more than 17 vertices were obtained
          with the program <a href={"http://caagt.ugent.be/hypoham/"}>GenHypohamiltonian <BiLinkExternal/></a> of Goedgebeur and
          Zamfirescu <a href={"#ref2"}>[2]</a>.</p>
        <p>The following table gives the complete lists of all hypohamiltonian graphs with a given lower bound on the girth.
          The counts of cases which are indicated with a '≥' in the table are possibly incomplete. In all other cases the numbers are
          the counts of the complete sets of hypohamiltonian graphs.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 3</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 5</th>
            <th>Girth ≥ 6</th>
            <th>Girth ≥ 7</th>
            <th>Girth ≥ 8</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-9</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href="/data/hypoham/general/hypo10.g6">1</a></td>
            <td><a href="/data/hypoham/general/hypo10_g4.g6">1</a></td>
            <td><a href="/data/hypoham/general/hypo10_g5.g6">1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href="/data/hypoham/general/hypo13.g6">1</a></td>
            <td><a href="/data/hypoham/general/hypo13_g4.g6">1</a></td>
            <td><a href="/data/hypoham/general/hypo13_g5.g6">1</a></td>
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
            <td>0</td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href="/data/hypoham/general/hypo15.g6">1</a></td>
            <td><a href="/data/hypoham/general/hypo15_g4.g6">1</a></td>
            <td><a href="/data/hypoham/general/hypo15_g5.g6">1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href="/data/hypoham/general/hypo16.g6">4</a></td>
            <td><a href="/data/hypoham/general/hypo16_g4.g6">4</a></td>
            <td><a href="/data/hypoham/general/hypo16_g5.g6">4</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>17</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href="/data/hypoham/general/hypo18.g6">14</a></td>
            <td><a href="/data/hypoham/general/hypo18_g4.g6">13</a></td>
            <td><a href="/data/hypoham/general/hypo18_g5.g6">8</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href="/data/hypoham/general/hypo19.g6">34</a></td>
            <td><a href="/data/hypoham/general/hypo19_g4.g6">34</a></td>
            <td><a href="/data/hypoham/general/hypo19_g5.g6">34</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypohypo20_g4_some.g6">≥ 98</a></td>
            <td><a href="/data/hypoham/general/hypo20_g5.g6">4</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>21</td>
            <td>?</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypo21_g5.g6">85</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td>?</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypo22_g5.g6">420</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>23</td>
            <td>?</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypo23_g5.g6">85</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td>?</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypo24_g5.g6">2530</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>25</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypo25_g6.g6">1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>27</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>28</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href="/data/hypoham/general/hypo28_g6_some.g6">≥ 2</a></td>
            <td><a href="/data/hypoham/general/hypo28_g7.g6">1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>29</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>30</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>31-35</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"cubic_hypo"}>
        <h5>Cubic hypohamiltonian graphs</h5>
        <p>The graphs in this section were obtained by applying a generator for cubic graphs (see the <a href={"/meta-directory/cubic"}>cubic graphs page</a>)
          and testing the generated graphs for hypohamiltonicity as a filter.</p>
        <p>The following table give the complete lists of all cubic hypohamiltonian graphs with a given lower bound on the girth.
          (Note that cubic hypohamiltonian graphs must have girth at least 4). More information about these graphs can be found
          in <a href={"#ref2"}>[2]</a>.
        </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 5</th>
            <th>Girth ≥ 6</th>
            <th>Girth ≥ 7</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-9</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.10.04.g6">1</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.10.05.g6">1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12-16</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.18.04.g6">2</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.18.05.g6">2</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.20.04.g6">1</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.20.05.g6">1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.22.04.g6">3</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.22.05.g6">3</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.24.04.g6">1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.26.04.g6">100</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.26.05.g6">96</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.28.04.g6">52</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.28.05.g6">34</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.28.06.g6">2</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.28.07.g6">1</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.30.04.g6">202</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.30.05.g6">139</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.30.05.g6">1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.32.04.g6">304</a></td>
            <td><a href="/data/hypoham/cubic/Hypohamiltonian_graphs_cubic.32.05.g6">28</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"hypo_snarks"}>
        <h5>Hypohamiltonian snarks</h5>
        <p>Lists of hypohamiltonian snarks can be found on the <a href={"/meta-directory/snarks"}>snarks page</a>.</p>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] R. Aldred, B. McKay and N. Wormald, Small hypohamiltonian graphs, Journal of Combinatorial Mathematics and Combinatorial Computing 23:143-152, 1997.</p>
        <p id={"ref2"}>[2] J. Goedgebeur and C.T. Zamfirescu, Improved bounds for hypohamiltonian graphs, Ars Mathematica Contemporanea, 13(2):235-257, 2017.</p>
      </div>
      <br/>
    </div>
  );
}

export default Hypohamiltonian;