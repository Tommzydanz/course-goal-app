import {View, Text, StyleSheet, Pressable} from 'react-native';


function GoalItem(props){
    return(
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)} 
            android_ripple={{ color: '#002171'}}
            // for ios styling we could use object destructuring
        style={({pressed}) => pressed && styles.pressedItem}>
            <View style={styles.goalItem}>
                 <Text style={styles.goalText}>
                    {props.text}
                </Text>
            </View>
        </Pressable>
    );
}
export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 4,
        padding: 10,
        borderColor: "#9646ff",
        borderRadius: 6,
        backgroundColor: "#9646ff",
        borderWidth:1
    },
    goalText: {
        color: "#fff",
        fontSize: 24,
    },
    pressedItem: {
        opacity: 0.5
        // this is for IOS ripple effect
    }
});