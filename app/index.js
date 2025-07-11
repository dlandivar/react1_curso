import { StatusBar } from "react-native";
import { StyleSheet, View } from 'react-native';
import Logo from '../components/Logo.jsx';
import { Main } from '../Main.jsx';


export default function index() {
  return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <Logo style={styles.logo} />
        <Main />
  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  /*container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },*/
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  species: {
    fontSize: 16,
    color: 'red',
  },
  status: {
    fontSize: 16,
    color: 'blue',
  },
  gender: {
    fontSize: 16,
    color: 'orange',
    fontWeight: 'bold',
  },
  logo: {
    backgroundColor: 'transparent',
    height: '100%',
    width: '100%',
    padding: 20,
  },
});
