import {useMutation} from '@tanstack/react-query'
import http from '../../utils/http';
import { API_ENDPOINT } from '../../utils/api-endpoint';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';



const LoginUser = async (input) => {
    // Melakukan permintaan HTTP POST ke API_ENDPOINT.LOGIN dengan data input.
    return await http.post(API_ENDPOINT.LOGIN, input).then((result) => {
        // Jika berhasil, menyimpan token otentikasi di cookie.
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)  
      return result
    //handle error
    }).catch((err) => {
        console.log(err)
    });

    
}


const useLoginUser = () => {
    const navigate = useNavigate()
    // Menggunakan useMutation, kemudian ketika regist berhasil maka akan navigate ke halaman dashboard
    return useMutation (LoginUser, {onSuccess : () => {navigate('/')}})
   

}
export {LoginUser, useLoginUser}

