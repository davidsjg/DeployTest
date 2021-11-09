import React, { useRef } from "react";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

function MainForm() {
  const user = useRef();
  const post = useRef();

  function handleClick() {
    console.log(user.current.value);
    console.log(post.current.value);
  }

  return (
    // <div className="formContain">

    <div className="secondContain">
      <Header>
        <div className="headerText">Blahgspaht!</div>
      </Header>
      <Form className="form1">
        <InputGroup className="mb-3 inGroup">
          <InputGroup.Text
            id="inputGroup-sizing-default"
            className="inputTitles"
          >
            Username:
          </InputGroup.Text>
          <br />
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            ref={user}
          />
        </InputGroup>
        <InputGroup className="mb-3 inGroup">
          <InputGroup.Text
            id="inputGroup-sizing-default"
            className="inputTitles"
          >
            Post:
          </InputGroup.Text>
          <br />
          <FormControl as="textarea" rows={3} ref={post} />
        </InputGroup>
        <Button variant="secondary" onClick={handleClick}>
          Secondary
        </Button>
      </Form>
    </div>

    // </div>
  );
}

export default MainForm;

const Header = styled.div`
  text-align: center;
  padding: 10vh;
`;

const Form1 = styled.div`
  padding: 10vh;
`;
