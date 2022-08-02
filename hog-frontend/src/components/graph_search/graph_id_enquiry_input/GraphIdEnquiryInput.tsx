import {GraphIdEnquiry} from "../../../entities/Enquiries";
import React, {useEffect, useState} from "react";
import styles from "../invariant_enquiry_input/InvariantEnquiryInput.module.css";

interface Props {
  onUpdate: (updatedValues: GraphIdEnquiry) => void,
  object: GraphIdEnquiry|undefined
}

const GraphIdEnquiryInput = ({onUpdate, object}: Props) => {
  const [graphIdValue, setGraphIdValue] = useState<number|undefined>(object?.graphId);

  useEffect(() => {
    let values: GraphIdEnquiry = graphIdValue ? {graphId: graphIdValue} : {graphId: -1}
    onUpdate(values);
  }, [graphIdValue])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGraphIdValue(e.target.value ? Number(e.target.value) : undefined);
  }

  return (
    <div className={`row ${styles.inputbox}`}>
      <div className={"col"}>
        <input className={"form-control"} type={"number"} value={graphIdValue} onChange={onInputChange} placeholder={"Graph ID"}/>
      </div>
    </div>
  );
}

export default GraphIdEnquiryInput;