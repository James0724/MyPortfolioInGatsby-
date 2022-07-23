import React from "react";

function contactPage() {
	return (
		<div className="contact">
			<div className="heading-wrapper">
				<div className="heading">
					<span>What next ?</span>
					<h2>Get In Touch</h2>
				</div>
			</div>
			<p>
				I always did something I was a little not ready to do. I think that’s
				how you grow. I would love the prospects of build something amazing
				together and to hear from you whether it is Dropping a line to say good
				day or ask for my resume.
			</p>
			<div className="contact__btn">
				<button>
					<a
						class="email-link"
						href="mailto:jameskahoro07@gmail.com"
						rel="noopener noreferrer"
						target="_blank"
					>
						Say Hello
					</a>
				</button>
			</div>
		</div>
	);
}

export default contactPage;
