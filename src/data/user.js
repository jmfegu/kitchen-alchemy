const userInitalState = {
  status: 'not-authenticated', // checking || not-authenticated || authenticated
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
  emailVerified: false,
  theme: localStorage.getItem('lightTheme') || 'light',
  unit: 'gr' // tsp || gr || ml
}