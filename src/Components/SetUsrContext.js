import { createContext, useState } from "react";

let UserContext = createContext(); // Store the Data

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState({ name: "" });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

export default UserContext;
