import { type Show } from "@/app/Components/FormSteps";

export const cartePrice = (data: any) => {
  let carteTotal = 0;
  data.carte.map((item: Show) => {
    if (item.value) carteTotal = carteTotal + item.value;
  });
  return carteTotal;
};

export const calcDiscount = (arr: Array<Show | "">) => {
  let numberOfShows = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") numberOfShows++;
  }

  let percentDiscount = 0;

  switch (numberOfShows) {
    case 0:
      percentDiscount = 0;
      break;
    case 1:
      percentDiscount = 2.5;
      break;

    case 2:
      percentDiscount = 5;
      break;

    case 3:
      percentDiscount = 7.5;
      break;
  }
  return percentDiscount;
};
