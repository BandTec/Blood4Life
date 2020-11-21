
import styled  from 'styled-components';
import Slider from "react-slick";



export const divWrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

export const divContainer = styled.div`
    background-color: #d3d3d3;
    width: 360px;
    height: 100vh;
    overflow-y:auto;
`;

export const divSearch = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    background-color:#fff;
    padding: 15px;
    img{
        margin-bottom: 5px;
    }
`;

export const imgLogo = styled.img`
    margin-bottom: 15px;
`;

export const map = styled.div`
    background-color:  #E75D52;
    width: 500px;
`;

export const CarouselTItle = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: gray;
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const Carousel = styled(Slider)`
    .slick-slide{
    margin-right: 16px; 
    
 }

`;