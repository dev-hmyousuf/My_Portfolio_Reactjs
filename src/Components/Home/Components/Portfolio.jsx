import { Link } from '../../../../node_modules/react-router-dom';
import Project1 from '../../../assets/img/mockup.png';
import Project2 from '../../../assets/img/ca.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const createLink = (title) => {
    return title.toLowerCase().replace(/ /g, '-'); // Replace spaces with hyphens
  };
  
  const PortfolioData = [
    {
      id: 1,
      img: Project1,
      title: "The Islamic BD",
      link: createLink("The Islamic BD"), // Generate link here
      technologies: [
        { id: 1, tag: "React.js" },
        { id: 2, tag: "Tailwind Css" },
        { id: 3, tag: "Team Work" },
      ],
    },
    {
      id: 2,
      img: Project2,
      title: "Connect Agency Website",
      link: createLink("Connect Agency Website"), // Generate link here
      technologies: [
        { id: 4, tag: "React.js" },
        { id: 5, tag: "Tailwind Css" },
        { id: 6, tag: "Team Work" },
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,  // Allows continuous sliding
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,  // Shows previous and next arrows
  };

  return (
    <section className="bg-secondary py-[120px] bg-mainBg">
      <div className="container mx-auto w-[90%]">
        <div className="w-full flex flex-col justify-between items-center slider-container gap-6">
          <div className="col-span-12" data-aos="fade-up">
            <div className="font-bold font-syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
              <span className="text-orange text-xl">Portfolio</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                My recent{" "}
                <span className="relative z-[1] before:rounded-full before:bg-primary before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                  w
                </span>
                ork
              </h3>
            </div>
          </div>

          {/* Slick slider for Portfolio projects */}
          <div className="w-full">
            <Slider {...settings}>
              {PortfolioData.map((slide) => (
                <div key={slide.id} className="px-4">
                  <div className="rounded-[20px] overflow-hidden mb-6 max-w-3/4">
                    <img src={slide.img} alt={slide.title} className="w-full" />
                  </div>
                  <div className="flex flex-wrap flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                      {slide.technologies.map((tag) => (
                        <div
                          key={tag.id}
                          className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                        >
                          {tag.tag}
                        </div>
                      ))}
                    </div>
                    <Link to={`/${slide.link}`} className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                      <h4 className="font-bold font-syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                        {slide.title}
                      </h4>
                      <div className="group-hover:animate-arrow-move-up">
                        <svg
                          width={40}
                          height={40}
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z"
                            fill="currentColor"
                            fillOpacity="0.9"
                          />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
