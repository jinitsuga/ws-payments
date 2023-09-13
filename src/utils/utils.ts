export const cartePrice = (data: any) => {
  let carteTotal = 0;
  data.carte.map((item: any) => {
    if (item.value) carteTotal = carteTotal + item.value;
  });
  return carteTotal;
};

export const calcDiscount = (arr: Array<number>) => {
  let percent = 0;
  switch (arr.length) {
    case 0:
      percent = 0;
      break;
    case 1:
      percent = 2.5;
      break;

    case 2:
      percent = 5;
      break;

    case 3:
      percent = 7.5;
      break;
  }
  return percent;
};
