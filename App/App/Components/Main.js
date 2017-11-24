import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class Main extends Component<{}> {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Todo App</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>

            </ScrollView>

            <View style={styles.footer}>
                <TextInput 
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    placeholder="Type a task" 
                    style={styles.textInput}>


                </TextInput>
            </View>
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#2d89e5',
        alignItems: 'center',
        borderBottomWidth: 10,
        borderBottomColor:'#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#2d89e5'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#2d89e5',
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        borderRadius: 50
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
})