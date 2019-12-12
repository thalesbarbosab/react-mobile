import React, {Component} from 'react'
import {Keyboard, Button, Text} from 'react-native'

import api from '../../services/api'
import {Container, Form, Input, List, User,Avatar,Name,Bio} from './styles'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen'

export default class Main extends Component {
    state = {
        newUser: '',
        users:[]
    }

    handleAddUser = async () => {
        const { users, newUser} =this.state;
        const response = await api.get(`/users/${newUser}`);
        //console.log(response.data)

        const data = {
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avata: response.data.avatar_url,
        }
        
        console.log(data)

        this.setState({
            users:[...users, data],
            newUsers: '',
        })

        Keyboard.dismiss();
    }

    excluirUser = async() =>{
        console.log('excluir');
    }


    render() {
        const {users, newUser} = this.state;
        const {navigate} = this.props.navigation;
        return(
            <Container>

                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeHolder="Adicionar Usuário"
                        value={newUser}
                        onChangeText={text => this.setState({newUser: text})}
                        returnKeyType= 'send'
                        onSubmitEditing={this.handleAddUser}
                    />
                    <Button title='+'  onPress={this.handleAddUser}>
                    </Button>

                </Form>
                <List 
                    data={users}
                    keyStractor={user => user.login}

                    renderItem={({item}) => (
                        <User>

                            <Avatar source={{uri:item.avata}} />
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>
                            <Button title='Ver Perfil' onPress={() => navigate('User', {perfil: item}) } />

                        </User>
                    )}
                    
                />
            </Container>
        )
    }
}




Main.navigationOptions = { 
    title: 'Usuários'
}