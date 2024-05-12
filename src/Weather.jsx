import styled from 'styled-components';


const Container=styled.div`
background-color:#F1916D;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 50vw;
min-height: 50vh;

    
`;

const Weather = () =>{
return(
    <Container>
        <h3>Weather App</h3>
        </Container>
);
}

export default Weather;