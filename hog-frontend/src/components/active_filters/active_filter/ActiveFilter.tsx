import {
  CanonicalFormEnquiry,
  EnquiryTypes,
  GraphClassEnquiry,
  GraphIdEnquiry,
  InterestingInvariantEnquiry,
  InvariantEnquiry,
  InvariantRangeEnquiry,
  TextEnquiry
} from "../../../entities/Enquiries";
import {Invariant} from "../../../entities/Invariant";
import styles from "./ActiveFilter.module.css";
import {FaTimes} from "react-icons/fa";

interface Props {
  invariants: Invariant[],
  type: EnquiryTypes,
  values: InvariantEnquiry|InvariantRangeEnquiry|InterestingInvariantEnquiry|GraphClassEnquiry|GraphIdEnquiry|CanonicalFormEnquiry|TextEnquiry,
  removeFilter?: ((type: EnquiryTypes, condition: any) => void) | undefined
}

const operatorToString = (op: string): string => {
  let map: {[operator: string]: string} = {
    EQ: "=",
    NE: "!=",
    LT: "<",
    LE: "<=",
    GT: ">",
    GE: ">="
  }
  return map[op];
}

const ActiveFilter = ({invariants, type, values, removeFilter}: Props) => {

  const invariantIdToName = (id: number) => {
    let inv: Invariant|undefined = invariants.find(i => i.entity.invariantId === id);
    return inv === undefined ? "" : inv.entity.invariantName;
  }

  const renderSwitch = () => {
    switch (type){
      case EnquiryTypes.Invariant:
        let invariant = values as InvariantEnquiry;
        return invariantIdToName(invariant.invariantId) + " " + operatorToString(invariant.operator) + " " + invariant.value;
      case EnquiryTypes.InvariantRange:
        let invariantRange = values as InvariantRangeEnquiry;
        return invariantIdToName(invariantRange.invariantId) + " between " + invariantRange.from + " and " + invariantRange.to;
      case EnquiryTypes.InterestingInvariant:
        let interestingInvariant = values as InterestingInvariantEnquiry;
        return "Interesting " + invariantIdToName(interestingInvariant.invariantId);
      case EnquiryTypes.GraphClass:
        let graphClass = values as GraphClassEnquiry;
        return (graphClass.hasClass ? "" : "NOT ") + invariantIdToName(graphClass.invariantId);
      case EnquiryTypes.Text:
        let text = values as TextEnquiry;
        return "Associated with text: '" + text.searchString + "'";
      case EnquiryTypes.CanonicalForm:
        let canonicalForm = values as CanonicalFormEnquiry;
        return "Graph6 string = " + canonicalForm.canonicalForm;
      case EnquiryTypes.GraphId:
        let graphId = values as GraphIdEnquiry;
        return "Graph ID = " + graphId.graphId;
    }
  }

  return (
    <p className={`${styles.filterBox} ${removeFilter ? styles.hover : ""}`}>
      {renderSwitch()}
      {removeFilter && <FaTimes className={`${styles.removeBtn}`} onClick={_ => removeFilter(type, values)}/>}
    </p>
  );
}

export default ActiveFilter;