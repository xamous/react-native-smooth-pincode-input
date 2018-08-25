# React Native Smooth Pincode Input

[![Build Status][build-badge]][build]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

A cross-platform, smooth, lightweight, customizable PIN code input component for React Native.

Most PIN code inputs components implemented by combining several TextInputs. They works, however, not good enough. When user types fast, or system sluggish, characters may lost when component switching focus between TextInputs. User need to type over and over again to get a correct input, gave a frustrated user experience.

**React Native Smooth Pincode Input** implemented with a different approach - It's based on single TextInput but only render it as seperated fields. In other words, it looks like a PIN code input, but works as smooth as a native TextInput.

**React Native Smooth Pincode Input** is also highly customizable. By exposing cells and text stylesheets, it can be fully customized to fit in your app design. Password mode also supported with customizable mask characters as well as placeholders.

- Checkout the [example/](https://github.com/xamous/react-native-smooth-pincode-input/tree/master/example) for demo app.

## Features

- Smooth typing without losing inputs
- Customizable cell style
- Customizable text style
- Password mode
- Customizable password mask and placeholder characters
- Built in shake animation

## Installation

```sh
yarn add react-native-smooth-pincode-input
```

## Examples

### Default style with event handling
<img src="./demo/default.gif">

```js
<SmoothPinCodeInput
  ref={this.pinInput}
  value={code}
  onTextChange={code => this.setState({ code })}
  onFulfill={this._checkCode}
  onBackspace={this._focusePrevInput}
  />
```

### Password with custom mask
<img src="./demo/password.gif">

```js
<SmoothPinCodeInput password mask="﹡"
  cellSize={36}
  codeLength={8}
  value={password}
  onTextChange={password => this.setState({ password })}/>
```

### Underline style
<img src="./demo/underline.gif">

```js
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
```

### Cusmomized style
<img src="./demo/customize.gif">

```js
<SmoothPinCodeInput
  placeholder="⭑"
  cellStyle={{
    borderWidth: 2,
    borderRadius: 24,
    borderColor: 'mediumturquoise',
    backgroundColor: 'azure',
  }}
  cellStyleFocused={{
    borderColor: 'lightseagreen',
    backgroundColor: 'lightcyan',
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
```