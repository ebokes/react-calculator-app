import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import Calculator from "./components/Calculator";
import { CalcContainer } from "./components/calculatorStyle";
import ThemeContextProvider, {
  ThemeContext,
} from "./components/context/ThemeContext";

function App() {
  const theme = useContext(ThemeContext);
  const sTheme = {
    body: "green",
    button: "red",
  };
  return (
    <ThemeContextProvider>
      {/* <ThemeProvider theme={sTheme}> */}
      <CalcContainer>
        <Calculator />
      </CalcContainer>
      {/* </ThemeProvider> */}
    </ThemeContextProvider>
  );
}

export default App;
