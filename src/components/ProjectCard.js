import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function ProjectCard({ setProject }) {
	const { title, projectDescription, techlist, links, projectImage } =
		setProject;

	return (
		<>
			<GatsbyImage
				className="project__item__img gs_reveal gs_reveal_fromLeft"
				alt={projectImage.title}
				image={getImage(projectImage)}
			/>

			<div className="project__item__content gs_reveal gs_reveal_fromRight">
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
					{techlist.map((tech, i) => {
						return (
							<li key={i} className="project-tech">
								{tech}
							</li>
						);
					})}
				</ul>
				<div className="project-view">
					<div className="link">
						<h1>
							<a
								href={links}
								aria-label="External Link"
								rel="noopener noreferrer"
								target="_blank"
							>
								Demo
							</a>
							<div className="link__highlight"></div>
						</h1>
						<div className="link__underline"></div>
					</div>

					<div className="link">
						<h1>
							<a
								href={links}
								aria-label="External Link"
								rel="noopener noreferrer"
								target="_blank"
							>
								Code Repo
							</a>
							<div className="link__highlight"></div>
						</h1>
						<div className="link__underline"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProjectCard;
