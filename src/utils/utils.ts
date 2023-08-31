export const cartePrice = (data: any) => {
  let carteTotal = 0;
  data.carte.map((item: any) => {
    carteTotal = carteTotal + item.value;
  });
  return carteTotal;
};
