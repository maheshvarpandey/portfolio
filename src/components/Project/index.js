import React from "react";
import fsdImage from "../../assets/fsdImage.png";
import calImage from "../../assets/calendar.png";
import dazImage from "../../assets/dazzleroad.png";
import oifendImage from "../../assets/oifend.png";
import mmoImage from "../../assets/mmo.png";
import autopartImage from "../../assets/autopart.png";
import logistImage from "../../assets/logist.png";
import { Tag } from "antd";

const projectList = [
  {
    title: "FSD ( Fidelis Sustainability Development )",
    head: "Medical equipment supplier",
    description:
      "I worked as a front-end developer in this project, The technology I used in this project -",
    button: "Read More",
    image: fsdImage,
    user: "Maheshvar Pandey",
    githubUrl: "https://www.fidelissd.com/our-team",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "Ofbiz",
      },
      {
        id: 5,
        name: "FTL",
      },
    ],
  },
  {
    title: "Holiday Calendar",
    head: "Government Holiday Calenday in india",
    githubUrl: "https://holiday-calander.herokuapp.com/",
    description:
      "It was my first react js web application, The technology I used in this project -",
    button: "Read More",
    image: calImage,
    user: "Maheshvar Pandey",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "React JS",
      },
      {
        id: 5,
        name: "Axios",
      },
    ],
  },
  {
    title: "DazzleRoad",
    head: "E-commerce website to sell online jewellery",
    githubUrl: "",
    description:
      "I worked as a front-end developer in this project, The technology I used in this project -",
    button: "Read More",
    image: dazImage,
    user: "Maheshvar Pandey",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "Ofbiz",
      },
      {
        id: 5,
        name: "FTL",
      },
    ],
  },
  {
    title: "OIFend",
    githubUrl: "https://oifend.com",
    head: "Marketting web application",
    description:
      "I made this project as `Mern Stack Developer`, The technology I used in this project -",
    button: "Read More",
    image: oifendImage,
    user: "Maheshvar Pandey",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "React Js",
      },
      {
        id: 5,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "Node JS",
      },
      {
        id: 7,
        name: "Mongo DB",
      },
      {
        id: 8,
        name: "Rest API",
      },
      {
        id: 9,
        name: "Ant Design",
      },
      {
        id: 10,
        name: "Redux Thunk",
      }
    ],
  }, {
    title: "Manage My org",
    githubUrl: "https://app.managemyorg.com",
    head: "Organization Management System",
    description:
      "I worked in this project as a front-end developer.",
    button: "Read More",
    image: mmoImage,
    user: "Maheshvar Pandey",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "React Js",
      },
      {
        id: 5,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "Rest API",
      },
      {
        id: 7,
        name: "Ant Design",
      },
      {
        id: 8,
        name: "React Redux",
      }
    ],
  },
  {
    title: "Logist",
    githubUrl: "https://test-logist.web.app.com",
    head: "Logistics Web Applications",
    description:
      "I worked in this project as a front-end developer.",
    button: "Read More",
    image: logistImage,
    user: "Maheshvar Pandey",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "React Js",
      },
      {
        id: 5,
        name: "Tailwind CSS",
      },
      {
        id: 6,
        name: "Rest API",
      },
      {
        id: 7,
        name: "Ant Design",
      },
      {
        id: 8,
        name: "Redux Saga",
      }
    ],
  },
  {
    title: "The Autopart shop",
    githubUrl: "https://theautopartsshop.com",
    head: "E-Commerce Web Application",
    description:
      "I am working on this project as a front-end developer.",
    button: "Read More",
    image: autopartImage,
    user: "Maheshvar Pandey",
    technology: [
      {
        id: 1,
        name: "HTML",
      },
      {
        id: 2,
        name: "CSS",
      },
      {
        id: 3,
        name: "JavaScript",
      },
      {
        id: 4,
        name: "React Js",
      },
      {
        id: 5,
        name: "Rest API",
      }
    ],
  }
];

function Project() {
  return (
    <div>
      <div className="mx-auto p-4  overflow-y-auto screenHeight">
        <div className="">
          {/* dark theme */}
          {projectList.map((data) => (
            <div className="w-full mx-auto z-10 mb-2">
              <div className="flex flex-col">
                <div className="bg-gray-900 border border-gray-900 shadow-lg  rounded-3xl p-2 lg:p-4 lg:m-4">
                  <div className="flex-none sm:flex">
                    <div className=" relative lg:h-32 lg:w-32 sm:mb-0 mb-3">
                      <img
                        src={data.image}
                        alt="FSD ( Fidelis Sustainability Development )"
                        className="border-2 border-gray-500 md:w-32 md:h-32 lg:w-32 lg:h-32 object-revert rounded-2xl"
                      />
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                      <div className="flex items-left justify-between sm:mt-2">
                        <div className="flex items-left">
                          <div className="flex flex-col">
                            <div className="w-full flex-none text-lg text-gray-200 font-bold text-left leading-none">
                              {data.title}
                            </div>
                            <div className="flex-auto text-left text-gray-400 my-1">
                              <span className="mr-3 ">{data.head}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex pt-2  text-sm text-gray-400">
                        <div className="text-left">
                          <p>{data.description}</p>
                          <div className="flex flex-wrap text-left mb-2">
                            {data.technology.map((tech) => (
                              <div className="">
                                <Tag color="green">{tech.name}</Tag>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      {data.githubUrl && (
                        <button className="flex-no-shrink float-right bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">
                          <a
                            href={data.githubUrl}
                            target="_blank"
                            style={{ color: "white" }}
                          >
                            See more..{" "}
                          </a>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            style={{ width: "300px" }}
            className="flex-no-shrink mb-4 bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-lg shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
          >
            <a
              href="https://github.com/maheshvarpandey?tab=repositories"
              target="_blank"
              className="text-white hover:text-white"
            >
              {" "}
              View all{" "}
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
