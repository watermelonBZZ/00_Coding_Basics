### 2.1. 介绍

网上有大量用于交互式[地图绘制](https://so.csdn.net/so/search?q=%E5%9C%B0%E5%9B%BE%E7%BB%98%E5%88%B6&spm=1001.2101.3001.7020)和地理空间分析的 Python 包 \[Wu, 2021\]。不同的包有不同的 API 用于创建地图和可视化数据，这可能是初学者的障碍。 Geemap 提供了用于创建交互式地图和可视化数据的统一 API，只需一行代码即可轻松切换绘图后端。

在本章中，我们将介绍 Jupyter notebook 的基础知识和键盘快捷键。然后，我们将学习如何验证 Earth Engine。重要的是，我们将学习如何使用六个绘图后端之一创建交互式地图。最后，我们将介绍将底图添加到交互式地图的实际示例。有数百个底图可用，只需一行代码即可轻松将其添加到交互式地图中。

### 2.2. 技术要求

通过本章，您将需要安装 geemap 和几个可选的依赖项，例如 [keplergl](https://docs.kepler.gl/docs/keplergl-jupyter "keplergl")、[pydeck](https://deckgl.readthedocs.io/en/latest/ "pydeck")、[plotly](https://plotly.com/ "plotly") 和 [heremap](https://github.com/heremaps/here-map-widget-for-jupyter "heremap")。如果您已经学习了**第 1 章 - 介绍 GEE 和 Geemap**，那么您应该已经有了一个安装了这些包的 conda 环境。否则，您需要创建一个新的 conda 环境并使用以下命令安装[pygis](https://pygis.gishub.org/ "pygis")，这将自动安装 geemap 和所有必要的依赖项：

```
conda create -n gee python
conda activate gee
conda install -c conda-forge mamba
mamba install -c conda-forge pygis
```

或者，您可以将 geemap 与 Google Colab 一起使用，而无需在您的计算机上安装任何东西。单击下面的链接以在 Google Colab 中打开此笔记本：

**[https://colab.research.google.com/github/giswqs/geebook/blob/master/chapters/02\_maps.ipynb](https://colab.research.google.com/github/giswqs/geebook/blob/master/chapters/02_maps.ipynb "https://colab.research.google.com/github/giswqs/geebook/blob/master/chapters/02_maps.ipynb")**

接下来，在 Colab 代码单元格中键入以下命令，然后按 **Shift+Enter** 安装 [pygis](https://pygis.gishub.org/ "pygis")，其中包括 geemap 和所有必要的依赖项：

```
pip install pygis
```

pygis 安装成功后，单击安装日志末尾出现的 **RESTART RUNTIME** 按钮或单击菜单 **Runtime > Restart runtime**。然后你就可以开始编辑代码了。

### 2.3. 使用绘图后端

Geemap 有六个绘图后端，包括 [ipyleaflet](https://github.com/jupyter-widgets/ipyleaflet "ipyleaflet")、[folium](https://github.com/python-visualization/folium "folium")、[plotly](https://plotly.com/ "plotly")、[pydeck](https://deckgl.readthedocs.io/en/latest "pydeck")、[kepler.gl](http://kepler.gl/ "kepler.gl") 和 [heremap](https://github.com/heremaps/here-map-widget-for-jupyter "heremap")。使用其中一个绘图后端创建的交互式地图可以显示在 Jupyter 环境中，例如 Google Colab、Jupyter Notebook 和 JupyterLab。默认情况下，import geemap将使用 ipyleaflet 绘图后端。

六个绘图后端提供不同的功能。 `ipyleaflet` 绘图后端提供了最丰富的交互功能，包括无需编码即可交互加载、分析和可视化[地理空间](https://so.csdn.net/so/search?q=%E5%9C%B0%E7%90%86%E7%A9%BA%E9%97%B4&spm=1001.2101.3001.7020)数据的自定义工具集。例如，用户只需单击几下即可将矢量数据（例如，GeoJSON、Shapefile、KML、GeoDataFrame）和栅格数据（例如，GeoTIFF、云优化的 GeoTIFF \[COG\]）添加到地图中。用户还可以直接在地图界面中使用带有 500 多种地理处理工具的 WhiteboxTools GUI 执行地理空间分析。其他交互式功能（例如，拆分面板地图、链接地图、时间滑块、时间序列检查器）也可用于可视化地理空间数据。 `ipyleaflet` 包基于 `ipywidgets` 构建，允许前端和后端之间的双向通信，从而能够使用地图来捕获用户输入 \[QuantStack，2019\]。相比之下，`folium`的交互功能相对有限，仅用于显示静态数据。当环境不支持 `ipyleaflet` 时，它对于开发交互式 Web 应用程序很有用。请注意，上述自定义工具集和交互功能不适用于其他绘图后端。与 `ipyleaflet` 和 `folium` 相比，`pydeck`、`kepler.gl` 和 `heremap` 绘图后端提供了一些独特的 3D 映射功能。使用 `heremap`需要来自 [Here Developer Portal](https://developer.here.com/ "Here Developer Portal") 的 [API 密钥](https://developer.here.com/documentation/identity-access-management/dev_guide/topics/dev-apikey.html "API 密钥")。

Geemap 提供了一个统一的 API，可以很容易地从一个绘图后端切换到另一个绘图后端。要选择特定的绘图后端，请使用以下选项之一：

-   `import geemap.geemap as geemap`
    
-   `import geemap.foliumap as geemap`
    
-   `import geemap.deck as geemap`
    
-   `import geemap.kepler as geemap`
    
-   `import geemap.plotlymap as geemap`
    
-   `import geemap.heremap as geemap`
    

#### 2.3.1. Ipyleaflet

您可以简单地使用 `geemap.Map()` 来创建具有默认设置的交互式地图。首先，让我们导入geemap包：

```
import geemap
```

接下来，让我们使用 `ipyleaflet` 绘图后端创建一个交互式地图。 `geemap.Map` 类继承自 `ipyleaflet.Map` 类。因此，您可以使用与使用 `ipyleaflet.Map` 相同的语法来创建交互式地图。

```
Map = geemap.Map()
```

要在 Jupyter 笔记本中显示它，只需请求对象表示：

```
Map
```

> **注意：** 请记住，在本书中，`Map`通常用于指代交互式地图。它只是一个变量名。您可以使用任何您想要的名称（例如 `m`），只要它符合 [Python](https://so.csdn.net/so/search?q=Python&spm=1001.2101.3001.7020) 变量名称的规则，如下所示：

-   变量名必须以字母或下划线字符开头
    
-   变量名不能以数字开头
    
-   变量名只能包含字母数字字符和下划线（`A-z`、`0-9` 和 `_`）
    

一般来说，Python 变量名应该是小写的。我们使用 `Map` 而不是 `m` 的原因是因为在 Earth Engine JavaScript API 中，`Map` 是一个保留关键字，指的是交互式地图。我们希望与 Earth Engine JavaScript API 保持一致，以便用户可以更轻松地过渡到geemap。用户绝不是必须使用 `Map` 作为交互式地图的变量名。

要自定义地图，您可以指定各种关键字参数，例如`center ([lat, lon])`、`zoom`、`width`和`height`。默认`width`是 `100%`，它占据了 Jupyter notebook 的整个单元格宽度。 `height` 参数接受数字或字符串。如果提供了一个数字，它表示地图的高度（以像素为单位）。如果提供了字符串，则必须以 `px` 为下标，例如 `600px`。

```
Map = geemap.Map(center=[40, -100], zoom=4, height=600)
Map
```

除了 ipyleaflet 的内置 `layer_ctrl` 之外，默认地图带有以下所有控件（见图 2.2）

-   `attribution_ctrl`
    
-   `data_ctrl`
    
-   `draw_ctrl`
    
-   `fullscreen_ctrl`
    
-   `layer_ctrl`
    
-   `measure_ctrl`
    
-   `scale_ctrl`
    
-   `toolbar_ctrl`
    
-   `zoom_ctrl`
    

![请添加图片描述](https://img-blog.csdnimg.cn/06d81062764a4326bd2a5f81b94cb42f.jpeg)

图 2.1 使用 ipyleaflet 绘图后端创建的地图

要隐藏控件，请将 `control_name` 设置为 `False`，例如 `draw_ctrl=False`。

```
Map = geemap.Map(data_ctrl=False, toolbar_ctrl=False, draw_ctrl=False)
Map
```

您还可以设置 `lite_mode=True` 以仅显示缩放控件。

```
Map = geemap.Map(lite_mode=True)
Map
```

要将地图另存为 HTML 文件：

```
Map.save('ipyleaflet.html')
```

#### 2.3.2. Folium

要使用 `folium` 绘图后端创建交互式地图，只需按如下方式导入库：

```
import geemap.foliumap as geemap
```

然后，您可以使用与上面介绍的 `ipyleaflet` 绘图后端相同的代码行来创建和显示交互式地图。

```
Map = geemap.Map(center=[40, -100], zoom=4, height=600)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/273c95ba40bd486d9ddb9a53c5a0398d.jpeg)

图 2.2 使用 folium 绘图后端创建的地图

  

> **注意：** Folium 不支持双向通信 \[QuantStack, 2019\]。一旦地图被创建并显示在笔记本单元格中，您就无法修改地图的属性，例如添加/删除图层、添加控件、更改宽度/高度。此外，在 folium 中不支持 ipyleaflet 中可用的数据和工具栏控件（见图 2.2），因为 folium 不支持 ipywidgets。

要将地图另存为 HTML 文件：

```
Map.save('folium.html')
```

#### 2.3.3. Plotly

要使用 [plotly](https://plotly.com/python/maps/ "plotly") 绘图后端创建交互式地图，只需按如下方式导入库：

```
import geemap.plotlymap as geemap
```

然后，创建并显示交互式地图。

```
Map = geemap.Map()
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/747b11fb72dc42baa3946990d5938725.jpeg)

图 2.3 使用plotly后端创建的地图

  

> **警告：** 如果您遇到一个错误，即`FigureWidget - 'mapbox._derived' Value Error` ([来源](https://github.com/plotly/plotly.py/issues/2570#issuecomment-738735816 "来源"))，请取消注释以下行并运行它。

```
# geemap.fix_widget_error()
```

#### 2.3.4. Pydeck

要使用 **[pydeck](https://deckgl.readthedocs.io/)** 绘图后端创建交互式地图，只需按如下方式导入库：

```
import geemap.deck as geemap
```

然后，创建并显示交互式地图。

```
Map = geemap.Map()
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/7764fbc291824bc3a136b16f268f8001.jpeg)

图 2.4 使用 pydeck 绘图后端创建的地图

  

#### 2.3.5. KeplerGL

要使用 [kepler.gl](http://kepler.gl/ "kepler.gl") 绘图后端创建交互式地图，只需按如下方式导入库：

```
import geemap.kepler as geemap
```

然后，创建并显示交互式地图。

```
Map = geemap.Map()
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/214089b4cb5943febec2966dd87eb28e.jpeg)

图 2.5 使用 KeplerGL 绘图后端创建的地图

  

#### 2.3.6. Heremap

要使用 **[heremap](https://github.com/heremaps/here-map-widget-for-jupyter)** 绘图后端创建交互式地图，只需按如下方式导入库：

> **注意：** 使用`heremap` 需要来自 [Here Developer Portal](https://developer.here.com/ "Here Developer Portal") 的 [API 密钥](https://developer.here.com/documentation/identity-access-management/dev_guide/topics/dev-apikey.html "API 密钥")。

```
import os
import geemap.heremap as geemap
```

```
api_key = os.environ.get('HEREMAPS_API_KEY')
```

```
# 如果未将其设置为环境变量，请在此处提供您的 Heremap API 密钥
```

```
Map = geemap.Map(api_key)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/09e880f21df14399a0ebcb38a8f7544a.jpeg)

图 2.6 使用 heremap 绘图后端创建的地图

  

### 2.4. 添加底图

有多种方法可以将底图添加到地图中。创建地图时，您可以在 `basemap` 关键字参数中指定要使用的底图。或者，您可以使用 `add_basemap` 方法将底图图层添加到地图。 Geemap 有数百个可用的内置底图，只需一行代码即可轻松添加到地图中。

#### 2.4.1. 内置底图

让我们来尝试一些内置的底图。首先，我们引入需要的库：

```
import geemap
```

接下来，通过指定要使用的底图来创建地图，如下所示。例如，`HYBRID` 底图替代 Google Satellite Hybrid 底图。

```
Map = geemap.Map(basemap='HYBRID')
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/1d0d8fe7dddf4e7982d4a9beed062473.jpeg)

图 2.7 Google Satellite Hybrid 底图

您可以向地图中添加任意数量的底图。例如，以下代码将 `OpenTopoMap` 底图添加到上面的地图中：

```
Map.add_basemap('OpenTopoMap')
```

![请添加图片描述](https://img-blog.csdnimg.cn/cee49d45e7e0419db0263ede205baad4.jpeg)

图 2.8 OpenTopoMap 底图

找出所有可用底图的列表：

```
for basemap in geemap.basemaps.keys():
  print(basemap)

```

总共有 140 多个底图可用。

```
len(geemap.basemaps)
```

#### 2.4.2. XYZ tiles

您还可以使用 add\_tile\_layer() 方法将 XYZ 切片图层添加到地图。例如，以下代码创建一个交互式地图并将 Google Terrain 底图添加到其中

```
Map = geemap.Map()
Map.add_tile_layer(
    url="https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}",
    name="Google Terrain",
    attribution="Google",
)
Map
```

#### 2.4.3. WMS tiles

同样，您可以使用 `add_wms_layer` 方法将 WMS 切片图层添加到地图。

例如，以下代码创建一个交互式地图并将 National Land Cover Database (NLCD) 2019 底图添加到其中：

```
Map = geemap.Map(center=[40, -100], zoom=4)
url = 'https://www.mrlc.gov/geoserver/mrlc_display/NLCD_2019_Land_Cover_L48/wms?'
Map.add_wms_layer(url=url, layers='NLCD_2019_Land_Cover_L48', name='NLCD 2019', format='image/png', attribution='MRLC', transparent=True)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/bf78870bdfb54563a09c6f2afbbb4584.jpeg)

图 2.9 国家土地覆盖数据库 (NLCD)\] 2019 底图

想了解更多免费提供的 WMS 底图吗？查看 [**USGS 国家地图服务**](https://apps.nationalmap.gov/services "USGS 国家地图服务")。获得 WMS URL 后，您可以按照上面的示例将其添加到地图中。

#### 2.4.4. Planet 底图

[Planet Labs](https://www.planet.com/ "Planet Labs") 提供具有高时间频率的高分辨率全球卫星图像。每月和每季度的全球底图可以通过 [XYZ Basemap Tile Service](https://developers.planet.com/docs/basemaps/tile-services/xyz "XYZ Basemap Tile Service") 进行流式传输，以用于 Web 制图应用程序或用于可视化目的。

访问 Basemap Tile Service 需要有效的 [Planet 帐户](https://developers.planet.com/docs/apis/data/#how-to-become-a-planet-developer "Planet 帐户")。注册 Planet 帐户后，您可以通过导航到“[帐户设置](https://www.planet.com/account/#/user-settingsv "帐户设置")”页面获取 API 密钥，如下所示。

![请添加图片描述](https://img-blog.csdnimg.cn/1bd624bde8364c9e81d73321561dde30.jpeg)

图 2.10 Planet账户简介页面

将下面的 `YOUR_API_KEY` 替换为从上面显示的“帐户设置”页面复制的 API 密钥。我们可以创建一个名为 `PLANET_API_KEY` 的环境变量并将其设置为 API 密钥，这样我们就可以访问底图切片，而无需每次都指定 API 密钥。

```
import os
os.environ["PLANET_API_KEY"] = "YOUR_API_KEY"
```

首先，让我们看看可用的季度底图列表。 Planet 从 2016 年第一季度开始有季度底图。季度底图的名称有：`Planet_2016q1`、`Planet_2016q2`、…、`Planet_2022q1`，等等。

```
monthly_tiles = geemap.planet_monthly_tiles()
for tile in monthly_tiles:
  print(tile)

```

接下来，让我们看看可用的月度底图列表。 Planet 自 2016 年 1 月起拥有月度底图。月度底图的名称为：Planet\_2016\_01、Planet\_2016\_02、…、Planet\_2022\_04，以此类推。

```
monthly_tiles = geemap.planet_monthly_tiles()
for tile in monthly_tiles:
    print(tile)
```

要将每月底图添加到地图，请使用 `add_planet_by_month` 方法，如下所示：

```
m = geemap.Map()
m.add_planet_by_month(year=2020, month=8)
m
```

要将季度底图添加到地图，请使用 `add_planet_by_quarter` 方法，如下所示：

```
m = geemap.Map()
m.add_planet_by_quarter(year=2019, quarter=2)
m
```

![请添加图片描述](https://img-blog.csdnimg.cn/ccc9c835e4a24f8abdbb3215b7d12474.jpeg)

图 2.11 The Planet 2019 年第二季度季度底图

  

#### 2.4.5. 底图界面

Geemap 提供了一个图形用户界面 (GUI)，无需编码即可交互式地添加底图。单击工具栏上的地图图标将激活底图 GUI。单击下拉菜单以选择要添加的底图。如果您创建了一个名为 `PLANET_API_KEY` 的环境变量并将其设置为您的 Planet API 密钥，则 Planet 底图也将通过下拉菜单提供。

```
Map = geemap.Map()
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/0a643ae1060e49ffab74d883e45890de.jpeg)

图 2.12 无需编码即可交互式更改底图的底图 GUI

  

### 2.5. 小结

在本章中，我们首先介绍了 Jupyter notebook 基础。然后，我们通过使用六个geemap 绘图后端创建交互式地图的实际示例进行了工作。我们还介绍了如何向地图添加各种底图图层，包括内置底图、XYZ 切片、WMS 切片和行星底图。现在，您应该使用 Jupyter notebook 来创建交互式地图并交互式地更改底图。这就是本章的内容。在下一章中，我们将深入研究 Google 地球引擎。

### 2.6. 参考文献

-   [https://geemap.org/notebooks/01\_geemap\_intro](https://geemap.org/notebooks/01_geemap_intro/ "https://geemap.org/notebooks/01_geemap_intro")
    
-   [https://geemap.org/notebooks/02\_using\_basemaps](https://geemap.org/notebooks/02_using_basemaps/ "https://geemap.org/notebooks/02_using_basemaps")
    
-   [https://geemap.org/notebooks/29\_pydeck](https://geemap.org/notebooks/29_pydeck/ "https://geemap.org/notebooks/29_pydeck")
    
-   [https://geemap.org/notebooks/77\_planet\_imagery](https://geemap.org/notebooks/77_planet_imagery/ "https://geemap.org/notebooks/77_planet_imagery")
    
-   [https://geemap.org/notebooks/92\_plotly](https://geemap.org/notebooks/92_plotly/ "https://geemap.org/notebooks/92_plotly")
    
-   [https://geemap.org/notebooks/94\_heremap](https://geemap.org/notebooks/94_heremap/ "https://geemap.org/notebooks/94_heremap")
    
-   [https://geemap.org/notebooks/106\_kepler\_gl](https://geemap.org/notebooks/106_kepler_gl/ "https://geemap.org/notebooks/106_kepler_gl")
    
-   [https://geemap.org/notebooks/107\_pydeck](https://geemap.org/notebooks/107_pydeck/ "https://geemap.org/notebooks/107_pydeck")