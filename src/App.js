import React, {Component} from 'react'
import { View, Text, } from 'react-native'
import Keyboard from './Component/Keyboard'
import LCD from './Component/LCD'
import Login from './Screen/Login'


class App extends Component {
  render() {
    return(
      <Login/>
    )
  }
}
export default App