/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';

import Voice from "react-native-voice";

const App = () => {

  const [words, setWords] = useState("");

  useEffect(() => {

    console.log("Entra");
    Voice.onSpeechPartialResults = onSpeechPartialResults;

  }, [])

  const onSpeechPartialResults = (e) => {
    console.log('onSpeechPartialResults: ', e);
    setWords(e.value);
  };


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          style={styles.scrollView}>
          <View style={styles.body}>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>{words}</Text>
            </View>

            <View style={styles.sectionContainer}>
              <Button title="Press" onPress={() => Voice.start("en-US")} />
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
