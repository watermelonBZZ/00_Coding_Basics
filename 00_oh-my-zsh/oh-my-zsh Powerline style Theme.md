### 来源
文档 ： https://www.geekhour.net/2023/10/21/linux-terminal/ <br>
视频：https://www.bilibili.com/video/BV1kw411z7SV?vd_source=bdf6dde93f745e74e0e8004115b191ec

## 前置条件
把shell变成zsh

`echo $SHELL`
<br>查看当前shell

`brew install zsh`
<br>安装zsh


`cat /etc/shells`
<br>检查是否有/bin/zsh,代表zsh安装是否成功


`chsh -s /bin/zsh`
<br>把默认 shell 更改为 Zsh


## 安装Oh-My-Zsh
这个相当于主题配置管理器，安装了之后可以更换主题、命令行提示插件等

## 安装字体
要先安装好字体，字体命令行<br>

```
brew tap homebrew/cask-fonts &&
brew install --cask homebrew/cask-fonts/font-meslo-lg-nerd-font
```

## 安装Zsh主题和插件
``````
# powerlevel10k主题
git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

# zsh-autosuggestions自动提示插件
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# zsh-syntax-highlighting语法高亮插件
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# 配置powerlevel10k
p10k configure
``````

## 编辑~/.zshrc文件启用插件和主题
```
# 修改主题
ZSH_THEME="powerlevel10k/powerlevel10k"

# 启用插件
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```

## 其他
```
cat /etc/shells

cat 是一个命令行工具，用于在终端中查看文件的内容。它的名称是 "concatenate" 的缩写，但它的主要功能是将文件的内容打印到标准输出。因此，cat 命令通常用于查看文件的内容或将多个文件的内容连接在一起。

/etc 是一个在类 Unix 系统中常见的目录，用于存储系统的配置文件和其他系统级别的信息。在大多数 Unix 和类 Unix 系统中，/etc 目录包含了诸如网络配置、用户账户信息、软件包管理器配置等系统级别的文件和目录。
```