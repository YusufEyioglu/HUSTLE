import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, ImageBackground,PixelRatio,Dimensions} from 'react-native'
import React from 'react'
import {useWindowDimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Welcome = ({navigation}) => {
  return (
    <ImageBackground source={require("../../assets/fitness.png")} style={styles.main}>
      <Image source={require("../../assets/FitnessModell.png")} style={styles.loginImage}></Image>
      <View style={styles.container}>
        <Text style={{fontSize: 33, color:"white", textAlign:"center", fontWeight:"300",}}>
          Sporda
          <Text style={{fontWeight:"bold",}}> Programınızı ve Gelişiminizi</Text>
          <Text> Kayıt Altına Alın.</Text>
        </Text>
        <Text style={{fontSize: 16, color:"white", padding:20, textAlign:"center", fontWeight:"400"}}>Programınızı, gelişiminizi ve uyguladığınız hareketleri kayıt altına alıp görebildiğiniz ilk ve tek mobil uygulama.</Text>
      
        {/* <Text>
        width: {Dimensions.get('window').width}
        height: {Dimensions.get('window').height}
        </Text> */}

        <TouchableOpacity onPress={() => navigation.navigate({name: 'Login'})} style={styles.button } >
          <Text style={{textAlign:"center", fontSize:17, color:"black", fontWeight:"700", marginHorizontal:40}}>Hadi Başlayalım.</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

  main:{
    alignItems:"center",
    flex:1,
  },

  loginImage:{
    width: windowWidth > 408 ? 350 : 230,
    height:460,
    marginTop:70,
  },

  container: {
    width: "100%",
    backgroundColor: "#081c15",
    height: "70%",
    marginTop: -20 ,
    borderTopLeftRadius: 35,
    borderTopRightRadius:35,
    padding:25,
  },
  
  button:{
    padding:20,
    backgroundColor:"white",
    borderRadius:99,
    marginTop:20,
  },

  image6:{
    height:100,
    width:100,
    position:"absolute",
    transform:[
      {translateX: -165},
      {translateY: 400},
      {rotate:"25deg"},
    ]
  },

  image5:{
    height:100,
    width:100,
    position:"absolute",
    transform:[
      {translateX: 165},
      {translateY: 400},
      {rotate:"25deg"},
    ]
  },

  image4:{
    height:100,
    width:100,
    position:"absolute",
    transform:[
      {translateX: -165},
      {translateY: 230},
      {rotate:"-25deg"},
    ]
  },

  image3:{
    height:100,
    width:100,
    position:"absolute",
    transform:[
      {translateX: 160},
      {translateY: 180},
      {rotate:"25deg"},
    ]
  },

  image1:{
    height:100,
    width:100,
    position:"absolute",
    transform:[
      {translateX: -165},
      {translateY: 50},
      {rotate:"25deg"},
    ]
  },

  image2:{
    height:100,
    width:100,
    position:"absolute",
    transform:[
      {translateX: 160},
      {translateY: 5},
      {rotate:"-25deg"},
    ]
  },
})

export default Welcome