import { useUiModeContext } from "../context/UIModelContext";

export default function Bar() {
  const { uiMode } = useUiModeContext();
  console.log("Render de Bar");
  return <div>El valor de uiMode es {uiMode}</div>;
}
