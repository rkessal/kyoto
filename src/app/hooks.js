export const getPrice = (price, currency) => {
  const prices = {
    '¥': {
      formatted: price.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }),
      currency: '¥',
      amount: price,
    },
    '$':{
      formatted: (price * 0.0063).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      currency: '$',
      amount: price * 0.0063
    }
  }
  return prices[currency] || prices['¥']
}