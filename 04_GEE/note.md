# GEE 中文教程

## 来源：

视频：

https://www.bilibili.com/video/BV15u4y1T7uv/?spm_id_from=333.337.search-card.all.click&vd_source=b9eb6dd7cd13f2b13f30af094ee56ec2

Ebook：

https://book.geemap.org/chapters/01_introduction.html


## 第一节

JS和Python都可以GEE
但JS没法调用、运算本地数据(所以还是要Python)？


### 安装



Anaconda Prompt

（可以用terminal打开，一样运行）

```
// 查看一般信息
conda info 

// 查看配置列表
conda env list 

conda create -n gee python
conda activate gee
conda install -c conda-forge geemap

// 删除
conda env remove --name <env1> <env2>
```

### 添加环境失败的化，需要更改源

文件位置：C:\Users\<userName>\.condarc

添加以下内容（原来的可以保留）

```
channels:
  - defaults
show_channel_urls: true
default_channels:
  - http://mirrors.aliyun.com/anaconda/pkgs/main
  - http://mirrors.aliyun.com/anaconda/pkgs/r
  - http://mirrors.aliyun.com/anaconda/pkgs/msys2
custom_channels:
  conda-forge: http://mirrors.aliyun.com/anaconda/cloud
  msys2: http://mirrors.aliyun.com/anaconda/cloud
  bioconda: http://mirrors.aliyun.com/anaconda/cloud
  menpo: http://mirrors.aliyun.com/anaconda/cloud
  pytorch: http://mirrors.aliyun.com/anaconda/cloud
  simpleitk: http://mirrors.aliyun.com/anaconda/cloud

```

更改anaconda（相关软件）和conda默认 env 的储存目录

来源（https://blog.csdn.net/ruvikm/article/details/131432335 ）
```
envs_dirs:
  - D:\ProgramData\anaconda3\envs
```

更改anaconda 默认 pkg 的储存目录
```
pkgs_dirs:
  - D:\ProgramData\pkgs
```


### 查找端口号
win+r，'control'（就是控制面板网络和Internet）到Internet选项 --》 连接 --》 局域网连接查看端口号

### 初始化

### Reading Materials
Dr.Wu的研究  
GEE App Lists

Spatial Data Management 

whiteboxgui
COG/STAC, 云端？

