import { createSlice } from "@reduxjs/toolkit";
import{ useState } from 'react';
import axios from 'axios';
let nextIdVal = 0;

export function nextID() {
  nextIdVal += 1;
  return nextIdVal;
}


function getMemberData() {
  const response = axios.get('https://mile12db.azurewebsites.net/api/coop/users/C-1').then(res => {
  let data = res.data.map(
      obj => {
        return {
          "name" : obj.name,
          "phoneNumber" : obj.Mobile,
          "tag" : obj.Stauts,
          "id" : nextID()
        }
      }
    );
    console.log(data);
    return data;


  })
  
};
getMemberData();

// let memdata = [
//    this is just an initial example... we need to display the information of people that were added from the back end
//   { name: "Ireti", phoneNumber: "251-456-342", tag: "leader", id: nextID() },
//   { name: "Yemi", phoneNumber: "251-456-789",  tag: "packager", id: nextID() },
// ]

console.log(getMemberData());
export const peopleSlice = createSlice({
  name: "people",
  initialState: {
    list: [
      {name: "Admin", phoneNumber: "9840954992", tag: "Leader", id: nextID()},
{name: "Gedion", phoneNumber: "984092292", tag: "Member", id: nextID()},
{name: "Nati", phoneNumber: "9840923992", tag: "Member", id: nextID()},
{name: "Taire", phoneNumber: "98409ss992", tag: "Member", id: nextID()},
    ],
    loading: false,
  },
  reducers: {
    getuserData: (state, action) => {
      
    },
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
