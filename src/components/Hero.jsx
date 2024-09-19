import React from "react";
import heroimage from "../assets/profilepic7.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px]  md:h-[70vh] mx-auto py-8 bg-black">
			<div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
				<img src={heroimage} alt="hero image" />
			</div>

			<div className="col-span-2 px-5">
				<h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
					<span className="primary-color">I'm a</span> <br />
					<TypeAnimation
						sequence={[
							"Frontend Dev",
							1000,
							"Student",
							1000,
							"Programmer",
							1000,
						]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className="text-white sm:text-lg my-6 lg:text-xl">
					My name is Jake Harris and I am a recent graduate of
					Bridgerland Technical College's Web and Mobile design
					program.
				</p>

				<div>
					<a
						href="/"
						className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-teal-300 to-teal-800 text-white"
					>
						Download Resume
					</a>
					<a
						href="#contact"
						className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br  from-teal-300 to-teal-800 text-white hover:border-none"
					>
						Contact
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
