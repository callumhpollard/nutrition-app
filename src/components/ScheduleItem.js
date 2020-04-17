import React from "react";
// import Button from "./Button"
import "./styles.scss";
import axios from "axios";

function ScheduleItem(props) {
  const removeFromSchedule = (id) => {
    // console.log("IDDDDDDDD", id);
    axios
      .post(`/deleteFromDay`, { dateId: id })
      .then((result) => {
        props.setUpdate(result);
      })
      .catch((error) => console.error(error));
  };

  // const editItem = () => {
  //   console.log("IDDDDDDDD", id);
  //   axios
  //     .post(`/editRecipe`, { dateId: id })
  //     .then((result) => {
  //       props.setUpdate(result);
  //     })
  //     .catch((error) => console.error(error));
  // };

  return (
    <>
      <h2>{props.name}</h2>
      <img src={props.image} />
      <button
        onClick={() => {
          removeFromSchedule(props.id);
        }}
      >
        Remove From Schedule
      </button>
    </>
  );
}

export default ScheduleItem;

// <button
//   onClick={() => {
//     editItem(props.id);
//   }}
// >
//   Edit
// </button>