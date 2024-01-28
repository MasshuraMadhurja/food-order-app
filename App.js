import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 id="h1" key="h1">
      This is JSX
    </h1>
  );

  const Title = () => {
    return (
      <h1 id="title" key="title">Namaste React</h1>
    )
  }

  const HeaderComponent = function (){
    return (
      <div>
        <Title/>
        {console.log(10)}
      <h1>Namaste React Functional component</h1>
      <h2>This is h2 tag</h2>
      </div>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeaderComponent/>);