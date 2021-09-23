import logo from "./logo.svg";
import "./App.css";
import { StoreProvider } from "./store";
import Counter from "./counter";

function App() {
  return (
    <>
      <StoreProvider>
        <Counter />
        <h1>Test</h1>
      </StoreProvider>
    </>
  );
}

export default App;
