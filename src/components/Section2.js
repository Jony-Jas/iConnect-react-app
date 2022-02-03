import React from "react";
import Container from "./Container";

function Section2() {
  return (
    <Container>
      <div
        className="bg-slate-100 p-8 border-misty-red border-l-4 rounded"
        data-aos="fade-up"
      >
        <h2 className="py-2 font-semibold text-lg" data-aos="fade-up">
          What is MDS and anemia?
        </h2>
        <p data-aos="fade-up">
          MDS is a rare blood cancer in which blood cells in the bone marrow do
          not grow to become healthy red blood cells, white blood cells, or
          platelets - all the vital components of blood. Not begin able to
          develop healthy red blood cells leads to anemia, which common with
          MDS. Anemia has many of the same symptoms as MDS and cause greter
          fatigue.
        </p>
        <br />
        <p data-aos="fade-up">
          It can be exhausting to live with a condition that makes you feel like
          you're being held back. If you're caring for a loved one with the
          condition, it can be equally trying. However, right now, research is
          underway on an investigational study drug to see if it may help
          alleviate anemic symptoms and better manage your MDS. And you may be
          able to take part in this study.
        </p>
      </div>
    </Container>
  );
}

export default Section2;
