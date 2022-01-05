import React, { useEffect, useRef } from "react";

import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Select,
  Slider,
  notification,
  message,
} from "antd";

// import sideImage from '../../OIFendImages/images/contact/svg/contact form-vector.svg';
// import mainImage from '../../OIFendImages/images/contact/png/contact_banner.png';

import call from "../../assets/call.svg";
import mail from "../../assets/mail.svg";
import locationImage from "../../assets/location.svg";
import axios from "axios";
import { Helmet } from "react-helmet";

const { Option } = Select;
const { TextArea } = Input;

function ContactUs(props) {
  const ref = useRef();
  const [form] = Form.useForm();

   const { bgColor } = props;
  //   useEffect(() => {
  //     ref.current.focus();
  //       handleChange(false)
  //   }, []);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Sent succefully!",
      description: "",
    });
  };

  // const onFinish = async (values) => {
  //   console.log('Received values of form: ', values);
  //  await axios.request({
  //   method: 'POST',
  //   url: `${'https://oifend.herokuapp.com/contactUs'}`,
  //   data:  {
  //         email: values.email,
  //         name: values.name,
  //         phone: values.phone,
  //         companyName: values.companyName,
  //         price: values.price,
  //         service: values.service,
  //         message: values.message,
  //   }
  // }).then(function (response) {
  //       console.log("Response--",response);
  //       if(response.status === 201) {
  //         openNotificationWithIcon('success');
  //          form.resetFields();
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  return (
    <div ref={ref}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maheshvar Pandey | React JS | Angular 12 | Next JS Develeloper</title>
      </Helmet>
      <div className="text-xl font-extrabold shadow-md rounded-full px-4 py-2 mx-4 mt-2">Contact me</div>
      <div>
        <div className="container mx-auto mt-0 pl-0 md:pl-8 grid  grid-cols-1 md:grid-cols-2 md:px-4 lg:px-4 xl:px-4 py-4 rounded-lg ">
          <div className={`flex flex-col ${bgColor} border-2 md:rounded-l-lg justify-between mx-4 md:mx-0`}>
            <div>
              <div className="justify-center text-center mx-auto">
                <img
                  src={
                    "https://oifend.com/static/media/contact%20form-vector.be1055ac.svg"
                  }
                  style={{ height: "180px", marginLeft: "25%" }}
                  className=""
                />
              </div>
              <div style={{ marginLeft: "10%" }} className="text-gray-700 mt-8">
                <ul className="w-full rounded-lg mt-2 mb-3 text-white justify-center text-center font-bold">
                  <li className="mb-1">
                    <a href="#" className="w-fill flex pl-3 px-3 py-1">
                      <img
                        src={call}
                        className="rounded-full p-2 bg-blue-400"
                        style={{ height: "40px" }}
                        alt=""
                      />
                      <span className="truncate text-lg">
                        <div className="mt-1 ml-2" style={{ color: "white" }}>
                          +91-9559014486
                        </div>
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a href="#" className="w-fill flex px-3 py-1">
                      <img
                        src={mail}
                        className="rounded-full p-3 bg-blue-400"
                        style={{ height: "40px" }}
                      />
                      <span className="truncate text-lg">
                        <div className="mt-1 ml-2" style={{ color: "white" }}>
                          mkp10697@gmail.com
                        </div>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="w-fill flex px-3 py-1">
                      <img
                        src={locationImage}
                        className="rounded-full p-2 bg-blue-400"
                        style={{ height: "40px" }}
                      />
                      <span className="text-lg">
                        <div className="mt-1 ml-2" style={{ color: "white" }}>
                          Nautanwa, Maharajgang ( UP ), 273307 (IN)
                        </div>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 "></div>
          </div>
          <div className="bg-gray-100 rounded-r-lg mx-4 md:mx-0">
            <div className="px-8 py-4 pt-4 lg:pt-16">
              <Form
                form={form}
                layout="vertical"
                name="normal_login"
                className="login-form text-left"
                initialValues={{
                  remember: true,
                }}
                onFinish={""}
              >
                <Row className="flexRow">
                  <Col
                    lg={12}
                    sm={24}
                    className="gutter-row pr-0 md:pr-0 lg:pr-4"
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                        },
                      ]}
                    >
                      <Input placeholder="Name" size="large" />
                    </Form.Item>
                  </Col>
                  <Col lg={12} sm={24} className="gutter-row">
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Email!",
                        },
                      ]}
                    >
                      <Input
                        // prefix={<LockOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="Email"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row className="flexRow">
                  <Col
                    lg={12}
                    sm={24}
                    className="gutter-row pr-0 md:pr-0 lg:pr-4"
                  >
                    <Form.Item
                      name="phone"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Phone Number!",
                        },
                      ]}
                    >
                      <Input placeholder="Phone No" size="large" />
                    </Form.Item>
                  </Col>
                  <Col lg={12} sm={24} className="gutter-row">
                    <Form.Item
                      name="companyName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Company Name!",
                        },
                      ]}
                    >
                      <Input
                        // prefix={<LockOutlined className="site-form-item-icon" />}
                        type="text"
                        placeholder="Company Name"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={8} style={{ "flex-direction": "column" }}>
                  <Col lg={24} sm={24} className="gutter-row mt-4">
                    <Form.Item
                      name="message"
                      // rules={[
                      //   {
                      //     required: true,
                      //     message: 'Please input your budget!',
                      //   },
                      // ]}
                    >
                      <TextArea
                        placeholder="Tell us more about your project"
                        rows={4}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={8} style={{ "flex-direction": "column" }}>
                  <Col lg={24} sm={24} className="gutter-row text-right">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="login-form-button"
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
