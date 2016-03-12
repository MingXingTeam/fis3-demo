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
fis.hook('module', {

  paths: {
    'ui2':'/js/ui',
    
    'test':'/js/test'
    
  }
});

成：

fis.hook('module', {

  paths: {
    'ui':'/js/ui',
    
    'test':'/js/test'
    
  }
});
并把js/test.js的依赖模块名字从ui2改为ui

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
