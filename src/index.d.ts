/**
 * TypeScript declaration for https://github.com/xamous/react-native-smooth-pincode-input
 *
 * @author Amr Mostafa <amr_aboelenin95@yahoo.com>
 */

declare module 'react-native-smooth-pincode-input' {
  import React from 'react';
  import {
    TextStyle,
    ViewStyle,
    ImageStyle,
    StyleProp,
    KeyboardType,
  } from 'react-native';
  import * as Animatable from 'react-native-animatable';

  interface Props {
    value: string;
    codeLength?: number;
    cellSize?: number;
    cellSpacing?: number;
    placeholder?: JSX.Element | string;
    mask?: JSX.Element | string;
    maskDelay?: number;
    password?: boolean;
    autoFocus?: boolean;
    editable?: boolean;
    animated?: boolean;
    animationFocused?:
      | string
      | Animatable.CustomAnimation<TextStyle & ViewStyle & ImageStyle>;
    restrictToNumbers?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    cellStyle?: StyleProp<ViewStyle>;
    cellStyleFocused?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    onFulfill?: () => void;
    onTextChange: (text: string) => void;
    onBackspace?: () => void;
    keyboardType?: KeyboardType;
  }

  class SmoothPinCodeInput extends React.Component<Props> {}

  export default SmoothPinCodeInput;
}
