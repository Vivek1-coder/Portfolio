import React, { useEffect, useState } from "react";
import {
  FaChartBar,
  FaCode,
  FaFlagCheckered,
  FaMedal,
  FaQuestion,
} from "react-icons/fa";
import { Md18UpRating, MdDevices, MdStarRate } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import {
  BookOpen,
  Code,
  Brain,
  MonitorSmartphone,
  Database,
  TerminalSquare,
  Settings,
  User,
  LucideLayoutPanelTop,
  FolderGit2,
  GitCommit,
  Activity,
  FireExtinguisher,
  Dumbbell,
  Braces,
  Flame,
  GraduationCap,
  Landmark,
  School,
  FileCode2,
} from "lucide-react";

import {
  SiJavascript,
  SiPython,
  SiC,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiFastapi,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiMongoose,
  SiPrisma,
  SiAuth0,
  SiUbuntu,
  SiMysql,
  SiPlotly,
} from "react-icons/si";
import AnimatedBackground from "@/components/AnimatedBackground";

const About2 = () => {
  const expertiseSkills = [
    {
      name: "Web Development",
      icon: <MonitorSmartphone className="inline-block w-5 h-5 mr-0 md:mr-2" />,
    },
    { name: "AI-ML", icon: <Brain className="inline-block w-5 h-5 mr-2" /> },
    {
      name: "Operating System",
      icon: <Settings className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Database Management",
      icon: <Database className="inline-block w-5 h-5 mr-2" />,
    },
  ];

  const languageSkills = [
    { name: "C/C++", icon: <SiC className="inline-block w-5 h-5 mr-2" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Python",
      icon: <SiPython className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="inline-block w-5 h-5 mr-2" />,
    },
    { name: "HTML", icon: <SiHtml5 className="inline-block w-5 h-5 mr-2" /> },
    { name: "CSS", icon: <SiCss3 className="inline-block w-5 h-5 mr-2" /> },
    { name: "SQL", icon: <SiMysql className="inline-block w-5 h-5 mr-2" /> },
  ];

  const osSkills = [
    {
      name: "Windows",
      icon: <LucideLayoutPanelTop className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Ubuntu (Linux)",
      icon: <SiUbuntu className="inline-block w-5 h-5 mr-2" />,
    },
  ];

  const frameworkSkills = [
    {
      name: "Reactjs",
      icon: <SiReact className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Nextjs",
      icon: <SiNextdotjs className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Nodejs",
      icon: <TerminalSquare className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Express",
      icon: <SiExpress className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "FASTapi",
      icon: <SiFastapi className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Pandas",
      icon: <SiPandas className="inline-block w-5 h-5 mr-2" />,
    },
    { name: "Numpy", icon: <SiNumpy className="inline-block w-5 h-5 mr-2" /> },
    {
      name: "Seaborn",
      icon: <FaChartBar className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Matplotlib",
      icon: <SiPlotly className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Scikit-Learn",
      icon: <SiScikitlearn className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Tensorflow",
      icon: <SiTensorflow className="inline-block w-5 h-5 mr-2" />,
    },
    { name: "Keras", icon: <SiKeras className="inline-block w-5 h-5 mr-2" /> },
    { name: "Authjs", icon: <SiAuth0 className="inline-block w-5 h-5 mr-2" /> },
    {
      name: "Mongoose",
      icon: <SiMongoose className="inline-block w-5 h-5 mr-2" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="inline-block w-5 h-5 mr-2" />,
    },
  ];

  const stats = [
    {
      number: "50+",
      link: "https://github.com/Vivek1-coder",
      label: "Repos Created",
      icon: <FolderGit2 className="w-8 h-8 mb-3 text-cyan-500" />, // lucide-react
      color: "from-cyan-500 to-blue-500",
    },
    {
      number: "270+",
      link: "https://github.com/Vivek1-coder",
      label: "Commits in 2025",
      icon: <GitCommit className="w-8 h-8 mb-3 text-fuchsia-500" />, // lucide-react
      color: "from-violet-500 to-fuchsia-500",
    },
    {
      number: "500+",
      link: "https://leetcode.com/u/vivek1coder/",
      label: "LeetCode Questions",
      icon: <FileCode2 className="w-8 h-8 mb-3 text-indigo-500" />, // lucide-react
      color: "from-indigo-500 to-sky-500",
    },
    {
      number: "260+",
      link: "https://www.naukri.com/code360/profile/MrProton",
      label: "Coding Ninjas Questions",
      icon: <Braces className="w-8 h-8 mb-3 text-amber-500" />, // lucide-react
      color: "from-yellow-500 to-amber-500",
    },
    // {
    //   number: "1.5 hrs+",
    //   link: "#",
    //   label: "of Calisthenics & Yoga",
    //   icon: <Dumbbell className="w-8 h-8 mb-3 text-lime-500" />, // lucide-react
    //   color: "from-lime-500 to-emerald-400",
    // },
    // {
    //   number: "24/7",
    //   link: "https://github.com/Vivek1-coder",
    //   label: "Dedication & Discipline",
    //   icon: (
    //     <Flame className="w-8 h-8 mb-3 text-2xl font-extrabold text-orange-600 " />
    //   ), // lucide-react
    //   color: "from-rose-500 to-red-500",
    // },
  ];

  const [codeforcesDetails, setCodeForcesDetails] = useState({
    cfRatings: 0,
    cfContests: 0,
    cfRank: "Loading...",
  });
  const [leetcodeDetails, setLeetcodeDetails] = useState({});

  useEffect(() => {
    const fetchCodeForces = async () => {
      try {
        const response = await fetch(
          "https://codeforces.com/api/user.rating?handle=Vivek1-coder"
        );
        const response2 = await fetch(
          "https://codeforces.com/api/user.info?handles=Vivek1-coder&checkHistoricHandles=false"
        );

        const ratingData = await response.json(); // contest history
        const infoData = await response2.json(); // user info

        if (response.ok && response2.ok) {
          setCodeForcesDetails({
            cfRatings: infoData.result[0].maxRating,
            cfContests: ratingData.result.length,
            cfRank: infoData.result[0].maxRank,
          });
        }
      } catch (error) {
        console.error("Error fetching Codeforces data:", error);
      }
    };

    const fetchLeetcode = async () => {
      try {
        const response = await fetch(
          "https://codeforces.com/api/user.rating?handle=Vivek1-coder"
        );
        const response2 = await fetch(
          "https://codeforces.com/api/user.info?handles=Vivek1-coder&checkHistoricHandles=true"
        );

        if (response.ok && response2.ok) {
          setCodeForcesDetails({
            cfRatings: response2.data.result.maxRating,
            cfContests: response.data.length,
            cfRank: response2.data.result.maxRank,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    console.log("codeforces", codeforcesDetails);
    fetchCodeForces();
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden text-white overflow-x-clip">
      <AnimatedBackground />

      <div className="relative z-10 container px-2 md:px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6 animate-glow-pulse">
            <User className="w-10 h-10 text-white" />
          </div> */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Talk About Me
          </h1>
          <p className="text-sm md:text-xl  text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences with creativity
            and precision
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2  md:gap-16 justify-center items-center max-w-6xl md:mx-auto">
          {/* Left Column - Bio */}
          
          <div
            className="space-y-2 md:space-y-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
        <div className="relative max-md:mx-6"> 
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 animate-glow-pulse"></div>
              <div className="relative bg-slate-900/70   backdrop-blur-sm border border-slate-700 rounded-xl px-2 py-6 md:p-8 text-center">
                <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <User className="w-10 h-10 md:w-16 md:h-16 text-cyan-400" />
                  </div>
                </div>
                <h1 className="text-xl md:text-4xl font-bold mb-2 text-white">Vivek</h1>
                <h3 className="text-md md:text-2xl font-bold mb-2 text-white">
                  (the.Developer)
                </h3>
                <p className="max-md:text-sm text-slate-400 mb-4">
                  Turning Ideas into Reality
                </p>
                <div className="flex justify-center space-x-2 md:space-x-4">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-cyan-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

             <div className="md:hidden relative max-md:mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  My Journey
                </h2>
                <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-6">
                  Welcome to my digital portfolio! I'm a passionate developer
                  who believes in the power of technology to create meaningful
                  experiences. My journey began with curiosity and has evolved
                  into a dedication to crafting beautiful, functional solutions.
                </p>
                {/* <p className="text-slate-300 text-lg leading-relaxed">
                  I specialize in creating modern web applications that not only
                  look stunning but also provide exceptional user experiences.
                  Every project is an opportunity to push creative boundaries
                  and deliver something truly remarkable.
                </p> */}
              </div>
            </div>

            {/* Skills Section */}
            <div className="relative max-md:mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h3 className="text-lg md:text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  Expertise
                </h3>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {expertiseSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-slate-800/50 rounded-lg py-2 md:p-3 md:px-6 text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="w-1/3 text-center ">{skill.icon}</div>
                      <div className="w-2/3 text-left max-md:text-sm">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages section */}
            <div className="relative max-md:mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h3 className="text-lg md:text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <Code className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  Languages
                </h3>
                 <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {languageSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-slate-800/50 rounded-lg p-3 px-6 text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="w-1/3 text-center">{skill.icon}</div>
                      <div className="w-2/3 text-left max-md:text-sm">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative max-md:mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
               <h3 className="text-lg md:text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <RiStackFill className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                  Frameworks/ Libraries
                </h3>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {frameworkSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-slate-800/50 rounded-lg p-3 px-6 text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="w-1/3 text-center">{skill.icon}</div>
                      <div className="w-2/3 text-left max-md:text-sm">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative max-md:mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                 <h3 className="text-lg md:text-2xl font-bold mb-6 text-purple-400 flex items-center">
                  <MdDevices className="w-5 h-5 md:w-6 md:h-6 mr-3"  />
                  Operating Systems
                </h3>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {osSkills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="bg-slate-800/50 rounded-lg p-3 px-6 text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      {" "}
                      <div className="w-1/3 text-center">{skill.icon}</div>
                      <div className="w-2/3 text-left max-md:text-sm">{skill.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div
            className="space-y-4 md:space-y-8 animate-fade-in-up "
            style={{ animationDelay: "0.4s" }}
          >
            {/* Profile Card */}
             <div className="max-md:hidden relative max-md:mx-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">
                  My Journey
                </h2>
                <p className="text-slate-300 text-sm md:text-lg leading-relaxed mb-6">
                  Welcome to my digital portfolio! I'm a passionate developer
                  who believes in the power of technology to create meaningful
                  experiences. My journey began with curiosity and has evolved
                  into a dedication to crafting beautiful, functional solutions.
                </p>
                {/* <p className="text-slate-300 text-lg leading-relaxed">
                  I specialize in creating modern web applications that not only
                  look stunning but also provide exceptional user experiences.
                  Every project is an opportunity to push creative boundaries
                  and deliver something truly remarkable.
                </p> */}
              </div>
            </div>

            <div className="relative max-md:m-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8">
              <h3 className="text-lg md:text-2xl font-bold mb-6 text-purple-400 flex items-center">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 mr-3" />
                Education
              </h3>

              {/* B.Tech */}
              <div className="grid grid-cols-1 gap-4 mb-2">
                <div
                  className="bg-slate-800/50 rounded-lg p-5 text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex flex-col items-start gap-2"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="flex items-center gap-3 md:text-lg font-semibold text-slate-100">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                    B.Tech - Computer Science and Engineering
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Landmark className="w-4 h-4 text-purple-300" />
                    Netaji Subhas University of Technology(2027)
                  </div>
                </div>
              </div>

              {/* 10th & 12th */}
              <div className="">
                <div
                  className="bg-slate-800/50 rounded-lg p-4 mb-2 text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-green-400" />
                    <span>Inter School (12th)</span>
                  </div>
                  <span className="font-semibold text-green-300">94.6%</span>
                </div>

                <div
                  className="bg-slate-800/50 rounded-lg p-4 text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="flex items-center gap-2">
                    <School className="w-5 h-5 text-yellow-400" />
                    <span>High School (10th)</span>
                  </div>
                  <span className="font-semibold text-yellow-300">93.2%</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 "></div>
              <div className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white flex justify-center items-center py-4">
                  <FaCode className="inline-block w-6 h-6 mr-2" />
                  Leetcode
                </h3>

                <a
                  href="https://leetcode.com/u/vivek1coder/"
                  target="_blank"
                >
                  <div
                    className="bg-slate-800/50 rounded-lg p-3 px-6 my-4 text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                    style={{ animationDelay: `${3}s` }}
                  >
                    <div className="w-1/3 text-center">
                      <MdStarRate className="inline-block w-5 h-5 mr-2" />
                    </div>
                    <div className="w-2/3 text-left">1749 Ratings</div>
                  </div>
                </a>
                <div className="flex justify-between my-2 gap-6 mb-10">
                  <div
                    className="bg-slate-800/50 rounded-lg p-3 px-6 w-full text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                    style={{ animationDelay: `${3}s` }}
                  >
                    <div className="w-1/3 text-center">
                      <FaFlagCheckered className="inline-block w-5 h-5 mr-2" />
                    </div>
                    <div className="w-2/3 text-left">17 Contests</div>
                  </div>
                  <div
                    className="bg-slate-800/50 rounded-lg p-3 px-6 w-full text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                    style={{ animationDelay: `${3}s` }}
                  >
                    <div className="w-1/3 text-center">
                      <FaMedal className="inline-block w-5 h-5 mr-2" />
                    </div>
                    <div className="w-2/3 text-left">Top 10%</div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div
                    className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30"></div>
              <div className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white flex justify-center items-center py-4">
                  <FaCode className="inline-block w-6 h-6 mr-2" />
                  CodeForces
                </h3>

                <a
                  href="https://codeforces.com/profile/Vivek1-coder"
                  target="_blank"
                >
                  <div
                    className="bg-slate-800/50 rounded-lg p-3 px-6 my-4 text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                    style={{ animationDelay: `${3}s` }}
                  >
                    <div className="w-1/3 text-center">
                      <MdStarRate className="inline-block w-5 h-5 mr-2" />
                    </div>
                    <div className="w-2/3 text-left">
                      {codeforcesDetails.cfRatings} Ratings
                    </div>
                  </div>
                </a>
                <div className="flex justify-between my-2 gap-6 mb-10">
                  <div
                    className="bg-slate-800/50 rounded-lg p-3 px-6 w-full text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                    style={{ animationDelay: `${3}s` }}
                  >
                    <div className="w-1/3 text-center">
                      <FaFlagCheckered className="inline-block w-5 h-5 mr-2" />
                    </div>
                    <div className="w-2/3 text-left">
                      {codeforcesDetails.cfContests} Contests
                    </div>
                  </div>
                  <div
                    className="bg-slate-800/50 rounded-lg p-3 px-6 w-full text-center text-slate-300 hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer flex items-center justify-between"
                    style={{ animationDelay: `${3}s` }}
                  >
                    <div className="w-1/3 text-center">
                      <FaMedal className="inline-block w-5 h-5 mr-2" />
                    </div>
                    <div className="w-2/3 text-left">
                      {codeforcesDetails.cfRank}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <div
                    className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 max-md:mx-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300`}
                  ></div>

                  <a href={stat.link} target="_blank" rel="noopener noreferrer">
                    <div className="relative bg-slate-900/70 backdrop-blur border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 group-hover:scale-105">
                      {stat.icon}
                      <div
                        className={`text-2xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm text-slate-300 mt-1 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div
          className="text-center mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur opacity-30 animate-glow-pulse"></div>
        
            <button className="relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
              Let's Work Together
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About2;
