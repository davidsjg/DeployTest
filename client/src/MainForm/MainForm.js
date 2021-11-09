import React, { useRef } from "react";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import styled from "styled-components";

function MainForm() {
  const user = useRef();
  const comment = useRef();

  return (
    // <div className="formContain">
    <SecondContain>
      <Header>
        <div className="headerText">Blahgspaht!</div>
      </Header>
      <Form1>
        <InputGroup className="mb-3 inGroup">
          <InputGroup.Text
            id="inputGroup-sizing-default"
            className="inputTitles"
          >
            Default
          </InputGroup.Text>
          <br />
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </Form1>
    </SecondContain>
    // </div>
  );
}

export default MainForm;

const Header = styled.div`
  text-align: center;
  padding: 10vh;
`;

const SecondContain = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Form1 = styled.div`
  padding: 10vh;
`;
