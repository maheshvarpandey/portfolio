import React from "react";
import { Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import Project from "../Project";

const { TabPane } = Tabs;

function Resume() {
  return (
    <div className="text-center mb-0 pb-0">
      <Tabs defaultActiveKey="2" type="card">
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
      </Tabs>
    </div>
  );
}

export default Resume;
