import { FaBehance, FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa6';

const Footer = () => {
    const socialLinks = [
        { icon: <FaBehance />, url: "https://www.behance.net/hmyousuf5" },
        { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/hmyousuf2010/" },
        { icon: <FaFacebookF />, url: "https://www.facebook.com/hmyousuf3.0" },
        { icon: <FaGithub />, url: "https://github.com/dev-hmyousuf" },
      ];

  return (
    <>
        <div>
  <footer className="footer bg-black pt-[80px] lg:pt-[100px] xl:pt-[120px] pb-[60px]">
    <div className="container s-[90%] mx-auto">
      <div
        className="overflow-x-hidden"
        data-aos="flip-down"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div className="pt-12">
            <h3 className="text-white font-Syne font-bold text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
              <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[8px] before:left-[0] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                Le
              </span>
              t’s work together
            </h3>
            <div className="flex flex-wrap items-center mt-10">
              <span className="text-xl font-bold font-Syne text-white">
                Based in Bangladesh |
              </span>
              <div className="ml-5 flex gap-3  lg:ml-0 xl:ml-[16px] 2xl:ml-5">
              {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 text-2xl transition-all duration-300"
                    
                      >
                        {link.icon}
                      </a>
                    </li>
                  ))}
              </div>
            </div>
          </div>
          <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
            <h3 className="text-xl font-bold font-Syne text-white">
              Looking for a hectic developer?
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold font-Syne leading-none text-orange-500 ">
                hmyousuf2010@gmail.com
              </p>
              <a
                className="text-white group-hover:animate-arrow-move-up group-hover:text-orange-500"
                href="mailto:hmyousuf2010@gmail.com"
              >
                <svg
                  fill="none"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 28.3334L28.3334 11.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.6667 11.6667H28.3334V28.3334"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="py-9 px-7 border-border-white border rounded-2xl flex flex-col justify-between group">
            <h3 className="text-xl font-bold font-Syne text-white">
              Want a more in-depth look at my history?
            </h3>
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold font-Syne leading-none text-orange-500">
                +880 154 0192 456
              </p>
              <a
                className="text-white group-hover:animate-arrow-move-up group-hover:text-orange-500"
                href="#"
              >
                <svg
                  fill="none"
                  height="40"
                  viewBox="0 0 40 40"
                  width="40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.6667 28.3334L28.3334 11.6667"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11.6667 11.6667H28.3334V28.3334"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="py-[72px]">
            <svg
              className="w-full"
              fill="none"
              height="200"
              viewBox="0 0 1000 200"
              width="1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <text
                dominantBaseline="middle"
                fill="#FFE9D9"
                fontFamily="Arial, sans-serif"
                fontSize="200"
                textAnchor="middle"
                x="50%"
                y="50%"
              >
                YOUSUF
              </text>
            </svg>
          </div>
        </div>
        <div className="border-t border-border-white pt-6 ">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8 order-last sm:order-first">
              <p className="text-white text-lg font-normal font-sans leading-7">
                ©2024 H.M.YOUSUF, All Rights Reserved
              </p>
            </div>
            <div className="col-span-12 sm:col-span-4 order-first sm:order-last">
              <div className="flex justify-end mb-2 sm:mb-0">
                <a
                  aria-label="scroll up"
                  className="flex flex-wrap items-center gap-2 group"
                  href="#"
                  id="scrollUp"
                >
                  <span className="text-white text-lg font-normal font-sans leading-7 transition-all group-hover:text-orange-500">
                    Back                            to                            Top
                  </span>
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 19V5"
                      stroke="#FFB646"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      d="M19 12L12 5L5 12"
                      stroke="#FFB646"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div> 
    </>
  )
}

export default Footer

