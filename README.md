# ReactNativePageWrapper

该 React Native 组件用于解决 IOS 刘海屏以及 Android 异形屏适配问题。

- React 版本在 16.9.0 以上
- ReactNative 版本在 0.60.0 以上

## 简介

PageWrapper 分为两种模式，一直是普通页面模式，另一种是全屏页面模式。

### 普通页面模式

普通的页面，一般都会完整地显示状态栏、头部、以及其它页面内容，这种页面在开发中最为常用。但是由于手机屏幕存在水滴屏、刘海屏等情况，会造成页面内容的遮挡，因此 `PageWrapper`  组件对 iOS 以及 Android 的异形屏情况进行了处理，防止摄像头、传感器区域对页面内容进行遮挡。

`PageWrapper`  组件使用了 React Native 提供的  `SafeAreaView`  这个组件：

> The purpose of `SafeAreaView` is to render content within the safe area boundaries of a device. It is currently only applicable to iOS devices with iOS version 11 or later.

但是由于  `SafeAreaView`  在 Android 平台是不会生效的，所以  `PageWrapper`  在内部对 Android 做了类似的处理来解决异形屏可能存在遮挡页面内容的问题，尽量让 Android 与 iOS 端对异形屏的适配差异减到最小。

### 全屏页面模式

全屏页面模式，一般在展示视频、图片等需要将内容进行全屏展示的场景使用。页面的内容会在状态栏以及头部之下进行渲染。

类似于 React Native StatusBar 组件 `translucent` props 的效果：

> If the status bar is translucent. When translucent is set to true, the app will draw under the status bar. This is useful when using a semi transparent status bar color.

由于页面头部是通过 `header` props 传入的，因此在使用全屏页面模式的时候，当将全屏属性设置为 `true`  的时候，将自动隐藏状态栏以及头部，从而达到页面内容全屏的效果。

## Props

### isFullScreenPageMode

页面是否为全屏页面模式。

全屏模式下页面内容会在状态栏以及页面头部下渲染，一般用在浏览图片或者浏览视频等场景。

| TYPE    | REQUIRED |
| ------- | -------- |
| boolean | false    |

### isFullScreen

页面内容是否全屏显示。

该属性只有 `isFullScreenPageMode`  为 true 的时候才生效。 `isFullScreen`  为 true 的时候，状态栏与通过 `header`  传入的头部将一同隐藏。

| TYPE    | REQUIRED |
| ------- | -------- |
| boolean | false    |

### header

通过 `header` 属性传入的头部组件将在页面中渲染。

`isFullScreen` 为 `true` 时所实现的状态栏和头部同时隐藏是依赖 `header` 属性的，因此如果想实现隐藏状态来的时候也隐藏页面头部，请务必通过 `header` 属性去传入头部组件。

| TYPE            | REQUIRED |
| --------------- | -------- |
| React.ReactNode | false    |

### isLandScapeAutoHiddenStatusBar

是否在横屏的时候自动隐藏状态栏。该属性只有在 Android 平台才生效。需要注意的是，该属性仅影响状态栏而不影响头部。

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | Android  |

### statusBarColor

设置状态栏颜色。

Android 平台，不同的状态栏表现会稍微有点不一样，例如 OPPO 系统的状态栏会自带一层深灰透明的背景色，因此使用 `statusBarColor`  去设置状态栏颜色的时候，状态栏颜色会表现为比设定颜色更深的颜色。而在 MIUI 系统上，状态栏的颜色则与设定的颜色表现一致。

iOS 平台，如果在普通页面模式， `statusBarColor`  的值会影响  home indicator 的背景颜色。主要是因为 iOS 平台是使用 React Native 提供的 `SafeAreaView`  组件包裹页面的， `statusBarColor`  设置的值在 `PageWrapper`  组件中其实就是给 `SafeAreaView`  设置背景颜色。因此如果在  `safeAreaViewStyle`  这个属性中设置了 `backgroundColor` ，则  `statusBarColor`  的值会被覆盖。

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | iOS      |

### reactNativeStatusBarProps

与 React Native StatusBar 组件的 [Props](https://facebook.github.io/react-native/docs/statusbar#props) 属性一致。

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | iOS      |

如果 `reactNativeStatusBarProps`  属性中定义了 `hidden`  它是没有任何效果的，在 ReactNativePageWrapper 中状态栏是否隐藏将以 `isHiddenStatusBar` 这个 props 为准。

```jsx
<PageWrapper
  isHiddenStatusBar={false}
  reactNativeStatusBarProps={{
    hidden: true // hidden 属性的设置不起任何作用，将以 isHiddenStatusBar 这个 props 为准
  }}
>
  {/** Page Content */}
</PageWrapper>
```

### safeAreaViewStyle

与 React Native View 组件 style 属性一致。

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | iOS      |
