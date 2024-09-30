import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "../../../../node_modules/react-router-dom";
import myPic from "../../../assets/img/mypic.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      {/* About Us Sectin Start */}
      <section
        className="w-[90%] mx-auto "
        data-aos="zoom-out"
        data-aos-delay={300}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] xl:gap-[134px]">
            <div className="relative">
              <img src={myPic} alt="" />
              <div className="flex flex-wrap flex-col absolute bottom-0 right-0 md:right-[170px] lg:right-[-30px] z-10">
                <span className="text-black-800 text-[65px] xl:text-[80px] font-bold font-syne leading-none inline-block relative before:rounded-full before:bg-primary before:block before:absolute before:top-[50%] before:left-[-13px] before:-z-[1] before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%]">
                  1+
                </span>
                <span className="text-white font-bold font-syne strock-text mt-5">
                  Years of <br /> experience
                </span>
              </div>
            </div>
            <div className=" font-syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">Hello I’m</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px] font-bold">
                H.M.YOUSUF, Web Developer
              </h3>
              <h4 className="text-black-800 text-2xl lg:text-3xl xl:text-[44px] mt-3 mb-4">
                Based in Bangladesh
              </h4>
              <p className="paragraph mb-6">
                That is where I come in. A lover of words, a wrangler of copy.
                Here to create copy that not only reflects who you are and what
                you stand for, but words that truly land with those that read
                them, calling your audience in and making them .
              </p>
              <ul className="flex flex-wrap gap-9 2xl:gap-[40px] mb-7">
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    01
                  </span>
                  <p className="paragraph">Award winner</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    12
                  </span>
                  <p className="paragraph">client</p>
                </li>
                <li>
                  <span className="text-black-800 text-[32px] font-bold font-syne leading-10 relative before:rounded-full before:bg-black-300 before:block before:absolute before:top-[0px] before:left-0 before:right-0 before:-z-[1] before:w-[43px] before:h-[43px]">
                    8
                  </span>
                  <p className="paragraph">Job done successfully</p>
                </li>
              </ul>
              <div className="flex flex-wrap">
                <Link
                  to="/contact"
                  className="flex items-center flex-wrap btn-primary group"
                >
                  Download my resume
                  <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeOpacity="0.9"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Sectin End */}
    </>
  );
};

export default About;
