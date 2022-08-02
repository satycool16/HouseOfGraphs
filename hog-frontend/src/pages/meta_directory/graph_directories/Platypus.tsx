import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Platypus = () => {
  return (
    <div>
      <h5>Platypus graphs</h5>
      <p>A <i>platypus graph</i> is a non-hamiltonian graph for which every vertex-deleted subgraph is traceable (i.e. contains a hamiltonian path).</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format.</p>
      <div>
        <h3>Platypus graphs</h3>
        <p> All results were obtained with the program <a href={"http://caagt.ugent.be/hypoham/"}>GenHypohamiltonian <BiLinkExternal/></a>, 
          see <a href={"#ref1"}>[1]</a> for details.</p>
        <p>The following table gives the complete lists of all platypus graphs with a given lower bound on the girth.</p>
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
            <th>Girth ≥ 9</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-8</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/platypus/platypuses_9v.g6"}>4</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/platypus/platypuses_10v.g6"}>48</a></td>
            <td><a href={"/data/platypus/platypuses_10v_girth4.g6"}>2</a></td>
            <td><a href={"/data/platypus/platypuses_10v_girth5.g6"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/platypus/platypuses_11v.g6"}>814</a></td>
            <td><a href={"/data/platypus/platypuses_11v_girth4.g6"}>4</a></td>
            <td><a href={"/data/platypus/platypuses_11v_girth5.g6"}>3</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/platypus/platypuses_12v.g6"}>24847</a></td>
            <td><a href={"/data/platypus/platypuses_12v_girth4.g6"}>48</a></td>
            <td><a href={"/data/platypus/platypuses_12v_girth5.g6"}>7</a></td>
            <td><a href={"/data/platypus/platypuses_12v_girth6.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_13v_girth4.g6"}>319</a></td>
            <td><a href={"/data/platypus/platypuses_13v_girth5.g6"}>27</a></td>
            <td><a href={"/data/platypus/platypuses_13v_girth6.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_14v_girth4.g6"}>6623</a></td>
            <td><a href={"/data/platypus/platypuses_14v_girth5.g6"}>161</a></td>
            <td><a href={"/data/platypus/platypuses_14v_girth6.g6"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>15</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_15v_girth5.g6"}>934</a></td>
            <td><a href={"/data/platypus/platypuses_15v_girth6.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_16v_girth5.g6"}>7674</a></td>
            <td><a href={"/data/platypus/platypuses_16v_girth6.g6"}>9</a></td>
            <td><a href={"/data/platypus/platypuses_16v_girth7.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>17</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_17v_girth5.g6"}>82240</a></td>
            <td><a href={"/data/platypus/platypuses_17v_girth6.g6"}>53</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_18v_girth6.g6"}>277</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>19</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_19v_girth6.g6"}>1161</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_20v_girth6.g6"}>7659</a></td>
            <td><a href={"/data/platypus/platypuses_20v_girth7.g6"}>5</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>21</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_21v_girth7.g6"}>35</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_22v_girth8.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>23</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_23v_girth8.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/platypus/platypuses_24v_girth8.g6"}>5</a></td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] J. Goedgebeur, A. Neyt and C.T. Zamfirescu, Structural and computational results on platypus graphs, submitted, 2017. Preprint: arXiv:1712.05158</p>
      </div>
      <br/>
    </div>
  );
}

export default Platypus;