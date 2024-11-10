import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // To redirect after logout

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  let id = localStorage.getItem("id");
  let age = localStorage.getItem("age");
  let name = localStorage.getItem("name");
  let symptoms = localStorage.getItem("symptoms");

  return (
    <>
      <div className="container">
        <p>Username: {id}</p>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>symptoms: {symptoms}</p>
      </div>
    </>
  );
}
