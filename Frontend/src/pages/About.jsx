import React from "react";
import Skillbar from "../components/Skillbar/Skillbar.jsx";
import Row from "../components/Row/Row.jsx";
import HoverableTable from "../components/Table/Table.jsx";
const skills = [
  {
    id: 1,
    skill: "Frontend Development",
    percentage: 70,
  },
  {
    id: 2,
    skill: "Backend Development",
    percentage: 70,
  },
  {
    id: 3,
    skill: "Machine Learning",
    percentage: 80,
  },
  {
    id: 4,
    skill: "Data Scaling",
    percentage: 60,
  },
  {
    id: 5,
    skill: "React js",
    percentage: 70,
  },
  {
    id: 6,
    skill: "Node js",
    percentage: 50,
  },
  {
    id: 7,
    skill: "Operating System",
    percentage: 90,
  },
  {
    id: 8,
    skill: "DBMS",
    percentage: 70,
  },
  {
    id: 9,
    skill: "Data Modelling",
    percentage: 50,
  },
  {
    id: 10,
    skill: "Tailwind css",
    percentage: 40,
  },
  {
    id: 10,
    skill: "Data Structures",
    percentage: 65,
  },
];

const About = () => {
  return (
    <div>
      <section className="w-full h-screen relative bg-black text-white flex justify-center items-center">
        <div className="h-4/5 w-4/5 flex flex-col">
          <div className="h-3/5  flex">
            <div className="w-1/2 flex flex-col justify-center items-center p-3">
              <HoverableTable/>
            </div>
            <div className="w-1/2  flex justify-center items-center rounded-xl ">
             <div className="w-1/2 h-72 p-3 flex  items-center  flex-col text-center gap-5 rounded-xl shadow-md shadow-slate-500">
             <ul className="flex flex-col gap-3" >
                <li className="btn">CodeForces</li>
                <li className=" flex gap-3 ">
                  <p>Ratings : </p>
                  <p>--</p>
                </li>
                <li className="flex gap-3">
                  <p>Attended : </p>
                  <p>--</p>
                </li>
              </ul>
              <ul className="flex flex-col gap-3" >
                <li className="btn">Leetcode</li>
                <li className="flex gap-3">
                  <p>Ratings : </p>
                  <p>--</p>
                </li>
                <li className="flex gap-3">
                  <p>Attended : </p>
                  <p>--</p>
                </li>
              </ul>
             </div>
              
            </div>
          </div>
          <div className="h-2/5 flex justify-center items-center shadow-md shadow-slate-500 rounded-2xl  m-6 p-3">
          <p className="font-bold text-xl">Skills: </p>
          <div className="flex flex-wrap  gap-3 justify-center items-center p-10  overflow-y-auto ">
            {skills.map((skill) => (
              <Skillbar
                key={skill.id}
                skill={skill.skill}
                percentage={skill.percentage}
              />
            ))}
          </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default About;
