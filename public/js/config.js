require.config({
    baseUrl: '/public/assets',
    paths: {
        jquery: 'jquery/jquery.min',
        cookie: 'jquery-cookie/jquery.cookie',
        echarts: 'echarts/echarts.min',
        template: 'artTemplate/template',
        bootstrap: 'bootstrap/js/bootstrap',
        nprogress: 'nprogress/nprogress',
        util: '../js/util',
        overlay: '../js/overlay'
    },
    shim: {
        //把bootstrap转化成标准模块(依赖于标准模块的jQuery模块)
        deps: ['jquery']
    }
});