import {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
} from 'react'

type AuthContextType = {
	auth: {} | null
	setAuth: Dispatch<SetStateAction<{}>> | Dispatch<SetStateAction<null>>
}

const AuthContext = createContext({} as AuthContextType)

// 1. Use for wrapping the App
export const AuthContextProvider: React.FC = ({ children }) => {
	const [auth, setAuth] = useState(null)

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

// 2. Use for accessing the state
export const useAuthContext = () => {
	return useContext(AuthContext)
}
