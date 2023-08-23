import { useMemo } from "react";
import { SPONSORS } from "../../../constants"
import { StyledSponsorsContainerItem } from "../../../styled"

export const useSponsorsWidget = () => {
    const sponsors = useMemo(() => SPONSORS.map((sponsor) => (
        <StyledSponsorsContainerItem>{sponsor}</StyledSponsorsContainerItem>
    )), [SPONSORS]);

    return {
        sponsors
    };
};