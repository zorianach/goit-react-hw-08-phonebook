import { api } from "./api";

// Utility to add JWT
export const setAuthHeader = token => {
	console.log('headers', api.defaults.headers.common)
	api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  // Utility to remove JWT
 export const clearAuthHeader = () => {
	api.defaults.headers.common.Authorization = '';
  };
  


export const signUpApi = async (body) => {
	// console.log('body', body)
	const  {data}  = await api.post('/users/signup', body)
	setAuthHeader(data.token);
	// console.log('data', data)
	return data
}

export const loginApi = async (body) => {
	const { data } = await api.post('/users/login', body)
	setAuthHeader(data.token);
	return data
}

export const logoutApi = async () => {
	const { data } = await api.post('/users/logout')
	clearAuthHeader();
	return data
}

export const refreshApi = async (token) => {
	setAuthHeader(token)
	const { data } = await api.get('/users/current', 
	// {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},}
	)
	return data
}