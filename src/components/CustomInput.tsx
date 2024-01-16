import { forwardRef } from "react";

type TCustomPropsType = {
  className: string;
};

const CustomInput = forwardRef<HTMLInputElement, TCustomPropsType>(
  ({ className }, inputRef) => {
    return (
      <div>
        <form>
          <input
            ref={inputRef}
            type="text"
            name="name"
            id="name"
            className={className}
          />
          {/* <input type="text" name="email" id="email" className="border-2" /> */}
        </form>
      </div>
    );
  }
);

export default CustomInput;
