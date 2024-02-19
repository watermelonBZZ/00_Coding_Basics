1. 基础   
    1.1 npm i -g json-server
    1.2 db.json
    1.3 创建 JSON 文件（db.json），编写基本结构

    1.4 以 JSON 文件所在文件夹作为工作目录，执行如下命令:
    

    1.5 在json文件中运行：json-server --watch db.json
    （注意要打开监听后，才能与接口互动）

    1.6 然后用api接口软件测试不同的请求方法对json数据库的操作

2. case
   2.1 在npm start之前先把mongoose数据库run起来
   2.2 这里修改了请求响应res返回的数据内容
   2.3 前边是将返回的数据传入ejs文件，然后在html里foreach写入、渲染
   2.4 这里直接返回json（res.json）,所以用到了api接口软件，用于可视化



