import FAQs from "../../components/faqs/FAQs";
import React, {useEffect, useState} from "react";
import styles from "./HelpPage.module.css";
import {BiLinkExternal} from "react-icons/bi";

const HelpPage = () => {
  const [expandFAQ, setExpandFAQ] = useState<string>("");

  useEffect(() => {
    if (window.location.hash !== null && window.location.hash !== "") {
      let anchor = window.location.hash;
      if(anchor !== "#contact"){
        setExpandFAQ(anchor);
      }
    }
  }, []);

  return (
    <div className={`${styles.helppage}`}>
      <h2>Help</h2>
      <h4>Frequently Asked Questions</h4>
      <FAQs expandFAQ={expandFAQ}/>
      <h4>Links</h4>
      <p>Some links to useful graph theory websites are listed here.</p>
      <ul>
        <li><a href={"https://computationalcombinatorics.wordpress.com/"}>Blog on Computational Combinatorics <BiLinkExternal/></a></li>
        <li><a href={"http://graphclasses.org/"}>Graphclasses.org <BiLinkExternal/></a></li>
        <li><a href={"http://www.openproblemgarden.org/"}>Open Problem Garden <BiLinkExternal/></a></li>
        <li><a href={"http://combos.org/"}>The Combinatorial Object Server <BiLinkExternal/></a></li>
        <li><a href={"http://treedecompositions.com/"}>Tree decompositions database <BiLinkExternal/></a></li>
        <li><a href={"http://oeis.org/"}>The On-Line Encyclopedia of Integer Sequences <BiLinkExternal/></a></li>
      </ul>
      <h4 id={"contact"}>Contact</h4>
      <p>This project is developed and maintained by:</p>
      <ul>
        <li>Gunnar Brinkmann (gunnar.brinkmann[at]ugent.be)</li>
        <li>Kris Coolsaet (kris.coolsaet[at]ugent.be)</li>
        <li>Jan Goedgebeur (jan.goedgebeur[at]ugent.be)</li>
        <li>Hadrien Mélot (hadrien.melot[at]umons.ac.be)</li>
      </ul>
    </div>
  );
}

export default HelpPage;