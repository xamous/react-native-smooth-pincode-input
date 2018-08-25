import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export default class App extends React.Component {

  state = {
    code: '',
    password: '',
  };
  pinInput = React.createRef();

  _checkCode = (code) => {
    if (code != '1234') {
      this.pinInput.current.shake()
        .then(() => this.setState({ code: '' }));
    }
  }

  render() {
    const { code, password } = this.state;
    return (
      <View style={styles.container}>
        {/* default */}
        <View style={styles.section}>
          <Text style={styles.title}>Default</Text>
          <SmoothPinCodeInput
            ref={this.pinInput}
            value={code}
            onTextChange={code => this.setState({ code })}
            onFulfill={this._checkCode}
            onBackspace={() => console.log('No more back.')}
            />
        </View>

        {/* password */}
        <View style={styles.section}>
          <Text style={styles.title}>Password</Text>
          <SmoothPinCodeInput password mask="﹡"
            cellSize={36}
            codeLength={8}
            value={password}
            onTextChange={password => this.setState({ password })}/>
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
            onTextChange={code => this.setState({ code })}
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
              color: 'salmon'
            }}
            textStyleFocused={{
              color: 'crimson'
            }}
            value={code}
            onTextChange={code => this.setState({ code })}
            />
        </View>

      </View>
    );
  }
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
