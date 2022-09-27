import React from "react";

function Contact() {
	return (
		<section id="contact">
			<div className="contact gs_reveal">
				<div className="heading-wrapper">
					<div className="heading">
						<span>What next ?</span>
						<h2>Get In Touch</h2>
					</div>
				</div>
				<p>
					{" "}
					A journey of a thousand miles starts with one step and alone I can
					move faster but together we can move further. I would love the
					prospects of sharing this journey with you to build something amazing
					together so whether it is Dropping a line to say hi or ask for my
					resume. Feel free to email me at <span>jameskahoro07@gmail</span> or
					you can hit me up on <span>+254-724-797-790</span>{" "}
				</p>
				<div className="contact__btn">
					<button>
						<a
							className="email-link"
							href="mailto:jameskahoro07@gmail.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							Say Hello
						</a>
					</button>
				</div>
			</div>
		</section>
	);
}

export default Contact;
