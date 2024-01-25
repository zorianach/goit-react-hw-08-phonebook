import { useDispatch } from 'react-redux'
// import { FormRegistration } from 'components/Forms/FormRegistration/FormRegistration'
import { signUpThunk } from '../redux/auth/thunks'
import { FormRegistration } from '../components/Forms/FormRegistration/FormRegistration'

export const RegistrationPage = () => {
	const dispatch = useDispatch()

	const register = (body) => {
		dispatch(signUpThunk(body))
	}
// console.log('register', register)
	return (
	<FormRegistration register={register} />
	)
}


