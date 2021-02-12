import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, StatusBar } from 'react-native'
import LoginForm from './LoginForm'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content' backgroundColor='#1572de' />
                <View style={styles.headBackground} />
                <KeyboardAvoidingView behavior='position'>
                    <View>
                        <Text style={styles.logo}>METH.</Text>
                        <Text style={styles.logoDescription}>Property & Tax Survey</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.loginArea}>
                            <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
                            <Text style={styles.loginAreaDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <LoginForm />
                        </View>
                    </ScrollView>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpDescription}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.signUpText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 80,
    },
    headBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 250,
        width: '100%',
        backgroundColor: '#1572de'
    },
    logo: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f2f2f2'
    },
    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2'
    },
    loginArea: {
        margin: 40,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,

        shadowColor: 'black',
        shadowOpacity: .2,
        shadowRadius: 3,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 3
    },
    loginAreaTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    loginAreaDescription: {
        fontSize: 12,
        textAlign: 'center',
        color: '#7e868f',
        marginVertical: 10,
    },
    signUpArea: {
        alignItems: 'center',
    },
    signUpDescription: {
        color: '#999'
    },
    signUpText: {
        color: '#666'
    }
});
