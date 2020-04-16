import React, {useState, useRef} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    StatusBar,
    Keyboard,
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default function App() {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const pinInput = useRef();
    
    const checkCode = (code) => {
        if (code != '1234') {
            pinInput.current.shake().then(() => setCode(''));
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    {/* default */}
                    <View style={styles.section}>
                        <Text style={styles.title}>Default</Text>
                        <SmoothPinCodeInput
                            ref={pinInput}
                            value={code}
                            onTextChange={setCode}
                            onFulfill={checkCode}
                            onBackspace={() => console.log('No more back.')}
                        />
                    </View>

                    {/* password */}
                    <View style={styles.section}>
                        <Text style={styles.title}>Password</Text>
                        <SmoothPinCodeInput
                            password
                            mask="﹡"
                            cellSize={36}
                            codeLength={8}
                            value={password}
                            onTextChange={setPassword}
                        />
                    </View>

                    {/* underline */}
                    <View style={styles.section}>
                        <Text style={styles.title}>Underline</Text>
                        <SmoothPinCodeInput
                            cellStyle={{
                                borderBottomWidth: 2,
                                borderColor: 'gray',
                            }}
                            cellStyleFocused={{
                                borderColor: 'black',
                            }}
                            value={code}
                            onTextChange={setCode}
                        />
                    </View>

                    {/* customized */}
                    <View style={styles.section}>
                        <Text style={styles.title}>Customized</Text>
                        <SmoothPinCodeInput
                            placeholder="⭑"
                            cellStyle={{
                                borderWidth: 2,
                                borderRadius: 24,
                                borderColor: 'orange',
                                backgroundColor: 'gold',
                            }}
                            cellStyleFocused={{
                                borderColor: 'darkorange',
                                backgroundColor: 'orange',
                            }}
                            textStyle={{
                                fontSize: 24,
                                color: 'salmon',
                            }}
                            textStyleFocused={{
                                color: 'crimson',
                            }}
                            value={code}
                            onTextChange={setCode}
                        />
                    </View>

                    {/* Custom placeholder & mask */}
                    <View style={styles.section}>
                        <Text style={styles.title}>Custom Placeholder</Text>
                        <SmoothPinCodeInput
                            placeholder={
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 25,
                                        opacity: 0.3,
                                        backgroundColor: 'blue',
                                    }}
                                ></View>
                            }
                            mask={
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 25,
                                        backgroundColor: 'blue',
                                    }}
                                ></View>
                            }
                            maskDelay={1000}
                            password={true}
                            cellStyle={null}
                            cellStyleFocused={null}
                            value={code}
                            onTextChange={setCode}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    section: {
        alignItems: 'center',
        margin: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
