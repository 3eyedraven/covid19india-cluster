import styled from 'styled-components'
import {
    male_hosp,
    male_cured,
    male_dead
} from '../../images/index'


const LegendContainer = styled.div`
    position: absolute;
    top: 0;
    left: 30%;
    display: flex;
    flex-direction: column;
    background: #fafafa;
    padding: 5px;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-left: 5px;
    margin-top: 5px;
    z-index: 2;
    
    
    @media screen and (max-width: 768px) {
        padding: 4px;
        left 0%;
    }
`


const Image = styled.img`
    height: 25px;
    
    @media screen and (max-width: 768px) {
        height: 6.75px;
    }
`

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
`

const Label = styled.span`
    font-family: 'Lato', sans-serif;
    font-size: 12px;
    margin-left: 0.3rem;
    
    @media screen and (max-width: 768px) {
        font-size: 7px;
    }
`

const NetworkMapLegend = () => {
    return (
        <LegendContainer>
            <ImageContainer style={{marginBottom: '0.5rem'}}>
                <Image src={male_cured} />
                <Label>Recovered</Label>
            </ImageContainer>
            <ImageContainer style={{marginBottom: '0.5rem'}}>
                <Image src={male_hosp} />
                <Label>Hospitalized</Label>
            </ImageContainer>
            <ImageContainer>
                <Image src={male_dead} />
                <Label>Deceased</Label>
            </ImageContainer>
        </LegendContainer>
    )
}


export default NetworkMapLegend;