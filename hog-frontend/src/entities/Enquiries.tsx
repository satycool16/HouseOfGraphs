export interface InvariantEnquiry {
  id: number,
  invariantId: number,
  operator: string,
  value: number|undefined
}

export interface InvariantRangeEnquiry {
  id: number,
  invariantId: number,
  from: number|undefined,
  to: number|undefined
}

export interface InterestingInvariantEnquiry {
  invariantId: number
}

export interface GraphClassEnquiry {
  invariantId: number,
  hasClass: boolean
}

export interface GraphIdEnquiry {
  graphId: number
}

export interface CanonicalFormEnquiry {
  canonicalForm: string
}

export interface TextEnquiry {
  id: number,
  searchString: string
}

export interface DrawingEnquiry {
  adjacencyMatrix: boolean[][]
}

export interface SearchConditions {
  invariantEnquiries: InvariantEnquiry[],
  invariantRangeEnquiries: InvariantRangeEnquiry[],
  interestingInvariantEnquiries: InterestingInvariantEnquiry[],
  graphClassEnquiries: GraphClassEnquiry[],
  graphIdEnquiry: GraphIdEnquiry | undefined,
  canonicalFormEnquiry: CanonicalFormEnquiry | undefined,
  textEnquiries: TextEnquiry[]
}

export enum EnquiryTypes {
  Invariant,
  InvariantRange,
  InterestingInvariant,
  GraphClass,
  GraphId,
  CanonicalForm,
  Text
}
