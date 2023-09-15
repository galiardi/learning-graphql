const productsModel = require('./products.model');

module.exports = {
  Query: {
    products: () => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, args) => {
      return productsModel.getProductsByPrice(args);
    },
    product: (_, args) => {
      return productsModel.getProductById(args);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return productsModel.addNewProduct(args);
    },
    addNewProductReview: (_, args) => {
      return productsModel.addNewProductReview(args);
    },
  },
};
