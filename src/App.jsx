import { useState } from "react";
import Login from "./components/forms/Login";
import Registration from "./components/forms/Registration";

export default function App() {
  const [success, setSuccess] = useState(false);
  console.log(success);

  return <>{success ? <Login /> : <Registration success={setSuccess} />}</>;
}
