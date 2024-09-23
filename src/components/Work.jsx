import React from "react";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import proj3 from "../assets/proj3.png";
import proj4 from "../assets/proj4.png";
import proj5 from "../assets/proj5.png";
import proj6 from "../assets/proj6.png";

const Work = () => {
	return (
		<div className="max-w-[1200px] mx-auto p-5">
			<div className="pb-8">
				<p className="text-4xl mb-3 font0bold gradient-text">Work</p>
				<p className="text-gray-400">Here is some of my recent work</p>
			</div>

			<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
				{/* image one */}
				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={proj1} objectFit="cover" alt="project 1" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider"></span>
						<div className="pt-8 text-center">
							<a href="/">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>

				{/*image 2  */}

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={proj2} objectFit="cover" alt="project 2" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider"></span>
						<div className="pt-8 text-center">
							<a href="/">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>

				{/* image 3 */}

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={proj3} objectFit="cover" alt="project 3" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider"></span>
						<div className="pt-8 text-center">
							<a href="/">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>

				{/* image 4 */}

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={proj4} objectFit="cover" alt="project 4" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider"></span>
						<div className="pt-8 text-center">
							<a href="/">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>

				{/* image 5 */}

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={proj5} objectFit="cover" alt="project 5" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider"></span>
						<div className="pt-8 text-center">
							<a href="/">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>

				{/* image 6 */}

				<div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
					<img src={proj6} objectFit="cover" alt="project 6" />
					<div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
						<span className="text-2xl font-bold text-white tracking-wider"></span>
						<div className="pt-8 text-center">
							<a href="/">
								<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
									Live
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
