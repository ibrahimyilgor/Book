import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, ImageBackground, Linking, FlatList} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import booklist from '../data.json'

export default function KitaplarimScreen({navigation}) {
  return (
    <ImageBackground source={require('../images/back1.jpg')} style={styles.image}>
      <StatusBar hidden = {true}/>
      <View style={styles.container}>
        <FlatList
          data={booklist}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <View>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />
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
    width: "50%",
    height: "50%"
  },
  appButtonContainer: {
    flexDirection: 'row',
    backgroundColor: "#9cacbf",
    borderRadius: 5,
    marginBottom: 5,
    width: "90%",
    height: "15%",
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
    marginBottom: 15,
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
  } 
});
