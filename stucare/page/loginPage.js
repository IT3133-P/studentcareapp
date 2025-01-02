import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, TextInput, Button, IconButton} from 'react-native-paper';
import { useState } from 'react';
import { students } from '../database/StudentsDb';

export default function Login() {

    const [logInData, setLogInData] = useState({
        userName:'',
        password:''
    })
    const [error, setError] = useState(null);

    function formDataHandle(field, char) {
        console.log(char)
        setLogInData(pre => (
            {
                ...pre,
                [field]:char
            }
        ))
    }

    function login() {

        if(logInData.userName !== '' && logInData.password !== '') {
            const status = students.find((ele) => (ele.username === logInData.userName && ele.password === logInData.password))
            if(status) {
                console.log('Done')
            }
            else {
                setError('Invalied username or password...')
            }
        }
        else {
            setError('Please fill all fields...')
        }
    }
    

    return (

        <PaperProvider>

            <View style={styles.container}>
                <Text>Login</Text>
                <TextInput style={styles.inputBox} mode={'outlined'} label={'Username'} value={logInData.userName} onChangeText={(char) => {formDataHandle('userName',char)}}/>
                <br></br>
                <TextInput style={styles.inputBox} mode={'outlined'} label={'Password'} value={logInData.password} onChangeText={(char) => {formDataHandle('password',char)}}/>
                <br></br>
                <Button mode={'contained'} onPress={() => {login()}}>Login</Button>
            </View>
        </PaperProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox : {
        backgroundColor: 'white'
    }
})

const inputTheme = {
    colors:{
        text: 'black',
        backgroundColor: 'white'
    }
}