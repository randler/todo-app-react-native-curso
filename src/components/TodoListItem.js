import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TodoListItem = ({ todo, onPressTodo, onLongPressTodo }) => {   
    return (
        <TouchableOpacity  
            onPress={ onPressTodo }
            onLongPress={ onLongPressTodo } >
            <View style={[styles.line, todo.done ? styles.lineDone : null] }>
                <Text style={[styles.textLine, todo.done ? styles.textDone : null]}>
                    { todo.text }
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    line: {
        height: 50,
        paddingLeft: 10,
        paddingTop: 5,
        marginHorizontal: 10,
        marginVertical: 4,
        backgroundColor: '#b2b2b2',
        borderWidth: 1,
        borderColor: '#545454',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    lineDone: {
        backgroundColor: '#018711',
        borderWidth: 1,
        borderColor: '#00590b',
    },
    textLine: {
        justifyContent: 'flex-start',
        color: '#214951',
        fontSize: 13,
        fontWeight: 'bold',
    },
    textDone: {
        color: '#FFFFFF',
        textDecorationLine: 'line-through',
    }
});

export default TodoListItem;