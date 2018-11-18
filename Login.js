import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import firebase from 'firebase'


import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

const firebaseConfig = {
    apiKey: "AIzaSyCm3EWAPVKUMgMsAo3WipHtyBwa4IEwgAU",
    authDomain: "forms-bf682.firebaseapp.com",
    databaseURL: "https://forms-bf682.firebaseio.com",
    projectId: "forms-bf682",
    storageBucket: "forms-bf682.appspot.com",
    messagingSenderId: "832121920288"
  };
 try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log('App reloaded, so firebase did not re-initialize');
}

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = ({
            email: '',
            password: ''
        })
    }

    signUpUser = (email, password) => {

        try {

            if (this.state.password.length < 6) {
                alert("Please enter atleast 6 characters")
                return;
            }

            firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.log(error.toString())
        }
    }

    loginUser = (email, password) => {

        try {

            firebase.auth().signInWithEmailAndPassword(email, password).then(()=> {
              this.setState({
                email:'',
                paswword:'',
                showLoading: true,
                error:''
              });
              this.props.navigation.navigate('Map');
            })
        }
        catch (error) {
        
            console.log(error.toString());
        }
    }

    render() {
        return (
            <Container style={styles.container}>
            <Image
             style={{
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }}
   source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
   />
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(email) => this.setState({ email })}
                        />

                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            secureTextEntry={true}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onChangeText={(password) => this.setState({ password })}
                        />
                    </Item>

                    <Button style={{ marginTop: 10 }}
                        full
                        bordered
                        
                        onPress={() => this.loginUser(this.state.email, this.state.password)}
                    >
                        <Text > Login</Text>
                    </Button>

                    <Button style={{ marginTop: 10 }}
                        full
                        bordered
                        onPress={() => this.signUpUser(this.state.email, this.state.password)}
                    >
                        <Text > Sign Up</Text>
                    </Button>

                </Form>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
})

