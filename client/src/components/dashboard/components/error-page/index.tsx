import React from 'react'
import { size } from "lodash-es";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EmptyDashboard from '../empty-dashboard';
import {
    EMPTY_DASHBOARD_DESCRIPTION,
    EMPTY_DASHBOARD_TITLE,
    EMPTY_SECTION_DESCRIPTION,
    EMPTY_SECTION_TITLE
} from '../empty-dashboard/constants';

const DashboardErrorPage = ({ selectedSectionId, filteredSection }) => {
    return (
        <>
            {selectedSectionId && !size(filteredSection?.cards) && (
                <EmptyDashboard
                    title={EMPTY_SECTION_TITLE}
                    description={EMPTY_SECTION_DESCRIPTION}
                    Icon={RemoveCircleIcon}
                />
            )}
            {!selectedSectionId && !size(filteredSection?.cards) && (
                <EmptyDashboard
                    title={EMPTY_DASHBOARD_TITLE}
                    description={EMPTY_DASHBOARD_DESCRIPTION}
                    Icon={RemoveCircleIcon}
                />
            )}
        </>
    )
}

export default DashboardErrorPage;