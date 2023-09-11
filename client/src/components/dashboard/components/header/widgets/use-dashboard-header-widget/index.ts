import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openUserProfileModal } from "../../../../../../store/reducers/modals/user_profile";
import { authUserSelector, plannerCardsSelector } from "../../../../../../store/selectors";

export const useDashboardHeaderWidget = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(authUserSelector);
    const { cards, selectedSectionId } = useSelector(plannerCardsSelector);
    const [sectionHeaderTitle, setSectionHeaderTitle] = useState(null);
    const openProfileModal = () => dispatch(openUserProfileModal());

    useEffect(() => {
        const { section } = cards?.find(({ _id }) => _id === selectedSectionId ) ?? {};
        setSectionHeaderTitle(section);
    }, [selectedSectionId])

    return {
        ...user,
        sectionHeaderTitle,
        openProfileModal
    };
}