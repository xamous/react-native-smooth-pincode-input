import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  containerDefault: {},
  cellDefault: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  cellFocusedDefault: {
    borderColor: 'black',
    borderWidth: 2,
  },
  textStyleDefault: {
    color: 'gray',
    fontSize: 24,
  },
  textStyleFocusedDefault: {
    color: 'black',
  },
});

class SmoothPinCodeInput extends Component {

  state = {
    maskDelay: false,
    focused: false,
  };
  ref = React.createRef();
  inputRef = React.createRef();

  shake = () => {
    return this.ref.current.shake(650);
  };

  focus = () => {
    return this.inputRef.current.focus();
  };

  blur = () => {
    return this.inputRef.current.blur();
  };


  _keyPress = (event) => {
    let {key} = event.nativeEvent;
    const { value, onBackspace,onTextChange, password, codeLength , onFulfill } = this.props;
    if (key === 'Backspace') {
      if (value === '' ) {
        onBackspace && onBackspace();
      }else{
        const code = value.slice(0,value.length-1)
        onTextChange(code);
      }
    }else if (['0123456789۰۱۲۳۴۵۶۷۸۹',].includes(key) ){
      const code = value.length>=codeLength ? value : value + key;
      if (code.length === codeLength && onFulfill) {
        onFulfill(code);
      }
      onTextChange(code)
      const maskDelay = password
      this.setState({ maskDelay });

      if (maskDelay) { // mask password after delay
        setTimeout(() => this.setState({ maskDelay: false }), 200);
      }
    }
  };

  _onFocused = (focused) => {
    this.setState({ focused });
  };

  render() {
    const {
      value,
      codeLength, cellSize, cellSpacing,
      placeholder,
      password,
      mask,
      autoFocus,
      containerStyle,
      cellStyle,
      cellStyleFocused,
      cellStyleFilled,
      textStyle,
      textStyleFocused,
      keyboardType,
      animationFocused,
    } = this.props;
    const { maskDelay, focused } = this.state;
    return (
      <Animatable.View
        ref={this.ref}
        style={[{
          alignItems: 'stretch', flexDirection: 'row', justifyContent: 'center', position: 'relative',
          width: cellSize * codeLength + cellSpacing * (codeLength - 1),
          height: cellSize,
        },
          containerStyle,
        ]}>
        <View style={{
          position: 'absolute', margin: 0, height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          {
            Array.apply(null, Array(codeLength)).map((_, idx) => {
              const cellFocused = focused && idx === value.length;
              const filled = idx < value.length;
              const last = (idx === value.length - 1);

              return (
                <Animatable.View
                  key={idx}
                  style={[
                    {
                      width: cellSize,
                      height: cellSize,
                      marginLeft: cellSpacing / 2,
                      marginRight: cellSpacing / 2,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    cellStyle,
                    cellFocused ? cellStyleFocused : {},
                    filled ? cellStyleFilled : {},
                  ]}
                  animation={idx === value.length && focused ? animationFocused : null}
                  iterationCount="infinite"
                  duration={500}
                >
                  {(filled || placeholder !== null) && (<Text
                    style={[
                      textStyle,
                      cellFocused ? textStyleFocused : {},
                    ]}>
                    {filled && (password && (!maskDelay || !last)) ? mask : value.charAt(idx)}
                    {!filled && placeholder}
                  </Text>)}
                </Animatable.View>
              );
            })
          }
        </View>
        <TextInput
          value={value}
          ref={this.inputRef}
          onKeyPress={this._keyPress}
          onFocus={() => this._onFocused(true)}
          onBlur={() => this._onFocused(false)}
          spellCheck={false}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          numberOfLines={1}
          maxLength={codeLength}
          style={{
            flex: 1,
            opacity: 0,
            textAlign: 'center',
          }} />
      </Animatable.View>
    );
  }

  static defaultProps = {
    value: '',
    codeLength: 4,
    cellSize: 48,
    cellSpacing: 4,
    placeholder: '',
    password: false,
    mask: '*',
    keyboardType: 'numeric',
    autoFocus: false,
    containerStyle: styles.containerDefault,
    cellStyle: styles.cellDefault,
    cellStyleFocused: styles.cellFocusedDefault,
    textStyle: styles.textStyleDefault,
    textStyleFocused: styles.textStyleFocusedDefault,
    animationFocused: 'pulse',
  };
}

SmoothPinCodeInput.propTypes = {
  value: PropTypes.string,
  codeLength: PropTypes.number,
  cellSize: PropTypes.number,
  cellSpacing: PropTypes.number,

  placeholder: PropTypes.string,
  mask: PropTypes.string,
  password: PropTypes.bool,

  autoFocus: PropTypes.bool,

  containerStyle: ViewPropTypes.style,

  cellStyle: ViewPropTypes.style,
  cellStyleFocused: ViewPropTypes.style,

  textStyle: Text.propTypes.style,
  textStyleFocused: Text.propTypes.style,

  animationFocused: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),

  onFulfill: PropTypes.func,
  onChangeText: PropTypes.func,
  onBackspace: PropTypes.func,

  keyboardType: PropTypes.string,
};

export default SmoothPinCodeInput;
