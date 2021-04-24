import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native'
import { StyleSheet, Text, View } from 'react-native';
import FindBreakfast from './app/breakfasts/screens/FindBreakfast'
import AddBreakfast from './app/breakfasts/screens/AddBreakfast'

export default function App() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={AddBreakfast} />
        <Route exact path="/findBreakfest" component={FindBreakfast} />
      </Switch>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    alignItems: 'flex-start'
  },
});
