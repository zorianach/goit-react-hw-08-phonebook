import { createSlice } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, refreshThunk, signUpThunk } from './thunks'

const initialState = {
	token: '',
	profile: null,
	// { name: null, email: null },
	isLoggedIn: false,
  	isRefreshing: false,
}

// export const handleSignUp = (state, { payload }) => {
// 	state.token = payload.token
// 	state.profile = payload.user
// }
const authSlice = createSlice({
	name: 'auth',
	initialState,
	// reducers: {
	// 	logout: (state) => {
	// 		state.token = ''
	// 		state.profile = null
	// 	},
	// },
	extraReducers: (builder) => {
		builder
			.addCase(signUpThunk.fulfilled, (state, action) => {
				state.profile = action.payload.profile;
				state.token = action.payload.token;
				state.isLoggedIn = true;})
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.profile = action.payload.profile;
				state.token = action.payload.token;
				state.isLoggedIn = true;})
			.addCase(logoutThunk.fulfilled, state => {
				state.profile = null;
				state.token = '';
				state.isLoggedIn = false;})
			.addCase(refreshThunk.pending, state => {
				state.isRefreshing = true;
				})
			.addCase(refreshThunk.fulfilled, (state, action) => {
				state.profile = action.payload;
				state.isLoggedIn = true;
				state.isRefreshing = false;})
			.addCase(refreshThunk.rejected, (state) => {
				state.token = '';
				state.profile = null;
				state.isRefreshing = false;

				// localStorage.clear()
			})
	},
})

export const authReducer = authSlice.reducer
// export const { logout } = authSlice.actions
