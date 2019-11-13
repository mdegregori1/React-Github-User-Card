import React from "react";

import styled from "styled-components"

const Followers = props =>  {
    console.log('props for followers', props.followers)
    return (
        <div>
            <Title2>Followers</Title2>
            <List>
                {props.followers.map(e=>(
                    <Card>
                        <img width="300" src = {e.avatar_url}/>
                        <h3>{e.login}</h3>
                    </Card>
                ))}
            </List>
        </div>
    )
}


export default Followers;

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2%;

`

const Title2 = styled.h3`
text-align: center;
`