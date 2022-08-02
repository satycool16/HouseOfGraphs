import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const MaximalTriangleFree = () => {
  return (
    <div>
      <h3>Maximal triangle-free graphs</h3>
      <p> In order to determine properties of all triangle-free graphs, it often suffices to investigate maximal triangle-free graphs.
        These are triangle-free graphs for which the insertion of any further edges would create a triangle. For triangle-free graphs
        of order n ≥ 3 being maximal triangle-free is equivalent to having diameter 2.</p>
      <p> Maximal triangle-free graphs can also be used to determine the triangle Ramsey numbers R(K3, G) (see <a href={"#ref1"}>[1,2]</a>).
        Various triangle Ramsey graphs are also present in the <a href={"/search"}>searchable database</a> and can be found by searching for
        the keyword 'ramsey'. </p>
      <p> The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.</p>
      <p> All numbers were independently confirmed by <a href={"http://caagt.ugent.be/mtf/"}>MTF <BiLinkExternal/></a> and <a href={"http://caagt.ugent.be/triangleramsey/"}>triangleramsey <BiLinkExternal/></a>.
        The counts for 24 vertices were computed with <a href={"http://caagt.ugent.be/triangleramsey/"}>triangleramsey <BiLinkExternal/></a> in <a href={"#ref3"}>[3]</a>.</p>
      <table className={`${styles.table}`}>
        <thead>
        <tr>
          <th>Vertices</th>
          <th>No. of graphs</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>3</td>
          <td><a href={"/data/mtf/MTF_N3.g6"}>1</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td><a href={"/data/mtf/MTF_N4.g6"}>2</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td><a href={"/data/mtf/MTF_N5.g6"}>3</a></td>
        </tr>
        <tr>
          <td>6</td>
          <td><a href={"/data/mtf/MTF_N6.g6"}>4</a></td>
        </tr>
        <tr>
          <td>7</td>
          <td><a href={"/data/mtf/MTF_N7.g6"}>6</a></td>
        </tr>
        <tr>
          <td>8</td>
          <td><a href={"/data/mtf/MTF_N8.g6"}>10</a></td>
        </tr>
        <tr>
          <td>9</td>
          <td><a href={"/data/mtf/MTF_N9.g6"}>16</a></td>
        </tr>
        <tr>
          <td>10</td>
          <td><a href={"/data/mtf/MTF_N10.g6"}>31</a></td>
        </tr>
        <tr>
          <td>11</td>
          <td><a href={"/data/mtf/MTF_N11.g6"}>61</a></td>
        </tr>
        <tr>
          <td>12</td>
          <td><a href={"/data/mtf/MTF_N12.g6"}>147</a></td>
        </tr>
        <tr>
          <td>13</td>
          <td><a href={"/data/mtf/MTF_N13.g6"}>392</a></td>
        </tr>
        <tr>
          <td>14</td>
          <td><a href={"/data/mtf/MTF_N14.g6"}>1274</a></td>
        </tr>
        <tr>
          <td>15</td>
          <td><a href={"/data/mtf/MTF_N15.g6"}>5036</a></td>
        </tr>
        <tr>
          <td>16</td>
          <td><a href={"/data/mtf/MTF_N16.g6"}>25617</a></td>
        </tr>
        <tr>
          <td>17</td>
          <td><a href={"/data/mtf/MTF_N17.g6"}>164796</a></td>
        </tr>
        <tr>
          <td>18</td>
          <td><a href={"/data/mtf/MTF_N18.g6.gz"}>1337848</a></td>
        </tr>
        <tr>
          <td>19</td>
          <td>13734745</td>
        </tr>
        <tr>
          <td>20</td>
          <td>178587364</td>
        </tr>
        <tr>
          <td>21</td>
          <td>2911304940</td>
        </tr>
        <tr>
          <td>22</td>
          <td>58919069858</td>
        </tr>
        <tr>
          <td>23</td>
          <td>1474647067521</td>
        </tr>
        <tr>
          <td>24</td>
          <td>45599075629687</td>
        </tr>
        </tbody>
      </table>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] S. Brandt, G. Brinkmann and T. Harmuth, All Ramsey numbers r(K3,G) for connected graphs of order 9, Electron. J. Combinatorics, 5, R7, 1998.</p>
        <p id={"ref2"}>[2] G. Brinkmann, J. Goedgebeur and J.C. Schlage-Puchta, Ramsey numbers R(K3,G) for graphs of order 10, Electronic Journal of Combinatorics, 19(4), 2012.</p>
        <p id={"ref3"}>[3] J. Goedgebeur, On minimal triangle-free 6-chromatic graphs, Journal of Graph Theory, 93(1):34-48, 2020.</p>
      </div>
      <br/>
    </div>
  );
}

export default MaximalTriangleFree;