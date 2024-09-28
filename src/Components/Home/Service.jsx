import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react'; // For initializing AOS
import { FaMobileAlt, FaPaintBrush, FaLaptopCode, FaCode, FaUser, FaRocket } from 'react-icons/fa'; // Importing some icons from react-icons
import { Link } from '../../../node_modules/react-router-dom';

const servicesData = [
  {
    id: 1,
    title: 'Mobile Apps design',
    icon: <FaMobileAlt size={24} />, // Using the mobile icon
  },
  {
    id: 2,
    title: 'UI/UX design',
    icon: <FaPaintBrush size={24} />, // Using the paintbrush icon
  },
  {
    id: 3,
    title: 'Website design',
    icon: <FaLaptopCode size={24} />, // Using the laptop code icon
  },
  {
    id: 4,
    title: 'Webflow development',
    icon: <FaCode size={24} />, // Using the code icon
  },
  {
    id: 5,
    title: 'Brand identity',
    icon: <FaUser size={24} />, // Using the user icon
  },
  {
    id: 6,
    title: 'Interaction design',
    icon: <FaRocket size={24} />, // Using the rocket icon
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations (adjust as needed)
      once: true, // Ensure animation happens only once
    });
  }, []);
  return (
    <section className="py-[120px] w-[90%] mx-auto">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 2xl:gap-0 mb-12 items-center" data-aos="fade-up">
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <div className="font-bold font-syne leading-none flex flex-wrap flex-col gap-y-2">
              <span className="text-orange text-xl">Services</span>
              <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px] relative before:rounded-full before:bg-primary before:block before:absolute before:top-[2px] before:left-0 before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[60px] before:h-[36px] lg:before:h-[48px] xl:before:h-[60px]">
                My specialties
              </h3>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <p className="paragraph">
              Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8">
            <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Map over servicesData to create service items */}
              {servicesData.map((service) => (
                <div
                  key={service.id}
                  className="px-6 py-7 bg-black-500 rounded-lg transition-all hover:shadow-2xl hover:bg-white bg-gray-300 group"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="w-12 h-12 bg-white rounded-full shadow flex flex-wrap items-center justify-center transition-all group-hover:bg-black-500 mb-8">
                    {service.icon}
                  </div>
                  <h4>
                    <Link
                      to="/project"
                      className="flex flex-wrap items-end justify-between font-bold text-xl font-syne text-black-800 group-hover:text-orange transition-all"
                    >
                      {service.title}
                      <span className="text-black-text-600 group-hover:text-orange group-hover:animate-arrow-move-up"></span>
                    </Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black rounded-lg col-span-12 xl:col-span-4" data-aos="zoom-in" data-aos-delay={1000}>
            <div className="px-6 py-9 bg-black-800 rounded-lg flex flex-wrap flex-col justify-between max-w-[416px] mx-auto h-full group">
              <div className="flex flex-wrap justify-end relative">
                <Link to="/contact" className="group-hover:animate-arrow-move-up">
                  <svg width={80} height={80} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3333 56.6666L56.6667 23.3333" stroke="#FFB646" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23.3333 23.3333H56.6667V56.6666" stroke="#FFB646" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="flex flex-col flex-wrap gap-y-2">
                <span className="text-orange-500 text-lg font-normal leading-none">SAY HELLO!</span>
                <h4 className="text-white text-xl xl:text-2xl font-bold font-syne leading-none">hmyousuf2010@gmail.com</h4>
                {/* Add any other content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
