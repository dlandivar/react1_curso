import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Logo from './components/Logo.jsx';
import { Main } from './Main.jsx';



export default function App() {








  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );



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

