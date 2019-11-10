### HTML

#### html-webpack-plugin

this plugin will copy the html file **from the source folder to the dist folder**. it will **automatically add the script tags** point to the js files.

`npm i -D html-webpack-pĺugin`

add to the webpack config:

<details>
<summary>Code</summary>

```js
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
```
</details>

### html-loader

The html-loader comes into play when webpack detects the following in your javascript: require('./app.component.html'), because you have the following test: /\.html$/. The default action is to put the html from that file in the place where the require is stated.

