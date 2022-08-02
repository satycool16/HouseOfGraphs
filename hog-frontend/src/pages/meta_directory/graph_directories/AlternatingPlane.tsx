import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const AlternatingPlane = () => {
  return (
    <div>
      <h3>Alternating plane graphs</h3>
      <p>An alternating plane graph is a simple, connected plane graph, with minimum degree equal to 3 and where each face
        has at least 3 sides, in which no pair of adjacent vertices have the same degree, and no pair of adjacent faces have
        the same number of sides.</p>
      <p>For weak alternating plane graphs, we loosen the definition to also allow graphs with minimum degree equal to 2.</p>
      <div className={`${styles.content}`}>
        <p>The following lists are available:</p>
        <ul>
          <li><a href={"#alter_plane"}>Alternating plane graphs</a></li>
          <li><a href={"#weak_alter_plane"}>Weak alternating plane graphs</a></li>
        </ul>
      </div>
      <p>The graph lists are currently only available in '<a href={"/help#format_pc"}>planar_code</a>' format. The larger files are compressed with gzip.</p>
      <div id={"alter_plane"}>
        <h5>Alternating plane graphs</h5>
        <p>These graphs were constructed by the exhaustive algorithm described in <a href={"#ref1"}>[1]</a> and the program is
          available at <a href={"#ref2"}>[2]</a>. The numbers were independently verified.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Graphs</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td>0</td>
          </tr>
          <tr>
            <td>9</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td>0</td>
          </tr>
          <tr>
            <td>12</td>
            <td>0</td>
          </tr>
          <tr>
            <td>13</td>
            <td>0</td>
          </tr>
          <tr>
            <td>14</td>
            <td>0</td>
          </tr>
          <tr>
            <td>15</td>
            <td>0</td>
          </tr>
          <tr>
            <td>16</td>
            <td>0</td>
          </tr>
          <tr>
            <td>17</td>
            <td><a href={"/data/apg/17.plc"}>2</a></td>
          </tr>
          <tr>
            <td>18</td>
            <td>0</td>
          </tr>
          <tr>
            <td>19</td>
            <td><a href={"/data/apg/19.plc"}>5</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div id={"weak_alter_plane"}>
        <h5>Weak alternating plane graphs</h5>
        <p>Below we list the number of weak alternating plane graphs with degrees 2 and k for 3 ≤ k ≥ 8. These graphs were
          constructed using the technique described in <a href={"#ref1"}>[1]</a> and the programs are available at <a href={"#ref2"}>[2]</a>.</p>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th><i>n</i>\<i>k</i></th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>9</td>
            <td>-</td>
            <td><a href={"/data/apg/04_09.plc"}>1</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>11</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>12</td>
            <td>-</td>
            <td><a href={"/data/apg/04_12.plc"}>1</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>13</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>14</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>15</td>
            <td>-</td>
            <td><a href={"/data/apg/04_15.plc"}>2</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>16</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><a href={"/data/apg/06_16.plc"}>1</a></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>17</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>18</td>
            <td>-</td>
            <td><a href={"/data/apg/04_18.plc"}>4</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>19</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>20</td>
            <td><a href={"/data/apg/03_20.plc"}>1</a></td>
            <td>-</td>
            <td>-</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>21</td>
            <td>-</td>
            <td><a href={"/data/apg/04_21.plc"}>7</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>22</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>23</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>24</td>
            <td>-</td>
            <td><a href={"/data/apg/04_24.plc"}>19</a></td>
            <td>-</td>
            <td><a href={"/data/apg/06_24.plc"}>1</a></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>25</td>
            <td><a href={"/data/apg/03_25.plc"}>6</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>26</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>27</td>
            <td>-</td>
            <td><a href={"/data/apg/04_27.plc"}>43</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>28</td>
            <td>-</td>
            <td>-</td>
            <td><a href={"/data/apg/05_28.plc"}>7</a></td>
            <td><a href={"/data/apg/06_28.plc"}>1</a></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>29</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>30</td>
            <td><a href={"/data/apg/03_30.plc"}>43</a></td>
            <td><a href={"/data/apg/04_30.plc"}>125</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><a href={"/data/apg/08_30.plc"}>1</a></td>
          </tr>
          <tr>
            <td>31</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>32</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><a href={"/data/apg/06_32.plc"}>11</a></td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>33</td>
            <td>-</td>
            <td><a href={"/data/apg/04_33.plc"}>368</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>34</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>35</td>
            <td><a href={"/data/apg/03_35.plc"}>316</a></td>
            <td>-</td>
            <td><a href={"/data/apg/05_35.plc"}>139</a></td>
            <td>-</td>
            <td>-</td>
            <td>0</td>
          </tr>
          <tr>
            <td>36</td>
            <td>-</td>
            <td><a href={"/data/apg/04_36.plc"}>1 264</a></td>
            <td>-</td>
            <td><a href={"/data/apg/06_36.plc"}>10</a></td>
            <td><a href={"/data/apg/07_36.plc"}>1</a></td>
            <td>-</td>
          </tr>
          <tr>
            <td>37</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>38</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>39</td>
            <td>-</td>
            <td><a href={"/data/apg/04_39.plc"}>4 744</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>40</td>
            <td><a href={"/data/apg/03_40.plc"}>2 420</a></td>
            <td>-</td>
            <td>-</td>
            <td><a href={"/data/apg/06_40.plc"}>83</a></td>
            <td>-</td>
            <td><a href={"/data/apg/08_40.plc"}>1</a></td>
          </tr>
          <tr>
            <td>41</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>42</td>
            <td>-</td>
            <td><a href={"/data/apg/04_42.plc.bz2"}>18 723</a></td>
            <td><a href={"/data/apg/05_42.plc"}>4 731</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>43</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>44</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>45</td>
            <td><a href={"/data/apg/03_45.plc.bz2"}>19 648</a></td>
            <td><a href={"/data/apg/04_45.plc.bz2"}>78 657</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td><a href={"/data/apg/08_45.plc"}>1</a></td>
          </tr>
          <tr>
            <td>46</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>47</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>48</td>
            <td>-</td>
            <td><a href={"/data/apg/04_48.plc.bz2"}>338 945</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>49</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>50</td>
            <td><a href={"/data/apg/03_50.plc.bz2"}>165 724</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>51</td>
            <td>-</td>
            <td><a href={"/data/apg/04_51.plc.bz2"}>1 518 480</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>52</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>53</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>54</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>55</td>
            <td><a href={"/data/apg/03_55.plc.bz2"}>1 437 049</a></td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] I. Althöfer, J.K. Haugland, K. Scherer, F. Schneider, N. Van Cleemput, Ars Mathematica Contemporanea, 8(2), 337-363, 2015.</p>
        <p id={"ref2"}>[2] <a href={"https://github.com/nvcleemp/alternating"}>https://github.com/nvcleemp/alternating <BiLinkExternal/></a></p>
      </div>
      <br/>
    </div>
  );
}

export default AlternatingPlane;