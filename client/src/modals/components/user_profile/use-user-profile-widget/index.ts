import { useDispatch, useSelector } from "react-redux";
import { authUserSelector, plannerCardsSelector, userProfileModalStateSelector } from "../../../../store/selectors";
import { closeUserProfileModal } from "../../../../store/reducers/modals/user_profile";

export const useUserProfileWidget = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(authUserSelector);
    const { isOpen } = useSelector(userProfileModalStateSelector);
    const { cards } = useSelector(plannerCardsSelector);
    const closeUserProfile = () => dispatch(closeUserProfileModal());

    return {
        ...user,
        isOpen,
        cards,
        closeUserProfile
    }
}