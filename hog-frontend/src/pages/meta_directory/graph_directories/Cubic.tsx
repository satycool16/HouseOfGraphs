import {BiLinkExternal} from "react-icons/bi";
import styles from "../MetaDirectory.module.css";

const Cubic = () => {
  return (
    <div>
      <h3>Connected cubic graphs</h3>
      <p>Some of the data available here is a copy (as of 2010-07-13) of the data available
        at <a href={"http://school.maths.uwa.edu.au/~gordon/remote/cubics/index.html"}>Gordon Royle's web page <BiLinkExternal/></a> (c)
        1996 Gordon Royle. </p>
      <p> The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip. </p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#cubic"}>Cubic graphs</a></li>
          <li><a href={"#cubic_bipartite"}>Cubic bipartite graphs</a></li>
        </ul>
      </div>
      <div id={"cubic"}>
        <h5>Cubic graphs</h5>
        <p> All numbers for minimum girths 3, 4 and 5 were independently confirmed by <a href={"http://www.mathe2.uni-bayreuth.de/markus/reggraphs.html"}>genreg <BiLinkExternal/></a>,
          <a href={"http://caagt.ugent.be/minibaum/"}> minibaum <BiLinkExternal/></a> and <a href={"http://caagt.ugent.be/cubic/"}>snarkhunter <BiLinkExternal/></a> up
          to 30 vertices. The numbers for minimum girths 3, 4 and 5 for 32 vertices were independently confirmed by minibaum and snarkhunter.
          All numbers for minimum girth 3 were also theoretically determined by Robinson and Wormald <a href={"#ref1"}>[1]</a>.</p>
        <p> The numbers for minimum girths 6 and 7 were obtained by snarkhunter. They were independently confirmed by genreg and minibaum up to 34
          vertices for minimum girth 6 and up to 38 vertices for minimum girth 7. The numbers for minimum girth 8 were independently confirmed by
          genreg and minibaum. The graphs with minimum girth 9 were obtained by and McKay et al. <a href={"#ref2"}>[2]</a>. They were independently
          confirmed by Brinkmann et al. <a href={"#ref3"}>[3]</a> for order 58.</p>
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
            <td>4</td>
            <td><a href={"/data/cubics/cub04.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/cubics/cub06.g6"}>2</a></td>
            <td><a href={"/data/cubics/Generated_graphs.06.04.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/cubics/cub08.g6"}>5</a></td>
            <td><a href={"/data/cubics/Generated_graphs.08.04.g6"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/cubics/cub10.g6"}>19</a></td>
            <td><a href={"/data/cubics/Generated_graphs.10.04.g6"}>6</a></td>
            <td><a href={"/data/cubics/cub10-gir5.g6.gz"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/cubics/cub12.g6"}>85</a></td>
            <td><a href={"/data/cubics/Generated_graphs.12.04.g6"}>22</a></td>
            <td><a href={"/data/cubics/cub12-gir5.g6.gz"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/cubics/cub14.g6"}>509</a></td>
            <td><a href={"/data/cubics/Generated_graphs.14.04.g6"}>110</a></td>
            <td><a href={"/data/cubics/cub14-gir5.g6.gz"}>9</a></td>
            <td><a href={"/data/cubics/cub14-gir6.g6.gz"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/cubics/cub16.g6"}>4060</a></td>
            <td><a href={"/data/cubics/Generated_graphs.16.04.g6"}>792</a></td>
            <td><a href={"/data/cubics/cub16-gir5.g6.gz"}>49</a></td>
            <td><a href={"/data/cubics/cub16-gir6.g6.gz"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/cubics/cub18.g6"}>41301</a></td>
            <td><a href={"/data/cubics/Generated_graphs.18.04.g6"}>7805</a></td>
            <td><a href={"/data/cubics/cub18-gir5.g6.gz"}>455</a></td>
            <td><a href={"/data/cubics/cub18-gir6.g6.gz"}>5</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/cubics/cub20.g6"}>510489</a></td>
            <td><a href={"/data/cubics/Generated_graphs.20.04.g6"}>97546</a></td>
            <td><a href={"/data/cubics/cub20-gir5.g6.gz"}>5783</a></td>
            <td><a href={"/data/cubics/cub20-gir6.g6.gz"}>32</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/cubics/cub22.g6.gz"}>7319447</a></td>
            <td><a href={"/data/cubics/Generated_graphs.22.04.g6.gz"}>1435720</a></td>
            <td><a href={"/data/cubics/cub22-gir5.g6.gz"}>90938</a></td>
            <td><a href={"/data/cubics/cub22-gir6.g6.gz"}>385</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/cubics/Generated_graphs.24.03.g6.gz"}>117940535</a></td>
            <td><a href={"/data/cubics/Generated_graphs.24.04.g6.gz"}>23780814</a></td>
            <td><a href={"/data/cubics/cub24-gir5.g6.gz"}>1620479</a></td>
            <td><a href={"/data/cubics/cub24-gir6.g6.gz"}>7574</a></td>
            <td><a href={"/data/cubics/cub24-gir7.g6.gz"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td>2094480864</td>
            <td>432757568</td>
            <td><a href={"/data/cubics/Generated_graphs.26.05.g6.gz"}>31478584</a></td>
            <td><a href={"/data/cubics/Generated_graphs.26.06.g6.gz"}>181227</a></td>
            <td><a href={"/data/cubics/cub26-gir7.g6.gz"}>3</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>28</td>
            <td>40497138011</td>
            <td>8542471494</td>
            <td>656783890</td>
            <td><a href={"/data/cubics/Generated_graphs.28.06.g6.gz"}>4624501</a></td>
            <td><a href={"/data/cubics/cub28-gir7.g6.gz"}>21</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>30</td>
            <td>845480228069</td>
            <td>181492137812</td>
            <td>14621871204</td>
            <td>122090544</td>
            <td><a href={"/data/cubics/cub30-gir7.g6.gz"}>546</a></td>
            <td><a href={"/data/cubics/Generated_graphs.30.08.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>32</td>
            <td>18941522184590</td>
            <td>4127077143862</td>
            <td>345975648562</td>
            <td>3328929954</td>
            <td><a href={"/data/cubics/Generated_graphs.32.07.g6.gz"}>30368</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>34</td>
            <td>453090162062723</td>
            <td>?</td>
            <td>?</td>
            <td>93990692595</td>
            <td><a href={"/data/cubics/Generated_graphs.34.07.g6.gz"}>1782840</a></td>
            <td><a href={"/data/cubics/Generated_graphs.34.08.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>36</td>
            <td>11523392072541432</td>
            <td>?</td>
            <td>?</td>
            <td>2754222605376</td>
            <td><a href={"/data/cubics/Generated_graphs.36.07.g6.gz"}>95079083</a></td>
            <td><a href={"/data/cubics/Generated_graphs.36.08.g6"}>3</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>38</td>
            <td>310467244165539782</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>4686063120</td>
            <td><a href={"/data/cubics/Generated_graphs.38.08.g6"}>13</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>40</td>
            <td>8832736318937756165</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>220323447962</td>
            <td><a href={"/data/cubics/Generated_graphs.40.08.g6"}>155</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>42</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>10090653722861</td>
            <td><a href={"/data/cubics/42.3.8.graph6.gz"}>4337</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>44</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/44.3.8.graph6.gz"}>266362</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>46</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/46.3.8.graph6.gz"}>20807688</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>48</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          <tr>
            <td>50</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          <tr>
            <td>52</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          <tr>
            <td>54</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          <tr>
            <td>56</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>0</td>
          </tr>
          <tr>
            <td>58</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/cub58g9.g6"}>18</a></td>
          </tr>
          <tr>
            <td>60</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/cub60g9.g6"}>474</a></td>
          </tr>
          <tr>
            <td>62</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/cub62g9.g6.gz"}>27169</a></td>
          </tr>
          <tr>
            <td>64</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/cub64g9.g6.gz"}>1408813</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"cubic_bipartite"}>
        <h5>Cubic bipartite graphs</h5>
        <p> A graph G is bipartite if it is possible to partition the set of vertices of G into two subsets A and B such that every edge
          of G joins a vertex of A to a vertex of B. The graphs listed in the following table were generated
          using <a href={"http://caagt.ugent.be/minibaum/"}>minibaum <BiLinkExternal/></a>. Most of these counts were determined
          in <a href={"#ref4"}>[4]</a>. </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 6</th>
            <th>Girth ≥ 8</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>6</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.6b.04.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.8b.04.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.10b.04.g6"}>2</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.12b.04.g6"}>5</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.14b.04.g6"}>13</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.14b.06.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.16b.04.g6"}>38</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.16b.06.g6"}>1</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.18b.04.g6"}>149</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.18b.06.g6"}>3</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.20b.04.g6"}>703</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.20b.06.g6"}>10</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.22b.04.g6"}>4132</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.22b.06.g6"}>28</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.24b.04.g6.gz"}>29579</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.24b.06.g6"}>162</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>26</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.26b.04.g6.gz"}>245627</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.26b.06.g6"}>1201</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>28</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.28b.04.g6.gz"}>2291589</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.28b.06.g6"}>11415</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.30b.04.g6.gz"}>23466857</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.30b.06.g6.gz"}>125571</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.30b.08.g6"}>1</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td>259974248</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.32b.06.g6.gz"}>1514489</a></td>
            <td>0</td>
          </tr>
          <tr>
            <td>34</td>
            <td>3087698618</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.34b.06.g6.gz"}>19503476</a></td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.34b.08.g6"}>1</a></td>
          </tr>
          <tr>
            <td>36</td>
            <td>39075020582</td>
            <td>265448847</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.36b.08.g6"}>3</a></td>
          </tr>
          <tr>
            <td>38</td>
            <td>524492748500</td>
            <td>3799509760</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.38b.08.g6"}>10</a></td>
          </tr>
          <tr>
            <td>40</td>
            <td>?</td>
            <td>57039155060</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.40b.08.g6"}>101</a></td>
          </tr>
          <tr>
            <td>42</td>
            <td>?</td>
            <td>896293917129</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.42b.08.g6"}>2510</a></td>
          </tr>
          <tr>
            <td>44</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.44b.08.g6.gz"}>79605</a></td>
          </tr>
          <tr>
            <td>46</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.46b.08.g6.gz"}>2607595</a></td>
          </tr>
          <tr>
            <td>48</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/cubics/bipartite/Generated_graphs.48b.08.g6.gz"}>81716416</a></td>
          </tr>
          <tr>
            <td>50</td>
            <td>?</td>
            <td>?</td>
            <td>2472710752</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <p id={"ref1"}>[1] R. W. Robinson and N. C. Wormald, Numbers of cubic graphs. J. Graph Theory, 7:463-467, 1983.</p>
        <p id={"ref2"}>[2] B. D. McKay, W. Myrvold and J. Nadon, Fast backtracking principles applied to find new cages, 9th Annual ACM-SIAM Symposium on Discrete Algorithms, 188-191, 1998.</p>
        <p id={"ref3"}>[3] G. Brinkmann, B. D. McKay and C. Saager, The smallest cubic graphs of girth 9, Combinatorics, Probability and Computing, 5:1-13, 1995.</p>
        <p id={"ref4"}>[4] J. Goedgebeur, A counterexample to the pseudo 2-factor isomorphic graph conjecture, Discrete Applied Mathematics, 193:57-60, 2015.</p>
      </div>
      <br/>
    </div>
  );
}

export default Cubic;