import React, {useEffect, useState} from "react";
import Select from 'react-select';
import {InvariantEnquiry} from "../../../entities/Enquiries";
import styles from "./InvariantEnquiryInput.module.css";
import { FaTimes } from 'react-icons/fa';

const operatorOptions: {value: string, label: string}[] = [
  {value: "EQ", label: "equal to"},
  {value: "NE", label: "not equal to"},
  {value: "LT", label: "less than"},
  {value: "LE", label: "less than or equal to"},
  {value: "GT", label: "greater than"},
  {value: "GE", label: "greater than or equal to"},
]

interface Props {
  invariants: { label: string, value: number }[],
  object: InvariantEnquiry
  onUpdate: (updatedValues: InvariantEnquiry) => void
  onRemoval: (enquiryId: number) => void
}

const InvariantEnquiryInput = ({invariants, object, onUpdate, onRemoval}: Props) => {
  const {id, invariantId, operator, value} = object;
  const [selectedInvariant, setSelectedInvariant] = useState<number>(invariantId);
  const [selectedOperator, setSelectedOperator] = useState<string>(operator);
  const [selectedInvariantValue, setSelectedInvariantValue] = useState<number|undefined>(value);

  useEffect(() => {
    let values: InvariantEnquiry = {id: id, invariantId: selectedInvariant, operator: selectedOperator, value: selectedInvariantValue}
    onUpdate(values);
  }, [selectedInvariant, selectedOperator, selectedInvariantValue, id])

  const onInvariantChange = (selectedOption: any) => {
    setSelectedInvariant(selectedOption.value);
  }

  const onOperatorChange = (selectedOption: any) => {
    setSelectedOperator(selectedOption.value);
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedInvariantValue(e.target.value ? Number(e.target.value) : undefined);
  }

  return (
    <div className={`row ${styles.inputbox}`}>
      <div className={"col"}>
        <Select
          defaultValue={invariants.find(i => i.value === selectedInvariant)}
          placeholder={"Select invariant..."}
          onChange={onInvariantChange}
          options={invariants}
        />
      </div>
      <div className={"col"}>
        <Select
          onChange={onOperatorChange}
          defaultValue={operatorOptions.find(o => o.value === selectedOperator)}
          options={operatorOptions}
        />
      </div>
      <div className={"col"}>
        <input className={"form-control"} type={"number"} value={selectedInvariantValue} onChange={onInputChange}/>
      </div>
      <div className={`col-1 ${styles.deleteIcon}`}>
        <FaTimes style={{color: "red", fontSize: "25px", cursor: "pointer"}} onClick={_ => onRemoval(id)}/>
      </div>
    </div>
  );
}

export default InvariantEnquiryInput;