import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Dimensions} from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';


const Login = ({navigation}) => {

const[email, setEmail] = useState('')
const[password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight:"bold", fontSize:45, textAlign:"center", }}>Giriş Yap</Text>
      <View style={{marginHorizontal:30, marginTop:200,}}>
         <Text style={{fontWeight:"500", fontSize:20,}}>
         <AntDesign name="user" size={24} color="black"/>
            E-posta
        </Text>
        <View style={{
        backgroundColor:"#FFF7FC",
          width:"100%", 
          height:55, 
          borderColor:"black", 
          borderWidth:1, 
          borderRadius:20, 
          justifyContent:"center", 
          paddingLeft:22, 
          marginTop:15,
          }}>

            <TextInput 
            placeholder='E-posta adresinizi giriniz'
            value={email}
            onChangeText={text => setEmail(text)}/>
        </View>

        <Text style={{
          fontWeight:"500", 
          fontSize:20, 
          marginTop:25,
          }}>
            <AntDesign name="lock" size={24} color="black" />
            Şifre
    
        </Text>
        <View style={{
          backgroundColor:"#FFF7FC",
          width:"100%",
          height:55, 
          borderColor:"black", 
          borderWidth:1, 
          borderRadius:20, 
          justifyContent:"center", 
          paddingLeft:22, 
          marginTop:15,
          }}>
            
            <TextInput 
            placeholder='Şifrenizi giriniz'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry/>
        </View>

        <View style={{
          backgroundColor:"#FFF7FC",
          marginLeft:125, 
          marginTop:30, 
          width:"30%", 
          height:45, 
          borderColor:"black", 
          borderWidth:1, 
          borderRadius:20, 
          justifyContent:"center",
          }}>

            <TouchableOpacity onPress={() => navigation.navigate({name: 'Home'})}>
                <Text style={{textAlign:"center"}}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:15,}}> 
          <TouchableOpacity onPress={() => navigation.navigate({name: 'Signup'})}>
                 <Text style={{textAlign:"center", color:"blue"}}>
                    Bir hesabın yok mu? Hemen Kayıt Ol.
                 </Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
 
  container:{
    marginTop:50,
    flex: 1,
    flexDirection: 'column',
  },
})