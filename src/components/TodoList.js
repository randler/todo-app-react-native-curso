//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import TodoListItem from './TodoListItem';
import { toggleTodo, setEditingTodo } from '../actions';

// create a component
const TodoList = ({ 
    todos, 
    dispacthToggleTodo, 
    dispacthSetEditingTodo
 }) => {
    return (
        <View>
            {todos.map(todo => 
                <TodoListItem 
                    key={ todo.id } 
                    todo={ todo }
                    onPressTodo={() => dispacthToggleTodo(todo.id) }
                    onLongPressTodo={() => dispacthSetEditingTodo(todo)}
                />
            )}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

});

const mapStateToProps = state => {
    const { todos } = state;
    return { todos };
} 
//make this component available to the app
export default connect(
    mapStateToProps, 
    { 
        dispacthToggleTodo: toggleTodo,
        dispacthSetEditingTodo: setEditingTodo 
    }
)(TodoList);
