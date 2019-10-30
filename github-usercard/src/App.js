import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"

import User from "./components/User"
import Followers from "./components/Followers"


class App extends Component {
  state = {
    userCard: '',
    userFollowers: []
  }
  componentDidMount(){
    axios
    .get(`https://api.github.com/users/mdegregori1`)
    .then(response => {
      console.log('api call', response.data)
      this.setState({
        userCard: response.data
      })
      axios
      .get(response.data.followers_url)
      .then(response => {
        this.setState({
          userFollowers: response.data
        })
      }) 
      .catch(err => console.log(err));

    }) 
    .catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <Title>GitHub UserCard</Title>
        <User userData={this.state.userCard} />
        <Followers followers={this.state.userFollowers}/>
      </div>
    )
  }
}


export default App;

const Title = styled.h1`
text-align: center;
`