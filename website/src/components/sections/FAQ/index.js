import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as faqStyles from './faq.module.css';

const Question = ({ number, question, answer }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleCollapsed = () => setCollapsed(c => !c);
  
  const containerClass = collapsed ? `${faqStyles.questionContainer} ${faqStyles.collapsed}` : faqStyles.questionContainer;

  return (
    <div className={containerClass}>

      <div className={faqStyles.questionHeader} onClick={() => toggleCollapsed()}>
        <p className={faqStyles.questionNumber}>{number}</p>
        <h3 className={faqStyles.questionText}>{question}</h3>
      </div>

      <p className={faqStyles.answerText}>{answer}</p>
    </div>
  );
};

const FAQ = () => {
  const faqData = useStaticQuery(graphql`query FAQQuery {
    allDatoCmsFaqEntry(sort:{fields: [position], order: ASC }) {
      nodes {
        question,
        answer
      }
    }
  }`).allDatoCmsFaqEntry.nodes;

  const questions = faqData.map(({ question, answer }, i) => <Question number={i+1} question={question} answer={answer} key={i}/>)
  return (
    <section className={faqStyles.container}>
      <h2 className={faqStyles.title}>FAQ</h2>

      <div className={faqStyles.qaContainer}>
        {questions}
      </div>
    </section>
  );
};

export default FAQ;