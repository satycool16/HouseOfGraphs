import React, {useEffect, useState} from "react";
import {MdContentCopy} from "react-icons/md";
import {Invariant, InvariantCollection} from "../../entities/Invariant";
import {Graph} from "../../entities/Graph";
import InvariantDetailBox from "../invariant_detail_box/InvariantDetailBox";
import SupportedFormatsOverview from "../supported_formats_overview/SupportedFormatsOverview";
import Cite from "../cite/Cite";
import api from "../../services/Api";

interface Props {
  expandFAQ: string
}

const FAQs = ({expandFAQ}: Props) => {
  const [expandFormat, setExpandFormat] = useState("");
  const [invariants, setInvariants] = useState<Invariant[]>([]);
  const nrColumns = 3;

  useEffect(() => {
    if(expandFAQ !== ""){
      if(expandFAQ.startsWith("#format_")){
        setExpandFormat(expandFAQ.substring(expandFAQ.indexOf("_") + 1))
        const anchorEl = document.getElementById("formats");
        const buttonEl = document.querySelectorAll('[data-bs-target="#formats"]')[0];
        if(anchorEl !== null && buttonEl !== null){
          anchorEl.classList.add("show");
          buttonEl.classList.remove("collapsed");
        }
      } else {
        const anchorEl = document.getElementById(expandFAQ.substring(1));
        const buttonEl = document.querySelectorAll('[data-bs-target="#' + expandFAQ.substring(1) + '"]')[0];
        if(anchorEl !== null && buttonEl !== null){
          anchorEl.classList.add("show");
          buttonEl.classList.remove("collapsed");
        }
      }
    }
  }, [expandFAQ])

  useEffect(() => {
    api.get<InvariantCollection>("invariants/")
      .then((response: any) => {
        setInvariants(response.data._embedded.invariantModelList
          .sort((a: Invariant, b: Invariant) => a.entity.invariantName.localeCompare(b.entity.invariantName)));
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={"accordion"} id={"helpAccordion"}>
      <div className={"accordion-item"}>
        <h2 className={"accordion-header"} id={"headingOne"}>
          <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                  data-bs-target={"#formats"} aria-expanded={"false"} aria-controls={"formats"}>
            Which graph formats are supported by House of Graphs?
          </button>
        </h2>
        <div id={"formats"} className={"accordion-collapse collapse"} aria-labelledby={"headingOne"}>
          <div className={`accordion-body`}>
            <SupportedFormatsOverview expandFormat={expandFormat}/>
          </div>
        </div>
      </div>
      <div className={"accordion-item"}>
        <h2 className={"accordion-header"} id={"headingTwo"}>
          <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                  data-bs-target={"#invariants"} aria-expanded={"false"} aria-controls={"invariants"}>
            Which invariants are supported by House of Graphs?
          </button>
        </h2>
        <div id={"invariants"} className={"accordion-collapse collapse"} aria-labelledby={"headingTwo"}>
          <div className={`accordion-body`}>
            Following invariants are currently supported.
            {invariants.length > 0 &&
              <div className={"container"}>
                {Array.from(Array(Math.ceil(invariants.length / nrColumns)).keys()).map(r => (
                  <div className={"row"} key={"row-" + r}>
                    {Array.from(Array(nrColumns).keys()).map(c => {
                        return (
                          <div className={"col"} key={"col-" + c}>
                            <InvariantDetailBox invariant={invariants[r * nrColumns + c]}/>
                          </div>)
                      }
                    )}
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
      <div className={"accordion-item"}>
        <h2 className={"accordion-header"} id={"headingThree"}>
          <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                  data-bs-target={"#register"} aria-expanded={"false"} aria-controls={"register"}>
            What is the advantage of registering?
          </button>
        </h2>
        <div id={"register"} className={"accordion-collapse collapse"} aria-labelledby={"headingThree"}>
          <div className={`accordion-body`}>
            Registered users are able to...
            <ul style={{marginBottom: 0}}>
              <li>upload new graphs</li>
              <li>create embeddings for their graphs</li>
              <li>comment on graphs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={"accordion-item"}>
        <h2 className={"accordion-header"} id={"headingFour"}>
          <button className={"accordion-button collapsed"} type={"button"} data-bs-toggle={"collapse"}
                  data-bs-target={"#cite"} aria-expanded={"false"} aria-controls={"cite"}>
            How should I cite House of Graphs?
          </button>
        </h2>
        <div id={"cite"} className={"accordion-collapse collapse"} aria-labelledby={"headingFour"}>
          <div className={`accordion-body`}>
            Please cite House of Graphs as:
            <Cite/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;