# fis3-demo

fis3-postpackager-loader使用后的疑问：

重现方法：

1.clone下来，运行 
```
fis3 release -d ../dist
```

test.html内嵌的resourcemap是这样的：

require.config({paths:{

  "js/ui": "/js/ui",
  
  "js/test": "/js/test"
  
}});

见dist文件夹

2.改

// 本地解析替换路径
// npm install [-g] fis3-hook-amd


fis.hook('module', {

  paths: {
    'ui2':'/js/ui',
    'test':'/js/test'
  }
});

成：

// 本地解析替换路径
// npm install [-g] fis3-hook-amd

fis.hook('module', {
  // 加载模块时间 超时会报错
  //waitSeconds: 0,
  paths: {
    'ui':'/js/ui',
    'test':'/js/test'
  }
});


3.运行 
```
fis3 release -d ../dist
```

test.html内嵌的resourcemap是这样的：

require.config({paths:{
  "js/test": "/js/test"
}});


见dist2文件夹

为什么两次会不一样？
