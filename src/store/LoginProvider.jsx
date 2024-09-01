import { createContext, useState } from "react"

const initialState={
    token:null,
    addToken:()=>{}
}
export const LoginContext=createContext(initialState);

const LoginProvider = ({children}) => {
    const [token, setToken] = useState(null);
    const addToken = (getToken) => {
        setToken(getToken);
    }

    const ctxValue={
        token,
        addToken,
    }

  return (
   <LoginContext.Provider value={ctxValue}>{children}</LoginContext.Provider>
  )
}

export default LoginProvider