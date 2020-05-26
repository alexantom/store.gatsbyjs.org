require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
console.log(
  process.env.GATSBY_SHOPIFY_STORE,
  process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
  'Shopify Creds'
);

module.exports = {
  pathPrefix: process.env.PATH_PREFIX ? `/${process.env.PATH_PREFIX}` : '/',
  siteMetadata: {
    siteUrl: 'https://store.gatsbyjs.org',
    shopifyStoreUrl: `https://${process.env.SHOPIFY_STORE}.myshopify.com`,
    title: 'Holy buckets! Get your Gatsby swag here!',
    description:
      'Do you like spaced-out socks? All purple everything? Hitting #maximumcomf with JAMstack Jammies? Oh boy have we got the swag store for you!'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOPIFY_STORE,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Store',
        short_name: 'Gatsby Store',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/android-chrome-512x512.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-93349937-6SFD',
        respectDNT: true
      }
    }
  ]
};
