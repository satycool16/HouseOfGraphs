import {BiLinkExternal} from "react-icons/bi";
import styles from '../MetaDirectory.module.css';

const AlmostHypohamiltonian = () => {
  return (
    <div>
      <h3>Almost hypohamiltonian graphs</h3>
      <p>A graph G is <i>hypohamiltonian</i> if G is non-hamiltonian and G-v is hamiltonian for every vertex v of G. A graph G
        is <i>almost hypohamiltonian</i> if G is non-hamiltonian and there exists a vertex w of G such that G-w is non-hamiltonian
        and G-v is hamiltonian for every vertex v of G different from w.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format.</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#almost_hypo"}>Almost hypohamiltonian graphs</a></li>
          <li><a href={"#cubic_almost_hypo"}>Cubic almost hypohamiltonian graphs</a></li>
        </ul>
      </div>
      <p>Lists of hypohamiltonian graphs can be found <a href={"/meta-directory/hypohamiltonian"}>here</a>.</p>
      <p>The counts of incomplete cases are indicated with a '≥' in the table. In all other cases the numbers are the counts
        of the complete sets of almost hypohamiltonian graphs.</p>
      <div id={"almost_hypo"}>
        <h5>Almost hypohamiltonian graphs</h5>
        <p>All results were obtained with the program <a href={"http://caagt.ugent.be/hypoham/"}>GenHypohamiltonian <BiLinkExternal/></a> of
        Goedgebeur and Zamfirescu <a href={"#ref1"}>[1]</a> </p>
        <p>The following table gives the complete lists of all almost hypohamiltonian graphs with a given lower bound on the girth.</p>

        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 3</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 5</th>
            <th>Girth ≥ 6</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className={`${styles.vertices}`}>0-16</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>17</td>
            <td><a href={"/data/almhypoham/general/almhypo17.g6"}>2</a></td>
            <td><a href={"/data/almhypoham/general/almhypo17_g4.g6"}>2</a></td>
            <td><a href={"/data/almhypoham/general/almhypo17_g5.g6"}>2</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>18</td>
            <td><a href={"/data/almhypoham/general/almhypo18.g6"}>2</a></td>
            <td><a href={"/data/almhypoham/general/almhypo18_g4.g6"}>2</a></td>
            <td><a href={"/data/almhypoham/general/almhypo18_g5.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>19</td>
            <td>?</td>
            <td><a href={"/data/almhypoham/general/almhypo19_g4.g6"}>27</a></td>
            <td><a href={"/data/almhypoham/general/almhypo19_g5.g6"}>4</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>20</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/almhypoham/general/almhypo20_g5.g6"}>14</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>21</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/almhypoham/general/almhypo21_g5.g6"}>27</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>22</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/almhypoham/general/almhypo22_g5.g6"}>133</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>23</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/almhypoham/general/almhypo23_g5.g6"}>404</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>24</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/almhypoham/general/almhypo24_g5_some.g6"}>≥68</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>25-26</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"cubic_almost_hypo"}>
        <h5>Cubic almost hypohamiltonian graphs</h5>
        <p>The graphs in this section were obtained by applying a generator for cubic graphs (see the <a href={"/meta-directory/cubic"}>cubic graphs page</a>)
          and testing the generated graphs for almost hypohamiltonicity as a filter.</p>
        <p>The following table give the complete lists of all cubic almost hypohamiltonian graphs with a given lower bound
          on the girth. (Note that cubic almost hypohamiltonian graphs must have girth at least 4). More information about
          these graphs can be found in <a href={"#ref1"}>[1]</a>.</p>

        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 5</th>
            <th>Girth ≥ 6</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className={`${styles.vertices}`}>0-24</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>26</td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.26.04.g6"}>10</a></td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.26.05.g6"}>10</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>28</td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.28.04.g6"}>6</a></td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.28.05.g6"}>2</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>30</td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.30.04.g6"}>25</a></td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.30.05.g6"}>12</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td className={`${styles.vertices}`}>32</td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.32.04.g6"}>74</a></td>
            <td><a href={"/data/almhypoham/cubic/Almost_hypohamiltonian_graphs_cubic.32.05.g6"}>4</a></td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <h5>References</h5>
      <p id={"ref1"}>[1] J. Goedgebeur and C.T. Zamfirescu, On almost hypohamiltonian graphs, Discrete Mathematics and Theoretical
        Computer Science, 21(4), 18 pages, 2019. </p>
    </div>
  )
}

export default AlmostHypohamiltonian;