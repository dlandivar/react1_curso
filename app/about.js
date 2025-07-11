import { Link } from "expo-router"
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function About() {
    return (
        <ScrollView >
            <View >
                <Text style={styles.title}>
                    What is this that stands before me?
                    Figure in black, which points at me
                    Turn 'round quick, and start to run
                    Find out I'm the chosen one
                    Oh, no!
                </Text>
                <Text>
                    Big black shape with eyes of fire
                    Telling people their desire
                    Satan's sitting there, he's smiling
                    Watches those flames get higher and higher
                    Oh, no, no, please, God help me

                    Is it the end, my friend?
                    Satan's coming 'round the bend
                    People running 'cause they're scared
                    The people better go and beware!
                    No, no, oh, God, no!
                </Text>
          
              
            </View>
<br/><br/><br/>           
                <Link href="/" style={styles.title} >Back to the Beginning</Link>
             
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
        alignItems: 'center',
    },
});