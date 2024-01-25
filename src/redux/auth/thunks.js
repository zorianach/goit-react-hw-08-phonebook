import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi, logoutApi, refreshApi, signUpApi } from '../../services/apiAuth'
// import { setAuthHeader } from 'services/api'



export const signUpThunk = createAsyncThunk(
	'auth/signup', 
	async (body, { rejectWithValue }) => {
	try {
		return await signUpApi(body)
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}
})

export const loginThunk = createAsyncThunk(
	'auth/login', 
	async (body, { rejectWithValue }) => {
	try {
		return await loginApi(body)
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}
})
export const logoutThunk = createAsyncThunk(
	'auth/logout', 
	async (body, { rejectWithValue }) => {
	try {
		return await logoutApi()
	} catch (error) {
		return rejectWithValue(error.response.data.error)
	}
})

export const refreshThunk = createAsyncThunk(
	'auth/current',
	async (_, { rejectWithValue, getState }) => {
		// const state = thunkAPI.getState();
    const persistedToken = getState().auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }
		try {
			return await refreshApi(persistedToken)
		} catch (error) {
			return rejectWithValue(error.response.data.error)
		}
	}
)
