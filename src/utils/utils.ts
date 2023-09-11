export const cartePrice = (data: any) => {
  let carteTotal = 0;
  data.carte.map((item: any) => {
    if (item.value) carteTotal = carteTotal + item.value;
  });
  return carteTotal;
};
