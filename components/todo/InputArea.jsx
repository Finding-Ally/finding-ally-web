import React, { useState } from "react";
// import { list as data } from "./data";

function InputArea({ handleSubmit }) {
  const [input, setInput] = useState("");

  return (
    <div
      id="#input"
      className="flex w-full h-12 px-3 my-6 text-lg leading-tight text-gray-700 align-middle bg-white rounded shadow appearance-none dark:bg-input-dark focus:outline-none focus:shadow-outline"
    >
      <div>
        <img src="../icons/circle.svg" alt="" className="mt-3 mr-3" />
      </div>

      <form
        className="flex-1"
        onSubmit={(e) => {
          {
            handleSubmit(e, input);
            setInput("");
          }
        }}
      >
        <input
          className="w-full h-12 border-none input dark:bg-input-dark dark:text-gray-300 text-lg"
          id="username"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What to do ?"
        />
      </form>
    </div>
  );
}

export default InputArea;
