import { Container } from "./App.styled";
import { Profile } from "components/Profile/Profile";
import user from '../../user.json'

export const App = () => {
  return (
    <Container>
      <Profile user={user} />
    </Container>
  );
};

