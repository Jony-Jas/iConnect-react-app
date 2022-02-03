import React from "react";
import Container from "./Container";


function Section1() {
  
  return (
    <Container>
      <h2 className="font-bold text-xl py-5">
        Are blood transfusions holding you back?
      </h2>
      <p className="font-normal"  data-aos='fade-up'>
        The purpose of the study is to compare the effectiveness of a study drug
        versus a standard-of-care therapy. Individuals will be evaluated to
        determine their eligibility to participate. Each person who qualifies
        will receive either the study drug or standard-of-care therapy,
        study-related medical exams, and study-related laboratory tests at no
        cost.
      </p>
    </Container>
  );
}

export default Section1;
