import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token,setToken] =
        useState(localStorage.getItem("token"));

    const login = (jwt) => {

        localStorage.setItem(
            "token",
            jwt
        );

        setToken(jwt);
    };

    const logout = () => {

        localStorage.removeItem(
            "token"
        );

        setToken(null);
    };

    useEffect(()=>{

        const stored =
            localStorage.getItem(
                "token"
            );

        if(stored)
            setToken(stored);

    },[]);

    return (

        <AuthContext.Provider
            value={{
                token,
                login,
                logout,
                isAuthenticated: !!token
            }}
        >

            {children}

        </AuthContext.Provider>
    );
};

export const useAuth =
    ()=>useContext(AuthContext);