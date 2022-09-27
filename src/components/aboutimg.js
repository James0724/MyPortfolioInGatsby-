import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

const query = graphql`
	{
		file(relativePath: { eq: "dev.png" }) {
			publicURL
			relativePath
			childImageSharp {
				gatsbyImageData(
					placeholder: BLURRED
					pngOptions: { compressionSpeed: 10, quality: 10 }
				)
			}
		}
	}
`;

function Aboutimg() {
	const data = useStaticQuery(query);
	const image = getImage(data.file);
	console.log(image);
	return (
		<div className="imgstyle-two">
			<div className="image-wrapper">
				<div className="img-item">
					<GatsbyImage image={image} className="image-1" alt="James Kahoro" />
				</div>
				<div className="img-item">
					<GatsbyImage image={image} className="image-2" alt="James Kahoro" />
				</div>
				<div className="img-item">
					<GatsbyImage image={image} className="image-3" alt="James Kahoro" />
				</div>
				<div className="img-item">
					<GatsbyImage image={image} className="image-4 " alt="James Kahoro" />
				</div>
			</div>
		</div>
	);
}

export default Aboutimg;
