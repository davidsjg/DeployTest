import React, { useRef } from "react";
import { setPost } from "../actions";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

function MainForm() {
  const dispatch = useDispatch();
  const newPost = useSelector((state) => state.poster);
  let user = useRef();
  let post = useRef();

  function handleClick() {
    let tempPost = post.current.value;
    console.log(post.current.value);
    console.log();

    // dispatch(setPost());

    dispatch({
      type: setPost(),
      poster: tempPost,
    });

    // dispatch()

    // dispatch({
    //   type: setPost,
    //   user: user.current.value,
    //   post: post.current.value,
    // });
  }

  function clickFunction() {
    console.log(newPost);
  }

  return (
    <>
      <div className="mainContain">
        <Header>
          <div className="headerText" onClick={clickFunction}>
            Blahgspaht!
          </div>
        </Header>
        <div className="secondContain">
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
          </Form>
          <Button onClick={handleClick} className="submitButton">
            Submit
          </Button>
          <h4 style={{ color: "white" }}>{newPost[0].poster}</h4>
        </div>
      </div>
    </>
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
