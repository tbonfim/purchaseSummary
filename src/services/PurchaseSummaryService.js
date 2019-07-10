const response = {
  pricing: {
    subtotal: 102.96,
    savings: 3.85,
    tax: 8.92,
    total: 108.03,
    zip: 85050
  },
  itemDetails:{
    item_name: 'Essentials by OFM ESS-3085 Raving Style Leather Gaming Chair, Red',
    quantity: 1,
    image: 'https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF',
    price: 99.11,
    fullPrice: 102.96
  }
};

export const getPurchaseSummary = (delay=1000) => {
  return new Promise ((resolve, reject) => setTimeout(resolve(response), delay));
}