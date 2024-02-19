在国内通过vpn使用geemap，要想显示地图，还需要迈过代理设置这道坎。如下以windows7为例进行说明，win10也类似。

1.  首先，需要在电脑里找到代理的端口号。

![](https://pic4.zhimg.com/v2-c2f682cd2c03016c835ba42ef5f205a3_b.jpg)

![](https://pic4.zhimg.com/v2-0fd6b95a185146ad7f8e957c616d1917_b.jpg)

查看到电脑的端口是**10809**，则下面的代码中的端口号要对应设置为10809。

2\. 在Jupyter Notebook程序中添加如下代码，有两种方法。

-   方法一

```
# method 1: 设置代理
import os
os.environ['HTTP_PROXY'] = 'http://127.0.0.1:10809'
os.environ['HTTPS_PROXY'] = 'http://127.0.0.1:10809'
```

-   方法二

```
# method 2：设置代理
# import geemap
# geemap.set_proxy(port=10809)
```

然后再按照正常的流程就可以显示map了，如下：

![](https://pic4.zhimg.com/v2-7fc8d6824f9d971e838177e83a2b69f7_b.jpg)