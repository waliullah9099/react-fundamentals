import { useEffect, useState } from "react";

const UseEffect = () => {
  //   const [hidden, setHidden] = useState(false);

  return (
    <div>
      {<Todo />}
      {<Counter />}
      {/* <button
        onClick={() => setHidden((pre) => !pre)}
        className="btn btn-success "
      >
        {hidden ? "Show" : "Hidden"}
      </button> */}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("render");

      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <h1 className="ml-40 text-3xl border-2 border-cyan-400 p-10">{count}</h1>
  );
};

const Todo = () => {
  const [user, setUSer] = useState({ name: " ", email: "" });
  //   const controller = new AbortController();
  //   const signal = controller.signal;
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
  //       .then((res) => res.json())
  //       .then((data) => alert(data.title));

  //     return () => {
  //       controller.abort();
  //     };
  //   }, []);

  useEffect(() => {
    console.log("Render");
    console.log(user);
  }, [user]);
  return (
    <div>
      <input
        onBlur={(e) => setUSer({ ...user, name: e.target.value })}
        type="text"
        name="name"
        id="name"
        className="border-2 mr-4"
      />
      <input
        onBlur={(e) => setUSer({ ...user, email: e.target.value })}
        type="text"
        name="email"
        id="email"
        className="border-2"
      />
    </div>
  );
};

export default UseEffect;
