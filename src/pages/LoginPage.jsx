import {LoginForm} from '../components/Forms/LoginForm/LoginForm'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../redux/auth/thunks'

export const LoginPage = () => {
  const dispatch = useDispatch()

	const login = (body) => {
    console.log('body', body)
		dispatch(loginThunk(body))
	}

  return (
    <LoginForm login={login} />
  )
}

