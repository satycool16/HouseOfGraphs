import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const CoGraphs = () => {
  return (
    <div>
      <h3>Cographs</h3>
      <p>A <i>cograph</i> or complement-reducible graph is a graph that can be generated from the single-vertex graph <i>K<sub>1</sub></i> by
        complementation and disjoint union. An alternative and equivalent characterisation is that the class of <i>cographs</i> equals
        the class of <i>P<sub>4</sub></i>-free graphs, i.e. graphs which do not contain a <i>P<sub>4</sub></i> as induced subgraph.</p>
      <p> Below are the lists of connected cographs. These graphs were generated by Átila Jones using the generation algorithm described
        in <a href={"#ref1"}>[1]</a>. The source code of this algorithm can be found <a href={"https://github.com/atilaajones/CographGeneration"}>here <BiLinkExternal/></a>.
        The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.
      </p>
      <div>
        <h5>Connected cographs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of cographs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td><a href={"/data/cographs/cographConnected1.g6"}>1</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td><a href={"/data/cographs/cographConnected2.g6"}>1</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td><a href={"/data/cographs/cographConnected3.g6"}>2</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href={"/data/cographs/cographConnected4.g6"}>5</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/cographs/cographConnected5.g6"}>12</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/cographs/cographConnected6.g6"}>33</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/cographs/cographConnected7.g6"}>90</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/cographs/cographConnected8.g6"}>261</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/cographs/cographConnected9.g6"}>766</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/cographs/cographConnected10.g6"}>2312</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/cographs/cographConnected11.g6"}>7068</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/cographs/cographConnected12.g6"}>21965</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/cographs/cographConnected13.g6"}>68954</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/cographs/cographConnected14.g6.gz"}>218751</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/cographs/cographConnected15.g6.gz"}>699534</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/cographs/cographConnected16.g6.gz"}>2253676</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/cographs/cographConnected17.g6.gz"}>7305788</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/cographs/cographConnected18.g6.gz"}>23816743</a></td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/cographs/cographConnected19.g6.gz"}>78023602</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td>256738751</td>
          </tr>
          <tr>
            <td>21</td>
            <td>848152864</td>
          </tr>
          <tr>
            <td>22</td>
            <td>2811996972</td>
          </tr>
          <tr>
            <td>23</td>
            <td>9353366564</td>
          </tr>
          <tr>
            <td>24</td>
            <td>31204088381</td>
          </tr>
          <tr>
            <td>25</td>
            <td>104384620070</td>
          </tr>
          <tr>
            <td>26</td>
            <td>350064856815</td>
          </tr>
          <tr>
            <td>27</td>
            <td>1176693361956</td>
          </tr>
          <tr>
            <td>28</td>
            <td>3963752002320</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] A.A. Jones, F. Protti and R.R. Del-Vecchio, Cograph generation with linear delay, Theoretical Computer Science, 713:1-10, 2018.</p>
      </div>
      <br/>
    </div>
  );
}

export default CoGraphs;