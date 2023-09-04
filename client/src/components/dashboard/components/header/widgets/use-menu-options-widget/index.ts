import { useNavigate } from "react-router-dom";
import { GLOBAL_APPLICATION_ROUTES } from './../../../../../../global/routes';
import { removeItemFromLocalStorage } from "../../../../../../utils";

const useMenuOptionsWidget = (handleClose: any) => {
    const navigate = useNavigate();

    const MENU_ACTIONS = {
        logOut: () => {
            removeItemFromLocalStorage("token");
            handleClose();
            navigate(GLOBAL_APPLICATION_ROUTES.LOGIN);
        }
    };

    return {
        MENU_ACTIONS
    }
}

export default useMenuOptionsWidget;