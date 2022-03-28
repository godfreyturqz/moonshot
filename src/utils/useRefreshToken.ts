import useAuthContext from './useAuthContext'
import { refresh } from '@/services/refreshToken'


const useRefreshToken = () => {
    const { setAuth } = useAuthContext()

    const data = refresh()
    console.log('refresh')
    console.log(data)
    // setAuth?.(prev => {
    //     return {
    //         ...prev,
    //         accessToken: data.accessToken
    //     }
    // })
    return data
}

export default useRefreshToken
