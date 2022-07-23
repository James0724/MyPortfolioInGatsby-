require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
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
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
};
