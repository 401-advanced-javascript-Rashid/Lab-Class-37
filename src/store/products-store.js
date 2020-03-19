/* eslint-disable no-case-declarations */

let initialState = {
  category: {
    Lamborghini: ['Aventador SV', 'Huracan EVO', 'Urus', 'Veneno', 'Murcielago SV'],
    Ferrari: ['Laferrari', 'F12', '458 Spider'],
    Mclaren: ['600LT', 'Senna', '720s'],
  },
  output: [],
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
  case 'choose':
    let category = state.category;
    let output = state.category[payload];
    return { category, output };
  default:

    return state;
  }
};

export const chooseList = (clicked) => {
  return { type: 'choose', payload: clicked };
};

