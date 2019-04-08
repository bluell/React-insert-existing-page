## 如何使用Create React App搭建要与Drupal集成部分前后端分离的环境。
 - 安装node JS。
 - 安装Create React App： `npx create-react-app my-app`。
 - 安装[renamer](https://www.npmjs.com/package/renamer) 插件：`npm install --save-dev renamer`，用于重命名build后的JS文件，然后Drupal后端需要按照以下顺序引入rename好后的JS文件：`your-app.vender.js, your-app.runtime.js, your-app.js`。
 - 创建`DrupalWrapper`类，get `Drupal`的一些有用的`Object`，比如某些settings，t函数之类的，然后通过props传入React DOM。
 - `public/index.html`可以修改你要的DOM结构。

 **注意：代码仅供参考，API是会更新的，如果有问题，具体请参考最新的API。**

 ## 其它
 - `.eslintrc.js`为`airbnb + Drupal`的eslint配置，请先安装`eslint-config-airbnb`和`eslint-config-airbnb-base`。
 - 单元测试可以用`jest + enzyme`，Create React App已集成jest，只需安装`enzyme`和`enzyme-adapter-react-16`，测试代码写在`__tests__`文件夹内。
 - 简单的组件尽量都用function写，可以用hook，比较方便。 
