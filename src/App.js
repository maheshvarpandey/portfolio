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
import { Affix } from "antd";


function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [showButton, setShowButton] = useState(false);
  const [bgColor, setBgColor] = useState("bg-gray-400");
  const Home = () => (
    <Slider className="slider-wrapper overflow-y-auto w-full screenHeight">
      <div className="lg:px-8">
        <Project />
      </div>
      <div className="lg:px-8">
        <Resume />
      </div>
      <div className="lg:px-8">
        <ContactUs />
      </div>
      <div className="lg:px-8">
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
					className={`h-screen w-screen ${bgColor} overflow-hidden absolute flex items-center`}>
					<div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
					<div className="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full" />
					<div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full" />
					<div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
				</div>
				<div className="container mx-auto h-screen pt-4 lg:pt-20 px-8 relative">
					<Affix>
						<div
							className="float-right p-4 cursor-pointer lg:hidden"
							onClick={() => setShowButton(!showButton)}>
							{!showButton ? (
								<img
									alt=""
                  className="h-30 w-30"
									src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-color-tal-revivo.png"
								/>
							) : (
								<img alt="" style={{height: '24px', width: '24px'}} src="https://img.icons8.com/nolan/64/delete-sign.png" />
							)}
						</div>
					</Affix>
					<div className="w-full rounded-lg lg:overflow-hidden overflow-auto lg:flex-col flex-col shadow-2xl">
						{showButton && (
							<>
								<div className="lg:hidden p-4 justify-between items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
									<a
										target="_blank"
										href="//api.whatsapp.com/send?phone=919814639815&text=From your web aplication"
										className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
										rel="noreferrer">
										<img
											alt=""
											style={{ height: "45px" }}
											src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-call-contact-us-flatart-icons-flat-flatarticons-3.png"
										/>
										<div className="text-left ml-2">
											<div className="mb-1 text-xs">+91-9559014486</div>
											<div className="-mt-1 font-sans text-sm font-semibold">
												WhatsApp only
											</div>
										</div>
									</a>

									<a
										target="_blank"
										href="https://www.linkedin.com/in/maheshvar-pandey-257230149/"
										className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
										rel="noreferrer">
										<img
											alt=""
											style={{ height: "45px" }}
											src="https://img.icons8.com/fluency/48/000000/linkedin.png"
										/>
										<div className="text-left ml-2">
											<div className="mb-1 text-xs">Maheshvar Pandey</div>
											<div className="-mt-1 font-sans text-sm font-semibold">
												Connect me
											</div>
										</div>
									</a>

									<a
										target="_blank"
										href="mailto:mkp10697@gmail.com"
										className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg  items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
										rel="noreferrer">
										<img
											alt=""
											style={{ height: "40px" }}
											src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-gradient-kiranshastry-1.png"
										/>
										<div className="text-left ml-4">
											<div className="mb-1 text-xs">mkp10697@gmail.com</div>
											<div className="-mt-1 font-sans text-sm font-semibold">
												Email me
											</div>
										</div>
									</a>
								</div>
								<div>
									<div className="py-2 px-1 flex bg-none border-l-0 border-t-4 border-b-4 border-indigo-400 justify-center shadow-2xl flex-row">
										<div>
											<button
												type="button"
												onClick={() => {
													setBgColor("bg-gray-500");
													setActiveTab("Home");
												}}
												className="text-white border border-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
												Home
											</button>
											<button
												type="button"
												onClick={() => {
													setBgColor("bg-blue-500");
													setActiveTab("Resume");
												}}
												className="py-2 px-4 mr-2 mb-2 text-sm font-medium text-white bg-blue-500 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
												Resume
											</button>
											<button
												type="button"
												onClick={() => {
													setBgColor("bg-indigo-500");
													setActiveTab("Contact");
												}}
												className="text-white border border-white bg-indigo-500 hover:bg-indigo-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700">
												Contact Me
											</button>
											<button
												type="button"
												onClick={() => {
													setBgColor("bg-blue-500");
													setActiveTab("Intrest");
												}}
												className="text-gray-900 bg-blue-500 border border-blue-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
												Intrest
											</button>
										</div>

										{/* <button
											className="bg-gray-500 sideWidth h-30 w-30 transition-all rounded-full mb-2 outline-none focus:outline-none"
											theme-button="gray"
											onClick={() => {
												setBgColor("bg-gray-500");
												setActiveTab("Home");
											}}
											title="Home">
											{" "}
											<HomeFilled />{" "}
										</button> */}
										{/* <button
											className="bg-blue-500 sideWidth h-30 w-30 transition-all rounded-full mb-2 outline-none focus:outline-none"
											theme-button="pink"
											onClick={() => {
												setBgColor("bg-blue-500");
												setActiveTab("Resume");
											}}
											title="Resume">
											{" "}
											<FilePdfFilled />{" "}
										</button> */}

										{/* <button
											className="bg-indigo-500 sideWidth h-30 w-30 transition-all rounded-full mb-2 outline-none focus:outline-none"
											theme-button="indigo"
											onClick={() => {
												setBgColor("bg-indigo-500");
												setActiveTab("Contact");
											}}
											title="Contact Me">
											{" "}
											<CopyFilled />{" "}
										</button> */}

										{/* <button
											className="bg-blue-500 sideWidth h-30 w-30 transition-all rounded-full mb-2 outline-none focus:outline-none"
											theme-button="blue"
											onClick={() => {
												setBgColor("bg-blue-500");
												setActiveTab("Intrest");
											}}
											title="Intrest">
											{" "}
											<CustomerServiceFilled />{" "}
										</button> */}
									</div>
								</div>
							</>
						)}

						<div className="hidden lg:flex w-full">
							<div className="sm:d-block lg:flex-1 bg-green-200 px-2 py-1">
								<div className="flex justify-between">
									<div>
										<PhoneFilled className="-mt-2" style={{ color: "green" }} />{" "}
										<span className="pl-2 font-bold">+91-9559014486</span>
									</div>
									<div className="cursor-pointer">
										<a
											target="_blank"
											href="//api.whatsapp.com/send?phone=919814639815&text=From your web aplication"
											rel="noreferrer">
											<img
												src="https://img.icons8.com/ios/50/000000/whatsapp--v5.png"
												style={{ height: "20px" }}
												alt=""
												className="mt-1"
											/>
										</a>
									</div>
								</div>
							</div>

							<div className="sm:d-block lg:flex-1 bg-gray-400">
								<div className="font-bold py-1 border-l-2 border-r-2 border-black text-lg text-center ">
									{activeTab}
								</div>
							</div>
							<div className="sm:d-block lg:flex-1 bg-blue-200 px-2 py-1">
								<MailFilled className="-mt-2" style={{ color: "blue" }} />{" "}
								<span className="pl-2 font-bold">mkp10697@gmail.com</span>
							</div>
						</div>
						<div className="text-center font-extrabold text-3xl justify-center items-center w-full">
							{renderData()}
						</div>
					</div>
				</div>
				<div className="invisible lg:visible fixed h-screen right-0 top-0 items-center flex">
					<div className="py-2 px-1 bg-none border-l-0 border-t-4 border-b-4 border-indigo-400 inline-flex items-center rounded-tl-lg shadow-2xl rounded-bl-lg  flex-col">
						<button
							className="bg-gray-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
							theme-button="gray"
							onClick={() => {
								setBgColor("bg-gray-500");
								setActiveTab("Home");
							}}
							title="Home">
							{" "}
							<HomeFilled />{" "}
						</button>
						<button
							className="bg-blue-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
							theme-button="pink"
							onClick={() => {
								setBgColor("bg-blue-500");
								setActiveTab("Resume");
							}}
							title="Resume">
							{" "}
							<FilePdfFilled />{" "}
						</button>

						<button
							className="bg-indigo-500 sideWidth h-8 w-6 transition-all rounded-full mb-2 outline-none focus:outline-none"
							theme-button="indigo"
							onClick={() => {
								setBgColor("bg-indigo-500");
								setActiveTab("Contact");
							}}
							title="Contact Me">
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
							title="Intrest">
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
