import { Form, Input, Label, Button, LoggedLink, Container, Title } from './FormRegistration.styled';


export const FormRegistration = ({register}) => {
    
    const handleSubmit = (e) => {
		e.preventDefault()
		const { name, email, password } = e.target.elements
		register({ 
            name: name.value, 
            email: email.value, 
            password: password.value })
            // console.log('values', name.value, email.value)
        }
    return (
        <Container>
        {/* <Link to='/'>Home</Link> */}
        <Form onSubmit={handleSubmit} autoComplete="off">
            <Title>Registration</Title>
      <Label>
        Name
        <Input
          type="text"
          name="name"
        //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="The name must contain only letters, apostrophes, dash and spaces."
          placeholder="Enter name ..."
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
        //   pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix."
          placeholder="Enter email ..."
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
        //   pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
        
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. "
          placeholder="Enter password ..."
          required
        />
      </Label>
      <Button type="submit">Sign up</Button>
      <LoggedLink to="/login">Have an account? <span>Log In</span></LoggedLink>
    </Form>

{/* 
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='exampleInputName' className='form-label'>
                    Name
                </label>
                <input type='text' name='firstName' className='form-control' id='exampleInputName' />
            </div>
            <div className='mb-3'>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                </label>
                <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                />
                <div id='emailHelp' className='form-text'>
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                </label>
                <input
                    name='password'
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Registration
            </button>
            {/* <Link to='/login'>Login</Link> */}
        {/* </form> */}
    </Container>
    )
}