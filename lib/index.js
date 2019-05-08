const checkCard = (numcard) => { 
  const strNumber = numcard.toString();
  const numReverse = strNumber.split('')
    .reverse()
    .map(Number);
  
  const calculate = numReverse.map((num, i) => {
    if (i % 2 === 0) {
      return num; 
    } 
    if (num * 2 <= 9) {
      return num * 2;
    } else {
      return num * 2 - 9;
    }
  }); 

  const result = calculate.reduce((acum, num) => acum + num);
  return result;
};
  
const cardValidator = (numcard) => {
  const strNumber = numcard.toString();
  return (strNumber.length === 16) && (checkCard(numcard) % 10 === 0);
};

module.exports.cardValidator = cardValidator ;