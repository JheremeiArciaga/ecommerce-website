import { Tooltip as ReactTooltip } from "react-tooltip";
import "./App.css";

export default function App() {
  return (
    <>
      <ReactTooltip
        id="my-tooltip-1"
        style={{
          backgroundColor: "#C97962",
          color: "white",
          marginTop: "10px",
        }}
        place="bottom"
        content="Login"
      />
      <ReactTooltip
        id="my-tooltip-2"
        style={{
          backgroundColor: "#C97962",
          color: "white",
          marginTop: "10px",
        }}
        place="bottom"
        content="Cart"
      />
      <ReactTooltip
        id="my-tooltip-3"
        style={{
          backgroundColor: "#C97962",
          color: "white",
          marginTop: "10px",
        }}
        place="bottom"
        content="Currency"
      />
    </>
  );
}
