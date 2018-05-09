## 目录结构
``` 
根目录
 |---build 	#环境切换相关
 |---assets   #资源
 |---config #配置文件
 	 |---api.js #所有页面api
 	 ......  
 |---components 公共组件
 |---pages    #页面
     |---test    #一级目录
        |---test.wxml    #页面结构
        |---test.json    #页面配置
        |---test.js      #页面逻辑
        |---test.wxss    #页面样式表
     ......   
 |---template	#公共模板 
 |---utils #工具类
     |---http.js #wx.request 封装
     |---util.js #工具类
 |---app.js #小程序逻辑
 |---app.json #小程序公共设置
 |---app.wxss #小程序公共样式表
 |---project.config.json #项目相关配置


   
  ```