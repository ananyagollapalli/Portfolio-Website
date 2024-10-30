"use client";
import React , {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';


const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Full Stack Development - ReactJS, AngularJS, JavaScript, HTML, CSS, NodeJS, ExpressJs. </li>
          <li>Programming Languages - Java, C, Python. </li>
          <li>DBMS – SQL.</li>
          <li>Other – Git, Postman.</li>
          
          
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>UG : Dayananda Sagar University(Currently Pursuing) Graduation:2025</li>
          <li>PUC : Narayana PU College</li>
          <li>10th : Sri Chaitanya Techno School (CBSE)</li>
        </ul>
      ),
    },
    {
      title: "Interests",
      id: "interests",
      content: (
        <ul className="list-disc pl-2">
          <li>Badminton</li>
          <li>Table Tenis</li>
          <li>Basket Ball</li>
          <li>Swimming</li>
        </ul>
      ),
    },
  ];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/chill vibes.jpg" width={600} height={700} alt='About Image' />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am Ananya, an enthusiastic learner. Driven by curiosity,
          I am eager to learn from diverse experiences and expand my skills. My goal is to apply my knowledge to streamline tasks in my daily life and assist others in doing the same.
          I am particularly interested in areas such as software development, data science, and machine learning, as well as emerging technologies that could lead to impactful solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("interests")}
              active={tab === "interests"}
            >
              {" "}
              Interests{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
