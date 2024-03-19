import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TextInput, Button } from 'react-native-paper'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={require('../img/rw1968.png')}
                    style={{ width: '100%', height: 170, alignSelf: 'center' }}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    label="Username"
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon icon="eye" />}
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
                    เข้าสู่ระบบ
                </Button>
            </View>
            <Text variant="titleLarge">   กรุณาใส่ข้อมูลเพื่อเข้าสู่ระบบด้วยครับ ! </Text>

        </View>

    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        flex: 0,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 10
    },
    imageContainer: {
        alignSelf: 'center',
        padding: 14
    },
    inputContainer: {
        padding: 14,
    },
    buttonContainer: {
        alignSelf: 'center',
        width: '50%',
        padding: 10,
    }
})
