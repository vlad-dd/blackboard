import { useSelector } from "react-redux";
import { globalErrorStateSelector } from "../../../../store/selectors";

const useRootWidget = () => {
    const { hasGlobalError } = useSelector(globalErrorStateSelector);

    return {
        hasGlobalError,
    };
};

export default useRootWidget;