import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import ProjectCard from "../components/ProjectCard";

const query = graphql`
	{
		allContentfulProject {
			nodes {
				projectImage {
					title
					gatsbyImageData(
						layout: FULL_WIDTH
						placeholder: BLURRED
						resizingBehavior: SCALE
					)
				}
				id
				links
				projectDescription {
					projectDescription
				}
				techlist
				title
			}
		}
	}
`;

function Projects() {
	const data = useStaticQuery(query);
	const projects = data.allContentfulProject.nodes;

	return (
		<div className="project-wrapper">
			<div className="heading-wrapper">
				<div className="heading">
					<span>Take a look at my</span>
					<h2>Featured Projects</h2>
				</div>
			</div>
			{projects.map((project, i) => {
				return <ProjectCard key={i} setProject={project} />;
			})}
		</div>
	);
}

export default Projects;
