import { createContext } from 'react'

interface AuthContextType {
    userId?: string | null 
}

const AuthContext = createContext<AuthContextType>({})

const AuthContextProvider: React.FC = ({ children }) => {
    

    return (
        <AuthContext.Provider value={{userId: null}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider