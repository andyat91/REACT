import { useUiModeContext } from "../context/UIModelContext";

export default function Zeta() {
  const { toggleUiMode } = useUiModeContext();
  console.log("Render de Zeta");
  return (
    <div>
      <button onClick={toggleUiMode}>¡Cambiar modo!</button>
    </div>
  );
}
