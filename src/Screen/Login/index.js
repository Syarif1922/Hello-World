import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Username from '../../Component/UserName'
import Password from '../../Component/Password'


class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }
    render(){
        return(
            <View>
                <Text>{this.state.username}</Text>
                <Username
                value={this.state.username}
                placeholder='username'
                onChangeText={text=>{this.setState({username:text})}}/> 
                <Password
                value={this.state.password}
                placeholder='password'
                onChangeText={text=>{this.setState({password:text})}}/>
            </View>
        )
    }
}
export default Login