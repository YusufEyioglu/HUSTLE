import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';



const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={{marginTop:50,}}>
    <Text style={{fontWeight:"bold", fontSize:45, textAlign:"center", }}>Kayıt Ol</Text>
    <View style={{marginHorizontal:30, marginTop:130,}}>
       <Text style={{fontWeight:"500", fontSize:20,}}>
       <AntDesign name="user" size={24} color="black"/>
          E-posta
      </Text>
      <View style={{backgroundColor:"#FFF7FC",width:"100%", height:55, borderColor:"black", borderWidth:1, borderRadius:20, justifyContent:"center", paddingLeft:22, marginTop:15,}}>
          <TextInput 
          placeholder='E-posta adresinizi giriniz'
          keyboardType='email-address'/>
      </View>

      <Text style={{fontWeight:"500", fontSize:20, marginTop:25,}}>
          <AntDesign name="lock" size={24} color="black" />
          Şifre
  
      </Text>
      <View style={{backgroundColor:"#FFF7FC",width:"100%", height:55, borderColor:"black", borderWidth:1, borderRadius:20, justifyContent:"center", paddingLeft:22, marginTop:15,}}>
          <TextInput 
          placeholder='Şifrenizi giriniz'
          secureTextEntry/>
      </View>

      <Text style={{fontWeight:"500", fontSize:20, marginTop:25,}}>
          <AntDesign name="lock" size={24} color="black" />
          Şifre
  
      </Text>
      <View style={{backgroundColor:"#FFF7FC",width:"100%", height:55, borderColor:"black", borderWidth:1, borderRadius:20, justifyContent:"center", paddingLeft:22, marginTop:15,}}>
          <TextInput 
          placeholder='Şifrenizi tekrar giriniz'
          secureTextEntry/>
      </View>

      <View style={{backgroundColor:"#FFF7FC",marginLeft:125, marginTop:30, width:"30%", height:45, borderColor:"black", borderWidth:1, borderRadius:20, justifyContent:"center",}}>
          <TouchableOpacity>
              <Text style={{textAlign:"center"}}>Kayıt ol</Text>
          </TouchableOpacity>
      </View>

      <View style={{marginTop:15,}}> 
        <TouchableOpacity onPress={() => navigation.navigate({name: 'Login'})} >
               <Text style={{textAlign:"center", color:"blue"}}>
                  Zaten bir hesabın var mı? Giriş yap.
               </Text>
          </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default Signup