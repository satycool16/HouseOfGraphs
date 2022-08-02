import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import InvariantEnquiryInput from "../../components/graph_search/invariant_enquiry_input/InvariantEnquiryInput";
import {Invariant, InvariantCollection} from "../../entities/Invariant";
import {
  InvariantEnquiry, InvariantRangeEnquiry, InterestingInvariantEnquiry,
  GraphClassEnquiry, GraphIdEnquiry, CanonicalFormEnquiry, TextEnquiry, SearchConditions
} from "../../entities/Enquiries";
import styles from "./SearchPage.module.css";
import InvariantRangeEnquiryInput from "../../components/graph_search/invariant_range_enquiry_input/InvariantRangeEnquiryInput";
import InterestingInvariantEnquiryInput
  from "../../components/graph_search/interesting_invariant_enquiry_input/InterestingInvariantEnquiryInput";
import GraphClassEnquiryInput from "../../components/graph_search/graph_class_enquiry_input/GraphClassEnquiryInput";
import GraphIdEnquiryInput from "../../components/graph_search/graph_id_enquiry_input/GraphIdEnquiryInput";
import CanonicalFormEnquiryInput
  from "../../components/graph_search/canonical_form_enquiry_input/CanonicalFormEnquiryInput";
import TextEnquiryInput from "../../components/graph_search/text_enquiry_input/TextEnquiryInput";
import {IoAddCircle} from "react-icons/io5";
import api from "../../services/Api";

