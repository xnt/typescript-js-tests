import * as React from "react";
import { render } from "react-dom";

import Factorial from "./Factorial";

class App extends React.Component{

  public render() {
    return ( 
      <Factorial />
    );
  }
}

render(<App />, document.getElementById("root"));
