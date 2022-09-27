import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";

const query = graphql`
	{
		allContentfulBackgroundImages {
			nodes {
				homebackground {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
		}
	}
`;

function Home() {
	const data = useStaticQuery(query);
	const rawdataimage = data.allContentfulBackgroundImages.nodes;
	const imageitem = Object.assign({}, ...rawdataimage);

	const image = getImage(imageitem.homebackground);
	const bgImage = convertToBgImage(image);

	return (
		<BackgroundImage {...bgImage}>
			<section id="home">
				<div className="overlay"></div>
				<div className="home gs_reveal">
					<div className="home__info">
						<h3 className="home__info__intro">Hi, my name is</h3>
						<h1 className="home__info__name">JAMES KAHORO</h1>
						<h3 className="home__info__profession">Full stack web developer</h3>
					</div>

					<div className="scroll-down">
						<span className="arrow-down"></span>
						<span id="scroll-title">About</span>
					</div>
				</div>
			</section>
		</BackgroundImage>
	);
}

export default Home;
