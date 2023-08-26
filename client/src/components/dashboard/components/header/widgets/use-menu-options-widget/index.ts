import { GLOBAL_APPLICATION_ROUTES } from './../../../../../../global/routes';
import { useNavigate } from "react-router-dom";
import { removeItemFromLocalStorage } from "../../../../../../utils";

const useMenuOptionsWidget = (handleClose: any) => {
    const navigate = useNavigate();

    const logOut = () => {
        removeItemFromLocalStorage("token");
        handleClose();
        navigate(GLOBAL_APPLICATION_ROUTES.LOGIN);
    };

    return {
        logOut
    }
}

export default useMenuOptionsWidget;