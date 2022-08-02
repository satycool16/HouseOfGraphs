import React from 'react';
import NewsFeed from "../../components/news_feed/NewsFeed";
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={`${styles.information}`}>
      <div>
        <h4>Database of interesting graphs</h4>
        <p>Most graph theorists will agree that among the vast number of graphs that exist there are only a few that can
          be considered really <i>interesting</i>.
          <br/> <br/>
          It is the aim of this House of Graphs project to find a workable definition of 'interesting' and provide a
          searchable database of graphs that conform to this definition. We also allow users to add additional graphs
          which they find interesting. In order to avoid abuse, only registered users can add new graphs.
        </p>
        <h4>Lists of graphs and generators</h4>
        <p>
          We would also like to serve as a repository for lists of graphs (which can be downloaded in several formats) and
          graph generators. These lists of graphs and generators can be found in the graph meta-directory.
        </p>
      </div>
      <NewsFeed/>
    </div>
  );
}

export default HomePage