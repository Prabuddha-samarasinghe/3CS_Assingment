import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";
import userdata from "./userdata";
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);



function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  <Routes>
    <Route exat path="/" element={<Home />} />
    <Route path="/userdata" element={<userdata />} />
  </Routes>


  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://reqres.in/api/users?page=1");
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.data);
      setUsers(userData.data);
    })();
  }, []);



  return (
    <div className="App">
      <div className="main_title">
        <h5>Title</h5>
      </div>

      <div className="sub_title">
        <p>Users</p>
      </div>

      <div className="cards-container">

        {users.map((user, index) => (
          <Home key={index} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
