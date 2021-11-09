import "./App.css";
import MainForm from "./MainForm/MainForm";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <MainForm />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: url("/images/goat.jpg");
`;
