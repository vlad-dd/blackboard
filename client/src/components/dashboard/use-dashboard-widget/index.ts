import { useDispatch, useSelector } from "react-redux";
import { plannerCardsSelector } from "../../../store/selectors";
import { useEffect, useState } from "react";
import { saveAuthUser } from "../../../store/reducers/user";
import { API } from "../../../api";
import { setPlannerCards } from "../../../store/reducers/planner-cards";
import { getToken } from "../../../utils";
import { setGlobalError } from "../../../store/reducers/global-error";

export const useDashboardWidget = () => {
    const { cards, updateObserver } = useSelector(plannerCardsSelector);
    const dispatch = useDispatch();
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                const { status, data } = await API.me(getToken());
                if (status === 200) {
                    dispatch(saveAuthUser(data));
                }
            } catch (error) {
                setError(error)
            }
        })()
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const { status, data } = await API.getAllPlannerCards(getToken());
                if (status === 200) {
                    dispatch(setPlannerCards(data));
                }
            } catch (error) {
                setError(error)
            }
        })();
    }, [updateObserver]);

    useEffect(() => {
       if(!!error) dispatch(setGlobalError(error))
    }, [error]);

    return {
        cards,
    };
}