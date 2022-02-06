import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'

export const useAuthContext = () => useContext(AuthContext)
