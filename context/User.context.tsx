import { createContext, ReactNode, useContext, useState } from "react";

export interface UserData {
  isLoggedIn: boolean;
  id: string;
  email: string;
  name: string;
  verified: boolean;
}
export const useUser = () => {
  return useContext(UserContext);
};

const UserContext = createContext({
  user: null as UserData | null,
  setUser: (_user: UserData | null) => {},
});
export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
