import { useState } from "react";

interface User {
    username: string;
    email?: string;
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string, password: string) => {
        setUser({ username });
    };

    const register = (username: string, email: string, password: string) => {
        setUser({ username, email });
    };

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout, register };
};

export default useAuth;
