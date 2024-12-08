import React, { useEffect } from "react";
import bg from "./assets/bg.png";
import Lenis from "lenis";
import "./App.css";
import Menu from "./Components/Menu.jsx";
import line from "./assets/Line.svg";
import arrow from "./assets/arrow.svg";
import arrow2 from "./assets/arrow2.svg";
import arrow3 from "./assets/arrow3.svg";
import ceo from "./assets/ceo.webp";
import no1 from "./assets/no1.webp";
import no2 from "./assets/no2.webp";
import no3 from "./assets/no3.webp";
import no4 from "./assets/no4.webp";
import no5 from "./assets/no5.webp";
import no6 from "./assets/no6.webp";
import no7 from "./assets/no7.webp";
import career from "./assets/career.webp";
import { FaInstagram } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import {
  delay,
  easeIn,
  easeInOut,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Paragraph from "./Components/paragraph.jsx";
import { ReactLenis, useLenis } from "lenis/react";
import { Link } from "react-scroll";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.4]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.9, 1.2]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const corners = useTransform(scrollYProgress, [0, 0.2], ["0px", "50px"]);
  const textColor = useTransform(
    scrollYProgress,
    [0, 0, 1],
    ["#000000", "#000000", "#000000"]
  );

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const FlipLink = ({ children, href }) => {
    return (
      <motion.a
        href={href}
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden"
      >
        <motion.div
          variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
          className="absolute inset-0"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      </motion.a>
    );
  };

  const fadeVariant = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
      },
    },
  };

  const navVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buildVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const buildVariant2 = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const childVariant = {
    hidden: {
      y: 5,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const childVariantX = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
    },
  };

  const hoverVariant = {
    rest: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        easeInOut: true,
      },
    },
    hover: {
      y: "100%",
      opacity: 0,
    },
  };

  const childVariantXpositive = {
    hidden: {
      x: 30,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={navVariant}
      initial="hidden"
      animate="show"
      viewport={{
        once: true,
      }}
      className="font-main body overflow-x-hidden"
    >
      <ReactLenis root>
        <main className="scroll-smooth">
          <motion.section
            className="bg hero p-7 h-screen overflow-clip text-content"
            loading="lazy" 
            style={{
              scale,
              borderBottomRightRadius: corners,
              borderBottomLeftRadius: corners,
            }}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex justify-between items-start body text-content text-[16px]">
                <motion.div
                  variants={navVariant}
                  initial="hidden"
                  animate="show"
                  viewport={{
                    once: true,
                  }}
                  className="body w-fit flex sm:flex-wrap md:flex-wrap text-center cursor-default"
                >
                  <div className="flex">
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      E
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      S
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      S
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      E
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      N
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      T
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      I
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      A
                    </motion.h1>
                  </div>

                  <div style={{ width: 5 }}></div>

                  {/* Group "ENGINEERING" */}
                  <div className="flex">
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      E
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      N
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      G
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      I
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      N
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      E
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      E
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      R
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      I
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      N
                    </motion.h1>
                    <motion.h1 variants={childVariant} whileHover={{ y: -4 }}>
                      G
                    </motion.h1>
                  </div>
                </motion.div>

                <motion.div
                  className="flex space-x-20 sm:hidden"
                  variants={navVariant}
                  initial="hidden"
                  animate="show"
                  viewport={{
                    once: true,
                  }}
                >
                  <Link to="about" smooth={true} duration={2000}>
                    {" "}
                    <FlipLink
                      variants={childVariant}
                      className="body w-fit sm:hidden"
                      href="#about"
                    >
                      <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className=""
                      >
                        ABOUT
                      </motion.h1>
                    </FlipLink>
                  </Link>

                  <Link to="buildings" smooth={true} duration={2000}>
                    {" "}
                    <FlipLink
                      variants={childVariant}
                      className="body w-fit sm:hidden"
                      href="#buildings"
                    >
                      <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className=""
                      >
                        BUILDINGS
                      </motion.h1>
                    </FlipLink>
                  </Link>

                  <Link to="careers" smooth={true} duration={2000}>
                    <FlipLink
                      variants={childVariant}
                      className="body w-fit sm:hidden"
                      href="#careers"
                    >
                      <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className=""
                      >
                        CAREERS
                      </motion.h1>
                    </FlipLink>
                  </Link>

                  <Link to="contact" smooth={true} duration={2000}>
                    {" "}
                    <FlipLink
                      variants={childVariant}
                      className="body w-fit sm:hidden"
                      href="#contact"
                    >
                      <motion.h1
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className=""
                      >
                        CONTACT
                      </motion.h1>
                    </FlipLink>
                  </Link>
                </motion.div>
                <Menu />
              </div>
              <motion.div
                variants={fadeVariant}
                initial="hidden"
                animate="show"
                viewport={{
                  once: true,
                }}
                className="main-content body"
              >
                <div className="text-content">
                  <div className="image-text-container">
                    <div className="text">
                      <p className="text-balance flex items-start gap-2">
                        <img src={line} alt="" className="" />
                        At Essentia Engineering, buildings are more than just
                        structures they are entities that inspire and uplift.
                        Explore our work and learn more about our approach to
                        architecture.
                      </p>
                    </div>
                  </div>
                  <div className="connect-button body group relative">
                    <motion.button
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ width: "100px", opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="h-full"
                    >
                      <motion.p className="whitespace-nowrap">
                        Let’s Connect
                      </motion.p>
                    </motion.button>
                    <motion.div className="button-icon-container cursor-pointer body scale-75 transition-transform duration-700 group-hover:scale-100 group-hover:-rotate-180">
                      <img
                        src={arrow}
                        alt=""
                        className="opacity-0 rotate-180 group-hover:opacity-100 transition-opacity ease-in-out duration-700"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <div className="flex justify-center">
                {" "}
                <div className="font-semibold text-white text-center max-h-[1440px]">
                  {" "}
                  <motion.div
                    variants={buildVariant2}
                    initial="hidden"
                    animate="show"
                    viewport={{}}
                    className="responsive-texts flex items-end md:mt-20 lg:mt-20 mt-20 sm:mt-0"
                  >
                    <motion.h1 variants={childVariant}>E</motion.h1>
                    <motion.h1 variants={childVariant}>S</motion.h1>
                    <motion.h1 variants={childVariant}>S</motion.h1>
                    <motion.h1 variants={childVariant}>E</motion.h1>
                    <motion.h1 variants={childVariant}>N</motion.h1>
                    <motion.h1 variants={childVariant}>T</motion.h1>
                    <motion.h1 variants={childVariant}>I</motion.h1>
                    <motion.h1 variants={childVariant}>A</motion.h1>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          <section className="p-7 max-w-[1440px] mx-auto" id="about">
            <div className="heading">
              [
              <FlipLink
                variants={childVariant}
                className="body w-fit sm:hidden"
              >
                <motion.h1 className="px-[2px]">ABOUT</motion.h1>
              </FlipLink>
              ]
            </div>
            <div className="content sm:px-0 px-4">
              <h1 style={{ color: textColor }}>
                <Paragraph />
              </h1>
            </div>
            <div className="mt-14">
              <div className="flex justify-center cursor-pointer px-4">
                <div className="flex justify-between px-4 py-2 uppercase border-black border-t border-b-[1px] mt-5 group text-[16px] items-center w-full">
                  <span className="flex items-center gap-4 group-hover:ml-3 transition-all duration-300 ">
                    <img
                      src={ceo}
                      alt=""
                      className="w-10 h-10 rounded-[3px] object-cover"
                      loading="lazy" 
                    />
                    CEO/Founding Principal{" "}
                  </span>
                  <span className="group-hover:mr-3 transition-all duration-300">
                    <img src={arrow} alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div>
              <motion.div style={{ scale: scale2 }} className="w-full mx-auto">
                <img src={no1} alt="" className="large-img" loading="lazy"  />
                <div className="img-text">
                  <p>01</p>
                  <p>Herb One | Aug 2020 | 500,000 sqft</p>
                </div>
              </motion.div>
            </div>
          </section>

          <section className=" p-7 max-w-[1440px] mx-auto" id="buildings">
            <div>
              <h1 className="font-semibold text-[16.5rem] text-center text-[#E7E7E7] md:text-[8.5rem] lg:text-[11.5rem] xl:text-[13.5rem] sm:text-[15vw]">
                PROJECTS
              </h1>
              <div className="heading-left">
                [
                <FlipLink
                  variants={childVariant}
                  className="body w-fit sm:hidden"
                >
                  <motion.h1 className="px-[2px]">BUILDINGS</motion.h1>
                </FlipLink>
                ]
              </div>
            </div>
            <div className="grid sm:grid-cols-1 grid-cols-2 mt-10 text-wrap cursor-pointer pl-4">
              <div
                className="space-y-3 text-[#000000] sm:text-[1.5rem] smm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] text-[50px]"
              >
                {[
                  "Skyline Residences",
                  "The Caramel Handmade",
                  "Axis Business Park",
                  "Wellness Institute",
                  "Pioneer University",
                  "Nexus Convention Hall",
                  "Herb One",
                  "City Garden Pavilion",
                  "Aurora of Art",
                  "Elysian Estate",
                  "Green Haven Villa",
                ].map((title, index) => (
                  <motion.h1
                    key={index}
                    variants={childVariantX}
                    className="hover:ml-10 transition-all duration-300 flex items-center gap-5 relative group"
                  >
                    {title}
                    <motion.span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center">
                      <img src={arrow} alt="" className="w-4 mt-2" />
                    </motion.span>
                  </motion.h1>
                ))}
              </div>

              <div className=" w-[600px] space-y-24 md:space-y-10 lg:space-y-16 sm:space-y-14 space-x-32 sm:space-x-0  md:space-x-0 lg:space-x-0 sm:hidden">
                {[
                  { img: no2, title: "The Caramel Handmade", date: "Sep 2020" },
                  { img: no3, title: "Wellness Institute", date: "Jul 2021" },
                  {
                    img: no4,
                    title: "Pioneer University",
                    date: "Apr 2022",
                  },
                  { img: no5, title: "Aurora of Art", date: "Oct 2021" },
                  {
                    img: no6,
                    title: "Nexus Convention Hall",
                    date: "Feb 2019",
                  },
                ].map((item, index) => (
                  <div
                    viewport={{ once: true }}
                    className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                  >
                    <div className="w-[150px]">
                      <img
                        src={item.img}
                        alt=""
                        className="object-cover w-[150px] h-[75px] rounded-[10px]"
                        loading="lazy" 
                      />
                      <div className="img-text">
                        <p>0{index + 2}</p>
                        <p className="leading-3 text-right">
                          {item.title} <br />
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <motion.div style={{ scale: scale3 }} className="w-full mx-auto">
                <img src={no7} alt="" className="large-img" loading="lazy" />
                <div className="img-text">
                  <p>07</p>
                  <p>Axis Business Park | Sep 2018 | 675,000 sqft</p>
                </div>
              </motion.div>
            </div>
          </section>

          <section className=" overflow-visible" id="careers">
            <div className="p-7 max-w-[1440px] mx-auto sticky">
              <div>
                <h1 className="font-semibold text-[16.5rem] leading-[95%] text-[#E7E7E7] md:text-[8.5rem] lg:text-[11.5rem] xl:text-[13.5rem] sm:text-[20vw]">
                  Be Part of Our Crew
                </h1>
                <div className="heading">
                  [
                  <FlipLink
                    variants={childVariant}
                    className="body w-fit sm:hidden"
                  >
                    <motion.h1 className="px-[2px]">CAREERS</motion.h1>
                  </FlipLink>
                  ]
                </div>
              </div>
            </div>
            <div className="bg-[#EBE6DB] w-screen">
              <div className=" sm:p-8 p-20 md:p-10 max-w-[1440px] mx-auto">
                <div className="grid sm:grid-cols-1 grid-cols-2">
                  <div className="w-fit flex justify-between flex-col md:w-[300px]">
                    <p className="sm:w-auto max-w-[400px] text-[18px] md:text-[14px] sm:text-[14px]">
                      At Essentia, we believe that our people are our greatest
                      asset. We’re passionate about creating a culture that
                      encourages growth, collaboration, and innovation. Join our
                      team, and let’s build something extraordinary together.
                    </p>
                    <img
                      src={career}
                      alt=""
                      className="object-cover w-[400px] h-[300px] rounded-[10px] sm:mt-10"
                      loading="lazy" 
                    />
                  </div>
                  <div className="flex-col text-[16px] sm:mt-20 space-y-2 ">
                    <div className="sm:text-[12px] h-fit">
                      <hr className="line"></hr>
                      <div className="flex justify-between px-2 py-2 md:text-[14px]">
                        <div className="flex items-center">
                          <h1 className="uppercase">
                            <FlipLink>Structural engineer </FlipLink>
                          </h1>
                        </div>
                        <div className="flex justify-center cursor-pointer gap-2">
                          <FlipLink>Apply Now</FlipLink>
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                      <hr className="line"></hr>
                    </div>
                    <div className="sm:text-[12px] h-fit">
                      <div className="flex justify-between px-2 py-2 md:text-[14px]">
                        <div className="flex items-center uppercase">
                          <FlipLink>Project Architect </FlipLink>
                        </div>
                        <div className="flex justify-center cursor-pointer gap-2">
                          <FlipLink>Apply Now</FlipLink>
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                      <hr className="line"></hr>
                    </div>
                    <div className="sm:text-[12px] h-fit">
                      <div className="flex justify-between px-2 py-2 md:text-[14px]">
                        <div className="flex items-center uppercase">
                          <FlipLink>Engineer Program</FlipLink>
                        </div>
                        <div className="flex justify-center cursor-pointer gap-2">
                          <FlipLink>Apply Now</FlipLink>
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                      <hr className="line"></hr>
                    </div>
                    <div className="sm:text-[12px] h-fit">
                      <div className="flex justify-between px-2 py-2 md:text-[14px]">
                        <div className="flex items-center">
                          <h1 className="uppercase">
                            <FlipLink>Paid Internships</FlipLink>
                          </h1>
                        </div>
                        <div className="flex justify-center cursor-pointer gap-2">
                          <FlipLink>Apply Now</FlipLink>
                          <img src={arrow} alt="" />
                        </div>
                      </div>
                      <hr className="line"></hr>
                    </div>
                    <div className="h-fit">
                      <div className="flex justify-end my-2">
                        <div className="cursor-pointer underline">
                          <p className="text-[14px] sm:text-[10px] md:text-[12px]">
                            See More
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end h-[250px] sm:h-[150px]">
                      <div className="flex sm:text-[12px] space-x-10">
                        <div className=" md:text-[12px]">
                          <h1 className="flex gap-2 ">
                            {" "}
                            <img src={arrow2} alt="" className="w-[6px]" /> Full
                            Medical Coverage
                          </h1>
                          <h1 className="flex gap-2">
                            {" "}
                            <img src={arrow2} alt="" className="w-[6px]" /> Paid
                            Training
                          </h1>
                          <h1 className="flex gap-2">
                            {" "}
                            <img src={arrow2} alt="" className="w-[6px]" />{" "}
                            Certification Programs
                          </h1>
                        </div>
                        <div className=" md:text-[12px]">
                          <h1 className="flex gap-2">
                            {" "}
                            <img src={arrow2} alt="" className="w-[6px]" />{" "}
                            Hybrid Work Schedule
                          </h1>
                          <h1 className="flex gap-2">
                            {" "}
                            <img src={arrow2} alt="" className="w-[6px]" /> Paid
                            Time Off
                          </h1>
                          <h1 className="flex gap-2">
                            {" "}
                            <img src={arrow2} alt="" className="w-[6px]" />
                            Competitive Salary
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contact" id="contact" loading="lazy" >
            <div className="sm:p-8 p-20 md:p-8 max-w-[1440px] mx-auto text-white">
              <div className="heading-left-contact ">
                [
                <FlipLink
                  variants={childVariant}
                  className="body w-fit sm:hidden"
                >
                  <motion.h1 className="px-[2px]">CONTACT</motion.h1>
                </FlipLink>
                ]
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-1 md:gap-5 lg:gap-5 gap-20 sm:gap-[0px]">
                <div className="">
                  <h1 className=" sm:text-[2rem] leading-[125%] mt-10 mb-5 text-[2.5rem] md:text-[2rem]">
                    Bringing Your Vision to Life Starts Here
                  </h1>
                  <div className="border-b-[0.2px] border-white w-fit">
                    <h2 className="flex mr-4 text-[18px] sm:text-[14px] md:text-[14px]">
                      {" "}
                      <img src={line} alt="" className="mr-2" />
                      info@essengineering.com
                    </h2>
                  </div>
                  <div className="my-10">
                    <p className="text-[18px] sm:text-[14px] md:text-[14px] md:w-[200px] lg:w-[250px] w-[350px] sm:w-fit">
                      We’d love to hear from you. Whether you’re interested in
                      collaborating with us on a project, joining our team, or
                      simply want to learn more about our work, please don’t
                      hesitate to reach out.
                    </p>
                  </div>
                </div>

                <div className="md:mx-6 lg:mx-6 mt-10 ">
                  <div className="sm:text-[20px] h-fit">
                    <Link to="about" smooth={true} duration={2000}>
                      <div className="flex justify-between px-2 py-2 text-[24px] group cursor-pointer">
                        <div className="flex items-center group-hover:ml-2 transition-all duration-300 ease-in-out">
                          <a className="uppercase" href="#about">
                            about
                          </a>{" "}
                        </div>
                        <div className="flex justify-center cursor-pointer group-hover:mr-2 transition-all duration-300 ease-in-out">
                          <img src={arrow3} alt="" />
                        </div>
                      </div>
                    </Link>
                    <hr className="line"></hr>
                  </div>

                  <div className="sm:text-[20px] h-fit">
                    <Link to="buildings" smooth={true} duration={2000}>
                      <div className="flex justify-between px-2 py-2 text-[24px] group cursor-pointer">
                        <div className="flex items-center group-hover:ml-2 transition-all duration-300 ease-in-out">
                          <a className="uppercase" href="#buildings">
                            buildings
                          </a>{" "}
                        </div>
                        <div className="flex justify-center cursor-pointer group-hover:mr-2 transition-all duration-300 ease-in-out">
                          <img src={arrow3} alt="" />
                        </div>
                      </div>
                    </Link>
                    <hr className="line"></hr>
                  </div>
                  <div className="sm:text-[20px] h-fit">
                    <Link to="careers" smooth={true} duration={2000}>
                      <div className="flex justify-between px-2 py-2 text-[24px] group cursor-pointer">
                        <div className="flex items-center group-hover:ml-2 transition-all duration-300 ease-in-out">
                          <a className="uppercase" href="#careers">
                            careers
                          </a>{" "}
                        </div>
                        <div className="flex justify-center cursor-pointer group-hover:mr-2 transition-all duration-300 ease-in-out">
                          <img src={arrow3} alt="" />
                        </div>
                      </div>
                    </Link>
                    <hr className="line"></hr>
                  </div>
                  <div className="sm:text-[20px] h-fit">
                    <Link to="contact" smooth={true} duration={2000}>
                      <div className="flex justify-between px-2 py-2 text-[24px] group cursor-pointer">
                        <div className="flex items-center group-hover:ml-2 transition-all duration-300 ease-in-out">
                          {" "}
                          <a className="uppercase" href="#contact">
                            contact
                          </a>{" "}
                        </div>
                        <div className="group-hover:mr-2 transition-all duration-300 flex justify-center cursor-pointer">
                          <img src={arrow3} alt="" />
                        </div>
                      </div>
                    </Link>
                    <hr className="line"></hr>
                  </div>
                </div>

                <div className="text-[18px] sm:text-[14px] md:text-[14px] md:mx-auto lg:mx-auto sm:mx-[0px] mx-auto mt-11">
                  <h1 className="text-[#B3B3B3] sm:text-[14px]">Address</h1>
                  <p className="mt-3">
                    123 Meridian Plaza, Suite 450 <br />
                    Harborview District <br />
                    Auckland, New Zealand 1010
                  </p>
                  <p className="mt-5">
                    <span className="text-[#B3B3B3] ">Tel: </span> +64 9 123
                    4567
                  </p>
                  <div className="flex gap-3 mt-3 cursor-pointer">
                    <FlipLink>
                      <FaInstagram className="w-[20px] h-[20px]" />
                    </FlipLink>
                    <FlipLink>
                      <TfiTwitter className="w-[20px] h-[20px]" />
                    </FlipLink>
                    <FlipLink>
                      <FaWhatsapp className="w-[20px] h-[20px]" />
                    </FlipLink>
                  </div>
                  <p className="mt-5 text-[12px]">© 2024</p>
                </div>
              </div>
            </div>
            <div className=" text-[#B3B3B3] text-center sm:mt-20 font-semibold cut-off-text max-h-[1440px]">
              <motion.div
                variants={buildVariant}
                initial="hidden"
                whileInView="show"
                className="responsive-texts flex justify-center"
              >
                <motion.h1 variants={childVariant}>E</motion.h1>
                <motion.h1 variants={childVariant}>S</motion.h1>
                <motion.h1 variants={childVariant}>S</motion.h1>
                <motion.h1 variants={childVariant}>E</motion.h1>
                <motion.h1 variants={childVariant}>N</motion.h1>
                <motion.h1 variants={childVariant}>T</motion.h1>
                <motion.h1 variants={childVariant}>I</motion.h1>
                <motion.h1 variants={childVariant}>A</motion.h1>
              </motion.div>
            </div>
          </section>
        </main>
      </ReactLenis>
    </motion.div>
  );
};
export default Home;
