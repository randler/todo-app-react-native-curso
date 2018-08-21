import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import  Input from './Input';
import { addTodo, setTodotext, updateTodo } from '../actions';

class TodoForm extends React.Component {
    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
    }

    onPress() {
        const { todo } = this.props;
        if (todo.id) {
            return this.props.dispatchUpdateTodo(todo);
        } 
        const { text } = todo;
        this.props.dispatchAddTodo(text);
    }

    render() {
        const { text, id } = this.props.todo;
        return(
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={id ? 'Save' : 'Add'}
                        onPress={() => this.onPress()}
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        marginBottom: 5,
        paddingTop: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#545454',
        backgroundColor: '#919191'
    },
    inputContainer: {
        flex: 8,
        paddingLeft: 10,
    },
    buttonContainer: {
        flex: 3,
        marginRight: 10,
    }
    
});

/*const mapDispatchToProps = dispatch => {
    return {
        dispatchAddTodo: text => dispatch(addTodo(text))
    }
}*/

/*const mapDispatchToProps = {
    dispatchAddTodo: addTodo
}
*/
//curryng
//export default connect(null, mapDispatchToProps)(TodoForm);

const mapStateToProps = state => {
    return {
        todo: state.editingTodo
    }
}

export default connect(
    mapStateToProps, 
    {
        dispatchAddTodo: addTodo,
        dispatchSetTodoText: setTodotext,
        dispatchUpdateTodo: updateTodo
    }
)(TodoForm);