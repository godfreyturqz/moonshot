import { useContext } from 'react'
import { AuthContext } from '@/contexts/AuthContextProvider'

const useAuthContext = () => {
    return useContext(AuthContext)
}

export default useAuthContext
