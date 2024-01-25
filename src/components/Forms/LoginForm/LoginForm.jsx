import { Form, Input, Label, Button, LoggedLink, Title } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { Container } from '../FormRegistration/FormRegistration.styled';

export const LoginForm = ({login}) => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    dispatch(
        login({
        email: email.value,
        password: password.value,
        }))
    };

  return (
    <Container>
    <Form onSubmit={handleSubmit} autoComplete="off">
    <Title>Enter your account</Title>
      <Label>
        Email
        <Input
          type="email"
          name="email"
        //   pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter email ..."
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
        //   pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter password ..."
        />
      </Label>
      <Button type="submit">Log In</Button>
      <LoggedLink to="/registration">Don`t have an account? <span>Sign Up</span></LoggedLink>
    </Form>
    </Container>
  );
};

