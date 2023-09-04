import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GLOBAL_APPLICATION_ROUTES } from "../../../../global/routes";
import { API } from "../../../../api";
import { IAuthErrors, IErrors } from "../../interfaces";

export const useRegistrationWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [errors, setErrors] = useState<IAuthErrors>(null);

    const errorObserver = (field: string) => errors?.get(field);

    const submitForm = async (e: any) => {
        e.preventDefault();
        try {
            await API.register({ fullName, email, password, avatarUrl });
            navigate(GLOBAL_APPLICATION_ROUTES.LOGIN);
        } catch ({ response: { data } }) {
            const errorMap: IErrors = new Map();
            data.map(({ msg, path }) => errorMap.set(path, msg));
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