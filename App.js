import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store';


import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import StackNavigate from './screens/StackNavigate';




export default function App() {


  return (
    <Provider store={store}>


      <NavigationContainer>
        <SafeAreaProvider>
          <StackNavigate />

        </SafeAreaProvider>
      </NavigationContainer>

    </Provider>
  );
}

