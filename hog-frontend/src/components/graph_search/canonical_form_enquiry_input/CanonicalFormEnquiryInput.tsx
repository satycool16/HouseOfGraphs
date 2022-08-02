import {CanonicalFormEnquiry} from "../../../entities/Enquiries";
import React, {useEffect, useState} from "react";
import styles from "../invariant_enquiry_input/InvariantEnquiryInput.module.css";

interface Props {
  onUpdate: (updatedValues: CanonicalFormEnquiry) => void,
  object: CanonicalFormEnquiry|undefined
}

const CanonicalFormEnquiryInput = ({onUpdate, object}: Props) => {
  const [canonicalForm, setCanonicalForm] = useState<string>(object?.canonicalForm || '');

  useEffect(() => {
    let values: CanonicalFormEnquiry = {canonicalForm: canonicalForm}
    onUpdate(values);
  }, [canonicalForm])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCanonicalForm(e.target.value);
  }

  return (
    <div className={`row ${styles.inputbox}`}>
      <div className={"col"}>
        <input className={"form-control"} value={canonicalForm} onChange={onInputChange} placeholder={"Graph6 string"}/>
      </div>
    </div>
  );
}

export default CanonicalFormEnquiryInput;