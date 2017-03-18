# vue-manage

> A vue management system


## Getting started

    git clone https://github.com/Bkamau/vue-manage.git vue-manage  
    cd vue-manage && rm -rf .git
    npm install
    npm run generate_default_styles
    npm run generate_theme

Now app is ready and you can run it with:

``` bash

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Generating themes

 > npm run generate_default_styles

Element-theme will generate default styles. Just change primary-color in src/assets/element-variables.css and run:

 > npm run generate_theme

![](https://github.com/Bkamau/vue-manage/blob/master/shots/login.png)
![](https://github.com/Bkamau/vue-manage/blob/master/shots/chart.png)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
