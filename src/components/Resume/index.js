import React from "react";
import { Tabs } from "antd";
import myImage from "../../assets/maheshvar.png";
// import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
// import Project from "../Project";
// import './index.less'

const { TabPane } = Tabs;

function Resume() {
  return (
    <div className="mt-8 mx-8 overflow-y-auto" style={{height: '70vh'}} >
      {/* <Tabs defaultActiveKey="2" type="card">
        <TabPane
          tab={
            <span>
              <AppleOutlined />
              Basic Information
            </span>
          }
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Education
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Experience
            </span>
          }
          key="3"
        >
          Tab 3
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Projects
            </span>
          }
          key="4"
        >
          <div className="overflow-y-auto" style={{height: '70vh'}} >
            <Project />
          </div>
        </TabPane>
        <TabPane
          tab={
            <span>
              <AndroidOutlined />
              Certifications
            </span>
          }
          key="5"
        >
          Tab 5
        </TabPane>
      </Tabs> */}
      <div className="py-4 px-8 bg-white shadow-lg rounded-lg mt-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src={myImage}
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            Software Developer
          </h2>
          <p className="mt-2 text-gray-600 text-lg font-medium text-left">
            Hello there! Before talking about qualifications and professional
            abilities, I would like to introduce myself. I am <strong>Maheshvar Kumar Pandey </strong> and I
            am from India. Taking web development as a profession not only
            fulfils my pocket but also my heart because it has been my passion
            since my early teenage. I believe that people should do things in
            which they are good at or in which their heart lays.
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-indigo-500">
            ~ Maheshvar Kumar Pandey
          </a>
        </div>
      </div>
    
      <div className="flex items-center justify-center ">
          <div className="w-full mb-2 justify-center rounded-lg text-gray-600">
            <h3 className="text-white p-3 md:text-2xl lg:text-2xl text-lg" />
            <div className="py-5 pt-1 flex-wrap  flex items-center gap-2 justify-center">
              <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                <div className="md:p-7 p-4">
                  <h2 className="text-xl text-center text-gray-200 capitalize">
                    8+
                  </h2>
                  <h3 className="text-sm  text-gray-400  text-center">
                    Projects
                  </h3>
                </div>
              </div>
              <div className="bg-gradient-to-r flex-auto w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                <div className="md:p-7 p-4">
                  <h2 className="text-xl text-center text-gray-200 capitalize">
                    500+
                  </h2>
                  <h3 className="text-sm  text-gray-400  text-center">
                    Working hours
                  </h3>
                </div>
              </div>
              <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                <div className="md:p-7 p-4">
                  <h2 className="text-lg text-center text-gray-200 capitalize">
                    5 Days
                  </h2>
                  <h3 className="text-sm  text-gray-400  text-center">
                    Working
                  </h3>
                </div>
              </div>
              <div className="bg-gradient-to-r flex-auto  w-42 h-42  from-gray-800 to-gray-700    shadow-lg    rounded-lg">
                <div className="md:p-7 p-4">
                  <h2
                    className="text-lg text-center text-gray-200 capitalize"
                    style={{}}
                  >
                    Nautanawa, Maharajganj,  UP
                  </h2>
                  <h3 className="text-sm  text-gray-400  text-center">273305 - India</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Resume;
