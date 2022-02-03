import React from "react";
import Collapsible from "react-collapsible";
import Container from "./Container";

function Accordion() {
  const datas = [
    {
      title: "What do I have to do in study?",
      content:
        "Participate in various study activities, such as a screening visit, eligiblity review, and a treatment period, over the course of about 3 months. This includes a 6-week treatment period where participants apply the study treatment 2x per day, send weekly photos of their lower legs and have a weekly video visit with a study coach. The study will conclude with an in-home visit when you end treatment and a video follow-up visit 4 weeks later. We will provide all instructions and devices needed to participate in the study.",
    },
    {
      title: "How long is the study?",
      content:
        "The study will last about 14 weeks, including 6 weeks using the study ointment and 4 weeks of follow-up.",
    },
    {
      title: "Can I continue to wear compression socks during the study?",
      content:
        "Since the compression stockings are often recommended for those suffering from Stasis Dermatitis, we ask that if you are using compression stockings today, that you continue to wear them during the study. That said, wearing compression stockings today, that you continue to wear them during the study. That said, wearing compression stockings is not required for this study.",
    },
    {
      title: "What is an at-home clinical study?",
      content:
        "An at-home (or remote) clinical study is one in which you can fully participate at your home. This means there is no need to visit a doctor's office, lab or hospital. We will deliver any materials you need to participate, and you'll be able to mail items back to us that need to be returned in the regular mail.",
    },
  ];

  const heading = (title, isOpen) => {
    return (
      <div className="flex flex-row justify-between p-2 mt-5 border-grey border-b-2">
        <h2 className="font-bold">{title}</h2>
        {isOpen ? (
          <i className="far fa-chevron-up text-misty-red"></i>
        ) : (
          <i className="far fa-chevron-down text-misty-red"></i>
        )}
      </div>
    );
  };

  return (
    <Container>
      <h1 className="text-center font-bold text-2xl my-6" data-aos='fade-up'>
        Frequently asked questions
      </h1>
      {datas.map((data) => {
        return (
          <Collapsible
            trigger={heading(data.title, false)}
            triggerWhenOpen={heading(data.title, true)}
            key={data.title}
          >
            <p className="p-2">{data.content}</p>
          </Collapsible>
        );
      })}
    </Container>
  );
}

export default Accordion;
