import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../api";

export const useRegistrationWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [errors, setErrors] = useState(null);

    //@ts-ignore
    const errorObserver = (field: string) => errors?.get(field);

    const submitForm = async (e: any) => {
        e.preventDefault();
        try {
            await API.register({ fullName, email, password, avatarUrl });
            navigate("/login");
        } catch ({ response: { data } }) {
            const errorMap: any = new Map();
            data.map(({ msg, path }: any) => errorMap.set(path, msg));
            setErrors(errorMap);
        }
    };
    return {
        email,
        password,
        fullName,
        avatarUrl,
        errors,
        setEmail,
        setPassword,
        setFullName,
        setAvatarUrl,
        submitForm,
        errorObserver
    };
}