import { useState } from "react";
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs } from "react-icons/fa6";
import aiIcon from "../../../assets/img/Brand/illustrator.png";
import psIcon from "../../../assets/img/Brand/photoshop.png";
import tailwindIcon from "../../../assets/img/Brand/tailwind-css.svg";
import vsCodeIcon from "../../../assets/img/Brand/visual-studio-code.svg";

const skills = [
  {
    id: 1,
    name: "HTML 5",
    icon: <FaHtml5 className="text-4xl" />,
    level: "100%",
  },
  { id: 2, name: "CSS", icon: <FaCss3 className="text-4xl" />, level: "100%" },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs className="text-4xl" />,
    level: "60%",
  },
  {
    id: 4,
    name: "Tailwind",
    icon: <img src={tailwindIcon} className="w-12" alt="Tailwind" />,
    level: "80%",
  },
  {
    id: 5,
    name: "Github",
    icon: <FaGithub className="text-4xl" />,
    level: "80%",
  },
  { id: 6, name: "Git", icon: <FaGitAlt className="text-4xl" />, level: "40%" },
  {
    id: 7,
    name: "VSCode",
    icon: <img src={vsCodeIcon} className="w-12" alt="VSCode" />,
    level: "80%",
  },
  {
    id: 8,
    name: "Photoshop",
    icon: <img src={psIcon} className="w-12" alt="Photoshop" />,
    level: "100%",
  },
  {
    id: 9,
    name: "Illustrator",
    icon: <img src={aiIcon} className="w-12" alt="Illustrator" />,
    level: "100%",
  },
];
const experiences = [
  {
    date: "01/08/2024 – Running",
    company: "Connect Agency",
    position: "Founder & Web Developer",
  },
  {
    date: "03/2024 – Running",
    company: "Nexus UI",
    position: "Co-Founder",
  },
  {
    date: "11/2023 – 06/2024",
    company: "Digital It",
    position: "Graphic Designer",
  },
  {
    date: "03/2008 – 07/2011",
    company: "Axtra",
    position: "UX Researcher",
  },
];
const education = [
  {
    date: "01/2015 – Running",
    institution: "Bangladesh Bank Adarsha High School",
    degree: "Science - Class 09",
  },
  {
    date: "07/2023 - 12/2023",
    institution: "Digital It Institute",
    degree: "Advance Graphic Design",
  },
  {
    date: "01/2024 – 04/2024",
    institution: "UY lab",
    degree: "Digital Marketing",
  },
];

const awards = [
  {
    imgSrc: "assets/images/awards/w-dot.png",
    year: "0000",
    title: "01X Developer Award",
    category: "Winner",
  },
  {
    imgSrc: "assets/images/awards/webby.png",
    year: "0000",
    title: "01X Developer Award",
    category: "Winner",
  },
  {
    imgSrc: "assets/images/awards/fwa.png",
    year: "0000",
    title: "01X Developer Award",
    category: "Winner",
  },
  {
    imgSrc: "assets/images/awards/wordpress.png",
    year: "0000",
    title: "01X Developer Award",
    category: "Winner",
  },
];

