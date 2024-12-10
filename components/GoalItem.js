import { StyleSheet, View, Text, Pressable } from 'react-native';

export function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable 
            // on iOS
            style={({pressed}) => pressed && styles.pressedItem} 
            android_ripple={{ color: "#dddddd" }} 
            onPress={props.onDeleteHandler.bind(this, props.id)}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        flex: 1,
        marginBottom: 8,
        backgroundColor: '#5e0acc',
        borderRadius: 6,
    },
    goalText: {
        color: "white",
        padding: 8
    },
    pressedItem: {
        opacity: 0.5
    }
})