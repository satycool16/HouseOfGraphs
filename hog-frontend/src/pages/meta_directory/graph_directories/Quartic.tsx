import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Quartic = () => {
  return (
    <div>
      <h3>Connected quartic graphs</h3>
      <p>Quartic or 4-regular graphs are graphs where every vertex has degree 4.</p>
      <p>Some of the data available here is a copy (as of 2015-08-12) of the data available
        at <a href={"http://www.mathe2.uni-bayreuth.de/markus/reggraphs.html"}>Markus Meringer's web page <BiLinkExternal/></a>.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip.</p>
      <p>All counts and generated graphs were obtained using the program <a href={"http://www.mathe2.uni-bayreuth.de/markus/reggraphs.html"}>genreg <BiLinkExternal/></a> by 
        Markus Meringer.</p>
      <div>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>Girth ≥ 3</th>
            <th>Girth ≥ 4</th>
            <th>Girth ≥ 5</th>
            <th>Girth ≥ 6</th>
          </tr>
          </thead>
          <tbody>
          <tr><td>4</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>5</td><td><a href={"/data/quartics/05_4_3.g6.gz"}>1</a></td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>6</td><td><a href={"/data/quartics/06_4_3.g6.gz"}>1</a></td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>7</td><td><a href={"/data/quartics/07_4_3.g6.gz"}>2</a></td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>8</td><td><a href={"/data/quartics/08_4_3.g6.gz"}>6</a></td><td><a href={"/data/quartics/08_4_4.g6.gz"}>1</a></td><td>0</td><td>0</td></tr>
          <tr><td>9</td><td><a href={"/data/quartics/09_4_3.g6.gz"}>16</a></td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>10</td><td><a href={"/data/quartics/10_4_3.g6.gz"}>59</a></td><td><a href={"/data/quartics/10_4_4.g6.gz"}>2</a></td><td>0</td><td>0</td></tr>
          <tr><td>11</td><td><a href={"/data/quartics/11_4_3.g6.gz"}>265</a></td><td><a href={"/data/quartics/11_4_4.g6.gz"}>2</a></td><td>0</td><td>0</td></tr>
          <tr><td>12</td><td><a href={"/data/quartics/12_4_3.g6.gz"}>1544</a></td><td><a href={"/data/quartics/12_4_4.g6.gz"}>12</a></td><td>0</td><td>0</td></tr>
          <tr><td>13</td><td><a href={"/data/quartics/13_4_3.g6.gz"}>10778</a></td><td><a href={"/data/quartics/13_4_4.g6.gz"}>31</a></td><td>0</td><td>0</td></tr>
          <tr><td>14</td><td><a href={"/data/quartics/14_4_3.g6.gz"}>88168</a></td><td><a href={"/data/quartics/14_4_4.g6.gz"}>220</a></td><td>0</td><td>0</td></tr>
          <tr><td>15</td><td><a href={"/data/quartics/15_4_3.g6.gz"}>805491</a></td><td><a href={"/data/quartics/15_4_4.g6.gz"}>1606</a></td><td>0</td><td>0</td></tr>
          <tr><td>16</td><td><a href={"/data/quartics/16_4_3.g6.gz"}>8037418</a></td><td><a href={"/data/quartics/16_4_4.g6.gz"}>16828</a></td><td>0</td><td>0</td></tr>
          <tr><td>17</td><td>86221634</td><td><a href={"/data/quartics/17_4_4.g6.gz"}>193900</a></td><td>0</td><td>0</td></tr>
          <tr><td>18</td><td>985870522</td><td><a href={"/data/quartics/18_4_4.g6.gz"}>2452818</a></td><td>0</td><td>0</td></tr>
          <tr><td>19</td><td>11946487647</td><td>32670330</td><td><a href={"/data/quartics/19_4_5.g6.gz"}>1</a></td><td>0</td></tr>
          <tr><td>20</td><td>?</td><td>456028474</td><td><a href={"/data/quartics/20_4_5.g6.gz"}>2</a></td><td>0</td></tr>
          <tr><td>21</td><td>?</td><td>?</td><td><a href={"/data/quartics/21_4_5.g6.gz"}>8</a></td><td>0</td></tr>
          <tr><td>22</td><td>?</td><td>?</td><td><a href={"/data/quartics/22_4_5.g6.gz"}>131</a></td><td>0</td></tr>
          <tr><td>23</td><td>?</td><td>?</td><td><a href={"/data/quartics/23_4_5.g6.gz"}>3917</a></td><td>0</td></tr>
          <tr><td>24</td><td>?</td><td>?</td><td><a href={"/data/quartics/24_4_5.g6.gz"}>123859</a></td><td>0</td></tr>
          <tr><td>25</td><td>?</td><td>?</td><td><a href={"/data/quartics/25_4_5.g6.gz"}>4131991</a></td><td>0</td></tr>
          <tr><td>26</td><td>?</td><td>?</td><td>132160608</td><td><a href={"/data/quartics/26_4_6.g6.gz"}>1</a></td></tr>
          <tr><td>27</td><td>?</td><td>?</td><td>?</td><td>0</td></tr>
          <tr><td>28</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/28_4_6.g6.gz"}>1</a></td></tr>
          <tr><td>29</td><td>?</td><td>?</td><td>?</td><td>0</td></tr>
          <tr><td>30</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/30_4_6.g6.gz"}>4</a></td></tr>
          <tr><td>31</td><td>?</td><td>?</td><td>?</td><td>0</td></tr>
          <tr><td>32</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/32_4_6.g6.gz"}>19</a></td></tr>
          <tr><td>33</td><td>?</td><td>?</td><td>?</td><td>0</td></tr>
          <tr><td>34</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/34_4_6.g6.gz"}>1272</a></td></tr>
          <tr><td>35</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/35_4_6.g6.gz"}>25</a></td></tr>
          <tr><td>36</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/36_4_6.g6.gz"}>494031</a></td></tr>
          <tr><td>37</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/37_4_6.g6.gz"}>13504</a></td></tr>
          <tr><td>38</td><td>?</td><td>?</td><td>?</td><td><a href={"/data/quartics/38_4_6.g6.gz"}>196957034</a></td></tr>
          </tbody>
        </table>
      </div>
      <br/>
    </div>
  );
}

export default Quartic;