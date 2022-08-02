import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Perihamiltonian = () => {
  return (
    <div>
      <h3>Perihamiltonian graphs</h3>
      <p>A graph G is <i>perihamiltonian</i> if G is non-hamiltonian yet every edge-contracted subgraph of G is hamiltonian
        (see <a href={"#ref1"}>[1]</a> for more details).</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#peri"}>Perihamiltonian graphs</a></li>
          <li><a href={"#peri_plane"}>Perihamiltonian 3-connected plane graphs</a></li>
        </ul>
      </div>
      <div id={"peri"}>
        <h5>Perihamiltonian graphs</h5>
        <p>The following table gives the complete lists of all perihamiltonian graphs with a given connectivity.
          These graphs were generated using the program <a href={"http://cs.anu.edu.au/~bdm/nauty/"}>geng <BiLinkExternal/></a> and were filtered using
          the program <a href={"https://github.com/nvcleemp/perihamiltonian"}>multi_is_perihamiltonian <BiLinkExternal/></a>.
          The graphs are available in '<a href={"/help#format_g6"}>graph6</a>' format. </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th rowSpan={2}>Vertices</th>
            <th colSpan={4}>Connectivity</th>
            <th rowSpan={2}>Total</th>
          </tr>
          <tr>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-4</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/periham/general/periham05_c2.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/periham/general/periham05.g6"}>1</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/periham/general/periham07_c2.g6"}>3</a></td>
            <td><a href={"/data/periham/general/periham07_c3.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/periham/general/periham07.g6"}>4</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/periham/general/periham09_c2.g6"}>32</a></td>
            <td><a href={"/data/periham/general/periham09_c3.g6"}>10</a></td>
            <td><a href={"/data/periham/general/periham09_c4.g6"}>1</a></td>
            <td>0</td>
            <td><a href={"/data/periham/general/periham09.g6"}>43</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/periham/general/periham10_c2.g6"}>1</a></td>
            <td><a href={"/data/periham/general/periham10_c3.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/periham/general/periham10.g6"}>2</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/periham/general/periham11_c2.g6"}>1305</a></td>
            <td><a href={"/data/periham/general/periham11_c3.g6"}>410</a></td>
            <td><a href={"/data/periham/general/periham11_c4.g6"}>14</a></td>
            <td><a href={"/data/periham/general/periham11_c5.g6"}>1</a></td>
            <td><a href={"/data/periham/general/periham11.g6"}>1730</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/periham/general/periham12_c2.g6"}>25</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/periham/general/periham12.g6"}>25</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"peri_plane"}>
        <h5>Perihamiltonian 3-connected plane graphs</h5>
        <p>The following table gives the complete lists of all perihamiltonian 3-connected plane graphs.
          These graphs were generated using the program <a href={"http://cs.anu.edu.au/~bdm/plantri/"}>plantri <BiLinkExternal/></a> and were
          filtered using the program <a href={"https://github.com/nvcleemp/perihamiltonian"}>multi_is_perihamiltonian <BiLinkExternal/></a>.
          The graphs are available in '<a href={"/help#format_pc"}>planar_code</a>' format. </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/periham/polyhedra/periham11.plc"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/periham/polyhedra/periham13.plc"}>5</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/periham/polyhedra/periham15.plc"}>40</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/periham/polyhedra/periham17.plc"}>476</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td>0</td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/periham/polyhedra/periham19.plc"}>6808</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <p id={"ref1"}>[1] I. Fabrici, T. Madaras, M. Timkov&aacute;, N. Van Cleemput, and C.T. Zamfirescu, Non-hamiltonian graphs in which every edge-contracted subgraph is hamiltonian, submitted, 2019.</p>
      </div>
      <br/>
    </div>
  );
}

export default Perihamiltonian;