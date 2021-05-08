import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  relativeList = [
    { keyId: "relativeListItem1", relativeList: "rName1" },
    { keyId: "relativeListItem2", relativeList: "rName2" },
    { keyId: "relativeListItem3", relativeList: "rName3" }
  ];

  render() {
    return (
      <div id="main">
        <ol key="olistKey">
          {this.relativeList.map((e) => (
            <li key={e.keyId}> {e.relativeList} </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
