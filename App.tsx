// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './views/Home';
import Itanhaem from './views/Itanhaem';
import Gramado from './views/Gramado';
import Santos from './views/Santos';
import Peruibe from './views/Peruibe';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Itanhaem: Itanhaem,
    Gramado: Gramado,
    Santos: Santos,
    Peruibe: Peruibe
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}