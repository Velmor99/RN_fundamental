import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

export function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText("")
    }

    return (
        <Modal visible={props.isModalVisible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")} />
                <TextInput value={enteredGoalText} onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your course goal!!' />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCloseModal} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title='Add goal' color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        padding: 16,
        marginBottom: 24
    },
    image: {
        width: 100,
        height: 100,
        margin: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: "100%",
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})