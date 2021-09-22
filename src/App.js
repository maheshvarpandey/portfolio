import React, { useState, useEffect } from "react";
import {
  HomeFilled,
  PhoneFilled,
  MailFilled,
  CopyFilled,
  CustomerServiceFilled,
  FilePdfFilled,
} from "@ant-design/icons";
import Slider from "react-animated-slider";
import About from "./components/About";
import Certification from "./components/Certification";
import Education from "./components/Education";
import Intrest from "./components/Intrest";
import Resume from "./components/Resume";
import Project from "./components/Project";
import "react-animated-slider/build/horizontal.css";
import "./SliderStyle/slider-animations.css";
import "./SliderStyle/styles.css";
import "./App.css";
import ContactUs from "./components/ContactUs";


function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [bgColor, setBgColor] = useState("bg-gray-400");
  const Home = () => (
    <Slider className="slider-wrapper overflow-y-auto w-full screenHeight">
      <div className="px-8">
        <Project />
      </div>
      <div className="px-8">
        <Resume />
      </div>
      <div className="px-8">
        <ContactUs />
      </div>
      <div className="px-8">
        <Intrest />
      </div>
      {/* {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: `url('${item.image}') no-repeat center center` }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button className="buttonSlider">{item.button}</button>
          </div>
          <section className="text-center justify-center">
            <img
              className="text-center h-20 w-20"
              src={myImage}
              alt="Maheshvar"
            />
            <span className="text-center">
              Posted by <strong>Maheshvar</strong>
            </span>
          </section>
        </div>
      ))} */}
    </Slider>
  );

  const renderData = () => {
    switch (activeTab) {
      case "Home": {
        return <Home />;
      }
      case "About": {
        return <About />;
      }
      case "Resume": {
        return <Resume />;
      }
      case "Education": {
        return <Education />;
      }
      case "Certifications": {
        return <Certification />;
      }
      case "Contact": {
        return <ContactUs bgColor={bgColor} />;
      }
      case "Intrest": {
        return <Intrest />;
      }
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    renderData();
  }, [activeTab]);

  //   const allElements = document.querySelectorAll('*:not([theme-button]):not([class*="gray"])');
  // const themeButtons = document.querySelectorAll('[theme-button]');
  // const escapeRegExp = (string) =>  string?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // const replaceAll = (str, term, replacement) => str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
  // let currTheme = 'indigo';

  // const changeTheme = (theme) => {
  //   allElements.forEach((element) => {
  //     console.log("jj");
  //     if (element.getAttribute('class') !== null) {
  //       const newClasses = replaceAll(element.getAttribute('class'), currTheme, theme);
  //       element.setAttribute('class', newClasses);
  //     }
  //   });
  //   currTheme = theme;
  // }

  // themeButtons.forEach((button) => {
  //    button.addEventListener('click', (e) => {
  //   changeTheme(e.target.getAttribute('theme-button'));
  //   });
  // });

  return (
    <div className="">
      <div>
        <div
          className={`h-screen w-screen ${bgColor} overflow-hidden absolute flex items-center`}
        >
          <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
          <div className="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full" />
          <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full" />
          <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
        </div>
        <div className="container mx-auto h-screen pt-20 px-8 relative">
          <div className="flex w-full rounded-lg lg:overflow-hidden overflow-auto lg:flex-col flex-col shadow-2xl">
            <div className="flex">
              <div className="flex-1 bg-green-200 px-2 py-1">
                <PhoneFilled className="-mt-2" style={{ color: "green" }} />{" "}
                <span className="pl-2 font-bold">+91-9559014486</span>
              </div>

              <div className="flex-1">
                <div className="font-bold py-1 border-l-2 border-r-2 border-black text-lg text-center bg-yellow-300">
                  {activeTab}
                  {/* <div className="flex-1">
                    <button className="bg-blue-200 h-8 w-full transition-all outline-none focus:outline-none" theme-button="gray" onClick={()=>setActiveTab('home')} title="Home"> 
                      <FacebookFilled /> 
                    </button>
                 </div>
                 <div className="flex-1">
                    <button className="bg-blue-400 h-8 w-full transition-all outline-none focus:outline-none" theme-button="gray" onClick={()=>setActiveTab('home')} title="Home"> 
                      <TwitterCircleFilled /> 
                    </button>
                 </div>
                 <div className="flex-1">
                    <button className="bg-red-200 h-8 w-full transition-all outline-none focus:outline-none" theme-button="gray" onClick={()=>setActiveTab('home')} title="Home"> 
                      <InstagramFilled /> 
                    </button>
                 </div> */}
                </div>
              </div>
              <div className="flex-1 bg-blue-200 px-2 py-1">
                <MailFilled className="-mt-2" style={{ color: "blue" }} />{" "}
                <span className="pl-2 font-bold">mkp10697@gmail.com</span>
              </div>
            </div>
            <div className="text-center font-extrabold text-3xl justify-center items-center w-full">
              {renderData()}
            </div>
          </div>
        </div>
        <div className="fixed h-screen right-0 top-0 items-center flex">
          <div className="py-2 px-1 bg-none border-l-0 border-t-4 border-b-4 border-indigo-400 inline-flex items-center rounded-tl-lg shadow-2xl rounded-bl-lg  flex-col">
            <button
              className="bg-gray-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="gray"
              onClick={() => {
                setBgColor("bg-gray-500");
                setActiveTab("Home");
              }}
              title="Home"
            >
              {" "}
              <HomeFilled />{" "}
            </button>
            {/* <button
              className="bg-red-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="red"
              onClick={() => {
                setBgColor("bg-red-500");
                setActiveTab("About");
              }}
              title="About"
            >
              {" "}
              <InfoCircleFilled />{" "}
            </button> */}
            <button
              className="bg-pink-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="pink"
              onClick={() => {
                setBgColor("bg-pink-500");
                setActiveTab("Resume");
              }}
              title="Resume"
            >
              {" "}
              <FilePdfFilled />{" "}
            </button>
            {/* <button
              className="bg-purple-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="purple"
              onClick={() => {
                setBgColor("bg-purple-500");
                setActiveTab("Education");
              }}
              title="Education"
            >
              {" "}
              <EditFilled />{" "}
            </button> */}
            {/* <button
              className="bg-green-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="green"
              onClick={() => {
                setBgColor("bg-green-500");
                setActiveTab("Certifications");
              }}
              title="Certification"
            >
              {" "}
              <FileTextFilled />{" "}
            </button> */}
            <button
              className="bg-indigo-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="indigo"
              onClick={() => {
                setBgColor("bg-indigo-500");
                setActiveTab("Contact");
              }}
              title="Contact Me"
            >
              {" "}
              <CopyFilled />{" "}
            </button>

            <button
              className="bg-blue-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
              theme-button="blue"
              onClick={() => {
                setBgColor("bg-blue-500");
                setActiveTab("Intrest");
              }}
              title="Intrest"
            >
              {" "}
              <CustomerServiceFilled />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
