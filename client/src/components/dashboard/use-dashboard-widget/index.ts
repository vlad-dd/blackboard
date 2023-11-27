import { useDispatch, useSelector } from "react-redux";
import { plannerCardsSelector } from "../../../store/selectors";
import { useEffect, useState } from "react";
import { saveAuthUser } from "../../../store/reducers/user";
import { API } from "../../../api";
import { setPlannerCards } from "../../../store/reducers/planner-cards";
import { getToken } from "../../../utils";
import { setGlobalError } from "../../../store/reducers/global-error";
import { useNavigate } from "react-router-dom";
import { GLOBAL_APPLICATION_ROUTES } from "../../../global/routes";

export const useDashboardWidget = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cards, updateObserver, selectedSectionId } = useSelector(plannerCardsSelector);
    const [filteredSection, setFilteredSection] = useState<any>();
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        if (!getToken()) {
          navigate(GLOBAL_APPLICATION_ROUTES.LOGIN);
        };
      }, []);

    useEffect(() => {
        const filteredCard = cards?.find(({ _id }) => _id === selectedSectionId);
        setFilteredSection(filteredCard);
    }, [selectedSectionId, cards]);

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
        filteredSection,
        selectedSectionId,
    };
}