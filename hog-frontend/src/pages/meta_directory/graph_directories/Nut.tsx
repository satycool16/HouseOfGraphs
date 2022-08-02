import styles from "../MetaDirectory.module.css";

const Nut = () => {
  return (
    <div>
      <h3>Nut graphs</h3>
      <p>A <i>nut graph</i> is a graph  of at least 2 vertices whose adjacency matrix has nullity 1 (i.e., rank n-1 where n is
        the order of the graph) and for which the non-trivial kernel vector does not contain a zero.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed
        with gzip. Please refer to <a href={"#ref1"}>[1]</a> for more information on how these nut graphs were obtained.</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#nut"}>Nut graphs</a></li>
          <li><a href={"#chemical_nut"}>Chemical nut graphs</a></li>
          <li><a href={"#nut_among_cubic"}>Nut graphs among cubic polyhedra</a></li>
          <li><a href={"#nut_fullerenes"}>Nut fullerenes</a></li>
          <li><a href={"#regular_nut"}>Regular nut graphs</a></li>
        </ul>
      </div>
      <div id={"nut"}>
        <h5>Nut graphs</h5>
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
            <td>0-6</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td><a href={"/data/nuts/general/Nuts_general_7v.g6.gz"}>3</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td><a href={"/data/nuts/general/Nuts_general_8v.g6.gz"}>13</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>9</td>
            <td><a href={"/data/nuts/general/Nuts_general_9v.g6.gz"}>560</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td><a href={"/data/nuts/general/Nuts_general_10v.g6.gz"}>12551</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/nuts/general/Nuts_general_11v.g6.gz"}>2060490</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_11v_girth4.g6.gz"}>16</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_11v_girth5.g6.gz"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/nuts/general/Nuts_general_12v.g6.gz"}>208147869</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_12v_girth4.g6.gz"}>22</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_12v_girth5.g6.gz"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13</td>
            <td>96477266994</td>
            <td><a href={"/data/nuts/general/Nuts_general_13v_girth4.g6.gz"}>3909</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_13v_girth5.g6.gz"}>20</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_14v_girth4.g6.gz"}>19029</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_14v_girth5.g6.gz"}>35</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>15</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_15v_girth4.g6.gz"}>3641664</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_15v_girth5.g6.gz"}>1027</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_15v_girth6.g6.gz"}>6</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_15v_girth7.g6.gz"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_16v_girth4.g6.gz"}>48040271</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_16v_girth5.g6.gz"}>2415</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_16v_girth6.g6.gz"}>5</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>17</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_17v_girth5.g6.gz"}>88973</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_17v_girth6.g6.gz"}>155</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_17v_girth7.g6.gz"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_18v_girth5.g6.gz"}>341499</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_18v_girth6.g6.gz"}>139</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>19</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_19v_girth5.g6.gz"}>14161780</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_19v_girth6.g6.gz"}>6146</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_19v_girth7.g6.gz"}>37</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_19v_girth8.g6.gz"}>1</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_19v_girth9.g6.gz"}>1</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td>?</td>
            <td>?</td>
            <td><a href={"/data/nuts/general/Nuts_general_20v_girth5.g6.gz"}>82020028</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_20v_girth6.g6.gz"}>6668</a></td>
            <td><a href={"/data/nuts/general/Nuts_general_20v_girth7.g6.gz"}>8</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"chemical_nut"}>
        <h5>Chemical nut graphs</h5>
        <p> The following table contains the counts of chemical nut graphs. A <i>chemical graph</i> is a connected graph with
          maximum degree at most 3. </p>
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
            <td><a href={"/data/nuts/chemical/Nuts_chemical_9v.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_11v.g6"}>8</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_11v_girth4.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_12v.g6"}>9</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_12v_girth4.g6"}>2</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_12v_girth5.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_13v.g6"}>27</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_13v_girth4.g6"}>4</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_13v_girth5.g6"}>2</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_14v.g6"}>23</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_14v_girth4.g6"}>1</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_14v_girth5.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_15v.g6"}>414</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_15v_girth4.g6"}>76</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_15v_girth5.g6"}>25</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_16v.g6"}>389</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_16v_girth4.g6"}>50</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_16v_girth5.g6"}>14</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_16v_girth6.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_17v.g6"}>7941</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_17v_girth4.g6"}>1788</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_17v_girth5.g6"}>424</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_17v_girth6.g6"}>16</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_17v_girth7.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_18v.g6"}>8009</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_18v_girth4.g6"}>1267</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_18v_girth5.g6"}>188</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_18v_girth6.g6"}>6</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_19v.g6"}>67970</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_19v_girth4.g6"}>15251</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_19v_girth5.g6"}>5583</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_19v_girth6.g6"}>308</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_19v_girth7.g6"}>10</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_20v.g6"}>51837</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_20v_girth4.g6"}>6576</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_20v_girth5.g6"}>2764</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_20v_girth6.g6"}>136</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_20v_girth7.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>21</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v.g6.gz"}>1326529</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v_girth4.g6.gz"}>331301</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v_girth5.g6.gz"}>116524</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v_girth6.g6.gz"}>6525</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v_girth7.g6.gz"}>90</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v_girth8.g6.gz"}>6</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_21v_girth9.g6.gz"}>1</a></td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_22v.g6.gz"}>1372438</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_22v_girth4.g6.gz"}>231356</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_22v_girth5.g6.gz"}>73941</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_22v_girth6.g6.gz"}>2964</a></td>
            <td><a href={"/data/nuts/chemical/Nuts_chemical_22v_girth7.g6.gz"}>27</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"nut_among_cubic"}>
        <h5>Nut graphs among cubic polyhedra</h5>
        <p>The following table contains the counts of nut graphs among cubic polyhedra. A <i>polyhedron</i> is a 3-connected simple
          planar graph. For more information on cubic polyhedra, see the <a href={"/meta-directory/planar"}>Planar graphs</a> page.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Cubic polyhedra</th>
            <th>Nut graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>4</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td>5</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td>14</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_12v.g6"}>2</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td>50</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>233</td>
            <td>0</td>
          </tr>
          <tr>
            <td>18</td>
            <td>1249</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_18v.g6"}>285</a></td>
          </tr>
          <tr>
            <td>20</td>
            <td>7595</td>
            <td>0</td>
          </tr>
          <tr>
            <td>22</td>
            <td>49566</td>
            <td>0</td>
          </tr>
          <tr>
            <td>24</td>
            <td>339722</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_24v.g6"}>62043</a></td>
          </tr>
          <tr>
            <td>26</td>
            <td>2406841</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_26v.g6"}>4</a></td>
          </tr>
          <tr>
            <td>28</td>
            <td>17490241</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_28v.g6"}>316</a></td>
          </tr>
          <tr>
            <td>30</td>
            <td>129664753</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_30v.g6.gz"}>16892864</a></td>
          </tr>
          <tr>
            <td>32</td>
            <td>977526957</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_32v.g6.gz"}>3676</a></td>
          </tr>
          <tr>
            <td>34</td>
            <td>7475907149</td>
            <td><a href={"/data/nuts/cubic_polyhedra/Nuts_cubic_polyhedra_34v.g6.gz"}>447790</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"nut_fullerenes"}>
        <h5>Nut fullerenes</h5>
        <p> The following table contains the counts of nut graphs among fullerenes up to 250 vertices. For those orders up to 250 where no count
          is listed, the implication is that there is no nut fullerene of that order. Fullerenes are cubic plane graphs where
          all faces are pentagons or hexagons. For more information on fullerenes, see the <a href={"/meta-directory/fullerenes"}>Fullerene</a> page.
          The fullerene lists are currently only available in '<a href={"/help#format_pc"}>planar_code</a>' format.
        </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Nut fullerenes</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>36</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_36v.pl"}>1</a></td>
          </tr>
          <tr>
            <td>42</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_42v.pl"}>1</a></td>
          </tr>
          <tr>
            <td>44</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_44v.pl"}>1</a></td>
          </tr>
          <tr>
            <td>48</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_48v.pl"}>2</a></td>
          </tr>
          <tr>
            <td>52</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_52v.pl"}>2</a></td>
          </tr>
          <tr>
            <td>60</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_60v.pl"}>6</a></td>
          </tr>
          <tr>
            <td>72</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_72v.pl"}>2</a></td>
          </tr>
          <tr>
            <td>82</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_82v.pl"}>1</a></td>
          </tr>
          <tr>
            <td>84</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_84v.pl"}>8</a></td>
          </tr>
          <tr>
            <td>96</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_96v.pl"}>5</a></td>
          </tr>
          <tr>
            <td>108</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_108v.pl"}>7</a></td>
          </tr>
          <tr>
            <td>120</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_120v.pl"}>5</a></td>
          </tr>
          <tr>
            <td>132</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_132v.pl"}>14</a></td>
          </tr>
          <tr>
            <td>144</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_144v.pl"}>6</a></td>
          </tr>
          <tr>
            <td>156</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_156v.pl"}>11</a></td>
          </tr>
          <tr>
            <td>160</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_160v.pl"}>1</a></td>
          </tr>
          <tr>
            <td>168</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_168v.pl"}>11</a></td>
          </tr>
          <tr>
            <td>180</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_180v.pl"}>16</a></td>
          </tr>
          <tr>
            <td>192</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_192v.pl"}>8</a></td>
          </tr>
          <tr>
            <td>204</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_204v.pl"}>19</a></td>
          </tr>
          <tr>
            <td>216</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_216v.pl"}>9</a></td>
          </tr>
          <tr>
            <td>228</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_228v.pl"}>21</a></td>
          </tr>
          <tr>
            <td>240</td>
            <td><a href={"/data/nuts/fullerenes/Nuts_fullerenes_240v.pl"}>16</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"regular_nut"}>
        <h5>Regular nut graphs</h5>
        <p> The following table contains the counts of all <i>d</i>-regular nut graphs with a specified degree <i>d</i>.
          Please refer to <a href={"#ref2"}>[2]</a> and <a href={"#ref3"}>[3]</a> for more information on how these nut graphs were obtained. </p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Degree 3</th>
            <th>Degree 4</th>
            <th>Degree 5</th>
            <th>Degree 6</th>
            <th>Degree 7</th>
            <th>Degree 8</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>0-7</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td>0</td>
            <td><a href={"/data/nuts/regular/Nuts_4-reg_8v.g6"}>1</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>9</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td>0</td>
            <td><a href={"/data/nuts/regular/Nuts_4-reg_10v.g6"}>12</a></td>
            <td><a href={"/data/nuts/regular/Nuts_5-reg_10v.g6"}>9</a></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/nuts/regular/Nuts_3-reg_12v.g6"}>9</a></td>
            <td><a href={"/data/nuts/regular/Nuts_4-reg_12v.g6"}>269</a></td>
            <td><a href={"/data/nuts/regular/Nuts_5-reg_12v.g6"}>4</a></td>
            <td><a href={"/data/nuts/regular/Nuts_6-reg_12v.g6"}>1964</a></td>
            <td><a href={"/data/nuts/regular/Nuts_7-reg_12v.g6"}>3</a></td>
            <td><a href={"/data/nuts/regular/Nuts_8-reg_12v.g6"}>24</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><a href={"/data/nuts/regular/Nuts_6-reg_13v.g6"}>79</a></td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
            <td><a href={"/data/nuts/regular/Nuts_4-reg_14v.g6"}>15633</a></td>
            <td><a href={"/data/nuts/regular/Nuts_5-reg_14v.g6"}>25</a></td>
            <td><a href={"/data/nuts/regular/Nuts_6-reg_14v.g6"}>1872</a></td>
            <td><a href={"/data/nuts/regular/Nuts_7-reg_14v.g6.gz"}>5168453</a></td>
            <td><a href={"/data/nuts/regular/Nuts_8-reg_14v.g6.gz"}>424088</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td>0</td>
            <td><a href={"/data/nuts/regular/Nuts_4-reg_15v.g6"}>1</a></td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
            <td>?</td>
            <td><a href={"/data/nuts/regular/Nuts_5-reg_16v.g6"}>13530</a></td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>17</td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
          </tr>
          <tr>
            <td>18</td>
            <td><a href={"/data/nuts/regular/Nuts_3-reg_18v.g6"}>5541</a></td>
            <td>?</td>
            <td>665456900</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>19</td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/nuts/regular/Nuts_3-reg_20v.g6"}>5</a></td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
          <tr>
            <td>21</td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
            <td>0</td>
            <td>?</td>
          </tr>
          <tr>
            <td>22</td>
            <td><a href={"/data/nuts/regular/Nuts_3-reg_22v.g6"}>71</a></td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
            <td>?</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] K. Coolsaet, P.W. Fowler and J. Goedgebeur, Generation and properties of of nut graphs, MATCH Commun. Math. Comput. Chem., 80(2):423-444, 2018.</p>
        <p id={"ref2"}>[2] J.B. Gauci, T. Pisanski and I. Sciriha, Existence of regular nut graphs and the Fowler construction, arXiv preprint arXiv:1904.02229, 2019.</p>
        <p id={"ref3"}>[3] P.W. Fowler, J.B. Gauci, J. Goedgebeur, T. Pisanski and I. Sciriha, Existence of regular nut graphs for degree at most 11, Discussiones Mathematicae Graph Theory, 40(2):533-557, 2020.</p>
      </div>
      <br/>
    </div>
  );
}

export default Nut;