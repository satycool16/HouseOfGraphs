import styles from "../MetaDirectory.module.css";
import {BiLinkExternal} from "react-icons/bi";

const Trees = () => {
  return (
    <div>
      <h3>Trees</h3>
      <p>The data available here is basically a copy (as of 2010-07-13) of the data available
        at <a href={"http://mapleta.maths.uwa.edu.au/~gordon/remote/graphs/index.html#trees"}>Gordon Royle's web page <BiLinkExternal/></a> (c)
        1999 Gordon Royle.</p>
      <p>The graph lists are currently only available in '<a href={"/help#format_g6"}>graph6</a>' format.</p>
      <p>These trees can be generated by using the program <a href={"http://theory.cs.uvic.ca/dis/distribute.pl.cgi?package=FreeTree.c"}>FreeTree <BiLinkExternal/></a> (see <a href={"#ref1"}>[1]</a>).</p>
      <table className={`${styles.table}`}>
        <thead>
        <tr>
          <th>Vertices</th>
          <th>No. of trees</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td><a href={"/data/trees/trees01.g6"}>1</a></td>
        </tr>
        <tr>
          <td>2</td>
          <td><a href={"/data/trees/trees02.g6"}>1</a></td>
        </tr>
        <tr>
          <td>3</td>
          <td><a href={"/data/trees/trees03.g6"}>1</a></td>
        </tr>
        <tr>
          <td>4</td>
          <td><a href={"/data/trees/trees04.g6"}>2</a></td>
        </tr>
        <tr>
          <td>5</td>
          <td><a href={"/data/trees/trees05.g6"}>3</a></td>
        </tr>
        <tr>
          <td>6</td>
          <td><a href={"/data/trees/trees06.g6"}>6</a></td>
        </tr>
        <tr>
          <td>7</td>
          <td><a href={"/data/trees/trees07.g6"}>11</a></td>
        </tr>
        <tr>
          <td>8</td>
          <td><a href={"/data/trees/trees08.g6"}>23</a></td>
        </tr>
        <tr>
          <td>9</td>
          <td><a href={"/data/trees/trees09.g6"}>47</a></td>
        </tr>
        <tr>
          <td>10</td>
          <td><a href={"/data/trees/trees10.g6"}>106</a></td>
        </tr>
        <tr>
          <td>11</td>
          <td><a href={"/data/trees/trees11.g6"}>235</a></td>
        </tr>
        <tr>
          <td>12</td>
          <td><a href={"/data/trees/trees12.g6"}>551</a></td>
        </tr>
        <tr>
          <td>13</td>
          <td><a href={"/data/trees/trees13.g6"}>1301</a></td>
        </tr>
        <tr>
          <td>14</td>
          <td><a href={"/data/trees/trees14.g6"}>3159</a></td>
        </tr>
        <tr>
          <td>15</td>
          <td><a href={"/data/trees/trees15.g6"}>7741</a></td>
        </tr>
        <tr>
          <td>16</td>
          <td><a href={"/data/trees/trees16.g6"}>19320</a></td>
        </tr>
        <tr>
          <td>17</td>
          <td><a href={"/data/trees/trees17.g6"}>48629</a></td>
        </tr>
        <tr>
          <td>18</td>
          <td><a href={"/data/trees/trees18.g6"}>123867</a></td>
        </tr>
        <tr>
          <td>19</td>
          <td><a href={"/data/trees/trees19.g6"}>317955</a></td>
        </tr>
        <tr>
          <td>20</td>
          <td><a href={"/data/trees/trees20.g6"}>823065</a></td>
        </tr>
        </tbody>
      </table>
      <br/>
      <div className={`${styles.references}`}>
        <h5>References</h5>
        <p id={"ref1"}>[1] G. Li and F. Ruskey, The advantages of forward thinking in generating rooted and free trees. pp. 939-940. 10th
          Annual ACM-SIAM Symposium on Discrete Algorithms (SODA), 1999.</p>
      </div>
      <br/>
    </div>
  );
}

export default Trees;