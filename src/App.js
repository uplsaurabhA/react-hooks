import React, { useState } from "react";
import "./App.css";

//THings to learn> variable scoping, event loop,...

// multiple promise resolution, concurrently.

var timeout;  // this variable wasn't scoped inside the function concurrently.

function App() {
  const [name, setUserName] = useState("");

  const [password, setUserPassword] = useState("");

  const [showHackMessage, setShowHackMessage] = useState(false);

  const enterUserName = e => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const enterUserPassword = (e) => {
  
    console.log(e.target.value,timeout);
    setUserPassword(e.target.value);
    if (e.target.value.length > 0) {
      timeout= setTimeout(()=>setShowHackMessage(true), 1000);
      console.log(timeout);

      /// Why did not  timeout= setTimeout(setShowHackMessage(true), 5000); work? is  setShowHackMessage not a function?
      //  timeout();
    } 
    else if(e.target.value.length===0) {
      console.log("Tricky user!");
      console.log(timeout,'L29>>');
      //not working perfectly!
      clearTimeout(timeout);
      setShowHackMessage(false);
    }
  };

  return (
    <div className="App">
      <p>Login-Hacker</p>
      <input name={"email"} onChange={enterUserName}></input>
      <br></br>
      <br></br>

      <input name={"password"} onChange={(e)=>enterUserPassword(e)}></input>
      <p>Powered by Saurabh</p>
      {name.length > 0 && <p>Your name is {name}</p>}
      {password.length > 0 && <p>Your password is {password}</p>}
      {showHackMessage && <p className='awesome'>Now you are hacked!</p>}
    </div>
  );
}

export default App;
