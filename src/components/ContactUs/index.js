/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useRef } from "react";

// import {
//   Form,
//   Input,
//   Select,
//   notification,
// } from "antd";

// import sideImage from '../../OIFendImages/images/contact/svg/contact form-vector.svg';
// import mainImage from '../../OIFendImages/images/contact/png/contact_banner.png';

import call from "../../assets/call.svg";
import mail from "../../assets/mail.svg";
import locationImage from "../../assets/location.svg";
import { Helmet } from "react-helmet";

// const { Option } = Select;
// const { TextArea } = Input;

function ContactUs(props) {
  const ref = useRef();
  // const [form] = Form.useForm();

   const { bgColor } = props;
  //   useEffect(() => {
  //     ref.current.focus();
  //       handleChange(false)
  //   }, []);

  // const openNotificationWithIcon = (type) => {
  //   notification[type]({
  //     message: "Sent succefully!",
  //     description: "",
  //   });
  // };

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
				<title>
					Maheshvar Kumar Pandey | React JS | Angular 12 | Next JS Develeloper
				</title>
			</Helmet>
			<div className="text-xl font-extrabold shadow-md rounded-full px-4 py-2 mx-4 mt-2">
				Contact me
			</div>
			<div>
				<div className="container mx-auto mt-0 pl-0 md:pl-8 grid  grid-cols-1 md:grid-cols-2 md:px-4 lg:px-4 xl:px-4 py-4 rounded-lg ">
					<div
						className={`flex flex-col ${bgColor} border-2 md:rounded-l-lg justify-between mx-4 md:mx-0`}>
						<div>
							<div className="justify-center text-center mx-auto">
								<img
									alt=""
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
												alt=""
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
												alt=""
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
					<div className="shadow-lg lg:rounded-r-lg mx-4 md:mx-0">
						<div className="align-middle">
							<div className="p-6 flex items-center justify-center">
								<div className="container max-w-screen-lg mx-auto">
									<div className="lg:pt-36">
										<div className="flex flex-wrap justify-center gap-2">
											<a href="https://facebook.com/maheshwar.pandey.58" target="_blank" className="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" rel="noreferrer">
												<svg
													className="w-12 h-12 fill-current cursor-pointer"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24">
													<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
												</svg>
											</a>
											<a href="https://twitter.com/KumarMaheshvar" target="_blank" className="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" rel="noreferrer">
												<svg
													className="w-12 h-12 fill-current cursor-pointer"
													role="img"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24">
													<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
												</svg>
											</a>
											{/* <a className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
												<svg
													className="w-12 h-12 fill-current cursor-pointer"
													role="img"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
												</svg>
											</a> */}
											{/* <a className="bg-pink-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
												<svg
													className="w-12 h-12 fill-current cursor-pointer"
													role="img"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg">
													<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
												</svg>
											</a> */}
											<a href="https://www.linkedin.com/in/maheshvar-pandey-257230149/" target="_blank" className="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" rel="noreferrer">
												<svg
													className="w-12 h-12 fill-current cursor-pointer"
													role="img"
													viewBox="0 0 256 256"
													xmlns="http://www.w3.org/2000/svg">
													<g>
														<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
													</g>
												</svg>
											</a>
											{/* <a className="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
												<svg
													className="w-12 h-12 fill-current cursor-pointer"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 16 16">
													<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
												</svg>
											</a> */}
											<a href="https://github.com/maheshvarpandey" target="_blank" className="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded" rel="noreferrer">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													aria-hidden="true"
													role="img"
													className="w-12"
													preserveAspectRatio="xMidYMid meet"
													viewBox="0 0 24 24">
													<g fill="none">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
															fill="currentColor"
														/>
													</g>
												</svg>
											</a>
											{/* <a className="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink"
													aria-hidden="true"
													role="img"
													className="w-5"
													preserveAspectRatio="xMidYMid meet"
													viewBox="0 0 24 24">
													<g fill="none">
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
															fill="currentColor"
														/>
													</g>
												</svg>
											</a> */}
										</div>
									</div>
								</div>
							</div>

							{/* <Form
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
                      className="login-form-a"
                    >
                      Send
                    </Button>
                  </Col>
                </Row>
              </Form> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
