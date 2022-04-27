
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    

    function goalInputHandler(enteredGoalText) {
        setEnteredGoalText(enteredGoalText);
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }


    return(
        <Modal visible={props.visibility} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require("../assets/images/goal.png")} style={styles.image} />
                <TextInput placeholder='your custom goals here!'
                style={styles.textInput}
                onChangeText={goalInputHandler} 
                value={enteredGoalText}
                />
                <View style={styles.button}>
                    <Button title="Add Goal"
                        onPress={addGoalHandler}
                        color='#9646ff' />
                    <Button title="Cancel"
                        onPress={props.onCancel} 
                        color='#e91e63' />
                </View>
            </View>
        </Modal>
            
    );
};

export default GoalInput;


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#5e0acc',
    },
    image: {
        width: 150,
        height: 150,
    },
    textInput: {
        padding: 10,
        margin: 8,
        borderRadius: 12,
        borderWidth: 1,
        borderColor:"#ed80ff",
        width: "90%",
        color: "#120438",
        backgroundColor: "#ed80ff",
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: 16,
        width: '50%'
        
    }
});