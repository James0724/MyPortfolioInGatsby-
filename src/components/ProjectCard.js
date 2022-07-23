import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

function ProjectCard({ setProject }) {
	const { title, projectDescription, techlist, links, projectImage } =
		setProject;

	return (
		<div className="project">
			<div className="project__img">
				<GatsbyImage
					image={projectImage.gatsbyImageData}
					alt={projectImage.title}
					className="img-project"
				/>
			</div>
			<div className="project__content">
				<div className="title-wrapper">
					<div className="project-number"></div>
					<div className="numbered-title"></div>
				</div>
				<div className="project-title">
					<h2>{title}</h2>
				</div>
				<div className="project-description">
					<p>{projectDescription.projectDescription}</p>
				</div>

				<ul className="project-techlist">
					{techlist.map((tech, i) => (
						<li key={i} className="project-tech">
							{tech}
						</li>
					))}
				</ul>
				<div className="project-view">
					<a
						href={links}
						aria-label="External Link"
						rel="noopener noreferrer"
						target="_blank"
					>
						View Live
					</a>

					<a
						href={links}
						aria-label="External Link"
						rel="noopener noreferrer"
						target="_blank"
					>
						View Code
					</a>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
