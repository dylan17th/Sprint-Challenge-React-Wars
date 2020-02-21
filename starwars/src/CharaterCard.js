import React from 'react';
import styled from 'styled-components';




export default function CharacterCard({name, height, mass, birth_year}){
    return (
    <div>
        <h1>{name}</h1>
        <div>{height}inches, {mass}pounds</div>
        <div>{birth_year}</div>


    </div>)
}