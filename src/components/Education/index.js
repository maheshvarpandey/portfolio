import React from 'react'

function Education() {
    return (
			<div>
				<div className=" mx-auto relative pb-20">
					<h1 className="text-3xl text-center font-bold text-white border-2 border-gray-200 rounded-full py-4">
						My journey
					</h1>
					<div className="border-l-2 mt-10">
						{/* Card 1 */}
						<div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
							{/* Dot Follwing the Left Vertical Line */}
							<div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
							{/* Line that connecting the box with the vertical line */}
							<div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0" />
							{/* Content that showing in the box */}
							<div className="flex-auto text-left">
								<h1 className="text-2xl font-bold">Metric ( High School )</h1>
								<h1 className="text-lg font-bold text-left">
									From - Munder Prashad Prashad Intermediate College, Bargadawa, Maharajgang, UP ( India )
								</h1>
								<h3>Passing Year - ( 2013 - 2014 )</h3>
							</div>
							{/* <a
								href="#"
								className="text-center text-white hover:text-gray-300">
								Download materials
							</a> */}
						</div>
						{/* Card 2 */}
						<div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
							{/* Dot Follwing the Left Vertical Line */}
							<div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
							{/* Line that connecting the box with the vertical line */}
							<div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0" />
							{/* Content that showing in the box */}
							<div className="flex-auto text-left">
								<h1 className="text-2xl font-bold">Intermediate ( 10+2 )</h1>
								<h1 className="text-lg font-bold text-left">
									From - Ramharsh Intermediate College, Nichlaul, Maharajgang, UP ( India )
								</h1>
								<h3>Passing Year - ( 2014 - 2016 )</h3>
							</div>
							{/* <a
								href="#"
								className="text-center text-white hover:text-gray-300">
								Download materials
							</a> */}
						</div>
						{/* Card 3 */}
						<div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
							{/* Dot Follwing the Left Vertical Line */}
							<div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
							{/* Line that connecting the box with the vertical line */}
							<div className="w-10 h-1 bg-green-300 absolute -left-10 z-0" />
							{/* Content that showing in the box */}
							<div className="flex-auto text-left">
								<h1 className="text-2xl font-bold">Graduation ( B.Tech )</h1>
								<h1 className="text-lg font-bold text-left">
									From - Lovely Professional University, Phagwara, Punjab ( India )
								</h1>
								<h3>Passing Year - ( 2016 - 2020 )</h3>
							</div>
							{/* <a
								href="#"
								className="text-center text-white hover:text-gray-300">
								Download materials
							</a> */}
						</div>
						{/* Card 4 */}
						<div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-purple-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
							{/* Dot Follwing the Left Vertical Line */}
							<div className="w-5 h-5 bg-purple-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
							{/* Line that connecting the box with the vertical line */}
							<div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0" />
							{/* Content that showing in the box */}
							<div className="flex-auto text-left">
								<h1 className="text-2xl font-bold">1st Company ( SimbaQuartz )</h1>
								<h1 className="text-lg font-bold text-left">
									From - Software Engineer, Tangra - Amritsar, Punjab ( India )
								</h1>
								<h3>Experience - ( 2019 - 2021 )</h3>
							</div>
						</div>
						{/* Card 5 */}
						<div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-yellow-600 text-white rounded mb-10 flex-col md:flex-row">
							{/* Dot Follwing the Left Vertical Line */}
							<div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 -mt-2 md:mt-0" />
							{/* Line that connecting the box with the vertical line */}
							<div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0" />
							{/* Content that showing in the box */}
							<div className="flex-auto text-left">
								<h1 className="text-2xl font-bold">2nd Company ( Spineor Web Services )</h1>
								<h1 className="text-lg font-bold text-left">
									From - React Js Developer, Mohali - Chandigarh, Punjab ( India )
								</h1>
								<h3>Experience - ( 2021 - Present )</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Education
