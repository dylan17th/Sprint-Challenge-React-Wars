import React from 'react';
import styled from 'styled-components';

const CharacterContainer = styled.div`
color: white;
font-size: 2rem;
text-shadow: -1.5px -1.5px 0 #000, 1.5px 1.5px 0 #000, 0 -1.5px 0 #000,
0 1.5px 0 #000, 1.5px -1.5px 0 #000, -1.5px 1.5px 0 #000, 1.5px 0 0 #000,
-1.5px 0 0 #000; 
line-height:4rem;
border: 3px solid black;
width:35%;
letter-spacing: .5rem;
border-radius: 10px;
display:flex;
flex-wrap:wrap;
justify-content: space-around;
align-items: center;
`
const NameTitle = styled.h1`
font-size: 2.5rem;
padding:1rem;
padding-top:0rem;
margin-bottom: 0rem;
`
const BirthDiv = styled.div`
padding: 1rem;
`
const HeightDiv = styled.div`
border-top: black dashed 2px;
padding: .5rem;
`
const WeightDiv = styled.div`
border-bottom:black dashed 2px;
padding: .5rem;
`


export default function CharacterCard({name, height, mass, birth_year}){
    return (
    <CharacterContainer>
        <NameTitle>{name}</NameTitle>
        <HeightDiv>Height: {height} inches</HeightDiv>
        <WeightDiv>Weight: {mass} pounds </WeightDiv>
        <BirthDiv>Born: {birth_year}</BirthDiv>
    </CharacterContainer>)
}