import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
            <TouchableOpacity onPress={props.onDelete.bind(this, props)} style={styles.delete} >
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
    delete: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 1,
    },
    deleteText: {
        color: '#FFFFFF'
    }
})