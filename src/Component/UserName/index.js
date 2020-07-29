import React from 'react'
import { View, Text, TextInput } from 'react-native'


const Username = ({value, placeholder, onChangeText}) => {
    return(
        <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                />
    )
    }
export default Username