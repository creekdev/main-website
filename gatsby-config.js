module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Creekside Logistics",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-YZXQL2TH3H",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./src/images/splash.png",
        name: `Creekside Logistics`,
        short_name: `CS Web`,
        description: `The best delivery service within Port Harcourt`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff0600`,
        display: `standalone`,
        icons: [
          {
            src: `./src/images/splash.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `./src/images/splash.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-top-layout",
    "gatsby-plugin-mui-emotion",
  ],
};
