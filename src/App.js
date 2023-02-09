import React, { useState } from "react";
import Header from "./components/Header/Header";

import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [counter, setCounter] = useState("");

  let users = [
    { name: "Chaika", lastName: "Chaikov", age: 19, id: 1 },
    { name: "Tupik", lastName: "Tupikov", age: 18, id: 2 },
    { name: "Bruh", lastName: "Bruhov", age: 18, id: 3 },
    { name: "Cat", lastName: "Dogov", age: 16, id: 4 },
  ];
  console.log(users);
  return (
    <div>
      <Header />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
