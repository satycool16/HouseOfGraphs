import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const RamseyNumbers = () => {
  return (
    <div>
      <h3>Ramsey numbers</h3>
      <p>The Ramsey number R(G,H) of two graphs G and H is the smallest integer r such that every graph F with at least r vertices
        contains G as a subgraph, or the complement of F contains H as a subgraph. A graph which does not contain G and whose complement
        does not contain H is called a Ramsey graph for (G,H).</p>
      <p>This page contains all Ramsey numbers R(K3,G) for graphs of order 10. More information about how these Ramsey numbers were
        computed can be found in <a href={"#ref1"}>[1]</a>. All Ramsey graphs which were constructed in <a href={"#ref1"}>[1]</a> can be downloaded
        from the <a href={"/search"}>searchable database</a> of graphs by searching for the keywords 'ramsey * order 10'.</p>
      <p>For a good overview of the results and bounds of Ramsey numbers which are currently known, see Radziszowski's dynamic
        survey <a href={"#ref2"}>[2]</a>.</p>
      <p>More lists of Ramsey graphs can be found at:</p>
      <ul>
        <li><a href={"/meta-directory/minimal-ramsey"}>Minimal Ramsey graphs</a></li>
        <li><a href={"http://cs.anu.edu.au/~bdm/data/ramsey.html"}>Ramsey graphs <BiLinkExternal/></a> (Brendan McKay)</li>
        <li><a href={"http://ginger.indstate.edu/ge/RAMSEY/index.html"}>Ramsey constructions <BiLinkExternal/></a> (Geoffrey Exoo)</li>
      </ul>
      <p>
        All graph lists on this page are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.</p>
      <div>
        <h5>Ramsey numbers R(K3,G) for connected graphs of order 10</h5>
        <p> There are 10 graphs with Ramsey number R(K3,G) &gt; 30 for which we were unable to determine their Ramsey number.
          They can be downloaded <a href={"/data/ramsey/general/Ramseynumber_unknown_larger_30.g6.gz"}>here</a>.
          More information about these graphs can be found in <a href={"#ref1"}>[1]</a>.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Ramsey number</th>
            <th>Number of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>19</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_19.g6.gz"}>10101711</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_20.g6.gz"}>504</a></td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_21.g6.gz"}>1602240</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_22.g6.gz"}>3155</a></td>
          </tr>
          <tr>
            <td>23</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_23.g6.gz"}>6960</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td>0</td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_25.g6.gz"}>1384</a></td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_26.g6.gz"}>316</a></td>
          </tr>
          <tr>
            <td>27</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_27.g6.gz"}>92</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_28.g6.gz"}>142</a></td>
          </tr>
          <tr>
            <td>29</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_29.g6.gz"}>30</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_30.g6.gz"}>3</a></td>
          </tr>
          <tr>
            <td>31</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_31_inc.g6.gz"}>16</a> + ?</td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_36_inc.g6.gz"}>8</a> + ?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <h5>Ramsey numbers R(K3,G) for disconnected graphs of order 10</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Ramsey number</th>
            <th>Number of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>10</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_10_disconnected.g6.gz"}>151 </a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_11_disconnected.g6.gz"}>596 </a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_12_disconnected.g6.gz"}>168 </a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_13_disconnected.g6.gz"}>3734</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_14_disconnected.g6.gz"}>447</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_15_disconnected.g6.gz"}>18048</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_16_disconnected.g6.gz"}>2933</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_17_disconnected.g6.gz"}>243856</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_18_disconnected.g6.gz"}>16301 </a></td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_19_disconnected.g6.gz"}>311</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td>0</td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_21_disconnected.g6.gz"}>1869</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_22_disconnected.g6.gz"}>22</a></td>
          </tr>
          <tr>
            <td>23</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_23_disconnected.g6.gz"}>114</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td>0</td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_25_disconnected.g6.gz"}>28</a></td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_26_disconnected.g6.gz"}>5</a></td>
          </tr>
          <tr>
            <td>27</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_27_disconnected.g6.gz"}>3</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_28_disconnected.g6.gz"}>9</a></td>
          </tr>
          <tr>
            <td>31</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_31_disconnected.g6.gz"}>1</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td><a href={"}>/data/ramsey/general/Ramseynumber_exactly_36_disconnected.g6.gz"}>1</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] G. Brinkmann, J. Goedgebeur and J.C. Schlage-Puchta, Ramsey numbers R(K3,G) for graphs of order 10, Electronic Journal of Combinatorics, 19(4), 2012.</p>
        <p id={"ref2"}>[2] S.P. Radziszowski, Small Ramsey Numbers, <a href={"http://www.combinatorics.org/"}>Electronic Journal of Combinatorics <BiLinkExternal/></a>, Dynamic Survey 1, revision 13, 2011.</p>
      </div>
      <br/>
    </div>
  );
}

export default RamseyNumbers;