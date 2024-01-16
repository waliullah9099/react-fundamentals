import { FormEvent, useEffect, useRef } from "react";
import CustomInput from "../components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    //   console.log(myRef.current.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CustomInput ref={myRef} className="border-2 border-blue-600 mb-2" />
        {/* <CustomInput ref={myRef} className="border-2 border-green-600" /> */}
        {/* <input type="text" name="email" id="email" className="border-2" /> */}
        <button className="mt-12" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefExample;
