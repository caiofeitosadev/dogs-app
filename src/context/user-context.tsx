'use client';
import validateToken from '@/actions/validate-token';
import React from 'react';

interface IUserContext {
  user: User | null;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
}
interface User {
  id: number;
  nome: string;
  username: string;
  email: string;
}
const UserContext = React.createContext<IUserContext | null>(null);
export const useUser = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useContext deve estar dentro de um provider.');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = React.useState<User | null>(user);
  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      // if (!ok) await logout();
    }
    if (userState) validate();
  }, [userState]);
  return (
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
