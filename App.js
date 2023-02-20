import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.container, styles.header]}>
        <Text style={styles.textLeft}>
          Here are some boxes of different colors
        </Text>
      </View>
      <View style={[styles.container, styles.cyan]}>
        <Text style={styles.textWhite}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={styles.textWhite}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={styles.textWhite}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={styles.textWhite}>Orange: #cb4b16ge</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    maxHeight: 50,
    width: '100%',
    borderRadius: 5,
    color: 'white',
    marginVertical: 5,
  },
  safeAreaView: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 20,
  },
  header: {
    fontWeight: 'bold',
    alignItems: 'flex-start',
  },
  textWhite: {
    color: 'white',
    fontWeight: '800',
  },
  textLeft: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
