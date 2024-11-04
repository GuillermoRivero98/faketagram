import { useState } from "react";

interface User {
    username: string;
}

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    const login = (username: string, password: string) => {
        setUser({ username });
    };

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout };
};

export default useAuth; 
