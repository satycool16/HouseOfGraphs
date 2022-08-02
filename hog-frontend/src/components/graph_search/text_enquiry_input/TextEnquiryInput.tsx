import {TextEnquiry} from "../../../entities/Enquiries";
import React, {useEffect, useState} from "react";
import styles from "../invariant_enquiry_input/InvariantEnquiryInput.module.css";
import { FaTimes } from 'react-icons/fa';

interface Props {
  object: TextEnquiry,
  onUpdate: (updatedValues: TextEnquiry) => void,
  onRemoval: (enquiryId: number) => void
}

const TextEnquiryInput = ({object, onUpdate, onRemoval}: Props) => {
  const {id, searchString} = object;
  const [text, setText] = useState<string>(searchString);

  useEffect(() => {
    let values: TextEnquiry = {id: id, searchString: text}
    onUpdate(values);
  }, [id, text])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div className={`row ${styles.inputbox}`}>
      <div className={"col"}>
        <input className={"form-control"} value={text} onChange={onInputChange}/>
      </div>
      <div className={`col-1 ${styles.deleteIcon}`}>
        <FaTimes style={{color: "red", fontSize: "25px", cursor: "pointer"}} onClick={_ => onRemoval(id)}/>
      </div>
    </div>
  );
}

export default TextEnquiryInput;