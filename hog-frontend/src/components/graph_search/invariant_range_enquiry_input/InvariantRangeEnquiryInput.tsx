import React, {useEffect, useState} from "react";
import Select from 'react-select';
import {InvariantRangeEnquiry} from "../../../entities/Enquiries";
import styles from "./InvariantRangeEnquiryInput.module.css";
import { FaTimes } from 'react-icons/fa';

interface Props {
  invariants: { label: string, value: number }[],
  object: InvariantRangeEnquiry,
  onUpdate: (updatedValues: InvariantRangeEnquiry) => void
  onRemoval: (enquiryId: number) => void
}

const InvariantRangeEnquiryInput = ({invariants, object, onUpdate, onRemoval}: Props) => {
  const {id, invariantId, from, to } = object;
  const [selectedInvariant, setSelectedInvariant] = useState<number>(invariantId);
  const [selectedFrom, setSelectedFrom] = useState<number|undefined>(from);
  const [selectedTo, setSelectedTo] = useState<number|undefined>(to);

  useEffect(() => {
    let values: InvariantRangeEnquiry = {id: id, invariantId: selectedInvariant, from: selectedFrom, to: selectedTo}
    onUpdate(values);
  }, [selectedInvariant, selectedFrom, selectedTo, id])

  const onInvariantChange = (selectedOption: any) => {
    setSelectedInvariant(selectedOption.value);
  }

  const onFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFrom(e.target.value ? Number(e.target.value) : undefined);
  }

  const onToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTo(e.target.value ? Number(e.target.value) : undefined);
  }

  return (
    <div className={`row ${styles.inputbox}`}>
      <div className={"col"}>
        <Select
          placeholder={"Select invariant..."}
          defaultValue={invariants.find(i => i.value === selectedInvariant)}
          onChange={onInvariantChange}
          options={invariants}
        />
      </div>
      <div className={`col-1 ${styles.textSeparator}`}>
        <p>between</p>
      </div>
      <div className={"col"}>
        <input className={"form-control"} type={"number"} value={selectedFrom} onChange={onFromChange}/>
      </div>
      <div className={`col-1 ${styles.textSeparator}`}>
        <p>and</p>
      </div>
      <div className={"col"}>
        <input className={"form-control"} type={"number"} value={selectedTo} onChange={onToChange}/>
      </div>
      <div className={`col-1 ${styles.deleteIcon}`}>
        <FaTimes style={{color: "red", fontSize: "25px", cursor: "pointer"}} onClick={_ => onRemoval(id)}/>
      </div>
    </div>
  );
}

export default InvariantRangeEnquiryInput;