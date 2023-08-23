import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isArray } from "lodash-es";
import { API } from "../../../../api";

export const useLoginWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<any>(null);

    const errorObserver = (field: string) => errors?.get(field);

    const submitForm = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await API.login({ email, password });
            window.localStorage.setItem("token", data.token);
            navigate("/");
        } catch (error) {
            const errorsMap: any = new Map();
            if (isArray(error.response.data)) {
                error.response.data.map(({ msg, path }) => errorsMap.set(path, msg));
                setErrors(errorsMap);
            } else {
                errorsMap.set("InvalidCredentials", error.response.data);
                setErrors(errorsMap);
            }
        }
    }
    
    return {
        email,
        password,
        errors,
        setEmail,
        setPassword,
        submitForm,
        errorObserver
    };
};