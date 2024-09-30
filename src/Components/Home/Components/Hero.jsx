import { Link } from '../../../../node_modules/react-router-dom'
import myPic from '../../../assets/img/mypic.jpg'
import { FaBehance, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once
        });
      }, []);
      const socialLinks = [
        { icon: <FaBehance />, url: "https://www.behance.net/hmyousuf5" },
        { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/hmyousuf2010/" },
        { icon: <FaFacebookF />, url: "https://www.facebook.com/hmyousuf3.0" },
        { icon: <FaGithub />, url: "https://github.com/dev-hmyousuf" },
      ];
    
      return (
        
    <>
    
      {/* Hero section start */}
      <section className="w-[90%] mx-auto p-6 ">
        <div className="container">
          <div className="grid grid-cols-1 2xl:-mx-4">
            <div className="xl:pt-12">
              <span
                className="font-syne text-black-800 font-bold text-2xl lg:text-[32px] leading-none flex flex-wrap items-center mb-3"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                <span className="mr-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={65}
                    height={2}
                    viewBox="0 0 65 2"
                    fill="none"
                  >
                    <path d="M0 1H65" stroke="#080808" />
                  </svg>
                </span>
                Hello, I’m
              </span>
              <h1
                className="relative z-[1] font-handleeRegular text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] 2xl:before:w-[120px] xl:before:w-[100px] 2xl:before:h-[120px] xl:before:h-[100px] before:rounded-full before:bg-primary before:block before:absolute before:top-[0px] before:left-0 before:-z-[1] lg:before:w-[85px] lg:before:h-[85px] before:w-[70px] before:h-[70px]"
                data-aos="fade-right"
                data-aos-delay={400}
              >
                H.M.
              </h1>
              <h2
                className="font-syne text-black-800 font-bold text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] leading-[64px] lg:leading-[80px] xl:leading-[90px] 2xl:leading-[110px] mb-[20px]"
                data-aos="fade-right"
                data-aos-delay={600}
              >
                YOUSUF
              </h2>
              <p
                className="font-syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[10px]"
                data-aos="fade-right"
                data-aos-delay={800}
              >
                Web Developer | Based in Bangladesh
              </p>
              <p
                className="font-syne text-black-700 font-bold text-lg md:text-xl xl:text-2xl leading-tight mb-[30px]"
                data-aos="fade-right"
                data-aos-delay={800}
              >
                <span className='text-indigo-600 border-b-2 border-gray-600'>Founder</span> & <span className='text-indigo-600 border-b-2 border-gray-600'>Frontend Dev</span> at{" "}
                <a
                  href="https://connectagency.vercel.app"
                  className="text-indigo-500"
                  target="_blank"
                >
                  Connect Agency
                </a>
              </p>
              <div className="flex flex-wrap mb-[50px] md:mb-[60px] xl:mb-[70px] 2xl:mb-[80px]">
                {/* Link Start */}
                <span data-aos="fade-right" data-aos-delay={100}>
                  <Link
                    to="/contact"
                    
                    className="flex p-6 border-2 border-gray-200 bg-black rounded-lg hover: text-white hover:bg-transparent hover:text-black items-center flex-wrap btn-primary mr-2 group"
                  >
                    Let’s Meet
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
                </span>
                {/* Link End */}
                {/* Link Start */}
                <span data-aos="fade-right" data-aos-delay={120}>
                  <Link
                    to="/projects"
                    className="flex border-2 border-gray-200 rounded-lg  hover:text-white p-6 items-center flex-wrap btn-primary group hover:bg-black "
                  >
                    My Work
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
                </span>
                {/* Link End */}
              </div>
              <div
                className="flex flex-wrap items-center"
                data-aos="fade-right"
                data-aos-delay={1400}
              >
                <div className="flex flex-wrap items-center">
                  <span className="font-syne text-black-800 font-bold text-[44px] leading-none">
                    <span className="counter">12</span>+
                  </span>
                  <span className="text-lg text-black-700 ml-3">client</span>
                  <span className="mx-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={2}
                      height={14}
                      viewBox="0 0 2 14"
                      fill="none"
                    >
                      <path d="M1 0L1 14" stroke="#080808" strokeOpacity="0.4" />
                    </svg>
                  </span>
                </div>
                <div className="mt-5 sm:mt-0">
                <ul className="flex  gap-6 items-center">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url} // Use 'href' here for external links
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-2xl transition-all duration-300 hover:text-orange"
                    
                      >
                        {link.icon}
                      </a>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            className="absolute top-20 right-0 md:max-w-[420px] lg:max-w-[420px] xl:max-w-[520px] 2xl:max-w-[initial]"
            data-aos="fade-left"
            src={myPic}
            alt="hero Image"
          />
        </div>
      </section>
      {/* Hero section end */}
      </>
  )
}

export default Hero