const Tabs = () => {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState("about_me_tab");

  // Function to change active tab
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Tabs Start */}
      <section className="featured-properties bg-gray-200 mt-20 py-20 ">
        <div className="container w-[90%] mx-auto">
          <div className="grid grid-cols-12 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[134px]">
            <div
              className="col-span-12 lg:col-span-5 2xl:col-span-4"
              data-aos="fade-up"
            >
              <div className="font-bold font-syne leading-none flex flex-wrap flex-col gap-y-2 mb-4">
                <span className="text-orange-500 text-xl">Resume</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative">
                  All over my details find here...
                </h3>
              </div>

              {/* Tabs Buttons */}
              <div className="tabs flex flex-wrap lg:flex-col gap-2 my-8 lg:my-0">
                <button
                  onClick={() => handleTabClick("about_me_tab")}
                  className={`tab-btn justify-between items-center inline-flex group ${
                    activeTab === "about_me_tab" ? "active" : ""
                  }`}
                >
                  About Me
                </button>

                <button
                  onClick={() => handleTabClick("experience_tab")}
                  className={`tab-btn justify-between items-center inline-flex group ${
                    activeTab === "experience_tab" ? "active" : ""
                  }`}
                >
                  Experience
                </button>

                <button
                  onClick={() => handleTabClick("education_tab")}
                  className={`tab-btn justify-between items-center inline-flex group ${
                    activeTab === "education_tab" ? "active" : ""
                  }`}
                >
                  Education
                </button>

                <button
                  onClick={() => handleTabClick("skills_tab")}
                  className={`tab-btn justify-between items-center inline-flex group ${
                    activeTab === "skills_tab" ? "active" : ""
                  }`}
                >
                  Skills
                </button>

                <button
                  onClick={() => handleTabClick("awards_tab")}
                  className={`tab-btn justify-between items-center inline-flex group ${
                    activeTab === "awards_tab" ? "active" : ""
                  }`}
                >
                  Awards
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div
              className="col-span-12 lg:col-span-7 2xl:col-span-8"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div
                id="about_me_tab"
                className={`tab-content ${
                  activeTab === "about_me_tab" ? "active" : "hidden"
                }`}
              >
                <div className="grid grid-cols-1">
                  <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-syne mb-6">
                    Based in Bangladesh
                  </h4>
                  <p className="paragraph mb-7">
                    H.M.YOUSUF,{" "}
                    <span className="text-black-800">Web Developer</span>, based
                    in Bangladesh That is where I come in. A lover of words, a
                    wrangler of copy. Here to create copy that not only reflects
                    who you are and what you stand for,
                  </p>
                  <p className="paragraph mb-14">
                    but words that truly land with those that read them, calling
                    your audience in and making them want more.
                  </p>
                  <ul className="flex-col gap-3 inline-flex">
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Name
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        H.M.YOUSUF
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Nationality
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        Bangladesh
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Phone
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        +(880) 154 0192 456
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Email
                      </span>
                      <span className="text-black-800 text-xl md:2xl font-bold font-syne leading-8">
                        hmyousuf2010@gmail.com
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Experience
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        1+ years
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Freelance
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        Available
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Github
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        dev-hmyousuf
                      </span>
                    </li>
                    <li className="gap-10 inline-flex items-center">
                      <span className="w-[110px] text-black-text-800 text-lg font-normal leading-none">
                        Language
                      </span>
                      <span className="text-black-800 text-2xl font-bold font-syne leading-8">
                        Bengali, English
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                id="experience_tab"
                className={`tab-content ${
                  activeTab === "experience_tab" ? "active" : "hidden"
                }`}
              >
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-syne mb-6">
                  Experience
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="pt-[30px] bg-gray-300 px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white flex flex-wrap flex-col gap-8 justify-between"
                    >
                      <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                        {exp.date}
                      </span>
                      <div>
                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                          {exp.company}
                        </p>
                        <h4 className="font-bold font-syne leading-normal text-2xl text-black-800">
                          {exp.position}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="education_tab"
                className={`tab-content ${
                  activeTab === "education_tab" ? "active" : "hidden"
                }`}
              >
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-syne mb-6">
                  Education
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl bg-gray-300 hover:bg-white flex flex-wrap gap-[30px] md:gap-[60px] lg:gap-[104px]"
                    >
                      <span className="text-sm font-normal font-Inter leading-tight text-black-text-800">
                        {edu.date}
                      </span>
                      <div className="flex-1">
                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                          {edu.institution}
                        </p>
                        <h4 className="font-bold font-syne leading-normal text-2xl text-black-800">
                          {edu.degree}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="skills_tab"
                className={`tab-content ${
                  activeTab === "skills_tab" ? "active" : "hidden"
                }`}
              >
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-syne mb-6">
                  Skills
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                  {skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="pt-[30px] px-7 pb-7 bg-black-500 rounded-2xl transition-all hover:shadow-2xl bg-gray-300 hover:bg-white flex flex-wrap gap-4 items-start"
                    >
                      {skill.icon}
                      <div className="flex flex-wrap gap-1 flex-1 flex-col">
                        <h4 className="font-bold font-syne leading-normal text-xl text-black-800">
                          {skill.name}
                        </h4>
                        <p className="text-sm font-normal font-Inter leading-none text-black-800">
                          ({skill.level})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                id="awards_tab"
                className={`tab-content ${
                  activeTab === "awards_tab" ? "active" : "hidden"
                }`}
              >
                <h4 className="text-black-800 text-2xl lg:text-[32px] font-bold font-syne mb-6">
                  Awards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {awards.map((award, index) => (
                    <div
                      key={index}
                      className="p-8 bg-black-500 rounded-2xl transition-all hover:shadow-2xl hover:bg-white bg-gray-300 group flex flex-wrap flex-col gap-8"
                    >
                      <div className="flex items-start justify-between">
                        <img src={award.imgSrc} alt="award icon" />
                        <span className="font-normal text-sm font-Inter text-black-text-800">
                          {award.year}
                        </span>
                      </div>
                      <div>
                        <p className="text-lg font-normal font-sans leading-7 text-black-800 relative z-[1] before:rounded-full before:bg-orange before:block before:top-[50%] before:translate-y-[-50%] before:left-0 before:-z-[1] before:w-[8px] before:h-[8px] pl-4">
                          {award.category}
                        </p>
                        <h4 className="font-bold font-syne leading-normal text-xl text-black-800">
                          {award.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tabs End */}
    </>
  );
};

export default Tabs;
