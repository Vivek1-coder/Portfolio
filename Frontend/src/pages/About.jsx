import React, { useState, useEffect } from "react";
import Skillbar from "../components/Skillbar/Skillbar.jsx";
import axios from "axios";
import back from "../assets/images/about.jpg";
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
    id: 11,
    skill: "DSA",
    percentage: 65,
  },
  {
    id:12,
    skill:"Next.js",
    percentage:80

  },
  {
    id:12,
    skill:"MongoDB",
    percentage:40

  },
];

const About = () => {
  const [leetcodeRatings, setLeetcodeRatings] = useState("");
  const [leetcodeAttended, setLeetcodeAttended] = useState("");
  const [codeforcesRatings, setcodeforcesRatings] = useState("");
  const [codeforcesAttended, setcodeforcesAttended] = useState("");

  useEffect(() => {
    fetch("https://codeforces.com/api/user.rating?handle=Vivek1-coder")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const index = data.result.length;
        setcodeforcesRatings(data.result[index - 1].newRating);
        setcodeforcesAttended(index);
      })
      .catch((error) => {
        console.error("Error fetching Codeforces data:", error);
      });
  }, []);
  
  // useEffect(() => {
  //   fetch("https://alfa-leetcode-api.onrender.com/userContestRankingInfo/vivek1coder")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setLeetcodeAttended(
  //         data.data.userContestRanking.attendedContestsCount
  //       );
  //       setLeetcodeRatings(data.data.userContestRanking.rating);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching LeetCode data:", error);
  //     });
  // }, []);
  

  return (
    <div className="w-full h-screen relative object-contain">
      <div
        className="absolute inset-0 max-sm:hidden"
        style={{
          backgroundImage: `url(${back})`, // Replace with your image
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          opacity: 0.2, // Decrease image opacity
          zIndex: -0.2, // Ensure it stays behind the content
        }}
      ></div>
      <section className="w-full h-screen relative text-white flex justify-center md:items-center">
        <div className="md:h-4/5 w-5/6 flex flex-col max-lg:overflow-y-auto md:gap-6">
          <div className="md:h-3/5 flex flex-wrap max-md:mt-10 ">
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-3 text-yellow-500 ">
              <HoverableTable />
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-xl">
              <div className="w-5/6 sm:w-3/4 lg:w-1/2 h-72 p-3 flex items-center flex-col text-center gap-5 rounded-xl shadow-md shadow-slate-500 background">
                <ul className="flex flex-col gap-3">
                  <a href="https://codeforces.com/profile/Vivek1-coder">
                    <li className="btn hover:scale-105">CodeForces</li>
                  </a>
                  <li className="flex gap-3">
                    <p>Ratings : </p>
                    <p>{codeforcesRatings || "--"}</p>
                  </li>
                  <li className="flex gap-3">
                    <p>Attended : </p>
                    <p>{codeforcesAttended || "--"}</p>
                  </li>
                </ul>
                <ul className="flex flex-col gap-3">
                  <a href="https://leetcode.com/u/vivek1coder/">
                    <li className="btn hover:scale-105">Leetcode</li>
                  </a>
                  <li className="flex gap-3">
                    <p>Ratings : </p>
                    <p>{Math.ceil(leetcodeRatings) || "--"}</p>
                  </li>
                  <li className="flex gap-3">
                    <p>Attended : </p>
                    <p>{leetcodeAttended || "--"}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="font-bold md:text-xl mt-3 md:hidden ">Skills: </p>
          <div className=" md:h-2/5 flex justify-center items-center shadow-md shadow-slate-500 rounded-2xl m-3 p-1 background ">
            <p className="font-bold md:text-xl max-md:hidden">Skills: </p>
            <div className="flex md:h-5/6 flex-wrap gap-3 justify-center items-center p-10 overflow-y-auto ">
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
