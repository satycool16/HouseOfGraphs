import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const MinimalRamsey = () => {
  return (
    <div>
      <h3>Minimal Ramsey graphs</h3>
      <p>A Ramsey(s,t;n,e)-graph is a graph with n vertices, e edges, no clique of size s and no independent set of size t.
        A Ramsey(s,t)-graph is a Ramsey(s,t,n)-graph for some n and e. Let e(s,t,n) denote the minimum number of edges in any graph 
        on n vertices without cliques of size s and no independent sets of size t. A Ramsey(s,t;n,e)-graph is minimal if e = e(s,t,n).</p>
      <p>Below we list all minimal Ramsey(3,k,n)-graphs for various k and n. See <a href={"#ref1"}>[1]</a> for more information about how 
        these graphs were obtained. Most of these minimal Ramsey graphs are also present in the <a href={"/search"}>searchable database</a> and
        can be found by searching for the keywords 'minimal ramseygraph'.</p>
      <p>For a good overview of the results and bounds of Ramsey numbers which are currently known, see Radziszowski's dynamic survey <a href={"#ref2"}>[2]</a>.</p>
      <p>For a list of all Ramsey(3,≤6)-graphs, see <a href={"http://cs.anu.edu.au/~bdm/data/ramsey.html"}>Brendan McKay's page <BiLinkExternal/></a> on Ramsey graphs.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.</p>
      <div>
        <h5>Minimal Ramsey(3,7)-graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>16</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_16_e20.g6"}>2</a> (20 edges)</td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_17_e25.g6"}>2</a> (25 edges)</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_18_e30.g6"}>1</a> (30 edges)</td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_19_e37.g6"}>11</a> (37 edges)</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_20_e44.g6"}>15</a> (44 edges)</td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_21_e51.g6"}>4</a> (51 edges)</td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_7_22_e60.g6"}>1</a> (60 edges)</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <h5>Minimal Ramsey(3,8)-graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>19</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_19_e25.g6"}>2</a> (25 edges)</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_20_e30.g6"}>3</a> (30 edges)</td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_21_e35.g6"}>1</a> (35 edges)</td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_22_e42.g6"}>21</a> (42 edges)</td>
          </tr>
          <tr>
            <td>23</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_23_e49.g6"}>102</a> (49 edges)</td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_24_e56.g6"}>51</a> (56 edges)</td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_25_e65.g6"}>396</a> (65 edges)</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_26_e73.g6"}>62</a> (73 edges)</td>
          </tr>
          <tr>
            <td>27</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_8_27_e85.g6"}>4</a> (85 edges)</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <h5>Minimal Ramsey(3,9)-graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>23</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_23_e35.g6"}>4</a> (35 edges)</td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_24_e40.g6"}>2</a> (40 edges)</td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_25_e46.g6"}>1</a> (46 edges)</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_26_e52.g6"}>1</a> (52 edges)</td>
          </tr>
          <tr>
            <td>27</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_27_e61.g6"}>700</a> (61 edges)</td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_28_e68.g6"}>126</a> (68 edges)</td>
          </tr>
          <tr>
            <td>29</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_29_e77.g6"}>1342</a> (77 edges)</td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_30_e86.g6"}>1800</a> (86 edges)</td>
          </tr>
          <tr>
            <td>31</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_31_e95.g6"}>560</a> (95 edges)</td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_32_e104.g6"}>39</a> (104 edges)</td>
          </tr>
          <tr>
            <td>33</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_33_e118_some.g6"}>5</a> (118 edges)</td>
          </tr>
          <tr>
            <td>34</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_34_e129_some.g6"}>1</a> (129 edges)</td>
          </tr>
          <tr>
            <td>35</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_9_35_e140.g6"}>1</a> (140 edges)</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <h5>Minimal Ramsey(3,10)-graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>29</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_10_29_e58.g6"}>5</a> (58 edges)</td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_10_30_e66.g6"}>5084</a> (66 edges)</td>
          </tr>
          <tr>
            <td>31</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_10_31_e73.g6"}>2657</a> (73 edges)</td>
          </tr>
          <tr>
            <td>32</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_10_32_e81.g6.gz"}>6592</a> (81 edges)</td>
          </tr>
          <tr>
            <td>33</td>
            <td><a href={"/data/ramsey/minramsey/Ramseygraphs_3_10_33_e90.g6.gz"}>57099</a> (90 edges)</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <p id={"ref1"}>[1] J. Goedgebeur and S.P. Radziszowski, New computational upper bounds for Ramsey numbers R(3, k), Electronic Journal of Combinatorics, 20(1), 2013.</p>
        <p id={"ref2"}>[2] S.P. Radziszowski, Small Ramsey Numbers, <a href={"http://www.combinatorics.org/"}>Electronic Journal of Combinatorics <BiLinkExternal/></a>, Dynamic Survey 1, revision 13, 2011.</p>
      </div>
      <br/>
    </div>
  );
}

export default MinimalRamsey;