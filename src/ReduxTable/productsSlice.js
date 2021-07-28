import { createSlice } from "@reduxjs/toolkit";

let nextIdVal = 0;

export function nextID() {
  nextIdVal += 1;
  return nextIdVal;
}

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [
      // this is just an initial example... we need to display the information of people that were added from the back end
      { productname: "Tilapia", totalquantity: "300", amount: "20000/sub", subquantity: "50", id: nextID() },
      { productname: "Geisha", totalquantity: "40",  amount: "3000/sub", subquantity: "50", id: nextID() },
    ],
    loading: false,
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      const removedIds = action.payload;
      state.list = state.list.filter((product) => {
        return !removedIds.includes(product.id);
      });
    },
    update: (state, action) => {
      state.list = state.list.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        }
        return product;
      });
    },
  },
});

export const { add, remove, update } = productsSlice.actions;
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
  }, 1000);
};
export const selectProducts = (state) => state.products.list;
export const selectLoading = (state) => state.products.loading;

export default productsSlice.reducer;
