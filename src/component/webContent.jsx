import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

const WebContent = () => {
    console.log(useParams())
    return ( 
        <h1>Chapter : {useParams().chapter}</h1>
     );
}
 
export default WebContent;