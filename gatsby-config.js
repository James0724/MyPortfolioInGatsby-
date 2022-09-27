require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `James Kahoro -fullstack developer`,
		description: `Software engineering based in Nairobi, kenya proficient in reactJs, GatsbyJs and other frontend frameworks and library `,
		twitterUsername: `jameskahoro07`,
		image: `src/images/dev.png`,
		siteUrl: `https://www.jameskahoro.dev`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`JetBrains Mono\:100,200,300,500,900`,
					`Montserrat Alternates\:300,500,900`,
					`Montserrat\:100,200,300,500,900`,
					`Montserrat Subrayada\:700`,
					`Epilogue\:100,300,500,900`,
				],
				display: "swap",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { name: `images`, path: `${__dirname}/src/images` },
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `he4kfh34v1rf`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `James Kahoro - fullstack developer`,
				short_name: `Fullstack web developer`,
				description: `Software engineering based in Nairobi, kenya proficient in reactJs, GatsbyJs and other frontend frameworks and library`,
				lang: `en`,
				theme_color: ` #d6ed17ff`,
				display: `standalone`,
				icon: `src/images/logo.png`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
	],
};
