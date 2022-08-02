import {BiLinkExternal} from "react-icons/bi";

interface GraphListItem {
  name: string,
  url: string,
  credit?: string
}

const MetaDirectory = () => {
  let graphLists: {graphLists: GraphListItem[]} = require("./graph_lists.json");

  return (
    <div>
      <h3>Graph meta-directory</h3>
      <p>
        We would also like to serve as a repository for lists of graphs (which can be downloaded in several formats) and
        graph generators.
        <br/> <br/>
        Currently we provide only a small selection. Some lists are hosted on our website, while others are direct links (<BiLinkExternal/>) to pages
        hosted by other people. In the latter case the name of the host is listed between brackets. Some of the pages of
        interesting graph classes also contain links to generators which can be used to generate these graphs.
        <br/> <br/>
        If you have other complete lists of graphs which you would like to see added to the House of Graphs, don't hesitate to
        contact us at jan.goedgebeur[at]ugent.be.
      </p>
      <ul>
        {graphLists.graphLists.sort((a, b) => a.name.localeCompare(b.name)).map(i =>
          <li key={i.name}>
            <a href={i.credit ? i.url : "meta-directory/" + i.url}>
              {i.name + " "}
              {i.credit && <BiLinkExternal/>}
            </a>
            {i.credit ? " (" + i.credit + ")" : ""}
          </li>
        )}
      </ul>
      <p>
        Various other people and research groups have put up web pages with information on graphs (and other combinatorial objects)
        and lists of graphs that can be downloaded freely. Some of these lists can be found here:
      </p>
      <ul>
        <li><a href={"http://cs.anu.edu.au/~bdm/data/"}>Brendan McKay <BiLinkExternal/></a> </li>
        <li><a href={"http://www.mathe2.uni-bayreuth.de/markus/reggraphs.html"}>Markus Meringer <BiLinkExternal/></a></li>
        <li><a href={"http://school.maths.uwa.edu.au/~gordon/"}>Gordon Royle <BiLinkExternal/></a></li>
        <li><a href={"http://www.maths.gla.ac.uk/~es/"}>Ted Spence <BiLinkExternal/></a></li>
      </ul>
    </div>
  );
}

export default MetaDirectory;