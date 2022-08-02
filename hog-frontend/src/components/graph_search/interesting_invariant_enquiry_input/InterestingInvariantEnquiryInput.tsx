import {InterestingInvariantEnquiry} from "../../../entities/Enquiries";
import Select from "react-select";

interface Props {
  invariants: { label: string, value: number }[],
  selectedIds: number[]
  onUpdate: (updatedValues: InterestingInvariantEnquiry[]) => void
}

const InterestingInvariantEnquiryInput = ({invariants, selectedIds, onUpdate}: Props) => {

  return (
    <Select
      isMulti
      placeholder={"Select invariants 'of interest'..."}
      defaultValue={invariants.filter(i => selectedIds.includes(i.value))}
      options={invariants}
      onChange={values => onUpdate(values.map((v: {label: string, value: number}) => {return {invariantId: v.value}}))}
    />
  )
}

export default InterestingInvariantEnquiryInput;