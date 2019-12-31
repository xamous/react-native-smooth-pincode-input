# React Native Smooth Pincode Input

A cross-platform, smooth, lightweight, customizable PIN code input component for React Native.

Most PIN code inputs components implemented by combining several TextInputs. They work, however, not good enough. When a user types fast, or system sluggish, characters may be lost when component switches focus between TextInputs. Users need to type over and over again to get the correct input, which gives a frustrating user experience.

**React Native Smooth Pincode Input** implemented with a different approach - It's based on a single TextInput but only renders it as separated fields. In other words, it looks like a PIN code input, but works as smooth as a native TextInput.

**React Native Smooth Pincode Input** is also highly customizable. By exposing cells and text stylesheets, it can be fully customized to fit in your app design. Password mode also supported with customizable mask characters as well as placeholders.

- Checkout the [example/](https://github.com/xamous/react-native-smooth-pincode-input/tree/master/example) for demo app.

## Features

- Smooth typing without losing inputs
- Customizable cell style
- Customizable text style
- Password mode
- Customizable password mask and placeholder characters
- Built in animations (Credit to [react-native-animatable](https://github.com/oblador/react-native-animatable))

## Installation

```sh
# yarn
yarn add react-native-smooth-pincode-input

# npm
npm i react-native-smooth-pincode-input
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

### Customized style
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

### Custom placeholder and mask using a component
<img src="./demo/placeholder-mask.gif">

```js
<SmoothPinCodeInput
  placeholder={<View style={{
    width: 10,
    height: 10,
    borderRadius: 25,
    opacity: 0.3,
    backgroundColor: 'blue',
  }}></View>}
  mask={<View style={{
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: 'blue',
  }}></View>}
  maskDelay={1000}
  password={true}
  cellStyle={null}
  cellStyleFocused={null}
  value={code}
  onTextChange={code => this.setState({ code })}
/>
```


## Available props

| Name              | Type                                                                                  | Default                                    | Description                                                                                                                                                                                                                                                        |
|-------------------|---------------------------------------------------------------------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| value             | String                                                                                | ''                                         | The value to show for the input                                                                                                                                                                                                                                    |
| codeLength        | Number                                                                                | 4                                          | Number of character for the input                                                                                                                                                                                                                                  |
| cellSize          | Number                                                                                | 48                                         | Size for each cell in input                                                                                                                                                                                                                                        |
| cellSpacing       | Number                                                                                | 4                                          | Space between each cell                                                                                                                                                                                                                                            |
| placeholder       | String                                                                                | Element                                    | ''                                                                                                                                                                                                                                                                 |
| mask              | String                                                                                | Element                                    | '*'                                                                                                                                                                                                                                                                |
| maskDelay         | Number                                                                                | 200                                        | The delay in milliseconds before a character is masked                                                                                                                                                                                                             |
| password          | Boolean                                                                               | false                                      | Mask the input value. Each cell masked with `mask` props                                                                                                                                                                                                           |
| autoFocus         | Boolean                                                                               | false                                      | If true, focuses the input on `componentDidMount`                                                                                                                                                                                                                  |
| editable          | Boolean                                                                               | true                                       | If false, makes each cell not editable                                                                                                                                                                                                                             |
| animated          | Boolean                                                                               | true                                       | Toggle animations                                                                                                                                                                                                                                                  |
| animationFocused  | String, Object                                                                        | 'pulse'                                    | The animation of the focused cell. This can be a preset animation in the form of a [string](https://github.com/oblador/react-native-animatable#animations-2) or a [custom animation](https://github.com/oblador/react-native-animatable#custom-animations) object. |
| restrictToNumbers | Boolean                                                                               | false                                      | Restrict input to numbers only                                                                                                                                                                                                                                     |
| containerStyle    | React View StyleSheet                                                                 | `{}`                                       | View style for whole cell containers                                                                                                                                                                                                                               |
| cellStyle         | React View StyleSheet                                                                 | `{ borderColor: 'gray', borderWidth: 1}`   | View style for each cell                                                                                                                                                                                                                                           |
| cellStyleFocused  | React View StyleSheet                                                                 | `{ borderColor: 'black', borderWidth: 2 }` | View style for focused cell                                                                                                                                                                                                                                        |
| textStyle         | React Text StyleSheet                                                                 | `{ color: 'gray', fontSize: 24 }`          | Text style for cell value                                                                                                                                                                                                                                          |
| textStyleFocused  | React Text StyleSheet                                                                 | `{ color: 'black' }`                       | Text style for focused cell value                                                                                                                                                                                                                                  |
| onFulfill         | Function                                                                              | null                                       | Callback function that's called when the input is completely filled                                                                                                                                                                                                |
| onTextChange      | Function                                                                              | null                                       | Callback function that's called when the text changed                                                                                                                                                                                                              |
| onBackspace       | Function                                                                              | null                                       | Callback function that's called when the input is empty and the backspace button is pressed                                                                                                                                                                        |
| keyboardType      | Enum('default', 'number-pad', 'decimal-pad', 'numeric', 'email-address', 'phone-pad') | 'numeric'                                  | Determines which keyboard to open                                                                                                                                                                                                                                  |

## Thanks to contributors
* [Matias Alvin](https://github.com/alvinmatias69)
* [Marcus Vinicius](https://github.com/MarcwL22)
* [Fellipe Chagas](https://github.com/chagasaway)
* [Erjan Kalybek](https://github.com/erjanmx)
* [Sankaran Kaliappan](https://github.com/hisankaran)
* [Anthony Mittaz](https://github.com/sync)
* [Marco van Dijk](https://github.com/marcovdijk)
* [geminiyellow](https://github.com/geminiyellow)
* [jpr-longgame](https://github.com/jpr-longgame)
* [Ali Kazemkhanloo](https://github.com/alikazemkhanloo)
* [Ricky Sullivan Himself](https://github.com/rickysullivan)
* [Elements](https://github.com/elementsinteractive)
* [Dawid Urbas](https://github.com/mrruby)
* [bsnelder](https://github.com/bsnelder)
* [Nocks](https://github.com/nocksapp)