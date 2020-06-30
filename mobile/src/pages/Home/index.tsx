import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableHighlight } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import { Feather as Icon } from '@expo/vector-icons'



const Home = () => {
  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      imageStyle={{width: 274, height: 368 }}
    >
      <View style={styles.main} >
          <ImageBackground 
            source={require('../../assets/logo.png')} 
            imageStyle={{width: 187, height: 44, }}
            ></ImageBackground>
        {/* <Image source={require('../../assets/logo.png')} /> */}
        <Text style={styles.title} >Seu market place de coleta de residuos</Text>
        <Text style={styles.description} >Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>

      </View>

      <View style={styles.footer} >
        <RectButton style={styles.button} onPress={() => {}}>
          <View style={styles.buttonIcon} >
            <Icon name="arrow-right" color='#fff' size={24}></Icon>
          </View>
          <Text style={styles.buttonText} >Entrar</Text>
        </RectButton>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f5',
    flex: 1,
    padding: 32,
  },

  logo: {
    width: 146,
  },

  main: {
    flex: 1,
    justifyContent: 'space-between',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 264,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  select: {},

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    left: -20,
  }
});

export default Home





























