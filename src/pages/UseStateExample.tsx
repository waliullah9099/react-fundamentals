import React, { useState } from "react";

const UseStateExample = () => {
  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ user });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);

    const inputName = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [inputName]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className=" border-cyan-400 border-2"
        type="text"
        name="name"
        id="name"
      />
      <input
        onChange={handleChange}
        className="border-cyan-400 border-2"
        type="text"
        name="email"
        id="email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseStateExample;
