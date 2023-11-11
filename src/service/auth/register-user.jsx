import {useMutation} from '@tanstack/react-query'
import { API_ENDPOINT } from '../../utils/api-endpoint';
import http from '../../utils/http';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { useNavigate } from 'react-router-dom';


const RegisterUser = async (input) => {
    // Kirim permintaan HTTP POST ke API endpoint REGISTER dengan data 'input'.
    return await http.post(API_ENDPOINT.REGISTER, input).then((result) => {
        // Jika berhasil, simpan token otentikasi di cookie.
        CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)  
        return result
      }).catch((err) => {
          console.log(err)
      });
    
}


const useCreateUser = () => {
    const navigate = useNavigate()
    // menggunakan useMutation, kemudian ketika regist berhasil maka akan navigate ke halaman login
    return useMutation(RegisterUser, {onSuccess : () => {navigate('/login')}})
   

}
export {RegisterUser, useCreateUser}

