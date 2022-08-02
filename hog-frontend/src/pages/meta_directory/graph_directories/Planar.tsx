import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Planar = () => {
  return (
    <div>
      <h3>Planar graphs</h3>
      <p>This page contains graphs and counts of various planar graph classes. All of these graphs and numbers were obtained by the
        program <a href={"http://cs.anu.edu.au/~bdm/plantri/"}>plantri <BiLinkExternal/></a>, except the counts for connected planar graphs
        which were obtained by the program <a href={"http://cs.anu.edu.au/~bdm/nauty/"}>geng <BiLinkExternal/></a>.</p>
      <p>The graph lists available in '<a href={"/help#format_pc"}>planar_code</a>' or '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#conn"}>Connected planar graphs</a></li>
          <li><a href={"#triangulation"}>3-connected planar triangulations</a></li>
          <li><a href={"#triangulation_disk"}>3-connected planar triangulations of a disk</a></li>
          <li><a href={"#simple"}>3-connected planar simple graphs (i.e.. convex polytopes)</a></li>
          <li><a href={"#quadrangulation"}>3-connected planar quadrangulations</a></li>
          <li><a href={"#self-dual"}>3-connected planar self-dual graphs</a></li>
        </ul>
      </div>
      <p>For fullerenes, see the <a href={"/meta-directory/fullerenes"}>Fullerenes page</a>.</p>
      <p>Some additional lists of planar graphs can be found on Brendan
        McKay's <a href={"http://cs.anu.edu.au/~bdm/data/planegraphs.html"}>planar graph page <BiLinkExternal/></a>.</p>
      <p>Plantri can generate much more graph classes than the ones listed on this page (e.g. planar graphs with a given minimum degree or with 
        connectivity requirements). For a complete list of the graph classes which can be generated with this program, see 
        the <a href={"http://cs.anu.edu.au/~bdm/plantri/"}>plantri page <BiLinkExternal/></a>.</p>
      <div id={"conn"}>
        <h5>Connected planar graphs</h5>
        <p>The table below lists the number of non-isomorphic connected planar graphs. Note that isomorphism is considered according to 
          the abstract graphs regardless of their embedding. So graphs which can be embedded in multiple ways only appear once in the lists.
          If you are looking for plane graphs which are not isomorphic as embedded graphs, we refer to 
          the <a href={"http://cs.anu.edu.au/~bdm/plantri/"}>plantri-page <BiLinkExternal/></a>.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.1.g6"}>1</a></td>
          </tr>
          <tr>
            <td>2</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.2.g6"}>1</a></td>
          </tr>
          <tr>
            <td>3</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.3.g6"}>2</a></td>
          </tr>
          <tr>
            <td>4</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.4.g6"}>6</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.5.g6"}>20</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.6.g6"}>99</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.7.g6"}>646</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.8.g6"}>5974</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.9.g6"}>71885</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.10.g6.gz"}>1052805</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/planar/planar_graphs/planar_conn.11.g6.gz"}>17449299</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td>313372298</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"triangulation"}>
        <h5>3-connected planar triangulations</h5>
        <p>Note that the dual graph of a 3-connected planar triangulation is a cubic polyhedron (i.e. a cubic 3-connected simple planar graph).</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>4</td>
            <td><a href={"/data/planar/triangulations/triangulations_4.pl"}> 1 </a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/planar/triangulations/triangulations_5.pl"}> 1 </a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/planar/triangulations/triangulations_6.pl"}> 2 </a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/planar/triangulations/triangulations_7.pl"}> 5 </a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/planar/triangulations/triangulations_8.pl"}> 14 </a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/planar/triangulations/triangulations_9.pl"}> 50 </a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/planar/triangulations/triangulations_10.pl"}> 233 </a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/planar/triangulations/triangulations_11.pl"}> 1249 </a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/planar/triangulations/triangulations_12.pl"}> 7595 </a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/planar/triangulations/triangulations_13.pl"}> 49566 </a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/planar/triangulations/triangulations_14.pl"}> 339722 </a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/planar/triangulations/triangulations_15.pl.gz"}> 2406841 </a></td>
          </tr>
          <tr>
            <td>16</td>
            <td> 17490241</td>
          </tr>
          <tr>
            <td>17</td>
            <td> 129664753</td>
          </tr>
          <tr>
            <td>18</td>
            <td> 977526957</td>
          </tr>
          <tr>
            <td>19</td>
            <td> 7475907149</td>
          </tr>
          <tr>
            <td>20</td>
            <td> 57896349553</td>
          </tr>
          <tr>
            <td>21</td>
            <td> 453382272049</td>
          </tr>
          <tr>
            <td>22</td>
            <td> 3585853662949</td>
          </tr>
          <tr>
            <td>23</td>
            <td> 28615703421545</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"triangulation_disk"}>
        <h5>3-connected planar triangulations of a disk</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>4</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_4.pl"}>1</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_5.pl"}>2</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_6.pl"}>7</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_7.pl"}>27</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_8.pl"}>132</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_9.pl"}>773</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_10.pl"}>5017</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_11.pl"}>34861</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_12.pl.gz"}>253676</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/planar/triangulations_disk/triangulations_disk_13.pl.gz"}>1903584</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td>14616442</td>
          </tr>
          <tr>
            <td>15</td>
            <td>114254053</td>
          </tr>
          <tr>
            <td>16</td>
            <td>906266345</td>
          </tr>
          <tr>
            <td>17</td>
            <td>7277665889</td>
          </tr>
          <tr>
            <td>18</td>
            <td>59066524810</td>
          </tr>
          <tr>
            <td>19</td>
            <td>483864411124</td>
          </tr>
          <tr>
            <td>20</td>
            <td>3996427278475</td>
          </tr>
          <tr>
            <td>21</td>
            <td>33250623548406</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"simple"}>
        <h5>3-connected planar simple graphs (i.e. convex polytopes)</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>4</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_4.pl"}>1</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_5.pl"}>2</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_6.pl"}>7</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_7.pl"}>34</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_8.pl"}>257</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_9.pl"}>2606</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_10.pl"}>32300</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_11.pl.gz"}>440564</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/planar/convexpolytopes/convexpolytopes_12.pl.gz"}>6384634</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td>96262938</td>
          </tr>
          <tr>
            <td>14</td>
            <td>1496225352</td>
          </tr>
          <tr>
            <td>15</td>
            <td>23833988129</td>
          </tr>
          <tr>
            <td>16</td>
            <td>387591510244</td>
          </tr>
          <tr>
            <td>17</td>
            <td>6415851530241</td>
          </tr>
          <tr>
            <td>18</td>
            <td>107854282197058</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"quadrangulation"}>
        <h5>3-connected planar quadrangulations</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>8</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_8.pl"}>1</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_9.pl"}>0</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_10.pl"}>1</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_11.pl"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_12.pl"}>3</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_13.pl"}>3</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_14.pl"}>11</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_15.pl"}>18</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_16.pl"}>58</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_17.pl"}>139</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_18.pl"}>451</a></td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_19.pl"}>1326</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_20.pl"}>4461</a></td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_21.pl"}>14554</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_22.pl"}>49957</a></td>
          </tr>
          <tr>
            <td>23</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_23.pl"}>171159</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_24.pl.gz"}>598102</a></td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"/data/planar/quadrangulations/quadrangulations_25.pl.gz"}>2098675</a></td>
          </tr>
          <tr>
            <td>26</td>
            <td>7437910</td>
          </tr>
          <tr>
            <td>27</td>
            <td>26490072</td>
          </tr>
          <tr>
            <td>28</td>
            <td>94944685</td>
          </tr>
          <tr>
            <td>29</td>
            <td>341867921</td>
          </tr>
          <tr>
            <td>30</td>
            <td>1236864842</td>
          </tr>
          <tr>
            <td>31</td>
            <td>4493270976</td>
          </tr>
          <tr>
            <td>32</td>
            <td>16387852863</td>
          </tr>
          <tr>
            <td>33</td>
            <td>59985464681</td>
          </tr>
          <tr>
            <td>34</td>
            <td>220320405895</td>
          </tr>
          <tr>
            <td>35</td>
            <td>811796327750</td>
          </tr>
          <tr>
            <td>36</td>
            <td>3000183106119</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"self-dual"}>
        <h5>3-connected planar self-dual graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>No. of graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>4</td>
            <td><a href={"/data/planar/selfduals/selfdual_4.pl"}>1</a></td>
          </tr>
          <tr>
            <td>5</td>
            <td><a href={"/data/planar/selfduals/selfdual_5.pl"}>1</a></td>
          </tr>
          <tr>
            <td>6</td>
            <td><a href={"/data/planar/selfduals/selfdual_6.pl"}>2</a></td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/planar/selfduals/selfdual_7.pl"}>6</a></td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/planar/selfduals/selfdual_8.pl"}>16</a></td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/planar/selfduals/selfdual_9.pl"}>50</a></td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/planar/selfduals/selfdual_10.pl"}>165</a></td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/planar/selfduals/selfdual_11.pl"}>554</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/planar/selfduals/selfdual_12.pl"}>1908</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/planar/selfduals/selfdual_13.pl"}>6667</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/planar/selfduals/selfdual_14.pl"}>23556</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/planar/selfduals/selfdual_15.pl"}>84048</a></td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/planar/selfduals/selfdual_16.pl"}>302404</a></td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/planar/selfduals/selfdual_17.pl.gz"}>1095536</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/planar/selfduals/selfdual_18.pl.gz"}>3993623</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
    </div>
  );
}

export default Planar;