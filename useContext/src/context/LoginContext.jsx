//Crear una aplicacion que tenga un input con un login y cuando el de el boton a enviar si son correcto,
//Mandar a la Home

import { createContext, useContext, useState } from "react";

const LoginMode = createContext({
  user: null,
  handleLogin: () => {},
});

export default LoginMode;

export function LoginProvider({ children }) {
  const [user, setUser] = useState(null);

  function handleLogin(email, password) {
    if (email == "paco@gmail.com" && password == "1234") {
      setUser(user);
      window.location.href = "/home";
    }
  }

  const value = {
    user,
    handleLogin,
  };

  return <LoginMode.Provider value={value}>{children} </LoginMode.Provider>;
}

export function useLoginContext() {
  return useContext(LoginMode);
}
