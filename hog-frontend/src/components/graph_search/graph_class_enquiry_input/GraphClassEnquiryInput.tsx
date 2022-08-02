import {GraphClassEnquiry} from "../../../entities/Enquiries";
import Select from "react-select";

interface Props {
  invariants: { label: string, value: number }[],
  selectedIds: number[],
  onUpdate: (updatedValues: GraphClassEnquiry[]) => void,
  hasClass: boolean
}

const GraphClassEnquiryInput = ({invariants, selectedIds, onUpdate, hasClass}: Props) => {

  return (
    <Select
      isMulti
      placeholder={"Select classes of graphs..."}
      defaultValue={invariants.filter(i => selectedIds.includes(i.value))}
      options={invariants}
      onChange={values => onUpdate(values.map((v: {label: string, value: number}) => {return {invariantId: v.value, hasClass: hasClass}}))}
    />
  )
}

export default GraphClassEnquiryInput;