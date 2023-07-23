import React, { useState, useEffect } from "react";

import styles from "./parts.module.css";
// import ThemeButton from "../components/ThemeButton";
import InputArea from "../todo/InputArea";
import ListOfActivity from "../todo/ListOfActivity";

const data = [];

function TodoList({roomName}) {


  const [list, setList] = useState(
    typeof localStorage !== "undefined" && localStorage.getItem(`todolist-${roomName}`)
      ? JSON.parse(localStorage.getItem(`todolist-${roomName}`)) || data
      : data
  );
  
  const [filter, setFilter] = useState(0);

  const [currentId, setCurrent] = useState(1);

  const handleSubmit = (e, input) => {
    e.preventDefault();

    if (input === "") {
      return;
    }

    setList((prev) => {
      console.log("prev");
      console.log(prev);
      return [
        ...prev,
        { text: input, status: "onProgress", id: `${currentId + 1}-${input}` },
      ];
    });
    localStorage.setItem(`todolist-${roomName}`, JSON.stringify(list));
    console.log(list);
  };

  // useEffect(() => {
  //   localStorage.setItem(`todolist-${roomName}`, JSON.stringify(list));
  //   // setCurrent(currentId + 1);
  // }, [list, roomName]);


  // function when check button pressed
  const checked = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    let newStatus = "";

    if (list[idx].status === "onProgress") {
      newStatus = "Completed";
    } else {
      newStatus = "onProgress";
    }

    let newList = [...list];
    newList[idx].status = newStatus;

    // console.log(newList);

    setList(newList);
  };

  // function when x button pressed
  const removeOne = (e) => {
    // let newList = list;
    let idx = e.currentTarget.dataset.index;
    let newList = [...list];
    newList.splice(idx, 1);

    console.log(newList);

    setList(newList);
  };

  const removeCompleted = () => {
    let newList = [];

    // for (let i = 0; i < list.length; i++) {
    //   if (list[i].status === "onProgress") {
    //     newList.push(list[i]);
    //   }
    // }

    setList(newList);
  };

  function handleDrag(result) {
    // console.log(result);
    if (!result.destination) return;

    const items = Array.from(list);
    const [reordererItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reordererItem);

    setList(items);
  }

  return (
    
    <div className={`w-full p-2 bg-gray-100 px-2 rounded-2xl text-left `}>
    <div className="flex justify-between align-middle">
      <h1 className=" font-bold text-black ml-1 mt-1">To-Do</h1>
    </div>
    <div className="w-fit">
    <InputArea handleSubmit={handleSubmit} /></div>
    <ListOfActivity
      list={list}
      filter={filter}
      checked={checked}
      removeOne={removeOne}
      handleDrag={handleDrag}
    />
  </div>
      
  );
}

export default TodoList;


const options = ["All", "Active", "Completed"];
