import React from "react";

const Contact = () => {
	return (
		<div
			className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5"
			id="contact"
		>
			<div className="text-center">
				<h2 className="text-4xl font-bold leading-tight gradient-text">
					Contact Me
				</h2>
			</div>

			<div className="max-w-[800px] mx-auto">
				<div className="mt-6 bg-[#161616] rounded-xl">
					<div className="p-10">
						<form
							action="https://getform.io/f/bzylxeza"
							method="POST"
						>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
								<div class>
									<div className="mt-2.5 relative">
										<input
											type="text"
											name="name"
											id=""
											placeholder="Your Name"
											className="w-full p-2 bg-[#161616] text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
										/>
									</div>
								</div>
								<div class>
									<div className="mt-2.5 relative">
										<input
											type="email"
											name="email"
											id=""
											placeholder="Your email"
											className="w-full p-2 bg-[#161616] text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
										/>
									</div>
								</div>

								<div className="sm:col-span-2">
									<div className="mt-2.5 relative">
										<textarea
											name="message"
											id=""
											placeholder="Your Message"
											className="w-full p-2 bg-[#161616] text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-teal-400"
										></textarea>
									</div>
								</div>

								<div className="sm:col-span-2">
									<button
										type="submit"
										className="text-xl w-full p-4 mt-2 font-semibold text-black bg-gradient-to-br from-teal-300 to-teal-800 rounded-md hover:text-white hover:border hover:border-white"
									>
										Send
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
