import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, TextInput, Linking, Alert} from 'react-native';

export default function KitapEkleScreen({ navigation: { goBack } }) {
  return (
    <ImageBackground source={require('../images/back1.jpg')} style={styles.image}>
      <StatusBar hidden = {true}/>
      <View style={styles.container}>
        <Text style = {styles.title}>Kitap Ekle</Text>
        <View style={styles.outer}>
          <View style={styles.inner1}>
            <Text style = {styles.text}>Ad</Text>
            <Text style = {styles.text}>Yazar</Text>
            <Text style = {styles.text}>Tür</Text>
            <Text style = {styles.text}>Sayfa</Text>
            <Text style = {styles.text}>Fiyat</Text>
            <Text style = {styles.text}>Tarih</Text>
          </View>
          <View style={styles.inner2}>
             <TextInput style={styles.textinput} />
             <TextInput style={styles.textinput} />
             <TextInput style={styles.textinput} />
             <TextInput style={styles.textinput} />
             <TextInput style={styles.textinput} />
             <TextInput style={styles.textinput} />
          </View>
        </View>
        <TouchableOpacity  onPress={() => goBack()} style={styles.appButtonContainer}>
          <Text  style={styles.appButtonText}>{"Ekle"}</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: '#2b6684',
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    height: "65%"
  },
  appButtonContainer: {
    flexDirection: 'row',
    backgroundColor: "#9cacbf",
    borderRadius: 5,
    marginBottom: 5,
    width: "60%",
    height: "10%",
    justifyContent: "center",
    alignSelf: "center"
  },
  appButtonText: {
    flexDirection: 'row',
    color: "#032e42",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 25
  },
  title: {
    fontSize: 25,
    marginBottom: "1%",
    color: "#9cacbf",
    fontWeight: "bold",
    alignSelf: "center",

  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: { 
    fontSize: 15,
    marginTop: 10,
    color: "#9cacbf",
    fontWeight: "bold",
    alignSelf: "center",
  },
  outer: { 
    flexDirection: 'row',
    height: "70%",
    
    width: "100%",
  },
  inner1: { 
    marginRight: 10,
    alignSelf: "center",
    height: "95%",
    width: "30%",
  },
  inner2: { 
    alignSelf: "center",
    height: "95%",
    width: "65%",
  },
  textinput: { 
    borderWidth: 1,
    borderRadius: 5,
    margin: 6.5,
    backgroundColor: "#9cacbf",
    color: "#032e42",
    fontSize: 22
  },
  text: { 
    fontSize: 16,
    color: "#9cacbf",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 11,
  },
});
