import React from "react";

import styled from "styled-components"

const User = props =>  {
    console.log('props for followers', props.followers)
    return (
            <Container>
                <img src = {props.userData.avatar_url}/>
                <h3>{props.userData.name}</h3>
                <p> Bio - {props.userData.bio}</p>
                <p> Followers - {props.userData.followers}</p>
                <p> Following - {props.userData.following}</p>
                <p> Location - {props.userData.location}</p>
            </Container>
    )
}


export default User;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2%;
`