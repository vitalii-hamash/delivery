import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Text, SafeAreaView} from "react-native";

export default function App() {
  return (
      <SafeAreaView>
        <NavigationContainer>
          <Text>Goods</Text>
        </NavigationContainer>
      </SafeAreaView>
  );
}
