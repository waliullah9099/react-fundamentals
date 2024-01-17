import { useContext } from "react";
import { TThemeProviderContext, ThemeContext } from "./provider/ThemeProvider";
import { MenuItem, MenuList } from "./components/Menu";
import UsersContainer from "./components/UsersContainer";

const App = () => {
  // const [counter, setCounter] = useState(0);

  const { dark, setDark } = useContext(ThemeContext) as TThemeProviderContext;
  // console.log(dark);

  return (
    <div
      className="h-screen w-full flex justify-center text-center items-center "

      // className={`h-screen w-full flex justify-center text-center items-center ${
      //   dark ? "bg-black" : "bg-white"
      // }`}
    >
      <UsersContainer />

      {/* <Profile /> */}
      {/* <GameResult /> */}
      {/* <UseRefExample /> */}
      {/* <button onClick={() => setDark(!dark)} className="btn btn-accent">
        Toggle
      </button>

      <MenuList>
        <MenuItem></MenuItem>
      </MenuList> */}
    </div>
  );
};

export default App;
