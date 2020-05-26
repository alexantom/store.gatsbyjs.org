import React from 'react';
import Client from 'shopify-buy';

console.log(
  process.env.GATSBY_SHOPIFY_STORE,
  'wow',
  process.env.GATSBY_SHOPIFY_ACCESS_TOKEN
);
const client = Client.buildClient({
  domain: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN
});

export const defaultStoreContext = {
  client,
  isCartOpen: false,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {}
};

const StoreContext = React.createContext(defaultStoreContext);

export const withStoreContext = Component => {
  return props => (
    <StoreContext.Consumer>
      {context => <Component {...props} storeContext={context} />}
    </StoreContext.Consumer>
  );
};

export default StoreContext;
