import React from "react";

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";

class Note extends React.Component<{}> {
    render(){
        return (
            <View key={this.props.keyval} style={styles.note}>
              <Text style={styles.noteText}>
                {this.props.val.date}
              </Text>  
              <Text style={styles.noteText}>
                {this.props.val.note}
              </Text>

              <TouchableOpacity style={styles.noteDelete} onPress={this.props.deleteMethod}>
                <Text style={styles.noteDeleteText}>x</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        backgroundColor: '#fff'
    },
    noteText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#2d89e5',
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2d89e5',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {
        color: 'white'
    }
})

export default Note;