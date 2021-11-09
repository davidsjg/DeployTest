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
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-position: center;

  background-image: url("/images/goat.jpg");
`;
