import Cookies from "universal-cookie";

const cookies = new Cookies();

// CookieKeys yang berisi kunci yang digunakan untuk mengidentifikasi cookie.
export const CookieKeys = {
    AuthToken: "MyAuth", // Kunci untuk token otentikasi
    User: "user", 
    LimitError: 100,
};
const CookieOptions = {
    path: "/",
    secure: true,
}

// Eksport objek "CookieStorage" yang berisi tiga metode untuk mengelola cookie.
export const CookieStorage = {
    set:(key, data, options) => {
        // Metode untuk menambahkan atau memperbarui cookies 
        return cookies.set(key, data, {...CookieOptions, ...options});
    },
    get:(key, options) => {
        // Metode untuk mengambil nilai cookies
        return cookies.get(key, {...CookieOptions, ...options});
    },
    remove:(key, options) => {
        // Metode untuk menghapus cookies
        return cookies.remove(key, {...CookieOptions, ...options});
    }

}