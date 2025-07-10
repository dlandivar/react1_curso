import { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, FlatList, keyExtractor } from 'react-native';
import { getPersonajes } from './lib/rickyMorty';
import { CharacterCard } from './characterCard/CharacterCard';


export function Main() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        getPersonajes().then((data) => {
            console.log("Personajes:", data);
            setPersonajes(data);
        })
    }, []);

    return (
        <>
            {(personajes.length === 0) ? (
                <ActivityIndicator size={"large"} color="#0000ff" />
            ) : (
                <FlatList >
                    data={personajes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item, index }) => (
                            <CharacterCard character={item} index={index} />
                        )
                    }
                </FlatList>
            )}
        </>

    );
}
