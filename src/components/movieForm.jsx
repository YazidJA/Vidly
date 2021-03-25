import React from "react";

const MovieForm = ( {match, history }) => {
  return (
    <div style={{textAlign: "center"}}>
      <h1>Movie Form</h1>
      <p>
        Movie ID : <code>{match.params.id}</code>
      </p>
      <button className="btn btn-primary" onClick={() => history.push("/movies")}>Save</button>
    </div>
  );
};

export default MovieForm;
