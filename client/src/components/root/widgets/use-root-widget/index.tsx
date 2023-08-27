import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { globalErrorStateSelector } from "../../../../store/selectors";

const useRootWidget = () => {
    const navigate = useNavigate();
    const { hasGlobalError } = useSelector(globalErrorStateSelector);

    return {
        hasGlobalError,
        navigate
    };
};

export default useRootWidget;