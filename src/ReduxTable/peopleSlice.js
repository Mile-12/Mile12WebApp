import { createSlice } from "@reduxjs/toolkit";

let nextIdVal = 0;

export function nextID() {
  nextIdVal += 1;
  return nextIdVal;
}

export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    list: [
      // this is just an initial example... we need to display the information of people that were added from the back end
      { name: "Ireti", phoneNumber: "251-456-342", tag: "leader", id: nextID() },
      { name: "Yemi", phoneNumber: "251-456-789",  tag: "packager", id: nextID() },
    ],
    loading: false,
  },
  reducers: {
    add: (state, action) => {
      state.list.push(action.payload);
    },
    remove: (state, action) => {
      const removedIds = action.payload;
      state.list = state.list.filter((person) => {
        return !removedIds.includes(person.id);
      });
    },
    update: (state, action) => {
      state.list = state.list.map((person) => {
        if (person.id === action.payload.id) {
          return action.payload;
        }
        return person;
      });
    },
  },
});

export const { add, remove, update } = peopleSlice.actions;
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
  }, 1000);
};
export const selectPeople = (state) => state.people.list;
export const selectLoading = (state) => state.people.loading;

export default peopleSlice.reducer;
