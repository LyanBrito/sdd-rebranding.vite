import styled from "styled-components";
import {Colors, Fonts} from "../../styles/util/variables.ts";
import {motion} from "motion/react";
import {device} from "../../styles/base/mixins.ts";

// Card
export const CardContainer = styled(motion.div).attrs({
    whileHover: {
        scale: 1.04,
        boxShadow: "3px 3px 0 0 #FFC700, 3px 3px 0 2px #000, 7px 7px 0 0 #74247A, 7px 7px 0 2px #000",
    }
})`
    display: flex;
    width: 100%;
    padding: 25px 30px;
    flex-direction: column;
    gap: 47px;
    justify-content: space-between;
    align-items: flex-end;
    border-radius: 24px;
    border: 3px solid ${Colors.black};
    background-color: ${Colors.white} ;
    box-shadow: 4px 4px 0 0 ${Colors.purple}, 0 0 0 0 'transparent', 0 0 0 0 'transparent', 0 0 0 0 'transparent';

`
export const CardBody = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
`

export const CardTitle = styled.h5`
    color: ${Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeLG};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    width: 100%;
`
export const CardLink = styled(motion.a).attrs({
    whileHover: {
        scale: 1.04,
        fontWeight: 710
    }
})`
    color: ${Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
`
export const CardText = styled.p`
    color: ${Colors.black};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeTN};
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
`
// Section
export const SectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 60px;
    gap: 40px;
    background-color: ${Colors.purple};
    @media ${device.tablet} {
        padding: 30px;
    ;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 40px;
    width: 100%;
    max-width: 1200px;
    @media ${device.tablet} {
        max-width: unset;
        display: flex;
        flex-direction: column;
        padding: 0;
    ;
`;

export const SectionTitle = styled.h4`
    color: ${Colors.white};
    font-family: ${Fonts.primalFF};
    font-size: ${Fonts.sizeXL};
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    max-width: 1200px;
    width: 100%;
`

export const SectionText = styled.p`
    font-family: ${Fonts.primalFF};
    color: ${Colors.white};
    font-size: ${Fonts.sizeLG};
    margin-top: -20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    max-width: 1200px;

`