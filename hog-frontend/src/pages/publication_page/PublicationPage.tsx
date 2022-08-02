import Cite from "../../components/cite/Cite";

const PublicationPage = () => {
  const pubData = require("./publications.json");

  return (
    <div>
      <h2>Publication list</h2>
      <p>This page gives an overview of the articles citing House of Graphs. If an article is missing, please notify
      Jan Goedgebeur (jan.goedgebeur[at]ugent.be).
      <br/>
      If you would like to cite House of Graphs, please cite it as:
      </p>
      <Cite/>
      <br/>
      {Object.keys(pubData).sort((a: string, b: string) => a.localeCompare(b)).reverse().map(year => (
        <div key={year}>
          <h5>{year}</h5>
          <ul>
            {pubData[year].map((i: string) => <li key={i} dangerouslySetInnerHTML={{__html: i}}/>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PublicationPage;