import styles from "./ActiveFilterBox.module.css";
import ActiveFilter from "../active_filter/ActiveFilter";
import {EnquiryTypes, SearchConditions} from "../../../entities/Enquiries";
import React from "react";
import {Invariant} from "../../../entities/Invariant";

interface Props {
  conds: SearchConditions,
  invariants: Invariant[],
  removeFilter: ((type: EnquiryTypes, condition: any) => void) | undefined
}

const ActiveFilterList = ({conds, invariants, removeFilter}: Props) => {
  return (
    <div className={`${styles.filterList}`}>
      {conds.invariantEnquiries.map((ie, i) =>
        <ActiveFilter key={"ie-" + i} type={EnquiryTypes.Invariant} values={ie} invariants={invariants} removeFilter={removeFilter}/>)
      }
      {conds.invariantRangeEnquiries.map((ire, i) =>
        <ActiveFilter key={"ire-" + i} type={EnquiryTypes.InvariantRange} values={ire} invariants={invariants} removeFilter={removeFilter}/>)
      }
      {conds.interestingInvariantEnquiries.map((iie, i) =>
        <ActiveFilter key={"iie-" + i} type={EnquiryTypes.InterestingInvariant} values={iie} invariants={invariants} removeFilter={removeFilter}/>)
      }
      {conds.graphClassEnquiries.map((gce, i) =>
        <ActiveFilter key={"gce-" + i} type={EnquiryTypes.GraphClass} values={gce} invariants={invariants} removeFilter={removeFilter}/>)
      }
      {conds.textEnquiries.map((te, i) =>
        <ActiveFilter key={"te-" + i} type={EnquiryTypes.Text} values={te} invariants={invariants} removeFilter={removeFilter}/>)
      }
      {conds.graphIdEnquiry !== undefined &&
          <ActiveFilter type={EnquiryTypes.GraphId} values={conds.graphIdEnquiry} invariants={invariants} removeFilter={removeFilter}/>
      }
      {conds.canonicalFormEnquiry !== undefined &&
          <ActiveFilter type={EnquiryTypes.CanonicalForm} values={conds.canonicalFormEnquiry} invariants={invariants} removeFilter={removeFilter}/>
      }
    </div>
  );
}

export default ActiveFilterList;