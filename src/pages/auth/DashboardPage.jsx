import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../../utils/cookies';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const DashboardPage = () => {
  // const { data } = useGetDataUser({});
    const navigate = useNavigate();
    useEffect(() => {
      // Cek apakah token otentikasi tersedia di cookie.
        const token = CookieStorage.get(CookieKeys.AuthToken)
        // Jika tidak ada token, maka akan navigate ke halaman login.
        if(!token){
          toast.error("Login dulu!", { toastId: 'authError' });
          navigate("/login");
        }
    }) 
    const handleOut = () => {
      // menghapus token otentikasi dari cookie
        CookieStorage.remove(CookieKeys.AuthToken, {
            path : '/',
            expires: new Date(0) //ketika klik logout maka saat itu juga token terhapus
        })
        navigate("/login") //kemudian navigate ke halaman login 
    }

  return (
    <div>
    <div>DashboardPage</div>
    <button 
        onClick={handleOut}
        className=" bg-red-300 text-white font-semibold p-2 rounded hover:bg-red-400"
        >
          Log Out
        </button>
    </div>
  )
}
