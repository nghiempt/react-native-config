/* --------------------- Format Tiền thành số --------------------- */
export const formatMoneyToNumber = (money: string) => {
  let newNum = money.split('.').join('');
  return newNum;
};

/* --------------------- Format số thành tiền --------------------- */
export const formatNumberToMoney = (num: {toString: () => string} | null) => {
  if (num !== null) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }
  return '';
};
