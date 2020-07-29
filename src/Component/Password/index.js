import React from 'react'
import { View, TextInput } from 'react-native'


const Password = ({value, placeholder, onChangeText}) => {
    return(
        <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}/>
    )
}
export default Password