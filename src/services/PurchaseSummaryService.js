const response = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails:{
    item_name: "Essentials by OFM ESS-3085 Raving Style Leather Gaming Chair, Red",
    quantity: 1,
    image: "IMAGE URL"
  }
};

export const getPurchaseSummary  = (delay=1000) => {
  return new Promise ((resolve, reject) => setTimeout(resolve(response), delay));
}