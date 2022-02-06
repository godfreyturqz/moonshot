import { createContext, useState } from 'react'

interface AuthContextType {
    auth?: {} | null
    setAuth?: React.Dispatch<React.SetStateAction<{}>>
}

export const AuthContext = createContext<AuthContextType>({})

export const AuthContextProvider: React.FC = ({ children }) => {
    
    const [auth, setAuth] = useState<{} | null>(null)

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}