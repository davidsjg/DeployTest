import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "./actions";

function TestForm() {
  const poster = useSelector((state) => state.poster);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>poster {poster}</h1>

      <button onClick={() => dispatch(setPost())}>+</button>
    </div>
  );
}

export default TestForm;
