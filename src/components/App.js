import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relativeList = [
    { keyId: "relativeListItem1", relativeList: "idk1" },
    { keyId: "relativeListItem2", relativeList: "idk2" },
    { keyId: "relativeListItem3", relativeList: "idk3" }
  ];

  render() {
    return (
      <div id="main">
        <ol>
          {this.relativeList.map((e) => (
            <li key={e.keyId}> {e.relativeList} </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
