import {
  CanonicalFormEnquiry,
  EnquiryTypes, GraphClassEnquiry, GraphIdEnquiry,
  InterestingInvariantEnquiry,
  InvariantEnquiry,
  InvariantRangeEnquiry,
  SearchConditions, TextEnquiry
} from "../../../entities/Enquiries";
import styles from "./ActiveFilterBox.module.css";
import ActiveFilter from "../active_filter/ActiveFilter";
import {Invariant} from "../../../entities/Invariant";
import React from "react";
import ActiveFilterList from "./ActiveFilterList";

interface Props {
  conds: SearchConditions,
  invariants: Invariant[],
  updateConditions: (s: SearchConditions) => void,
  editConditions: () => void
}

const ActiveFilterBox = ({conds, invariants, updateConditions, editConditions}: Props) => {
  const areEqual = (a: any, b: any) => {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  const removeFilter = (type: EnquiryTypes, condition: any) => {
    let newConditions = {...conds};
    switch (type) {
      case EnquiryTypes.Invariant:
        let invariant = condition as InvariantEnquiry;
        newConditions.invariantEnquiries = newConditions.invariantEnquiries.filter(ie => !areEqual(ie, invariant));
        break;
      case EnquiryTypes.InvariantRange:
        let invariantRange = condition as InvariantRangeEnquiry;
        newConditions.invariantRangeEnquiries = newConditions.invariantRangeEnquiries.filter(ire => !areEqual(ire, invariantRange));
        break;
      case EnquiryTypes.InterestingInvariant:
        let interestingInvariant = condition as InterestingInvariantEnquiry;
        newConditions.interestingInvariantEnquiries = newConditions.interestingInvariantEnquiries.filter(iie => !areEqual(iie, interestingInvariant));
        break;
      case EnquiryTypes.GraphClass:
        let graphClass = condition as GraphClassEnquiry;
        newConditions.graphClassEnquiries = newConditions.graphClassEnquiries.filter(gce => !areEqual(gce, graphClass));
        break;
      case EnquiryTypes.Text:
        let text = condition as TextEnquiry;
        newConditions.textEnquiries = newConditions.textEnquiries.filter(te => !areEqual(te, text));
        break;
      case EnquiryTypes.CanonicalForm:
        newConditions.canonicalFormEnquiry = undefined;
        break;
      case EnquiryTypes.GraphId:
        newConditions.graphIdEnquiry = undefined;
        break;
    }
    updateConditions(newConditions);
  }

  return (
    <div className={`card`}>
      <div className={`card-body`} style={{padding: "5px"}}>
        <p className={`card-title`}>Graphs satisfying the following conditions:</p>
        <ActiveFilterList conds={conds} invariants={invariants} removeFilter={removeFilter}/>
        <div className={`${styles.editBtn}`}>
          <button type={"button"} className={"btn btn-primary"} onClick={editConditions}>Edit conditions</button>
        </div>
      </div>
    </div>
  );
}

export default ActiveFilterBox;