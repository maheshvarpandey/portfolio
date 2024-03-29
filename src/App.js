/* eslint-disable react-hooks/exhaustive-deps */
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
// import About from "./components/About";
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
import { Affix, notification, Tooltip } from "antd";
import moment from 'moment';

function App() {
	const [activeTab, setActiveTab] = useState("About");
	const [showButton, setShowButton] = useState(false);
	const [bgColor, setBgColor] = useState("bg-gray-400");
	const Home = () => (
		<Slider autoplay={3000} className="w-full overflow-y-auto slider-wrapper screenHeight">
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
		</Slider>
	);
	const openNotificationWithIcon = type => {
		notification[type]({
		  message: 'Suggestion',
		  description:
			'Please view the particular view from the menu section by clicking on the top icons',
		});
	  };

	useEffect(()=>{
		console.log('logging path',window);
		if(window.innerWidth < 500) {
			openNotificationWithIcon('info');
		}
	}, [window.innerWidth])

	const renderData = () => {
		switch (activeTab) {
			// case "Home": {
			// 	return <Home />;
			// }
			case "About": {
				return <Project />;
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
		setShowButton(false)
	}, [activeTab]);

	const getGreeting = () => {
		var today = new Date();
		var curHr = today.getHours();

		if (curHr < 12) {
			return "Good Morning 🌞"+ moment(today).format('LT');
		} else if (curHr < 18) {
			return "Good Afternoon 🌞"+ moment(today).format('LT');
		} else {
			return "Good Evening 😊"+ moment(today).format('LT');
		}
	};
	

	return (
		<div className="">
			<div>
				<div
					className={`h-screen w-screen ${bgColor} overflow-hidden absolute flex items-center`}>
					<div className="absolute top-0 left-0 w-screen h-64 -mx-64 -my-40 bg-indigo-300 rounded-full opacity-50" />
					<div className="w-64 h-64 -mx-32 bg-indigo-300 rounded-full opacity-50" />
					<div className="relative w-64 h-64 ml-auto -mr-32 bg-indigo-300 rounded-full opacity-50" />
					<div className="absolute bottom-0 right-0 w-screen h-64 -mx-64 -my-40 bg-indigo-300 rounded-full opacity-50" />
				</div>
				<div className="container relative h-screen px-0 pt-2 mx-auto lg:pt-20 lg:px-8">
					<Affix>
						<div
							className="px-4 pt-1 pb-2 shadow-xl cursor-pointer lg:hidden"
							onClick={() => setShowButton(!showButton)}>
							<div className="flex justify-between">
								<div className="text-sm font-extrabold text-white">
									{getGreeting()}
									{/* <span className="px-1">{currentTime}</span> */}
									<i className="pl-2 underline">Maheshvar</i>
								</div>
								<div>
									{!showButton ? (
										<img
											alt=""
											className="h-30 w-30"
											src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-horizontal-separated-bars-representing-hamburger-menu-layout-grid-color-tal-revivo.png"
										/>
									) : (
										<img
											alt=""
											style={{ height: "24px", width: "24px" }}
											src="https://img.icons8.com/nolan/64/delete-sign.png"
										/>
									)}
								</div>
							</div>
						</div>
					</Affix>
					<div className="flex-col w-full overflow-auto rounded-lg shadow-2xl lg:overflow-hidden lg:flex-col">
						{showButton && (
							<>
								<div className="items-center justify-between p-4 space-y-4 lg:hidden sm:flex sm:space-y-0 sm:space-x-4">
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
										<div className="ml-2 text-left">
											<div className="mb-1 text-xs">Chat with me</div>
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
										<div className="ml-2 text-left">
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
										<div className="ml-4 text-left">
											<div className="mb-1 text-xs">mkp10697@gmail.com</div>
											<div className="-mt-1 font-sans text-sm font-semibold">
												Email me
											</div>
										</div>
									</a>
								</div>
								<div>
									<div className="flex flex-row justify-center px-1 py-2 border-t-4 border-b-4 border-l-0 border-indigo-400 shadow-2xl bg-none">
										<div>
											{/* <button
												type="button"
												onClick={() => {
													setBgColor("bg-gray-500");
													setActiveTab("Home");
												}}
												className="text-white border border-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
													Home
											</button> */}
											<button
												type="button"
												onClick={() => {
													setBgColor("bg-gray-500");
													setActiveTab("About");
												}}
												className="px-4 py-2 mb-2 mr-2 text-sm font-medium text-black bg-gray-200 border border-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
												Projects
											</button>
											<button
												type="button"
												onClick={() => {
													setBgColor("bg-blue-500");
													setActiveTab("Resume");
												}}
												className="px-4 py-2 mb-2 mr-2 text-sm font-medium text-white bg-blue-500 border border-gray-200 rounded-full hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
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
									</div>
								</div>
							</>
						)}
						<h1 className="px-6 pt-2">Maheshvar Kumar Pandey, React JS Developer, Angular 12, Tailwind CSS</h1>
						<div className="hidden w-full lg:flex">
							<div className="px-2 py-1 bg-green-200 sm:d-block lg:flex-1">
							<a
											target="_blank"
											href="//api.whatsapp.com/send?phone=919814639815&text=Hi Maheshvar Pandey from web!"
											rel="noreferrer">
								<div className="flex justify-between">
									<div>
										<PhoneFilled className="-mt-2" style={{ color: "green" }} />{" "}
										<span className="pl-2 font-bold">Chat with me</span>
									</div>
									<div className="cursor-pointer">
										<a
											target="_blank"
											href="//api.whatsapp.com/send?phone=919814639815&text=Hi Maheshvar Pandey from web!"
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
								</a>
							</div>

							<div className="bg-gray-400 sm:d-block lg:flex-1">
								<div className="py-1 text-lg font-bold text-center border-l-2 border-r-2 border-black ">
									{getGreeting()}
									{/* <span>{currentTime}</span> */}
									<i className="pl-2 underline">Maheshvar</i>
								</div>
							</div>
							<div className="px-2 py-1 bg-blue-200 sm:d-block lg:flex-1">
								<MailFilled className="-mt-2" style={{ color: "blue" }} />{" "}
								<span className="pl-2 font-bold">mkp10697@gmail.com</span>
							</div>
						</div>
						<div className="items-center justify-center w-full text-3xl font-extrabold text-center">
							{renderData()}
						</div>
					</div>
				</div>
				<div className="fixed top-0 right-0 flex items-center invisible w-12 h-screen lg:visible">
					<div className="inline-flex flex-col items-center px-1 py-2 border-t-4 border-b-4 border-l-0 border-indigo-400 rounded-tl-lg rounded-bl-lg shadow-2xl bg-none">
						<Tooltip placement="left" color={"gray"} title={"Home"}>
							<button
								className="w-20 h-12 mb-2 transition-all bg-gray-500 rounded-lg outline-none sideWidth focus:outline-none"
								theme-button="gray"
								onClick={() => {
									setBgColor("bg-gray-500");
									setActiveTab("Home");
								}}
								title="Home">
								{" "}
								<HomeFilled />{" "}
							</button>
						</Tooltip>
						<Tooltip placement="left" color={"blue"} title={"Resume"}>
							<button
								className="w-20 h-12 mb-2 transition-all bg-blue-500 rounded-lg outline-none sideWidth focus:outline-none"
								theme-button="blue"
								onClick={() => {
									setBgColor("bg-blue-500");
									setActiveTab("Resume");
								}}
								title="Resume">
								{" "}
								<FilePdfFilled />{" "}
							</button>
						</Tooltip>

						<Tooltip placement="left" color={"indigo"} title={"Contact Me"}>
							<button
								className="w-20 h-12 mb-2 transition-all bg-indigo-500 rounded-lg outline-none sideWidth focus:outline-none"
								theme-button="indigo"
								onClick={() => {
									setBgColor("bg-indigo-500");
									setActiveTab("Contact");
								}}
								title="Contact Me">
								{" "}
								<CopyFilled />{" "}
							</button>
						</Tooltip>

						<Tooltip placement="left" color={"blue"} title={"Intrest"}>
							<button
								className="w-20 h-12 mb-2 transition-all bg-blue-500 rounded-lg outline-none sideWidth focus:outline-none"
								theme-button="blue"
								onClick={() => {
									setBgColor("bg-blue-500");
									setActiveTab("Intrest");
								}}
								title="Intrest">
								{" "}
								<CustomerServiceFilled />{" "}
							</button>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
