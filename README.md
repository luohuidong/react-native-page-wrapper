# PageWrapper

- React 版本在 16.9.0 以上
- ReactNative 版本在 0.60.0 以上

## Props

### isHiddenStatusBar

是否隐藏状态栏。

在 IOS isFullScreenMode 为 true 的情况下，如果隐藏状态栏，则连 header 属性传入的头部组件也会一同隐藏掉。

| TYPE    | REQUIRED |
| ------- | -------- |
| boolean | false    |

### isLandScapeAutoHiddenStatusBar

是否在横屏的时候自动隐藏状态栏。

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | Android  |

### header

页面头部组件。

| TYPE            | REQUIRED |
| --------------- | -------- |
| React.ReactNode | false    |

### isFullScreenMode

页面内容是否为全屏模式，这种模式下页面内容会在状态栏以及页面头部下渲染，一般用在浏览图片或者浏览视频等场景。

| TYPE    | REQUIRED |
| ------- | -------- |
| boolean | false    |

### statusBarColor

设置状态栏颜色，仅在 iOS `isFullScreenMode` 为 true 的时候设置有效。

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | iOS      |

### reactNativeStatusBarProps

与 React Native StatusBar 组件的 [Props](https://facebook.github.io/react-native/docs/statusbar#props) 属性一致。

如果 reactNativeStatusBarProps 属性中定义了 hidden，则它的值会影响到 isHiddenStatusBar 这个 props。如

```jsx
<PageWrapper
  isHiddenStatusBar={false}
  reactNativeStatusBarProps={{
    hidden: true
  }}
>
  { /** Page Content */ }
</PageWrapper>
```

此时状态栏是否隐藏，将以 reactNativeStatusBarProps 为准

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | iOS      |

### safeAreaViewStyle

与 React Native View 组件 style 属性一致，由于 SafeAreaView 仅在 IOS 中生效，因此

| TYPE    | REQUIRED | PLATFORM |
| ------- | -------- | -------- |
| boolean | false    | iOS      |
