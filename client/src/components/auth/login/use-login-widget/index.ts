import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isArray } from "lodash-es";
import { GLOBAL_APPLICATION_ROUTES } from "../../../../global/routes";
import { API } from "../../../../api";
import { IAuthErrors, IErrors } from "../../interfaces";
import { setItemToLocalStorage } from "../../../../utils";
import { INVALID_CREDENTIALS_ERROR, TOKEN_KEY } from "../../constants";

export const useLoginWidget = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<IAuthErrors>(null);

    const errorObserver = (field: string) => errors?.get(field);

    const submitForm = async (e: any) => {
        e.preventDefault();
        try {
            const { data } = await API.login({ email, password });
            setItemToLocalStorage(TOKEN_KEY, data.token);
            navigate(GLOBAL_APPLICATION_ROUTES.HOME);
        } catch (error) {
            const errorsMap: IErrors = new Map();
            if (isArray(error.response.data)) {
                error.response.data.map(({ msg, path }) => errorsMap.set(path, msg));
                setErrors(errorsMap);
            } else {
                errorsMap.set(INVALID_CREDENTIALS_ERROR, error.response.data);
                setErrors(errorsMap);
            }
        }
    };

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