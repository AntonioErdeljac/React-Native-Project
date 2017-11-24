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
import Note from "./Note";

export default class Main extends Component<{}> {
    constructor(props){
        super(props);

        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

    addNote(){
        if(this.state.noteText){
            let date = new Date();
            this.state.noteArray.push({
                'date': date.getFullYear() + 
                "/" + date.getMonth() + 
                "/" + date.getDay(),
                'note': this.state.noteText 
            });

            this.setState({noteArray: this.state.noteArray});
            this.setState({noteText: ''})
        }
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray})
    }

    render() {
        let notes = this.state.noteArray.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={() => this.deleteNote(key)} />
        })
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Todo App</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        value={this.state.noteText}
                        onChangeText={(noteText) => this.setState({noteText: noteText})} 
                        placeholderTextColor="white"
                        underlineColorAndroid="transparent"
                        placeholder="Type a task" 
                        style={styles.textInput}>


                    </TextInput>
                </View>
                <TouchableOpacity 
                    onPress={this.addNote.bind(this)}
                    style={styles.addButton}>
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