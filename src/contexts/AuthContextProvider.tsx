import {
	createContext,
	useState,
	useContext,
	Dispatch,
	SetStateAction,
} from 'react'

type AuthContextType = {
	auth: null | { accessToken: string }
	setAuth: Dispatch<SetStateAction<null | { accessToken: string }>>
}

export const AuthContext = createContext({} as AuthContextType)

// 1. Use for wrapping the App
export const AuthContextProvider: React.FC = ({ children }) => {
	const [auth, setAuth] = useState<null | { accessToken: string }>(null)

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
