let products = [
  { id: 1, name: "Apple", price: 150 },
  { id: 2, name: "Samsung", price: 100 },
  { id: 1, name: "Oppo", price: 90 },
  { id: 4, name: "Lenovo", price: 130 },
  { id: 5, name: "HP", price: 110 },
];

module.exports = {
  getAll: () => products,

  getByID: (id, price) => {
    return products.find((p) => {
      if (price != null) {
        return p.id == id && p.price == price;
      } else {
        return p.id == id;
      }
    });
  },

  addProduct: (product) => {
    products.push(product);

    return products;
  },
};
