import { Container, Title, Link, Subtitle, Text } from './HomePage.styled';


export const HomePage = () => {
    
  return (
    <>
    <Container>
      <Title>Welcome to Phonebook</Title>
      <Subtitle>One place for all your contacts</Subtitle>
      <Text>Manage contacts from a single place and access them everywhere</Text>
      <Link to="/registration" title="Try it now!">
        Try it now!
      </Link>
    </Container>
     
    </>
   
  )
}