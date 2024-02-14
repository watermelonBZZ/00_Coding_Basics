来源：https://juejin.cn/post/7139514254801141791

Powershell比起zsh并不是太好用，但通过适当的配置，可以达到接近_nix系统_ 上终端的效果。

请保证你的操作系统至少是Windows 10，我并没有在更老的操作系统上测试过

## 最终效果

-   好看的UI，并且每一条命令前能提示git, node相关信息
-   Tab 自动补全Git命令 和 路径
-   方向键 上下自动补全输入历史

![powershell+readline.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd5d1b559e0c484aa739352e0da23aa4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

## Windows Terminal

这是一个微软出品的终端，如果你的操作系统是Windows 11，那么它已经被集成在了系统中。

![这张图的入口是在任务栏Windows图标下右键](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0bfb485871a9427ab73c0e189965ea66~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

您也可以使用其它终端，请按照对应的使用方法修改字体和启动的Shell。

前往 [Windows Terminal - Microsoft Store 应用程序](https://link.juejin.cn/?target=https%3A%2F%2Fapps.microsoft.com%2Fstore%2Fdetail%2Fwindows-terminal%2F9N0DX20HK701%3Fhl%3Dzh-cn%26gl%3Dcn "https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=zh-cn&gl=cn")。 点击获取，会弹出

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0c059c331c65435c8ede03b4c962d3ae~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

按照提示安装即可。 然后我们打开Windows terminal，它应该是这样的

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/74a21fdce34a4713bbcadb91ac61650c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

## 安装字体

oh-my-posh有一些主题使用了Nerd font，我们需要安装他们避免出现乱码 进入[Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher](https://link.juejin.cn/?target=https%3A%2F%2Fwww.nerdfonts.com%2Ffont-downloads "https://www.nerdfonts.com/font-downloads")。下载喜欢的字体。我这里选择了Caskaydia Cove Nerd Font。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b5f406dade249ca97cade253dddbf7b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) 安装的时候请选择带`Windows Compatible`后缀的字体。

接下来打开我们的Windows Terminal设置项 ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7daee2226c3c4edea74c0ccdfb1752a6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) 选择左侧配置文件下的默认值 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bbc24a832564797817cac046aae2968~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) 进入外观选项，将字体改为你刚刚安装的Nerd Font字体 ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/76faacfbfa6247bd9c6f1d030cf75bd1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

## 安装Powershell 7，并将它改为Windows terminal 默认Shell

[Installing PowerShell on Windows - PowerShell | Microsoft Docs](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.microsoft.com%2Fzh-cn%2Fpowershell%2Fscripting%2Finstall%2Finstalling-powershell-on-windows%3Fview%3Dpowershell-7.2%23msstore "https://docs.microsoft.com/zh-cn/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2#msstore") 按照这个页面的提示，安装Powershell 7。

```
winget install --id Microsoft.Powershell --source winget
```

接着打开Windows Terminal的设置项

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7daee2226c3c4edea74c0ccdfb1752a6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f2ee26420c84361b0f61e9f5c80dba1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) 将启动tab下的默认配置文件改为`PowerShell`(请注意，不是`Windows Powershell`)

## 安装oh-my-posh，posh-git和Readline

请运行下列的命令

```
Install-Module -Name PowerShellGet -Force
winget install JanDeDobbeleer.OhMyPosh -s winget
PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force
Install-Module PSReadLine
```

## 修改配置文件

接下来，我们需要修改我们Powershell的配置文件。

```
code $PROFILE
# 如果你没有装vscode，请使用下面的这条命令，将打开记事本
notepad.exe $PROFILE
```

我们在这个文件中加入下列内容

```
Set-PSReadLineKeyHandler -Key Tab -Function MenuComplete #Tab键会出现自动补全菜单
Set-PSReadlineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadlineKeyHandler -Key DownArrow -Function HistorySearchForward
# 上下方向键箭头，搜索历史中进行自动补全

oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH/jandedobbeleer.omp.json" | Invoke-Expression
Import-Module posh-git # git的自动补全
```

接着我们打开一个新的Windows terminal窗口，成品应该是这样的

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ce8ca0515fc54beda1606f1158d00bbd~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

### 如何更换oh-my-posh的主题

在terminal中`code $PROFILE`文件中的`--config` 参数，比如替换掉`jandedobbeleer.omp.json`中的`jandedobbeleer`为任意主题


执行`Get-PoshThemes`，它会展示所有的theme

theme文件夹在win中的位置：

'C:\Users\USERNAME\AppData\Local\Programs\oh-my-posh\themes'

**docs：**

https://ohmyposh.dev/docs/configuration/colors


## Q & A

### 为什么在VSCode/Webstorm编辑器的集成终端中出现了乱码

请修改对应编辑器终端的字体为上面[安装字体](https://juejin.cn/post/7139514254801141791#%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93 "#%E5%AE%89%E8%A3%85%E5%AD%97%E4%BD%93")章节的字体

### 为什么我没有`winget`命令

您的系统比较老旧，请参照[使用 winget 工具安装和管理应用程序 | Microsoft Docs](https://link.juejin.cn/?target=https%3A%2F%2Fdocs.microsoft.com%2Fzh-cn%2Fwindows%2Fpackage-manager%2Fwinget%2F "https://docs.microsoft.com/zh-cn/windows/package-manager/winget/")安装winget。



### 附上 settings.json 配置文件所在路径：

Windows Terminal（普通版）：C:\Users\[用户名]\AppData\Local\Packages\Microsoft.WindowsTerminal_8wekyb3d8bbwe\LocalState

### 默认配置文件
首次启动 Windows Terminal 时，默认配置文件设置为 Windows PowerShell。默认配置文件是您启动 Windows Terminal 时总是打开的配置文件，也是单击新选项卡按钮时打开的配置文件。您可以通过在 settings.json 文件中将 "defaultProfile" 设置为首选配置文件的名称来更改默认配置文件。

`"defaultProfile": "PowerShell"`

### 如果你要查看系统上已安装的所有 PowerShell 模块（包括未加载的），你可以使用 
`Get-InstalledModule`

### 在vscoe中设置

在VScode中 快捷键 Ctrl + Shift + P 调出快捷指令

输入 Terminal: Select Default Profile 找到内置终端的默认配置

选择 powershell 7

再到设置 ---> 功能 ---> 终端 --->  Font Family : 设置安装的字体 <FontName> 

这样，内置终端就不会出现符号乱码的情况了

### 在 VSCode 中设置字体加粗的方法如下：

打开 VSCode 的首选项设置（File > Preferences > Settings）。

在搜索栏中输入 "editor.fontWeight", “terminal.integrated.fontWeight”。

在 "editor.fontWeight" 的值后面填入 "bold"。

点击 "OK" 按钮来保存设置。