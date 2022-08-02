import {Invariant} from "../../entities/Invariant";
import styles from "./InvariantDetailBox.module.css";

interface Props {
  invariant: Invariant
}

const InvariantDetailBox = ({invariant}: Props) => {
  return (
    <div className={`card ${styles.box}`}>
      <div className={"card-body"}>
        <h5 className={`card-title ${styles.cardTitle}`}>{invariant.entity.invariantName}</h5>
        <h6 className={`card-subtitle mb-2 text-muted ${styles.cardSubTitle}`}>Keyword: {invariant.entity.keyword}</h6>
        <p className={`card-text ${styles.cardText}`} dangerouslySetInnerHTML={{__html: invariant.entity.definition}}/>
      </div>
    </div>
  );
}

export default InvariantDetailBox;