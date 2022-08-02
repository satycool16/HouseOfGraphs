import {FullInvariant} from "../entities/FullInvariant";

export const displayGraphInvariant = (gi: FullInvariant|undefined) => {
  if(gi === undefined){
    return "";
  }
  switch (gi.invariantStatus) {
    case 0: { // NOT_YET_COMUPTED
      return "Pending...";
    }
    case 1: { // COMPUTING
      return "Computing...";
    }
    case 3: { // FAILED
      return "Computation time out";
    }
    default: { // COMPUTED, GIVEN, UNCHECKED
      if(gi.invariantValue === undefined || gi.invariantValue === null){
        return "undefined";
      }

      if(gi.typeName === "b") {
        return gi.invariantValue ? "Yes" : "No"
      } else {
        return Math.round(Number(gi.invariantValue) * 1000) / 1000;
      }
    }
  }
}