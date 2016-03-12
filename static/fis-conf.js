// 本地解析替换路径
// npm install [-g] fis3-hook-amd
fis.hook('module', {
  // 加载模块时间 超时会报错
  //waitSeconds: 0,
  paths: {
    'ui2':'/js/ui',

    'test':'/js/test'
  }
});

fis.match('/js/*.js', {
  isMod: true // 设置 js/modules 下都是一些组件，组件建议都是匿名方式 define
    // release: '/static/$0'
});

fis.match('::package', {
  // npm install [-g] fis3-postpackager-loader
  // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    useInlineMap: true // 资源映射表内嵌
  })
})


