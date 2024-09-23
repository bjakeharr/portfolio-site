import React from "react";
import aboutImg from "../assets/aboutImg.jpg";

const About = () => {
	return (
		<div className="text-white max-w-[1200px] mx-auto my-12" id="about">
			<div className="md:grid md:grid-cols-2 sm:py-16">
				<div className="mt-4 md:mt-0 text-left flex ">
					<div className="my-auto mx-6">
						<h2 className="text-4xl font-bold mb-4 gradient-text">
							About Me
						</h2>
						<p className="text-base lg:text-lg">
							I am a web development enthusiast with a growing
							expertise in CSS, Tailwind, and front-end styling
							techniques. I'm currently enhancing my skills by
							working on dynamic visual effects, such as hover
							animations, content transitions, and gradient text
							effects. Alongside my technical work, I bring
							diverse experiences from my career as a merchandiser
							at Swire Coca-Cola, blending creativity with
							problem-solving. My current focus is expanding my
							knowledge of modern web technologies while applying
							practical design techniques to build engaging and
							interactive user interfaces.
						</p>
					</div>
				</div>
				<img
					className="mx-auto rounded-3xl py-8 md:py-0"
					src={aboutImg}
					alt="about me"
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
};

export default About;