const SearchPage = () => {
  const location = useLocation();
  const state = location.state as {conds: SearchConditions};
  let navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [searchConditions, setSearchConditions] = useState<SearchConditions>(state ? state.conds : {
    invariantEnquiries: [],
    invariantRangeEnquiries: [],
    interestingInvariantEnquiries: [],
    graphClassEnquiries: [],
    graphIdEnquiry: undefined,
    canonicalFormEnquiry: undefined,
    textEnquiries: []
  })
  const [invariants, setInvariants] = useState<Invariant[]>([]);
  const [numInvariantOptions, setNumInvariantOptions] = useState<{value: number, label: string}[]>([]);
  const [boolInvariantOptions, setBoolInvariantOptions] = useState<{value: number, label: string}[]>([]);
  const [collapseSpecific, setCollapseSpecific] = useState<boolean>(true);

  window.history.replaceState({}, document.title);

  useEffect(() => {
    api.get<InvariantCollection>("invariants")
      .then((response: any) => {
        setInvariants(response.data._embedded.invariantModelList
          .sort((a: Invariant, b: Invariant) => a.entity.invariantName.localeCompare(b.entity.invariantName)));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    setNumInvariantOptions(invariants.filter(i => i.entity.typeName !== 'b').map(i => {return {value: i.entity.invariantId, label: i.entity.invariantName}}));
    setBoolInvariantOptions(invariants.filter(i => i.entity.typeName === 'b').map(i => {return {value: i.entity.invariantId, label: i.entity.invariantName}}));
    }, [invariants]);

  useEffect(() => {
    if(numInvariantOptions.length > 0){
      let conds = {...searchConditions}
      if(searchConditions.invariantEnquiries.length === 0){
        conds.invariantEnquiries = [{id: 0, invariantId: -1, operator: "EQ", value: undefined}];
      }
      if(searchConditions.invariantRangeEnquiries.length === 0){
          conds.invariantRangeEnquiries = [{id: 0, invariantId: -1, from: undefined, to: undefined}];
      }
      if(searchConditions.textEnquiries.length === 0){
        conds.textEnquiries = [{id: 0, searchString: ''}];
      }
      setSearchConditions(conds);
      setCollapseSpecific(searchConditions.graphIdEnquiry === undefined && searchConditions.canonicalFormEnquiry === undefined)
    }
  }, [numInvariantOptions])

  // UPDATE CONDITIONS
  const updateInvariantEnquiries = (updatedValues: InvariantEnquiry) => {
    let oldVals = [...searchConditions.invariantEnquiries];
    let itemIndex = oldVals.map(v => v.id).indexOf(updatedValues.id);
    oldVals[itemIndex] = updatedValues;
    setSearchConditions({...searchConditions, invariantEnquiries: oldVals});
  }

  const updateInvariantRangeEnquiries = (updatedValues: InvariantRangeEnquiry) => {
    let oldVals = [...searchConditions.invariantRangeEnquiries];
    let itemIndex = oldVals.map(v => v.id).indexOf(updatedValues.id);
    oldVals[itemIndex] = updatedValues;
    setSearchConditions({...searchConditions, invariantRangeEnquiries: oldVals});
  }

  const updateInterestingInvariantEnquiries = (updatedValues: InterestingInvariantEnquiry[]) => {
    setSearchConditions({...searchConditions, interestingInvariantEnquiries: updatedValues})
  }

  const updateTrueGraphClassEnquiries = (updatedValues: GraphClassEnquiry[]) => {
    let oldVals = [...searchConditions.graphClassEnquiries].filter(gce => !gce.hasClass);
    setSearchConditions({...searchConditions, graphClassEnquiries: oldVals.concat(updatedValues)})
  }

  const updateFalseGraphClassEnquiries = (updatedValues: GraphClassEnquiry[]) => {
    let oldVals = [...searchConditions.graphClassEnquiries].filter(gce => gce.hasClass);
    setSearchConditions({...searchConditions, graphClassEnquiries: oldVals.concat(updatedValues)})
  }

  const updateGraphIdEnquiry = (updatedValues: GraphIdEnquiry) => {
    setSearchConditions({...searchConditions, graphIdEnquiry: updatedValues.graphId === -1 ? undefined : updatedValues})
  }

  const updateCanonicalFormEnquiry = (updatedValues: CanonicalFormEnquiry) => {
    setSearchConditions({...searchConditions, canonicalFormEnquiry: updatedValues.canonicalForm.trim() === '' ? undefined: updatedValues})
  }

  const updateTextEnquiries = (updatedValues: TextEnquiry) => {
    let oldVals = [...searchConditions.textEnquiries];
    let itemIndex = oldVals.map(v => v.id).indexOf(updatedValues.id);
    oldVals[itemIndex] = updatedValues;
    setSearchConditions({...searchConditions, textEnquiries: oldVals});
  }

  // ADD FILTERS
  const addInvariantEnquiryInput = () => {
    let oldVals = [...searchConditions.invariantEnquiries];
    let newId = oldVals.length ? Math.max(...oldVals.map(o => o.id)) + 1 : 0;
    oldVals.push({id: newId, invariantId: -1, operator: "EQ", value: undefined})
    setSearchConditions({...searchConditions, invariantEnquiries: oldVals})
  }

  const addInvariantRangeEnquiryInput = () => {
    let oldVals = [...searchConditions.invariantRangeEnquiries];
    let newId = oldVals.length ? Math.max(...oldVals.map(o => o.id)) + 1 : 0;
    oldVals.push({id: newId, invariantId: -1, from: undefined, to: undefined})
    setSearchConditions({...searchConditions, invariantRangeEnquiries: oldVals})
  }

  const addTextEnquiryInput = () => {
    let oldVals = [...searchConditions.textEnquiries];
    let newId = oldVals.length ? Math.max(...oldVals.map(o => o.id)) + 1 : 0;
    oldVals.push({id: newId, searchString: ''})
    setSearchConditions({...searchConditions, textEnquiries: oldVals})
  }

  // REMOVE FILTERS
  const removeInvariantEnquiryInput = (removeId: number) => {
    let oldVals = [...searchConditions.invariantEnquiries].filter(o => o.id !== removeId);
    setSearchConditions({...searchConditions, invariantEnquiries: oldVals})
  }

  const removeInvariantRangeEnquiryInput = (removeId: number) => {
    let oldVals = [...searchConditions.invariantRangeEnquiries].filter(o => o.id !== removeId);
    setSearchConditions({...searchConditions, invariantRangeEnquiries: oldVals})
  }

  const removeTextEnquiry = (removeId: number) => {
    let oldVals = [...searchConditions.textEnquiries].filter(o => o.id !== removeId);
    setSearchConditions({...searchConditions, textEnquiries: oldVals})
  }

  const prepare = (conds: SearchConditions) : SearchConditions => {
    conds.invariantEnquiries = conds.invariantEnquiries.filter(ie => ie.value !== undefined && ie.invariantId !== -1);
    conds.invariantRangeEnquiries = conds.invariantRangeEnquiries.filter(ire => ire.from !== undefined && ire.to !== undefined);
    conds.textEnquiries = conds.textEnquiries.filter(te => te.searchString.trim() !== '');
    return conds;
  }

  const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let conds: SearchConditions = prepare({...searchConditions});
    let searchList = sessionStorage.getItem("search_history");
    if(searchList === null){
      sessionStorage.setItem("search_history", JSON.stringify([{s: conds, t: new Date()}]));
    } else {
      let searches: {s: SearchConditions, t: Date}[] = JSON.parse(searchList);
      searches.push({s: conds, t: new Date()});
      sessionStorage.setItem("search_history", JSON.stringify(searches));
    }
    navigate("/result-graphs", {state: {conds: conds}});
    setLoading(true);
  }

  return (
    <>
      { numInvariantOptions.length !== 0 && boolInvariantOptions.length !== 0 &&
        <div className={"accordion"} id={"searchAccordion"}>
          <div className={"accordion-item"}>
            <h2 className={"accordion-header"} id={"headingOne"}>
                <button className={"accordion-button"} type={"button"} data-bs-toggle={"collapse"}
                        data-bs-target={"#collapseOne"} aria-expanded={"true"} aria-controls={"collapseOne"}>
                    Search graphs
                </button>
            </h2>
            <div id={"collapseOne"} className={"accordion-collapse collapse show"} aria-labelledby={"headingOne"}>
              <div className={`accordion-body ${styles.accordionBody}`}>
                <div className={`card ${styles.enquirycard}`} style={{backgroundColor: "#f0f4f0"}}>
                 <h6 className={"card-title"}>Require a specific (numeric) value for an invariant</h6>
                  <div className={`card-body ${styles.enquirycardbody}`}>
                    {searchConditions.invariantEnquiries.map(ie =>
                      <InvariantEnquiryInput
                        key={ie.id}
                        object={ie}
                        invariants={numInvariantOptions}
                        onUpdate={updateInvariantEnquiries}
                        onRemoval={removeInvariantEnquiryInput}
                      />
                    )}
                    <IoAddCircle style={{fontSize: "30px", color: "#0d6efd", cursor: "pointer"}} onClick={addInvariantEnquiryInput}/>
                  </div>
                </div>
                <div className={`card ${styles.enquirycard}`} style={{backgroundColor: "#f0f4f0"}}>
                  <h6 className={"card-title"}>Require a (numeric) value of an invariant to be in a given range</h6>
                  <div className={`card-body ${styles.enquirycardbody}`}>
                    {searchConditions.invariantRangeEnquiries.map(ire =>
                      <InvariantRangeEnquiryInput
                        key={ire.id}
                        invariants={numInvariantOptions}
                        object={ire}
                        onUpdate={updateInvariantRangeEnquiries}
                        onRemoval={removeInvariantRangeEnquiryInput}
                      />
                    )}
                    <IoAddCircle style={{fontSize: "30px", color: "#0d6efd", cursor: "pointer"}} onClick={addInvariantRangeEnquiryInput}/>
                  </div>
                </div>
                <div className={"row"} style={{margin: "auto"}}>
                    <div className={`col card ${styles.enquirycard} ${styles.leftcard}`} style={{backgroundColor: "#f0f4f0"}}>
                        <h6 className={"card-title"}>Only consider certain classes of graphs</h6>
                        <div className={`card-body ${styles.enquirycardbody}`}>
                          <GraphClassEnquiryInput
                              invariants={boolInvariantOptions}
                              selectedIds={searchConditions.graphClassEnquiries.filter(gce => gce.hasClass).map(gce => gce.invariantId)}
                              onUpdate={updateTrueGraphClassEnquiries}
                              hasClass={true}/>
                        </div>
                        <br/>
                        <h6 className={"card-title"}>Neglect certain classes of graphs</h6>
                        <div className={`card-body ${styles.enquirycardbody}`}>
                            <GraphClassEnquiryInput
                                invariants={boolInvariantOptions}
                                selectedIds={searchConditions.graphClassEnquiries.filter(gce => !gce.hasClass).map(gce => gce.invariantId)}
                                onUpdate={updateFalseGraphClassEnquiries}
                                hasClass={false}/>
                        </div>
                    </div>
                    <div className={`col card ${styles.enquirycard} ${styles.rightcard}`} style={{backgroundColor: "#f0f4f0"}}>
                        <h6 className={"card-title"}>Require certain invariants to be 'of interest'</h6>
                        <p className={"card-subtitle mb-2 text-muted"}>An invariant is marked as interesting
                        when the invariant has a special value (e.g. smallest/greatest possible value for a particular
                        class of graphs)</p>
                        <div className={`card-body ${styles.enquirycardbody}`}>
                            <InterestingInvariantEnquiryInput
                                invariants={numInvariantOptions}
                                selectedIds={searchConditions.interestingInvariantEnquiries.map(iie => iie.invariantId)}
                                onUpdate={updateInterestingInvariantEnquiries}/>
                        </div>
                    </div>
                </div>
                <div className={`card ${styles.enquirycard}`} style={{backgroundColor: "#f0f4f0"}}>
                  <h6 className={"card-title"}>Search for graphs associated with a given text</h6>
                  <p className={"card-subtitle mb-2 text-muted"}>Note: you may use the * wildcard</p>
                  <div className={`card-body ${styles.enquirycardbody}`}>
                    {searchConditions.textEnquiries.map(te =>
                      <TextEnquiryInput
                        key={te.id}
                        object={te}
                        onUpdate={updateTextEnquiries}
                        onRemoval={removeTextEnquiry}
                      />
                    )}
                  <IoAddCircle style={{fontSize: "30px", color: "#0d6efd", cursor: "pointer"}} onClick={addTextEnquiryInput}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"accordion-item"}>
            <h2 className={"accordion-header"} id={"headingTwo"}>
              <button className={`accordion-button ${collapseSpecific ? "collapsed" : ""}`} type={"button"} data-bs-toggle={"collapse"}
                      data-bs-target={"#collapseTwo"} aria-expanded={!collapseSpecific} aria-controls={"collapseTwo"}>
                  Search for a specific graph
              </button>
            </h2>
            <div id={"collapseTwo"}
                 className={`accordion-collapse collapse ${collapseSpecific ? "" : "show"}`}
                 aria-labelledby={"headingTwo"}>
              <div className={`accordion-body ${styles.accordionBody}`}>
                <div className={"row"} style={{margin: "auto"}}>
                    <div className={`col card ${styles.enquirycard} ${styles.leftcard}`} style={{backgroundColor: "#f0f4f0"}}>
                        <h6 className={"card-title"}>Search for a graph with the following HoG graph id</h6>
                        <div className={`card-body ${styles.enquirycardbody}`}>
                            <GraphIdEnquiryInput onUpdate={updateGraphIdEnquiry} object={searchConditions.graphIdEnquiry}/>
                        </div>
                    </div>
                    <div className={`col card ${styles.enquirycard} ${styles.rightcard}`} style={{backgroundColor: "#f0f4f0"}}>
                        <h6 className={"card-title"}>Search for a graph with the following graph6 string</h6>
                        <div className={`card-body ${styles.enquirycardbody}`}>
                            <CanonicalFormEnquiryInput onUpdate={updateCanonicalFormEnquiry} object={searchConditions.canonicalFormEnquiry}/>
                        </div>
                    </div>
                </div>
                <div className={"row"} style={{margin: "auto"}}>
                  <div className={`col-6 card ${styles.enquirycard} ${styles.leftcard}`} style={{backgroundColor: "#f0f4f0"}}>
                      <h6 className={"card-title"}>Search for a graph by drawing it</h6>
                      <div className={`card-body ${styles.enquirycardbody}`}>
                          <button className={`btn btn-primary`} onClick={_ => navigate("/draw-graph")}>Draw Graph</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.buttonflex}`}>
              <button className={`btn btn-primary ${styles.buttons}`} onClick={onSubmit}>Search</button>
          </div>
        </div>
      }
    </>
  );
}

export default SearchPage