import styles from './NewsFeed.module.css';
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BiNews } from 'react-icons/bi';
import {useNavigate} from "react-router-dom";

interface NewsItem {
  date: string,
  text: string,
  url?: string
}

interface News {
  news: NewsItem[]
}

const NewsFeed = () => {
  let navigate = useNavigate();
  const news: News = require("./news.json");

  return (
    <div className={"card"} style={{minWidth: "350px"}}>
      <h5 className={"card-header"} style={{display: "flex", alignItems: "center"}}>
        News
        <BiNews style={{marginLeft: "auto"}}/>
      </h5>
      <div className={"card-body"} style={{padding: "0"}}>
        <div className={`${styles.scroll}`}>
          {news.news.map((item, i) => (
            <div key={"newsItem-" + i}>
              <div className={`${styles.newsItem}`} >
                <p className={`${styles.date}`}>{item.date}</p>
                  <p className={`${styles.text}`}>{item.text}</p>
                <div className={`${styles.redirect}`}>
                  {item.url && <a href={item.url}> <BsArrowRightCircleFill style={{fontSize: "20px", cursor: "pointer"}}/></a>}
                </div>
              </div>
              {i < news.news.length - 1 && <hr className={`${styles.separator}`}/>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;