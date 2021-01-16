import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import Navigation from './src/views/navigation/index';
import LoadingScreen from './src/views/screens/LoadingScreen';

export default function App () {
  const [loading, setLoading] = useState (false);

  // useEffect (() => {
  //   setTimeout (() => setLoading (true), 4000);
  // }, []);

  if (loading) {
    return <LoadingScreen />;
  } else {
    return <Navigation />;
  }
}
