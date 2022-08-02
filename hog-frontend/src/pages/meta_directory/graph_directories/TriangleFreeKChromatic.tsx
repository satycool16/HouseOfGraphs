import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const TriangleFreeKChromatic = () => {
  return (
    <div>
      <h3>Triangle-free k-chromatic graphs</h3>
      <p>A graph is <i>k-chromatic</i> if its chromatic number is equal to k. A <i>k-vertex-critical</i> graph is a k-chromatic graph 
        for which every proper induced subgraph is (k-1)-colourable and a <i>k-critical</i> graph is a k-chromatic graph for which every 
        proper subgraph is (k-1)-colourable. Finally, a <i>maximal</i> triangle-free graph (in short, an <i>mtf graph</i>, see 
        also <a href={"/meta-directory/maximal-triangle-free"}>here</a>) is a triangle-free graph such that the insertion of any new edge forms a triangle.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format. The larger files are compressed with gzip. This page lists the
        counts of the smallest triangle-free 4- and 5-chromatic graphs. Please refer to <a href={"#ref1"}>[1]</a> for more information on 
        how these graphs were obtained.</p>
      <div>
        <h5>Triangle-free 4-chromatic graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>All</th>
            <th>Vertex-critical</th>
            <th>Critial</th>
            <th>Mtf</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>11</td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graph_11v_4chrom.g6"}>1</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graph_11v_4chrom.g6"}>1</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graph_11v_4chrom.g6"}>1</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graph_11v_4chrom.g6"}>1</a></td>
          </tr>
          <tr>
            <td>12</td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_12v_4chrom.g6"}>24</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_12v_4chrom-vertexcrit.g6"}>4</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_12v_4chrom-crit.g6"}>2</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graphs_12v_4chrom.g6"}>5</a></td>
          </tr>
          <tr>
            <td>13</td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_13v_4chrom.g6"}>1110</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_13v_4chrom-vertexcrit.g6"}>31</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_13v_4chrom-crit.g6"}>13</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graphs_13v_4chrom.g6"}>25</a></td>
          </tr>
          <tr>
            <td>14</td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_14v_4chrom.g6"}>76261</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_14v_4chrom-vertexcrit.g6"}>1080</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_14v_4chrom-crit.g6"}>208</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graphs_14v_4chrom.g6"}>151</a></td>
          </tr>
          <tr>
            <td>15</td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_15v_4chrom.g6.gz"}>6461386</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_15v_4chrom-vertexcrit.g6"}>49015</a></td>
            <td><a href={"/data/kchromatic/4chromatic/tf_graphs_15v_4chrom-crit.g6"}>5039</a></td>
            <td><a href={"/data/kchromatic/4chromatic/mtf_graphs_15v_4chrom.g6"}>1019</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <h5>Triangle-free 5-chromatic graphs</h5>
        <table className={`${styles.table}`}>
          <thead>
          <tr>
            <th>Vertices</th>
            <th>All</th>
            <th>Vertex-critical</th>
            <th>Critial</th>
            <th>Mtf</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>22</td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_22v_5chrom.g6"}>80</a></td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_22v_5chrom-vertexcrit.g6"}>80</a></td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_22v_5chrom-crit.g6"}>21</a></td>
            <td><a href={"/data/kchromatic/5chromatic/mtf_graphs_22v_5chrom.g6"}>15</a></td>
          </tr>
          <tr>
            <td>23</td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_23v_5chrom.g6.gz"}>315457</a></td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_23v_5chrom-vertexcrit.g6"}>154899</a></td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_23v_5chrom-crit.g6"}>4192</a></td>
            <td><a href={"/data/kchromatic/5chromatic/mtf_graphs_23v_5chrom.g6"}>2729</a></td>
          </tr>
          <tr>
            <td>24</td>
            <td>1030077762</td>
            <td>212827777</td>
            <td><a href={"/data/kchromatic/5chromatic/tf_graphs_24v_5chrom-crit.g6.gz"}>625812</a></td>
            <td><a href={"/data/kchromatic/5chromatic/mtf_graphs_24v_5chrom.g6.gz"}>369360</a></td>
          </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] J. Goedgebeur, On minimal triangle-free 6-chromatic graphs, Journal of Graph Theory, 93(1):34-48, 2020.</p>
      </div>
      <br/>
    </div>
  );
}

export default TriangleFreeKChromatic;