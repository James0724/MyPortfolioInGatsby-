import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "./ProjectCard";

const query = graphql`
	{
		allContentfulProject {
			nodes {
				links
				projectDescription {
					projectDescription
				}
				projectImage {
					gatsbyImageData(
						placeholder: BLURRED
						layout: CONSTRAINED
						resizingBehavior: FILL
					)
					title
				}
				techlist
				title
			}
		}
	}
`;
const Project = () => {
	const data = useStaticQuery(query);
	const projects = data.allContentfulProject.nodes;

	return (
		<section id="works" className="panel">
			<div className="project ">
				<div className="heading-wrapper gs_reveal">
					<div className="heading">
						<span>I Make It Right</span>
						<h2>Featured Projects</h2>
					</div>
				</div>
				{projects.map((project, i) => {
					return (
						<div key={i} className="project__item">
							<ProjectCard setProject={project} />
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default Project;
