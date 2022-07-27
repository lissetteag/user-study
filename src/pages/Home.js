import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

import { useAppContext } from "../context/AppContext";

function Home() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let inputId = inputRef.current.value;
    dispatch({ type: "navigate", value: inputId });
    // console.log(state);

    navigate("/survey");
  };

  // UseContext when using useReducer
  // const { state, dispatch } = useAppContext();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   let searchQuery = inputRef.current.value;

  //   dispatch({ type: "add_number", value: searchQuery });
  //   router.push(`/result`);
  // };

  return (
    <div className="home">
      <h1>User study</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aut eum
        dolores quaerat repudiandae iusto. Similique alias cupiditate mollitia
        autem laudantium obcaecati dolore nam quisquam provident. Possimus dicta
        esse inventore amet perferendis doloremque rem obcaecati tempore ducimus
        sint similique corrupti aspernatur quisquam tenetur, explicabo animi
        consequuntur voluptates sunt magni assumenda?
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="peas">Enter your ID to proceed: </label>
        <br />
        <input className="inputId" type="text" ref={inputRef} />
        <br />
        <button type="submit" className="buttonID">
          Next
        </button>
      </form>
    </div>
  );
}

export default Home;
