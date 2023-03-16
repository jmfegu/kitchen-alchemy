import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    status: 'not-authenticated', // checking | not-authenticated | authenticated
    uid: null,
    email: null,
    emailVerified: false,
    displayName: null,
    photoURL: null,
    recipes: [],
    bookmark: [],
    errorMessage: null,
    theme: localStorage.getItem('lightTheme') || 'light',
    unit: 'gr' // tsp || gr || ml
  },
  reducers: {
    onDarkTheme: ( state ) => {
      state.theme = 'dark';
    },
    onLighTheme: ( state ) => {
      state.theme = 'light';
    },
    onChangeUnit: ( state, { payload } ) => {
      state.unit = payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { onDarkTheme, onLighTheme, onChangeUnit } = userSlice.actions;