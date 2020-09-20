import React from "react";
import AddParticipant from "./AddParticipant";

export default function (props) {
  return (
    <div className="jumbotron p-4">
      <h1 className="display-4">Choosecomfortabletime🌴</h1>
      <p className="lead">Выберите удобное время для всех!</p>
      <hr className="my-4" />
      <div className="w-50 mx-auto">
        <AddParticipant />
      </div>
    </div>
  );
}
