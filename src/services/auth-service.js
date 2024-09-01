import { api1 } from "./api-config";

export const login = async(username, password) => {
  const user = { username, password };
  try{
      const response =await api1.post("/auth/authenticate", user);
      return response;
  }
  catch(error){
    throw error;
  }
};
