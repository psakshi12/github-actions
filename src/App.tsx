import { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL } from "./constant";

function App() {
  const [users, setUsers] = useState<{name: string, id: number}[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(BASE_URL + "users");
      const result = await response.json();
      setUsers(result);
    }

    fetchData();
  }, []);

  return (
    <>
      {users?.map((user) => {
        return <p key={user?.id}>{user?.name}</p>;
      })}
    </>
  );
}

export default App;
