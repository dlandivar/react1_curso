import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";


export function CharacterCard({ character }) {
    return (
        <View style={styles.card} key={character.id}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.species}>Species: {character.species}</Text>
            <Text style={styles.status}>Status: {character.status}</Text>
            <Text style={styles.gender}>Gender: {character.gender}</Text>
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