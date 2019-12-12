import React, {Component} from 'react'
import {View, Button, Text} from 'react-native'
import {Container, Usuario,Avatar,Name,Bio} from './styles'


export default class User extends Component {
    render() {
        const { navigation } = this.props;
        const perfil = navigation.getParam('perfil'); 
        console.log(perfil);
        
        return(
          <Container> 
                <Usuario>
                    <Avatar source={{uri: perfil.avata}} />
                    <Name>{perfil.name}</Name>
                    <Bio>{perfil.bio}</Bio>

                </Usuario>
          </Container>
        )
    }
}

User.navigationOptions = { 
    title: 'Perfil'
}