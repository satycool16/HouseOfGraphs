import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const UniquelyHamiltonian = () => {
  return (
    <div>
      <h3>Uniquely hamiltonian graphs</h3>
      <p>A <i>uniquely hamiltonian graph</i> is a graph which contains exactly one hamiltonian cycle.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.
        All results were obtained with the program <a href={"http://caagt.ugent.be/uhg/"}>GenerateUHG <BiLinkExternal/></a> (see <a href={"#ref1"}>[1]</a>).</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#uhg"}>Uniquely hamiltonian graphs</a></li>
          <li><a href={"#planar_uhg"}>Planar uniquely hamiltonian graphs</a></li>
          <li><a href={"#nearly_cubic_uhg"}>Nearly cubic uniquely hamiltonian graphs</a></li>
          <li><a href={"#uhg_min_degree"}>Uniquely hamiltonian graphs of minimum degree 3</a></li>
        </ul>
      </div>
      <div id={"uhg"}>
        <h5>Uniquely hamiltonian graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>girth ≥ 3</th>
            <th>girth ≥ 4</th>
            <th>girth ≥ 5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>3</td>
            <td><a href={"/data/uhg/UHGs_3v.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href={"/data/uhg/UHGs_4v.g6"}>2</a></td>
            <td><a href={"/data/uhg/UHGs_4v_girth4.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/uhg/UHGs_5v.g6"}>3</a></td>
            <td><a href={"/data/uhg/UHGs_5v_girth4.g6"}>1</a></td>
            <td><a href={"/data/uhg/UHGs_5v_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/uhg/UHGs_6v.g6"}>12</a></td>
            <td><a href={"/data/uhg/UHGs_6v_girth4.g6"}>2</a></td>
            <td><a href={"/data/uhg/UHGs_6v_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/uhg/UHGs_7v.g6"}>49</a></td>
            <td><a href={"/data/uhg/UHGs_7v_girth4.g6"}>3</a></td>
            <td><a href={"/data/uhg/UHGs_7v_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/uhg/UHGs_8v.g6"}>482</a></td>
            <td><a href={"/data/uhg/UHGs_8v_girth4.g6"}>11</a></td>
            <td><a href={"/data/uhg/UHGs_8v_girth5.g6"}>3</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/uhg/UHGs_9v.g6"}>6380</a></td>
            <td><a href={"/data/uhg/UHGs_9v_girth4.g6"}>38</a></td>
            <td><a href={"/data/uhg/UHGs_9v_girth5.g6"}>4</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/uhg/UHGs_10v.g6"}>135252</a></td>
            <td><a href={"/data/uhg/UHGs_10v_girth4.g6"}>250</a></td>
            <td><a href={"/data/uhg/UHGs_10v_girth5.g6"}>10</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/uhg/UHGs_11v.g6.gz"}>3939509</a></td>
            <td><a href={"/data/uhg/UHGs_11v_girth4.g6"}>2171</a></td>
            <td><a href={"/data/uhg/UHGs_11v_girth5.g6"}>32</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/uhg/UHGs_12v.g6.gz"}>166800470</a></td>
            <td><a href={"/data/uhg/UHGs_12v_girth4.g6"}>25518</a></td>
            <td><a href={"/data/uhg/UHGs_12v_girth5.g6"}>167</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td>9739584172</td>
            <td><a href={"/data/uhg/UHGs_13v_girth4.g6.gz"}>388854</a></td>
            <td><a href={"/data/uhg/UHGs_13v_girth5.g6"}>899</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td>818717312364</td>
            <td><a href={"/data/uhg/UHGs_14v_girth4.g6.gz"}>7283110</a></td>
            <td><a href={"/data/uhg/UHGs_14v_girth5.g6"}>6470</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td>95353226103276</td>
            <td><a href={"/data/uhg/UHGs_15v_girth4.g6.gz"}>171355621</a></td>
            <td><a href={"/data/uhg/UHGs_15v_girth5.g6"}>55815</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td>?</td>
            <td>4915591680</td>
            <td><a href={"/data/uhg/UHGs_16v_girth5.g6.gz"}>549981</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td>?</td>
            <td>174203813967</td>
            <td><a href={"/data/uhg/UHGs_17v_girth5.g6.gz"}>6155795</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td>?</td>
            <td>7526329299531</td>
            <td>78520177</td>
          </tr>
          <tr>
            <td>19</td>
            <td>?</td>
            <td>?</td>
            <td>1123544810</td>
          </tr>
          <tr>
            <td>20</td>
            <td>?</td>
            <td>?</td>
            <td>18005054988</td>
          </tr>
          <tr>
            <td>21</td>
            <td>?</td>
            <td>?</td>
            <td>322434738089</td>
          </tr>
          <tr>
            <td>22</td>
            <td>?</td>
            <td>?</td>
            <td>6427598615569</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"planar_uhg"}>
        <h5>Planar uniquely hamiltonian graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>girth ≥ 3</th>
            <th>girth ≥ 4</th>
            <th>girth ≥ 5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>3</td>
            <td><a href={"/data/uhg/UHGs_3v_planar.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href={"/data/uhg/UHGs_4v_planar.g6"}>2</a></td>
            <td><a href={"/data/uhg/UHGs_4v_planar_girth4.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/uhg/UHGs_5v_planar.g6"}>3</a></td>
            <td><a href={"/data/uhg/UHGs_5v_planar_girth4.g6"}>1</a></td>
            <td><a href={"/data/uhg/UHGs_5v_planar_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/uhg/UHGs_6v_planar.g6"}>12</a></td>
            <td><a href={"/data/uhg/UHGs_6v_planar_girth4.g6"}>2</a></td>
            <td><a href={"/data/uhg/UHGs_6v_planar_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/uhg/UHGs_7v_planar.g6"}>49</a></td>
            <td><a href={"/data/uhg/UHGs_7v_planar_girth4.g6"}>3</a></td>
            <td><a href={"/data/uhg/UHGs_7v_planar_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/uhg/UHGs_8v_planar.g6"}>460</a></td>
            <td><a href={"/data/uhg/UHGs_8v_planar_girth4.g6"}>11</a></td>
            <td><a href={"/data/uhg/UHGs_8v_planar_girth5.g6"}>3</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/uhg/UHGs_9v_planar.g6"}>4994</a></td>
            <td><a href={"/data/uhg/UHGs_9v_planar_girth4.g6"}>33</a></td>
            <td><a href={"/data/uhg/UHGs_9v_planar_girth5.g6"}>4</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/uhg/UHGs_10v_planar.g6"}>68234</a></td>
            <td><a href={"/data/uhg/UHGs_10v_planar_girth4.g6"}>178</a></td>
            <td><a href={"/data/uhg/UHGs_10v_planar_girth5.g6"}>8</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/uhg/UHGs_11v_planar.g6.gz"}>997486</a></td>
            <td><a href={"/data/uhg/UHGs_11v_planar_girth4.g6"}>1011</a></td>
            <td><a href={"/data/uhg/UHGs_11v_planar_girth5.g6"}>23</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/uhg/UHGs_12v_planar.g6.gz"}>15582567</a></td>
            <td><a href={"/data/uhg/UHGs_12v_planar_girth4.g6"}>6816</a></td>
            <td><a href={"/data/uhg/UHGs_12v_planar_girth5.g6"}>91</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td>253005521</td>
            <td><a href={"/data/uhg/UHGs_13v_planar_girth4.g6"}>47669</a></td>
            <td><a href={"/data/uhg/UHGs_13v_planar_girth5.g6"}>317</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td>4250680376</td>
            <td><a href={"/data/uhg/UHGs_14v_planar_girth4.g6.gz"}>352901</a></td>
            <td><a href={"/data/uhg/UHGs_14v_planar_girth5.g6"}>1353</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td>73293572869</td>
            <td><a href={"/data/uhg/UHGs_15v_planar_girth4.g6.gz"}>2680512</a></td>
            <td><a href={"/data/uhg/UHGs_15v_planar_girth5.g6"}>6473</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td>1293638724177</td>
            <td>20939433</td>
            <td><a href={"/data/uhg/UHGs_16v_planar_girth5.g6.gz"}>30834</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td>?</td>
            <td>166713951</td>
            <td><a href={"/data/uhg/UHGs_17v_planar_girth5.g6.gz"}>148907</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td>?</td>
            <td>1352143860</td>
            <td><a href={"/data/uhg/UHGs_18v_planar_girth5.g6.gz"}>768178</a></td>
          </tr>
          <tr>
            <td>19</td>
            <td>?</td>
            <td>11129922982</td>
            <td>3987517</td>
          </tr>
          <tr>
            <td>20</td>
            <td>?</td>
            <td>?</td>
            <td>20767030</td>
          </tr>
          <tr>
            <td>21</td>
            <td>?</td>
            <td>?</td>
            <td>110819167</td>
          </tr>
          <tr>
            <td>22</td>
            <td>?</td>
            <td>?</td>
            <td>599311836</td>
          </tr>
          <tr>
            <td>23</td>
            <td>?</td>
            <td>?</td>
            <td>3256610004</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"nearly_cubic_uhg"}>
        <h5>Nearly cubic uniquely hamiltonian graphs</h5>
        <p>The following table contains the counts of nearly cubic uniquely hamiltonian graphs. A graph is <i>nearly cubic</i> if it contains
          exactly two vertices of degree 4 and all other vertices have degree 3. (Note that nearly cubic graphs must have even order).</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Nearly cubic UHG's</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-16</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/uhg/UHG_nearly_cubic_graphs_18v.g6"}>1</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/uhg/UHG_nearly_cubic_graphs_20v.g6"}>20</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/uhg/UHG_nearly_cubic_graphs_22v.g6"}>337</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/uhg/UHG_nearly_cubic_graphs_24v.g6"}>4592</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"uhg_min_degree"}>
        <h5>Uniquely hamiltonian graphs of minimum degree 3</h5>
        <p>It was shown by Royle <a href={"#ref2"}>[2]</a> that the smallest uniquely hamiltonian graphs with minimum degree at least 3 have
          18 vertices. The following table contains the counts of all uniquely hamiltonian graphs with girth at least 5 and minimum degree at
          least 3 up to 22 vertices. All of these graphs have girth 5 and minimum degree 3. Furthermore, there are no uniquely hamiltonian graphs
          with girth 4 and minimum degree at least 3 on 18 (or less) vertices. See <a href={"#ref1"}>[1]</a> for more details.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>UHG's &delta; ≥ 3</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-17</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/uhg/UHG_mindeg_at_least_3_18v_girth5.g6"}>2</a></td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/uhg/UHG_mindeg_at_least_3_19v_girth5.g6"}>1</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/uhg/UHG_mindeg_at_least_3_20v_girth5.g6"}>2</a></td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"/data/uhg/UHG_mindeg_at_least_3_21v_girth5.g6"}>25</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/uhg/UHG_mindeg_at_least_3_22v_girth5.g6"}>33</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] J. Goedgebeur, B. Meersman and C.T. Zamfirescu, Graphs with few hamiltonian cycles, Mathematics of Computation, 89:965-991, 2020.</p>
        <p id={"ref2"}>[2] G.F. Royle, <a href={"https://mathoverflow.net/questions/255784/what-is-the-smallest-uniquely-hamiltonian-graph-with-minimum-degree-at-least-3/"}>The smallest
          uniquely hamiltonian graph with minimum degree at least 3 <BiLinkExternal/></a>, 2017.</p>
      </div>
      <br/>
    </div>
  );
}

export default UniquelyHamiltonian;