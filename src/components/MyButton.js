import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.button, {backgroundColor: this.props.bgColor}]}>
                <Text style={[styles.text, {color: this.props.textColor}]}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 3,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});
