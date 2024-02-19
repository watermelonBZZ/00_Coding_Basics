## 3\. GEE数据的使用

## 3.1 介绍

Google Earth Engine 是一个用于[地理空间](https://so.csdn.net/so/search?q=%E5%9C%B0%E7%90%86%E7%A9%BA%E9%97%B4&spm=1001.2101.3001.7020)分析的创新云计算平台。它的数据类型与桌面软件处理的传统数据类型非常不同。在本章中，我们将介绍用于存储矢量和栅格数据的基本 Earth Engine 数据类型。然后，我们将探索 Earth Engine 数据目录以及如何在 Jupyter 环境中以交互方式搜索 Earth Engine 数据集。我们还将介绍如何获取图像元数据和计算描述性统计数据。最后，我们将学习如何将 Earth Engine JavaScript 自动转换为 Python。在本章结束时，您应该能够在 Jupyter 环境中使用 geomap 轻松访问 Earth Engine 数据。

## 3.2 技术要求

要学习本章，您需要安装geemap 和几个可选的依赖项。如果您已经按照 **第 1 章 - 介绍 GEE 和 Geemap**进行操作，那么您应该已经有了一个安装了必要软件包的 conda 环境。否则，您需要创建一个新的 conda 环境并使用以下命令安装[pygis](https://pygis.gishub.org/ "pygis") 软件包，这将自动安装 geemap 和所有必要的依赖：

```
conda create -n gee python
conda activate gee
conda install -c conda-forge mamba
mamba install -c conda-forge pygis
```

接下来，通过在终端或 Anaconda 提示符下键入以下命令来启动 JupyterLab：

```
jupyter lab
```

或者，您可以将 geemap 与 Google Colab 一起使用，而无需在您的计算机上安装任何东西。单击下面链接以在 Google Colab 中打开此笔记本：

**[https://colab.research.google.com/github/giswqs/geebook/blob/master/chapters/03\_gee\_data.ipynb](https://colab.research.google.com/github/giswqs/geebook/blob/master/chapters/03_gee_data.ipynb "https://colab.research.google.com/github/giswqs/geebook/blob/master/chapters/03_gee_data.ipynb")**

接下来，在 Colab 代码单元格中键入以下命令，然后按 **Shift+Enter** 安装 [pygis](https://pygis.gishub.org/ "pygis")，其中包括 geemap 和所有必要的依赖项：

```
pip install pygis
```

pygis 安装成功后，单击安装日志末尾出现的 **RESTART RUNTIME** 按钮或单击菜单 **Runtime > Restart runtime**。然后你就可以开始编码了。

导入本章将使用的库：

```
import ee
import geemap
```

初始化地球引擎 Python API：

```
geemap.ee_initialize()
```

## 3.3 GEE数据类型

在深入了解 Earth Engine 并将其用于地理空间分析之前，我们首先需要了解 Earth Engine 中可用的数据类型。 Earth Engine 有两种[基本数据类型](https://so.csdn.net/so/search?q=%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B&spm=1001.2101.3001.7020)：栅格数据**Image**（见图 3.1）和矢量数据**Geometry**（见图 3.2）。扩展数据类型是 **ImageCollection**、**Feature** 和 **FeatureCollection**。请记住，Earth Engine 对象是服务器端对象而不是客户端对象，这意味着它们不会本地存储在您的计算机上。与将视频/电影存储在其服务器上的视频流服务（例如 YouTube、Netflix 和 Hulu）类似，Earth Engine 数据存储在 Earth Engine 服务器上。我们可以即时从 Earth Engine 流式传输地理空间数据，而无需下载数据，就像我们可以使用 Web 浏览器观看来自流媒体服务的视频而无需将整个视频下载到您的计算机一样。

-   **Image**：Earth Engine 中的基本栅格数据类型。
    
-   **ImageCollection**：图像集合或时间序列。
    
-   **Geometry**：Earth Engine 中的基本矢量数据类型。
    
-   **Feature**：具有属性的几何图形。
    
-   **FeatureCollection**：一组Feature。
    

![请添加图片描述](https://img-blog.csdnimg.cn/b239c03cd50946f8bc48ee8fa15945bc.jpeg)  
图 3.1 Earth Engine 栅格数据类型：Image 和 ImageCollection  
![请添加图片描述](https://img-blog.csdnimg.cn/d2a00b62838e49eba0a220edc1766ee0.jpeg)  
图 3.2 Earth Engine 矢量数据类型：Geometry、Feature 和 FeatureCollection

### 3.3.1 Image

如上所述，Earth Engine 中的栅格数据表示为 **Image** 对象。图像由一个或多个波段组成，每个波段都有自己的名称、数据类型、比例、蒙版和投影。每个图像都有存储为一组属性的元数据。

#### 3.3.1.1 加载 Image数据

可以通过将 Earth Engine Asset ID 粘贴到 `ee.Image` 函数中来加载图像。您可以在 [**Earth Engine 数据目录**](https://developers.google.com/earth-engine/datasets "Earth Engine 数据目录")中找到图像 ID。例如，要加载[**NASA SRTM 数字高程**](https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003 "NASA SRTM 数字高程")：

```
image = ee.Image('USGS/SRTMGL1_003')
```

#### 3.3.1.2可视化 Image数据

要可视化**Image**图像，您可以使用 geemap 的 `Map.addLayer` 方法，类似于 JavaScript API 的 `Map.addLayer` 方法。 `Map.addLayer` 方法接受如下参数：

| **参数**     | **类型** | **描述**                                 | **默认**   |
| ------------ | -------- | ---------------------------------------- | ---------- |
| `ee_object`  | `Image`  | `ImageCollection`                        | `Geometry` | `Feature` | `FeatureCollection` | 要添加到地图的对象。 | required |
| `vis_params` | `dict`   | 作为字典的可视化参数。                   | `{}`       |
| `name`       | `str`    | 图层的名称。默认为 `Layer N`             | `None`     |
| `shown`      | `bool`   | 指示图层是否默认打开的标志。             | `True`     |
| `opacity`    | `float`  | 图层的不透明度表示为 0 到 1 之间的数字。 | `1`        |

为了达到想要的可视化效果，您可以自定义 [**可视化参数**](https://developers.google.com/earth-engine/guides/image_visualization "可视化参数")

| **参数**  | **描述**                                         | **类型**                                      |
| --------- | ------------------------------------------------ | --------------------------------------------- |
| `bands`   | 要映射到 RGB 的三个波段名称的逗号分隔列表        | 列表                                          |
| `min`     | 映射到 0 的值                                    | 一个数值或者是对应RGB通道的三个数值的一个列表 |
| `max`     | 映射到 255 的值                                  | 一个数值或者是对应RGB通道的三个数值的一个列表 |
| `gain`    | 与每个像素值相乘的值                             | 一个数值或者是对应RGB通道的三个数值的一个列表 |
| `bias`    | 添加到每个 DN 的值                               | 一个数值或者是对应RGB通道的三个数值的一个列表 |
| `gamma`   | 伽玛校正因子                                     | 一个数值或者是对应RGB通道的三个数值的一个列表 |
| `palette` | CSS 样式颜色字符串列表（仅限单波段图像）         | 逗号分隔的代码颜色的十六进制字符串列表        |
| `opacity` | 图层不透明度（0.0 为完全透明，1.0 为完全不透明） | 数值                                          |
| `format`  | “jpg” 或者 “png”格式                             | 字符串                                        |

例如，要可视化 [**NASA SRTM 数字高程数据集**](https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003 "NASA SRTM 数字高程数据集")：

```
Map = geemap.Map(center=[21.79, 70.87], zoom=3)
image = ee.Image('USGS/SRTMGL1_003')
vis_params = {
  'min': 0,
  'max': 6000,
  'palette': ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
}
Map.addLayer(image, vis_params, 'SRTM')
Map

```

生成如下地图：  
![请添加图片描述](https://img-blog.csdnimg.cn/e6448ca0fe984619a235545f6e5499c4.jpeg)  
图 3.3 可视化 NASA SRTM 数字高程模型

#### 3.3.1.3 加载 Cloud GeoTIFF

您可以使用 `ee.Image.loadGeoTIFF()` 或 `geemap.load_GeoTIFF()` 从 Google Cloud Storage 中的 Cloud Optimized GeoTIFF ([COG)](https://www.cogeo.org/ "COG)") 加载图像，网址为 gs://bucket/path/to/file.tif 或 [https://storage.googleapis.com/bucket/path/to/file.tif。](https://storage.googleapis.com/bucket/path/to/file.tif "https://storage.googleapis.com/bucket/path/to/file.tif。")例如，托管在 Google Cloud 中的 [Planet Disaster Data Catalog](https://stacindex.org/catalogs/planet-labs-stac-catalog#/hQQtdnqXybvrLypHS1EX8TjGtfuU84GRBb "Planet Disaster Data Catalog") 包含此 [](https://storage.googleapis.com/pdd-stac/disasters/hurricane-harvey/0831/20170831_172754_101c_3B_AnalyticMS.tif " ")[GeoTIFF](https://storage.googleapis.com/pdd-stac/disasters/hurricane-harvey/0831/20170831_172754_101c_3B_AnalyticMS.tif "GeoTIFF")，它是大西洋哈维飓风的 4 波段多光谱图像。您可以使用 `geemap.Image.loadGeoTIFF()` 从 Cloud Storage 加载此图像：

```
Map = geemap.Map()
URL = 'https://storage.googleapis.com/pdd-stac/disasters/hurricane-harvey/0831/20170831_172754_101c_3B_AnalyticMS.tif'
image = geemap.load_GeoTIFF(URL)
vis = {
    "min": 3000,
    "max": 13500,
    "bands": ["B3", "B2", "B1"],
}
Map.addLayer(image, vis, 'Cloud GeoTIFF')
Map.centerObject(image)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/65f5f396b1b74d2f93ca4803b9994b20.jpeg)  
图 3.4 可视化托管在 Google Cloud Storge 中的云优化 GeoTIFF (COG)

有时，COG 图像的每个波段都存储在单独的文件中。在这种情况下，您可以使用 `geemap.load_GeoTIFFs()` 将 COG 文件列表加载为单个图像。例如，[Google Cloud](https://cloud.google.com/storage/docs/public-datasets/landsat "Google Cloud") 托管 Landsat 数据。 Landsat 场景的每个波段都存储在一个单独的文件中。以下示例显示如何将 [Landsat scene](https://console.cloud.google.com/storage/browser/gcp-public-data-landsat/LC08/01/044/034/LC08_L1TP_044034_20131228_20170307_01_T1 "Landsat scene")的三个波段加载为图`Image`。首先，获取每个波段的 URL 并将其存储在一个变量中，分别为：

```
B3 = 'gs://gcp-public-data-landsat/LC08/01/044/034/LC08_L1TP_044034_20131228_20170307_01_T1/LC08_L1TP_044034_20131228_20170307_01_T1_B3.TIF'
B4 = 'gs://gcp-public-data-landsat/LC08/01/044/034/LC08_L1TP_044034_20131228_20170307_01_T1/LC08_L1TP_044034_20131228_20170307_01_T1_B4.TIF'
B5 = 'gs://gcp-public-data-landsat/LC08/01/044/034/LC08_L1TP_044034_20131228_20170307_01_T1/LC08_L1TP_044034_20131228_20170307_01_T1_B5.TIF'
```

接下来，将上面定义的三个波段变量放在一个列表中，并使用 `geemap.load_GeoTIFFs()` 将三个波段加载为 `ImageCollection`，可以使用 `collection.toBands()` 进一步将其转换为 `Image`。使用 `rename()` 函数将波段重命名为 `Green`、`Red` 和 `NIR`。 `selfMask()` 函数用于屏蔽图像中的黑色 nodata 区域。

```
URLs = [B3, B4, B5]
collection = geemap.load_GeoTIFFs(URLs)
image = collection.toBands().rename(['Green', 'Red', 'NIR']).selfMask()
```

最后，将图像添加到地图并将地图居中放置在图像上：

```
Map = geemap.Map()
vis = {'bands': ['NIR', 'Red', 'Green'], 'min': 100, 'max': 12000, 'gamma': 0.8}
Map.addLayer(image, vis, 'Image')
Map.centerObject(image.geometry(), 8)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/fe45f9b3943a47409b3d34d300a1513a.jpeg)  
图 3.5 从 Google Cloud 加载 Cloud Optimized GeoTIFF 列表作为图像

### 3.3.2 Image Collection

#### 3.3.2.1 加载Image Collection

`ImageCollection` 是一个图像序列的集合。可以通过将 Earth Engine 资产 ID 粘贴到 `ImageCollection` 构造函数中来加载 `ImageCollection`。您可以在 [**Earth Engine 数据目录**](https://developers.google.com/earth-engine/datasets "Earth Engine 数据目录") 中找到 `ImageCollection` ID。例如，要加载 [**Sentinel-2 表面反射率集合**](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR "Sentinel-2 表面反射率集合")**：**

```
collection = ee.ImageCollection('COPERNICUS/S2_SR')
```

#### 3.3.2.2 可视化Image Collection

为了可视化 Earth Engine **ImageCollection**，我们需要通过将集合中的所有图像合成为单个图像来将 **ImageCollection** 转换为**Image**，该图像可表示图像集的==最小值、最大值、中值、均值或标准偏差==。例如，要从集合中创建中值图像，我们可以使用 `.median()` 方法。让我们从 Sentinel-2 表面反射率集合中创建一个中值图像：

```
Map = geemap.Map()
collection = ee.ImageCollection('COPERNICUS/S2_SR')
image = collection.median() //中位值

vis = {
  'min': 0.0,
  'max': 3000,
  'bands': ['B4', 'B3', 'B2'],
}

Map.setCenter(83.277, 17.7009, 12)
Map.addLayer(image, vis, 'Sentinel-2')
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/8b450524b9164b6098b2adae9fbda194.jpeg)  
图 3.6 可视化 Earth Engine ImageCollection

#### 3.3.2.3 过滤Image Collection

一个 **ImageCollection** 可能包含数以万计的图像，这可能需要一段时间来处理和可视化。例如，我们之前使用的 [Sentinel-2 表面反射率集合](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR "Sentinel-2 表面反射率集合")包含超过 1400 万张图像。为了减少要处理的图像数量，我们可以过滤集合，以便只处理较少数量的图像。 Earth Engine 提供了多种方便的方法来过滤图像集合。具体来说，许多常见实例由 `imageCollection.filterDate()` 和 `imageCollection.filterBounds()` 处理。对于通用过滤，使用带有 `ee.Filter` 作为参数的 `imageCollection.filter()`。

以下示例演示了使用便捷方法和 `filter()`从 **ImageCollection** 中识别和删除具有高云量的图像。具体来说，我们选择 2021 年获取的所有图像，然后过滤掉云量大于 5% 的图像，并将其从集合中移除：

```
Map = geemap.Map()
collection = ee.ImageCollection('COPERNICUS/S2_SR') \
    .filterDate('2021-01-01', '2022-01-01') \
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',5)) //去云
image = collection.median()

vis = {
  'min': 0.0,
  'max': 3000,
  'bands': ['B4', 'B3', 'B2'],
}

Map.setCenter(83.277, 17.7009, 12)
Map.addLayer(image, vis, 'Sentinel-2')
Map
```

由于仅选择云量小于 5% 的图像来创建图像合成，因此生成的图像看起来比没有过滤的图 3.5 好。

![请添加图片描述](https://img-blog.csdnimg.cn/76a619a626c74c7dbd6e2cc1b13eeb84.jpeg)  
图 3.6 过滤 Earth Engine ImageCollection

### 3.3.3 Geometry

#### 3.3.3.1 Geometry 类型

**Geometry**是Earth Engine 处理具有几何类型的矢量数据。 Earth Engine 支持的几何类型有：

-   **Point**：给定投影中两个`[x,y]`坐标的列表。
    
-   **LineString**：至少包含两个点的列表。
    
-   **LinearRing**：环中点的列表，即闭合的 LineString。
    
-   **Polygon**：定义多边形边界的环列表。
    
-   **Rectangle**：矩形的最小和最大角，作为两个点的列表。
    
-   **BBox**：==（西、南、东、北）格式的边界框。==
    
-   **MultiPoint**：点的集合。
    
-   **MultiLineString**：线条的集合。
    
-   **MultiPolygon**：多边形的集合。
    

#### 3.3.3.2 Creating Geometry 对象

要创建 **Geometry** 对象，我们可以使用 `ee.Geometry()` 构造函数。例如：

```
Map = geemap.Map()

point = ee.Geometry.Point([1.5, 1.5])

lineString = ee.Geometry.LineString(
  [[-35, -10], [35, -10], [35, 10], [-35, 10]])

linearRing = ee.Geometry.LinearRing(
  [[-35, -10], [35, -10], [35, 10], [-35, 10], [-35, -10]])

rectangle = ee.Geometry.Rectangle([-40, -20, 40, 20])

polygon = ee.Geometry.Polygon([
  [[-5, 40], [65, 40], [65, 60], [-5, 60], [-5, 60]]
])

Map.addLayer(point, {}, 'Point')
Map.addLayer(lineString, {}, 'LineString')
Map.addLayer(linearRing, {}, 'LinearRing')
Map.addLayer(rectangle, {}, 'Rectangle')
Map.addLayer(polygon, {}, 'Polygon')
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/8ef09dbb21da48f281cc04fb51a329fc.jpeg)  
图 3.8 Earth Engine 中的测地线几何

请记住：所有几何构造函数（**Point** 和 **MultiPoint** 除外）都有`geodesic parameter`（测地线参数），默认情况下设置为 `True`。（ee.Geometry.LineString(coords, proj, geodesic, maxError)）在 Earth Engine 中创建的几何图形要么是`geodesic`测地线的（即边是球体表面上的最短路径），要么是平面的（即边是二维笛卡尔平面中的最短路径）。要创建平面几何，我们需要将测地线参数设置为 `False`。例如：

```
Map = geemap.Map()

point = ee.Geometry.Point([1.5, 1.5])

lineString = ee.Geometry.LineString(
  [[-35, -10], [35, -10], [35, 10], [-35, 10]], None, False)

linearRing = ee.Geometry.LinearRing(
  [[-35, -10], [35, -10], [35, 10], [-35, 10], [-35, -10]], None, False)

rectangle = ee.Geometry.Rectangle([-40, -20, 40, 20], None, False)

polygon = ee.Geometry.Polygon([
  [[-5, 40], [65, 40], [65, 60], [-5, 60], [-5, 60]]
], None, False)

Map.addLayer(point, {}, 'Point')
Map.addLayer(lineString, {}, 'LineString')
Map.addLayer(linearRing, {}, 'LinearRing')
Map.addLayer(rectangle, {}, 'Rectangle')
Map.addLayer(polygon, {}, 'Polygon')
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/603f9a19ed1c434d8f13e7a9f355bfcb.jpeg)  
图 3.9 Earth Engine 中的平面几何图形

#### 3.3.3.3 使用绘图工具

要以交互方式创建 **Geometry** 对象，我们可以使用位于地图左侧的绘图工具。支持的**Geometry**的类型包括 `Point`、`LineString`、`LinearRing`、`Polygon` 和 `Rectangle`。单击绘图工具栏上的形状图标之一以创建新几何。例如：

![请添加图片描述](https://img-blog.csdnimg.cn/87a7a21d835042008155ef41b737d48b.jpeg)  
图 3.10 使用绘图工具交互地创建几何图形

> **注意：** 自 ipyleaflet v0.14.0 ([source](https://github.com/jupyter-widgets/ipyleaflet/issues/876 "source")) 以来，画圈工具无法正常工作。如果要使用画圈工具，请使用 `pip install ipyleaflet==0.13.3` 降级到 ipyleaflet v0.13.3。

要检索最后绘制的几何对象，我们可以==使用`Map.user_roi`，它返回一个 `ee.Geometry`对象==。请注意，`ee.Geometry` 对象是==服务器端==对象。要将其转换为客户端对象，我们可以使用 `.getInfo()` 方法。例如：

```
if Map.user_roi is not None:
  print(Map.user_roi.getInfo())
```

输出应该是这样的：
*（多边形首位是同一个点，数值一样）*
```
{'geodesic': False,
 'type': 'Polygon',
 'coordinates': [[[-110.603139, 35.436058],
   [-110.603139, 44.192051],
   [-89.148105, 44.192051],
   [-89.148105, 35.436058],
   [-110.603139, 35.436058]]]}
```

### 3.3.4 Feature

**Feature**是具有存储几何对象（或`None`）的几何属性和存储其他属性字典的属性属性的对象。 `Earth Engine Feature` 对象类似于 `GeoJSON Feature` 对象，即具有相关属性/属性的几何图形。

#### 3.3.4.1 创建Feature对象

要创建**Feature**，我们可以为构造函数提供**Geometry**和（可选）其他属性的字典。例如：

```
# 创建一个 ee.Geometry.
polygon = ee.Geometry.Polygon([
  [[-35, -10], [35, -10], [35, 10], [-35, 10], [-35, -10]]
], None, False)

# 从一个 Geometry 创建 Feature.
polyFeature = ee.Feature(polygon, {'foo': 42, 'bar': 'tart'})
```

与 **Geometry** 对象类似，**Feature** 对象可以打印或添加到地图中以进行检查和可视化。要检查 **Feature** 对象，我们可以使用 `.getInfo()` 方法。例如：

```
polyFeature.getInfo()
```

输出应如下所示：

```
{'type': 'Feature',
 'geometry': {'geodesic': False,
  'type': 'Polygon',
  'coordinates': [[[-35, -10], [35, -10], [35, 10], [-35, 10], [-35, -10]]]},
 'properties': {'bar': 'tart', 'foo': 42}}
```

为了可视化 \*\*Feature \*\*对象，我们可以将其显示在交互式地图上。例如：

```
Map = geemap.Map()
Map.addLayer(polyFeature, {}, 'feature')
Map
```

请注意，创建 **Feature** 对象不必须要 **Geometry**。它可以简单地包装一个属性字典。例如：

```
# 创建一个属性字典，其中一些可能是计算值。
props = {'foo': ee.Number(8).add(88), 'bar': 'nihao'}

# 使用属性字典创建无几何特征（Geometry Feature）。
nowhereFeature = ee.Feature(None, props)

nowhereFeature.getInfo()
```

输出应如下所示：

```
{'type': 'Feature',
 'geometry': None,
 'properties': {'bar': 'nihao', 'foo': 96}}
```

#### 3.3.4.2 设置Feature属性

除了如上所示，在对象创建时设置属性外（==增加， ？.Feature()对非初始化无效？==），我们还可以在创建后使用 `.set()` 方法设置属性（==修改==）。可以使用键值对（`key: value`）或 Python 字典设置属性。例如：

```
# 创建一个特征并设置一些属性
feature = ee.Feature(ee.Geometry.Point([-122.22599, 37.17605])) \
  .set('genus', 'Sequoia').set('species', 'sempervirens')

# 用新词典覆盖旧属性
newDict = {'genus': 'Brachyramphus', 'species': 'marmoratus'}
feature = feature.set(newDict)

# 检查结果
feature.getInfo()
```

输出应如下所示：

```
{'type': 'Feature',
 'geometry': {'type': 'Point', 'coordinates': [-122.22599, 37.17605]},
 'properties': {'genus': 'Brachyramphus', 'presence': 1, 'species': 'marmoratus'}}
```


#### 3.3.4.3 获取Feature属性

要检索一个 **Feature** 的属性，请使用 `.get()` 方法。例如：

```
prop = feature.get('species')
prop.getInfo()
```

要一次检索所有属性，请使用 `.toDictionary()` 方法。例如：

```
props = feature.toDictionary()
props.getInfo()
```

输出应如下所示：

```
{'genus': 'Brachyramphus', 'presence': 1, 'species': 'marmoratus'}
```

### 3.3.5 Feature Collection

FeatureCollection 是Feature的集合。 FeatureCollection 类似于 GeoJSON FeatureCollection 对象，即具有相关属性/属性的特征集合。 ==shapefile 中包含的数据可以表示为 FeatureCollection。==

#### 3.3.5.1 加载Feature Collection

[**Earth Engine 数据目录**](https://developers.google.com/earth-engine/datasets "Earth Engine 数据目录") 将各种矢量数据集（例如，美国人口普查数据、国家边界等）作为要素集合进行托管。您可以通过搜索数据目录来查找要素集合 ID。例如，要加载美国人口普查局的 [**TIGER 道路数据**](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads "TIGER 道路数据")：

```
Map = geemap.Map()
fc = ee.FeatureCollection('TIGER/2016/Roads')
Map.setCenter(-73.9596, 40.7688, 12)
Map.addLayer(fc, {}, 'Census roads')
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/b32e8ebcd0324259b2bab9774fcbe6a0.jpeg)  
图 3.11 美国人口普查局的 TIGER 道路数据

#### 3.3.5.2 创建Feature Collection

要从头开始创建 **FeatureCollection**，我们可以为构造函数提供特征列表。这些要素不需要具有相同的几何类型或相同的属性。例如：

```
# 创建一个 Feature 的列表
features = [
  ee.Feature(ee.Geometry.Rectangle(30.01, 59.80, 30.59, 60.15), {'name': 'Voronoi'}),
  ee.Feature(ee.Geometry.Point(-73.96, 40.781), {'name': 'Thiessen'}),
  ee.Feature(ee.Geometry.Point(6.4806, 50.8012), {'name': 'Dirichlet'})
]

# 从列表中创建一个 FeatureCollection 并打印
fromList = ee.FeatureCollection(features)
```

**FeatureCollection** 对象是服务器端对象。要检查其内容，我们可以使用 `.getInfo()` 方法，该方法会将结果作为 Python 字典返回。例如：

```
fromList.getInfo()
```

输出应如下所示：

```
{'type': 'FeatureCollection',
 'columns': {'name': 'String', 'system:index': 'String'},
 'features': [{'type': 'Feature',
   'geometry': {'type': 'Polygon',
    'coordinates': [[[30.01, 59.8],
      [30.59, 59.8],
      [30.59, 60.15],
      [30.01, 60.15],
      [30.01, 59.8]]]},
   'id': '0',
   'properties': {'name': 'Voronoi'}},
  {'type': 'Feature',
   'geometry': {'type': 'Point', 'coordinates': [-73.96, 40.781]},
   'id': '1',
   'properties': {'name': 'Thiessen'}},
  {'type': 'Feature',
   'geometry': {'type': 'Point', 'coordinates': [6.4806, 50.8012]},
   'id': '2',
   'properties': {'name': 'Dirichlet'}}]}
```

#### 3.3.5.3 过滤Feature Colletion

过滤 **FeatureCollection** 类似于过滤 **ImageCollection** （请参阅过滤图像集合部分）。有用于任何适用 `ee.Filter` 的 `featureCollection.filterDate()` 和 `featureCollection.filterBounds()` 便捷方法和 `featureCollection.filter()` 方法。例如，让我们过滤 [**美国人口普查州数据**](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2018_States "美国人口普查州数据") 以选择德克萨斯州：

```
Map = geemap.Map()
states = ee.FeatureCollection('TIGER/2018/States')
feat = states.filter(ee.Filter.eq('NAME', 'Texas'))
Map.addLayer(feat, {}, 'Texas')
Map.centerObject(feat)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/ed9b33d797504ec8b36877c2d7a7440c.jpeg)图 3.12 过滤美国人口普查州以选择德克萨斯州

==Note:==
```
feat.toDictionary().getInfo()
// 这个返回结果为{},可能因为colletions数据太多，超过计算能力
// 所以要使用下面的.first()
```

请注意，过滤结果作为 **FeatureCollection** 返回。在上面的示例中，过滤结果是只有一个特征的 **FeatureCollection**，即德克萨斯州。要将德克萨斯州作为 **Feature**，我们可以使用 `featureCollection.first()` 方法，然后使用 `feature.toDictionary()` 方法检查其内容。例如：

```
texas = feat.first()
texas.toDictionary().getInfo()
```

```
{'ALAND': 676653171537,
 'AWATER': 19006305260,
 'DIVISION': '7',
 'FUNCSTAT': 'A',
 'GEOID': '48',
 'INTPTLAT': '+31.4347032',
 'INTPTLON': '-099.2818238',
 'LSAD': '00',
 'MTFCC': 'G4000',
 'NAME': 'Texas',
 'REGION': '3',
 'STATEFP': '48',
 'STATENS': '01779801',
 'STUSPS': 'TX'}
```

要选择多个州，我们可以使用 `ee.Filter.inList()` 方法。例如：

```
Map = geemap.Map()
states = ee.FeatureCollection('TIGER/2018/States')
fc = states.filter(ee.Filter.inList('NAME', ['California', 'Oregon', 'Washington']))
Map.addLayer(fc, {}, 'West Coast')
Map.centerObject(fc)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/9641a070507d4bd0b3190e601f20a8b6.jpeg)  
图 3.13 过滤美国人口普查州以选择多个州

除了按属性过滤**Feature Collection**外，我们还可以使用 `featureCollection.filterBounds()` 按位置过滤特征集合。例如，如果我们要选择美国东南部各州，我们可以在地图上绘制一个多边形，并用它来过滤特征集合：

```
region = Map.user_roi
if region is None:
    region = ee.Geometry.BBox(-88.40, 29.88, -77.90, 35.39)

fc = ee.FeatureCollection('TIGER/2018/States') \
    .filterBounds(region)
Map.addLayer(fc, {}, 'Southeastern U.S.')
Map.centerObject(fc)
```

![请添加图片描述](https://img-blog.csdnimg.cn/a50d2e5f3a7a47bd8dfb220155c87358.jpeg)  
图 3.14 过滤美国人口普查州以选择东南部州

#### 3.3.5.4 可视化Feature Colletion

有几种方法可以可视化 **FeatureCollection**。最简单的方法是直接将 **FeatureCollection** 传递给 `Map.addLayer()` 方法。 **FeatureCollection** 将添加为具有黑色轮廓和略微透明多边形的图层。例如：

```
Map = geemap.Map(center=[40, -100], zoom=4)
states = ee.FeatureCollection("TIGER/2018/States")
Map.addLayer(states, {}, "US States")
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/5a89e5887f2e4d05b7aeb516617aec24.jpeg)  
图 3.15 使用默认样式可视化 FeatureCollection

要仅显示多边形轮廓，请使用 `ee.Image().paint()` 方法：

```
Map = geemap.Map(center=[40, -100], zoom=4)
states = ee.FeatureCollection("TIGER/2018/States")
image = ee.Image().paint(states, 0, 3)
Map.addLayer(image, {'palette': 'red'}, "US States")
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/3adbbbbf02a44fa7bbc4d73169582a82.jpeg)  
图 3.16 使用 ee.Image()\].paint() 可视化 FeatureCollection

另一种方法是使用 `featureCollection.style()` 方法来指定特征的样式（例如，`color`, `width`, `lineType`, `fillColor`）。 `color` 和 `fillColor` 参数被指定为十六进制字符串。前六个字符指定颜色的红、绿、蓝值。最后两个字符指定透明度。例如，“`FF000088`”指定 50% 透明的红色。

```
Map = geemap.Map(center=[40, -100], zoom=4)
states = ee.FeatureCollection("TIGER/2018/States")
style = {'color': '0000ffff', 'width': 2, 'lineType': 'solid', 'fillColor': 'FF000080'}
Map.addLayer(states.style(**style), {}, "US States")
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/8e32fe1b82f24c4ea5a1eafee7fdef99.jpeg)图 3.17 使用 featureCollection.style()\] 可视化 FeatureCollection

除了 **Earth Engine** 提供的内置可视化方法外，geemap 还提供了一个 `Map.add_styled_vector()` 方法，用于根据列的值添加具有自定义样式的矢量图层。这里也支持 `featureCollection.style()` 的样式参数。例如：

```
Map = geemap.Map(center=[40, -100], zoom=4)
states = ee.FeatureCollection("TIGER/2018/States")
vis_params = {
    'color': '000000',
    'colorOpacity': 1,
    'pointSize': 3,
    'pointShape': 'circle',
    'width': 2,
    'lineType': 'solid',
    'fillColorOpacity': 0.66,
}
palette = ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5']
Map.add_styled_vector(
    states, column="NAME", palette=palette, layer_name="Styled vector", **vis_params
)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/0b24bd1a5c3a4940afce0ff52a0454f2.jpeg)图 3.18 使用 Map.add\_styled\_vector()\] 可视化 FeatureCollection

#### 3.3.5.5 按属性设置样式

有时需要按属性设置要素集合的样式。例如，如果您有一个矢量化的土地利用和土地覆盖图，您可能希望用不同的颜色为每种土地覆盖类型着色。为此，您可以使用 `ee_vector_style()` 方法指定要用作属性的列。您还可以自定义特征的样式（例如，`color`、`width`、`lineType`、`fillColor`）。 `color` 和 `fillColor`参数被指定为十六进制字符串。前六个字符指定颜色的红、绿、蓝值。最后两个字符指定透明度。例如，`'FF000088'`指定 50% 透明的红色。以下示例说明了如何使用 `ee_vector_style()` 为美国国家湿地清单 ([**NWI**](https://samapriya.github.io/awesome-gee-community-datasets/projects/nwi/ "NWI")) 着色。首先，创建一个交互式地图并添加 Google 卫星图像底图：

```
Map = geemap.Map(center=[28.00142, -81.7424], zoom=13)
Map.add_basemap('HYBRID')
```

指定属性值列表和要用于每个属性值的相应颜色。例如，如果属性值为 `['one', 'two', 'three', 'four', 'five']`，对应的颜色为 `['FF0000', '00FF00', '0000FF', 'FFFF00', 'FF00FF']`，那么第一个特征将被着色为红色，第二个为绿色，第三个为蓝色，第四个为黄色，第五个为洋红色。请注意，您可以在颜色字符串的末尾添加两个附加字符来指定透明度。例如，`'FF0000A8'`指定 66% 透明的红色。

```
types = [
    "Freshwater Forested/Shrub Wetland",
    "Freshwater Emergent Wetland",
    "Freshwater Pond",
    "Estuarine and Marine Wetland",
    "Riverine",
    "Lake",
    "Estuarine and Marine Deepwater",
    "Other",
]

colors = [
    "#008837",
    "#7FC31C",
    "#688CC0",
    "#66C2A5",
    "#0190BF",
    "#13007C",
    "#007C88",
    "#B28653",
]

fillColor = [c + "A8" for c in colors]
```

接下来，使用 `ee_vector_style()` 样式基于 `WETLAND_TY` 列的 NWI `FeatureCollection`。 `fillColor` 参数用于指定每个特征的填充颜色和透明度，而 `color` 参数用于指定每个特征的轮廓颜色和透明度。颜色`'000000'`表示特征轮廓应该是不可见的。

```
fc = ee.FeatureCollection("projects/sat-io/open-datasets/NWI/wetlands/FL_Wetlands")
styled_fc = geemap.ee_vector_style(
    fc, column='WETLAND_TY', labels=types, fillColor=fillColor, color='00000000'
)
```

现在，将样式化的矢量图层和相应的图例添加到地图中：

```
Map.addLayer(styled_fc, {}, 'NWI')
Map.add_legend(title='Wetland Type', labels=types, colors=colors)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/16f5aa3ba0374ed3af3bb0d466e26cf8.jpeg)  
图 3.19 按属性设置多边形的 FeatureCollection

同样，您可以按属性设置点 `FeatureCollection` 的样式。以下示例说明了如何使用 `ee_vector_style()` [为全球电厂数据库](https://developers.google.com/earth-engine/datasets/catalog/WRI_GPPD_power_plants "为全球电厂数据库")着色。发电厂用于发电的能源有很多种，例如煤炭、石油、水力、天然气、核能等。在这里，我们提供了燃料类型列表和用于为每种燃料类型设置样式的相应颜色。

```
fuels = [
    'Coal',
    'Oil',
    'Gas',
    'Hydro',
    'Nuclear',
    'Solar',
    'Waste',
    'Wind',
    'Geothermal',
    'Biomass',
]
colors = [
    '000000',
    '593704',
    'BC80BD',
    '0565A6',
    'E31A1C',
    'FF7F00',
    '6A3D9A',
    '5CA2D1',
    'FDBF6F',
    '229A00',
]
```

所选燃料类型可用于过滤 `FeatureCollection` 并仅选择与所选燃料类型匹配的特征。然后，使用 `ee_vector_style()` 根据`fuel1` 列设置`FeatureCollection` 的样式：

```
fc = ee.FeatureCollection("WRI/GPPD/power_plants").filter(
    ee.Filter.inList('fuel1', fuels)
)
styled_fc = geemap.ee_vector_style(fc, column="fuel1", labels=fuels, color=colors)
```

现在，将样式化的矢量图层和相应的图例添加到地图中：

```
Map = geemap.Map(center=[40, -100], zoom=4)
Map.addLayer(styled_fc, {}, 'Power Plants')
Map.add_legend(title="Power Plant Fuel Type", labels=fuels, colors=colors)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/279bc318e1334378b438ebdc4df7fcea.jpeg)  
图 3.20 按属性对点的 FeatureCollection 进行样式化

与多边形和点不同，折线只能通过color、width和lineType来设置样式。以下示例显示如何根据路线类型设置 [**TIGER：US Census Roads**](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2016_Roads "TIGER：US Census Roads") 的样式。可用的路线类型包括州际 `Interstate(I)`、美国 `U.S.(U)`、州内认可 `State recognized(S)`、通用名称 `Common Name(M)`、县 `County(C)` 和其他 `Other(O)`。指定用于每种路线类型的颜色`colors`和宽度`widths`：

```
types = ['I', 'U', 'S', 'M', 'C', 'O']
labels = ['Interstate', 'U.S.', 'State recognized', 'Common Name', 'County', 'Other']
colors = ['E31A1C', 'FF7F00', '6A3D9A', '000000', 'FDBF6F', '229A00']
width = [8, 5, 4, 2, 1, 1]
```

接下来，使用 `ee_vector_style()` 根据 `rttyp` 路由类型列设置 `FeatureCollection` 的样式：

```
fc = ee.FeatureCollection('TIGER/2016/Roads')
styled_fc = geemap.ee_vector_style(
    fc, column='rttyp', labels=types, color=colors, width=width
)
```

现在，将样式化的矢量图层和相应的图例添加到地图中：

```
Map = geemap.Map(center=[40.7424, -73.9724], zoom=13)
Map.addLayer(styled_fc, {}, 'Census Roads')
Map.add_legend(title='Route Type', labels=labels, colors=colors)
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/91b8060a966e4099b7ec8a77f4672f5b.jpeg)  
图 3.21 按属性设置多段线的 FeatureCollection

## 3.4 Earth Engine数据目录

[Earth Engine 数据目录](https://developers.google.com/earth-engine/datasets "Earth Engine 数据目录")包含各种地理空间数据集。截至 2022 年 5 月，该目录包含 [850 多个数据集](https://github.com/samapriya/Earth-Engine-Datasets-List "850 多个数据集")，总大小超过 40 PB。一些重要的数据集包括：**Landsat**、**Sentinel**、**MODIS**、**NAIP** 等。有关 **CSV** 或 **JSON** 格式的数据集的完整列表，请参阅 [Earth Engine 数据集列表](https://github.com/samapriya/Earth-Engine-Datasets-List "Earth Engine 数据集列表")。

### 3.4.1 搜索数据集

[**GEE数据目录**](https://developers.google.com/earth-engine/datasets/catalog "GEE数据目录") 是可搜索的。您可以按名称、关键字或标签搜索数据集。例如，在搜索框中输入“**elevation**”将过滤目录以仅显示名称、描述或标签中包含“**elevation**”的数据集。此搜索查询返回 52 个数据集。向下滚动列表以查找 [NASA SRTM Digital Elevation 30m](https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003#description "NASA SRTM Digital Elevation 30m") 数据集。在每个数据集页面上，您可以找到以下信息，包括数据集可用性、数据集提供者、地球引擎片段、标签、描述、代码示例等（见图 3.22）。一个重要信息是每个数据集的 Image/ImageCollection/FeatureCollection ID，这对于通过 Earth Engine JavaScript 或 Python API 访问数据集至关重要。  
![请添加图片描述](https://img-blog.csdnimg.cn/5509532131ce4d1b8778744f4954b8f7.jpeg)  
图 3.22 Earth Engine 数据目录中的 NASA SRTM 数字高程数据集

除了通过 [Earth Engine 数据目录](https://developers.google.com/earth-engine/datasets/catalog "Earth Engine 数据目录")的网页搜索数据外，您还可以在 Jupyter notebook 中使用geemap 搜索数据。单击地图左上角的地球图标，然后单击弹出对话框中的数据选项卡。在搜索框中输入关键字（例如“**elevation**”），然后按 Enter。搜索结果将填充下拉菜单（见图 3.23）。从下拉列表中选择一个数据集。数据集的信息将显示在下面的面板中，包括数据可用性、Earth Engine 代码、Earth Engine 数据集 ID 和 数据集缩略图（见图 3.24）。  
![请添加图片描述](https://img-blog.csdnimg.cn/3b2730fdeaf44354944c35c3c142d343.jpeg)  
图 3.23在 geomap 用户界面中从 Earth Engine 数据目录中搜索数据  
![请添加图片描述](https://img-blog.csdnimg.cn/d98cfacde36c4bd096432f37abc4279c.jpeg)  
图 3.24 显示来自 Earth Engine 数据目录的搜索结果

如果您正在运行 Jupyter Notebook，则可以单击搜索结果对话框上的**import**按钮将数据集导入到笔记本中。代码片段将自动生成并插入到地图下方的代码单元中：

```
dataset_xyz = ee.Image('USGS/SRTMGL1_003')
Map.addLayer(dataset_xyz, {}, "USGS/SRTMGL1_003")
```

> **注意：Import**按钮仅适用于 Jupyter Notebook，不适用于 JupyterLab 或 Google Colab。 JupyterLab 和 Google Colab 不支持以编程方式创建新的代码单元（[来源](https://github.com/jupyterlab/jupyterlab/issues/8415 "来源")）。

或者，您可以从搜索结果对话框（见图 3.24）中复制 Earth Engine 代码段（例如 `ee.Image('USGS/SRTMGL1_003')`）并将其粘贴到现有代码单元中。

```
Map = geemap.Map()
dem = ee.Image('USGS/SRTMGL1_003')
vis_params = {
    'min': 0,
    'max': 4000,
    'palette': ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5'],
}
Map.addLayer(dem, vis_params, 'SRTM DEM')
Map
```

生成的地图应如下所示：  
![请添加图片描述](https://img-blog.csdnimg.cn/62a0b3c2038b423f82ae38e6070f6ad8.jpeg)  
图 3.25 NASA SRTM 数字高程数据

### 3.4.2 使用数据集模块

如前所述，Earth Engine 数据目录拥有超过 [**850 个数据集**](https://github.com/samapriya/Earth-Engine-Datasets-List "850 个数据集")，超过 40 PB。记住所有数据集 ID 并通过 **Earth Engine Python API** 访问它们可能具有挑战性。虽然我们可以通过网页或上一节介绍的 geemap 用户界面搜索数据目录，但如果我们可以在不离开代码单元的情况下以编程方式访问数据集 ID，将会很有必要。地理地图数据集模块提供了一种通过点符号访问数据集 ID 的方法。首先，让我们导入[数据集模块（module）](https://geemap.org/datasets/ "数据集模块（module）")：

```
from geemap.datasets import DATA
```

导入数据集模块后，可以通过点符号访问整个 Earth Engine 数据目录。只需键入 `DATA.`进入代码单元并按 **TAB** 查看可用数据集的列表。  
![请添加图片描述](https://img-blog.csdnimg.cn/d729cb5449a34dc49d81c52e5b532f2e.jpeg)  
图 3.26 通过点符号访问 Earth Engine 数据目录")\]

向下滚动列表以查找所需的数据集，例如 `DATA.USGS_GAP_CONUS_2011`。然后按 Enter 键，数据集 ID `'USGS/GAP/CONUS/2011'` 将显示在输出单元格中。您可以在代码中直接使用数据集 ID `DATA.USGS_GAP_CONUS_2011`，例如：

```
Map = geemap.Map(center=[40, -100], zoom=4)
dataset = ee.Image(DATA.USGS_GAP_CONUS_2011)
Map.addLayer(dataset, {}, 'GAP CONUS')
Map
```

生成的地图应如下所示：  
![请添加图片描述](https://img-blog.csdnimg.cn/0805cc02dcd840af8414c2f4cc4e1ec7.jpeg)  
图 3.27 国家差距分析计划土地覆盖数据

要查看所选数据集的元数据，请使用 `get_metadata()` 函数。例如：

```
from geemap.datasets import get_metadata
get_metadata(DATA.USGS_GAP_CONUS_2011)
```

输出应如下所示：  
![请添加图片描述](https://img-blog.csdnimg.cn/13884bbfbde54b2ca3b17aa08f1ff0c3.jpeg)  
图 3.28 National Gap Analysis Program Land Cover Data 元数据

单击上面输出中的超链接 [USGS/GAP/CONUS/2011](https://developers.google.com/earth-engine/datasets/catalog/USGS_GAP_CONUS_2011 "USGS/GAP/CONUS/2011") 以在浏览器的新选项卡中查看数据集的元数据。

## 3.5 获取Image元数据

在使用卫星图像进行地理空间分析之前，查看图像元数据非常重要，例如波段名称、投影信息、属性和其他元数据。下面的示例显示了如何获取 **Landsat 9** 图像的元数据。

```
image = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_044034_20220503')
```

首先，让我们看一下图像的波段名称：

```
image.bandNames().getInfo()
```

```
['SR_B1',
 'SR_B2',
 'SR_B3',
 'SR_B4',
 'SR_B5',
 'SR_B6',
 'SR_B7',
 'SR_QA_AEROSOL',
 'ST_B10',
 'ST_ATRAN',
 'ST_CDIST',
 'ST_DRAD',
 'ST_EMIS',
 'ST_EMSD',
 'ST_QA',
 'ST_TRAD',
 'ST_URAD',
 'QA_PIXEL',
 'QA_RADSAT']
```

每个波段都有自己的名称（name）、数据类型（data type）、比例（scale）、掩模和投影（mask and projection）。要检查波段的投影，请使用 `image.projection()`：

```
image.select('SR_B1').projection().getInfo()
```

```
{'type': 'Projection',
 'crs': 'EPSG:32610',
 'transform': [30, 0, 458985, 0, -30, 4264215]}
```

要检查波段的空间分辨率，请使用 `image.projection().nominalScale()`：

```
image.select('SR_B1').projection().nominalScale().getInfo()
```

```
30
```

要检索图像的所有属性名称，请使用 `image.propertyNames()`：

```
image.propertyNames().getInfo()
```

```
['DATA_SOURCE_ELEVATION',
 'WRS_TYPE',
 'system:id',
 'REFLECTANCE_ADD_BAND_1',
 'REFLECTANCE_ADD_BAND_2',
 'DATUM',
 'REFLECTANCE_ADD_BAND_3',
 'REFLECTANCE_ADD_BAND_4',
 'REFLECTANCE_ADD_BAND_5',
 'REFLECTANCE_ADD_BAND_6',
 'REFLECTANCE_ADD_BAND_7',
 'system:footprint',
 'REFLECTIVE_SAMPLES',
 'system:version',
 'GROUND_CONTROL_POINTS_VERSION',
 'SUN_AZIMUTH',
 'UTM_ZONE',
 ...
 ]
```

要获取特定属性的值（例如 `CLOUD_COVER`），请使用 `.get()` 函数：

```
image.get('CLOUD_COVER').getInfo()
```

```
0.06
```

要获取 **Landsat** 图像的采集时间：

```
image.get('DATE_ACQUIRED').getInfo()
```

```
'2022-05-03'
```

**请记住：** 并非所有 Earth Engine 图像都具有`DATE_ACQUIRED` 属性。但是，大多数图像都有 `system:time_start` 属性，它将图像采集时间存储为自 `1970-01-01T00:00:00Z` 以来的毫秒数。

```
image.get('DATE_ACQUIRED').getInfo()
```

```
1651603548097
```

要将采集时间（以毫秒为单位）转换为人类可读的日期字符串，请使用 `.format()` 函数：

```
date = ee.Date(image.get('system:time_start'))
date.format('YYYY-MM-dd').getInfo()
```

```
'2022-05-03'
```

要获取图像的所有属性，请使用 `image.getInfo()` 或 `image.toDictionary().getInfo()` 函数：

```
image.toDictionary().getInfo()
```

```
{'ALGORITHM_SOURCE_SURFACE_REFLECTANCE': 'LaSRC_1.5.0',
 'ALGORITHM_SOURCE_SURFACE_TEMPERATURE': 'st_1.3.0',
 'CLOUD_COVER': 0.06,
 'CLOUD_COVER_LAND': 0.09,
 'COLLECTION_CATEGORY': 'T1',
 'COLLECTION_NUMBER': 2,
 'DATA_SOURCE_AIR_TEMPERATURE': 'MODIS',
 'DATA_SOURCE_ELEVATION': 'GLS2000',
 'DATA_SOURCE_OZONE': 'MODIS',
 'DATA_SOURCE_PRESSURE': 'Calculated',
 'DATA_SOURCE_REANALYSIS': 'GEOS-5 FP-IT',
 'DATA_SOURCE_WATER_VAPOR': 'MODIS',
 'DATE_ACQUIRED': '2022-05-03',
 'DATE_PRODUCT_GENERATED': 1651724371000,
 'DATUM': 'WGS84',
 'EARTH_SUN_DISTANCE': 1.0081313,
 'ELLIPSOID': 'WGS84',
 ...
 }
```

类似地，geemap 有一个 `image_props()` 函数用于获取图像的元数据。不同之处在于它会自动将图像采集时间（以毫秒为单位）转换为人类可读的日期字符串。例如，检查输出中的 `system:time_start` 和 `system:time_end` 属性：

```
props = geemap.image_props(image)
props.getInfo()
```

```
{'ALGORITHM_SOURCE_SURFACE_REFLECTANCE': 'LaSRC_1.5.0',
 'ALGORITHM_SOURCE_SURFACE_TEMPERATURE': 'st_1.3.0',
 'CLOUD_COVER': 0.06,
 'CLOUD_COVER_LAND': 0.09,
 'COLLECTION_CATEGORY': 'T1',
 'COLLECTION_NUMBER': 2,
 'DATA_SOURCE_AIR_TEMPERATURE': 'MODIS',
 'DATA_SOURCE_ELEVATION': 'GLS2000',
 ...
 'system:id': 'LANDSAT/LC09/C02/T1_L2/LC09_044034_20220503',
 'system:index': 'LC09_044034_20220503',
 'system:time_end': '2022-05-03 18:45:48',
 'system:time_start': '2022-05-03 18:45:48',
 'system:version': 1651763920643564}
 }
```

## 3.6 计算描述性统计

为了可视化多光谱图像，通常需要设置可视化参数，例如最小值、最大值和波段。 Geemap 提供了几个用于计算图像描述性统计的函数，例如 `image_min_value()`、`image_max_value()`、`image_mean_value()` 和 `image_stats()`。例如，要获取图像每个波段的最小值，请使用 `image_min_value()`：

```
image = ee.Image('LANDSAT/LC09/C02/T1_L2/LC09_044034_20220503')
geemap.image_min_value(image).getInfo()
```

```
{'QA_PIXEL': 21762,
 'QA_RADSAT': 0,
 'SR_B1': 1,
 'SR_B2': 1,
 'SR_B3': 139,
 'SR_B4': 848,
 'SR_B5': 3462,
 'SR_B6': 6305,
 'SR_B7': 7091,
 'SR_QA_AEROSOL': 1,
 'ST_ATRAN': 8821,
 'ST_B10': 36382,
 'ST_CDIST': 0,
 'ST_DRAD': 170,
 'ST_EMIS': 8373,
 'ST_EMSD': 0,
 'ST_QA': 134,
 'ST_TRAD': 5981,
 'ST_URAD': 294}
```

要获取图像每个波段的最大值，请使用 `image_max_value()`：

```
geemap.image_max_value(image).getInfo()
```

```
{'QA_PIXEL': 54724,
 'QA_RADSAT': 127,
 'SR_B1': 53705,
 'SR_B2': 54313,
 'SR_B3': 57602,
 'SR_B4': 57492,
 'SR_B5': 56643,
 'SR_B6': 59015,
 'SR_B7': 60458,
 'SR_QA_AEROSOL': 228,
 'ST_ATRAN': 9516,
 'ST_B10': 52094,
 'ST_CDIST': 2706,
 'ST_DRAD': 423,
 'ST_EMIS': 9915,
 'ST_EMSD': 1386,
 'ST_QA': 1080,
 'ST_TRAD': 12913,
 'ST_URAD': 816}
```

要获取图像每个波段的平均值，请使用 `image_mean_value()`：

```
geemap.image_mean_value(image).getInfo()
```

```
{'QA_PIXEL': 21879.45624974622,
 'QA_RADSAT': 0.000970456318786452,
 'SR_B1': 8104.119979979327,
 'SR_B2': 8461.536303658795,
 'SR_B3': 9240.731292093615,
 'SR_B4': 9298.173920971509,
 'SR_B5': 12888.685823419664,
 'SR_B6': 12140.18577036555,
 'SR_B7': 10736.956490617888,
 'SR_QA_AEROSOL': 142.6421931965974,
 'ST_ATRAN': 9076.834480797119,
 'ST_B10': 43469.766724609784,
 'ST_CDIST': 620.0690476796947,
 'ST_DRAD': 337.6147726655202,
 'ST_EMIS': 9783.119355764633,
 'ST_EMSD': 68.50123066692646,
 'ST_QA': 245.14052551309015,
 'ST_TRAD': 8969.705392231179,
 'ST_URAD': 635.921206837569}
```

要获取图像每个波段的描述性统计信息（例如，最小值、最大值、平均值、标准差和总和），请使用 `image_stats()`：

```
geemap.image_stats(image).getInfo()
```

## 3.7 使用检查器工具

Geemap 有一个检查器（inspector）工具，用于交互式查询 Earth Engine 数据，例如在鼠标单击位置检索图像的像素值，或者在鼠标单击位置获取几何体的属性。检查器工具位于工具栏的左上角：  
![请添加图片描述](https://img-blog.csdnimg.cn/df89d9e1cf8f4893973ecc5f1c9e9174.jpeg)图 3.29 交互式查询 Earth Engine 数据的检查器工具")\]

首先，让我们将一些 Earth Engine 数据集添加到地图中。在此示例中，我们将使用两个栅格数据集（[SRTM](https://developers.google.com/earth-engine/datasets/catalog/USGS_SRTMGL1_003 "SRTM") 和 [Landsat](https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE7_TOA_5YEAR "Landsat")）和一个矢量数据集（美国人口普查数据[US Census States](https://developers.google.com/earth-engine/datasets/catalog/TIGER_2018_States "US Census States")）。

```
# Create an interactive map
Map = geemap.Map(center=(40, -100), zoom=4)

# Add Earth Engine datasets
dem = ee.Image('USGS/SRTMGL1_003')
landsat7 = ee.Image('LANDSAT/LE7_TOA_5YEAR/1999_2003').select(
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B7']
)
states = ee.FeatureCollection("TIGER/2018/States")

# Set visualization parameters.
vis_params = {
    'min': 0,
    'max': 4000,
    'palette': ['006633', 'E5FFCC', '662A00', 'D8D8D8', 'F5F5F5'],
}

# Add Earth Engine layers to the map
Map.addLayer(dem, vis_params, 'SRTM DEM')
Map.addLayer(
    landsat7,
    {'bands': ['B4', 'B3', 'B2'], 'min': 20, 'max': 200, 'gamma': 2.0},
    'Landsat 7',
)
Map.addLayer(states, {}, "US States")

# Display the map
Map
```

接下来，通过单击工具栏上的图标激活检查器工具（见图 3.29）。然后，将鼠标光标移到地图上并单击地图。每个图像的像素值和鼠标点击位置相交多边形的属性将显示在地图右侧的面板中。默认情况下，检查器工具将查询所有可见层。要仅查询特定图层，请通过取消选中图层名称旁边的复选框来关闭其他图层。  
![请添加图片描述](https://img-blog.csdnimg.cn/01df611227134634b78f3885f314a155.jpeg)  
图 3.30 检查工具的结果

## 3.8 将 Earth Engine JavaScript 转换为 Python

过去，[Earth Engine 开发人员指南中的代码示例](https://developers.google.com/earth-engine/guides/getstarted "Earth Engine 开发人员指南中的代码示例")仅使用 JavaScript 编写。自 2021 年以来，越来越多的 Python 示例已添加到开发人员指南中。截至 2022 年 5 月，开发者指南中仍有大量 JavaScript 示例没有对应的 Python 示例。 Geemap 具有自动将 Earth Engine JavaScript 转换为 Python 和 Jupyter notebook 的功能，包括交互式转换和批量转换。

### 3.8.1 交互式转换

您可以将 Earth Engine 开发人员指南中的大多数 JavaScript 示例以交互方式转换为 Python，而无需使用 geemap 进行编码。例如，让我们找到一个图像可视化 [**示例**](https://developers.google.com/earth-engine/guides/image_visualization#rgb-composites "示例") 并使用代码部分右上角的复制按钮复制代码片段：  
![请添加图片描述](https://img-blog.csdnimg.cn/f83f480d41d44e908cb819c5d0d4a4a3.jpeg)图 3.31 Earth Engine 开发人员指南中的 Earth Engine JavaScript 代码片段

接下来，创建并显示交互式地图。单击工具栏上的转换图标。将上面复制的代码片段粘贴到文本区域，然后单击转换按钮。 JavaScript 代码片段将转换为 Python 并显示在文本区域中。

```
Map = geemap.Map()
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/d9c1210dd48c4796a0880c4f4ba11cc5.jpeg)图 3.32 将 Earth Engine JavaScript 转换为 Python

如果您正在运行 Jupyter Notebook，将在地图下方创建一个新的代码单元，并被转换后的 Python 代码填充，如下所示。如果您正在运行 JupyterLab 或 Google Colab，则需要复制转换后的 Python 代码并将其手动粘贴到新单元格中，因为 JupyterLab 和 Google Colab 不支持以编程方式创建新单元格（[来源](https://github.com/jupyterlab/jupyterlab/issues/8415 "来源")）。

```
# Load an image.
image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318')

# Define the visualization parameters.
vizParams = {
  'bands': ['B5', 'B4', 'B3'],
  'min': 0,
  'max': 0.5,
  'gamma': [0.95, 1.1, 1]
}

# Center the map and display the image.
Map.setCenter(-122.1899, 37.5010, 10); # San Francisco Bay
Map.addLayer(image, vizParams, 'False color composite')
```

执行上面的代码单元格会生成一个这样的地图：  
![请添加图片描述](https://img-blog.csdnimg.cn/2cca1d10f39d4c31af44fbb2c97f67a7.jpeg)  
图 3.33 从地球引擎 JavaScript 片段转换的 Python 片段生成的地图

### 3.8.2 批量转换

要将 Earth Engine JavaScript 片段以编程方式转换为 Python，请使用三引号将 JavaScript 片段括起来并将其分配给变量。然后，使用 `js_snippet_to_py()` 函数将 JavaScript 片段转换为 Python。例如，让我们使用 Earth Engine 开发人员指南中的[归一化差异水指数 (NDWI) 示例](https://developers.google.com/earth-engine/guides/image_visualization#color-palettes "归一化差异水指数 (NDWI) 示例")：

```
snippet = """
// Load an image.
var image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318');

// Create an NDWI image, define visualization parameters and display.
var ndwi = image.normalizedDifference(['B3', 'B5']);
var ndwiViz = {min: 0.5, max: 1, palette: ['00FFFF', '0000FF']};
Map.addLayer(ndwi, ndwiViz, 'NDWI');
Map.centerObject(image)
"""

geemap.js_snippet_to_py(snippet)
```

如果您正在运行 Jupyter Notebook，将创建一个新的代码单元并使用转换后的 Python 代码填充，如下所示：

```
import ee
import geemap

Map = geemap.Map()

# Load an image.
image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318')

# Create an NDWI image, define visualization parameters and display.
ndwi = image.normalizedDifference(['B3', 'B5'])
ndwiViz = {'min': 0.5, 'max': 1, 'palette': ['00FFFF', '0000FF']}
Map.addLayer(ndwi, ndwiViz, 'NDWI')
Map.centerObject(image)
Map
```

执行上面的单元格会生成一个像这样的地图：  
![请添加图片描述](https://img-blog.csdnimg.cn/86b21bc1ee564a4a94acfa7d97214b47.jpeg)  
图 3.34 Landsat 8 NDWI，美国旧金山湾区。青色是低值，蓝色是高值

除了将 Earth Engine JavaScript 片段逐个转换为 Python，geemap 还支持将 Earth Engine JavaScripts 批量转换为 Python。您只需要指定包含 JavaScript 文件的输入目录和输出目录。然后可以使用 `js_to_python_dir()` 函数将输入目录中的所有 JavaScript 文件递归转换为输出目录中的 Python 文件。您还可以使用 `py_to_ipynb_dir()` 函数将输入目录中的所有 Python 文件递归转换为输出目录中的 Jupyter Notebook 文件。

```
import os
from geemap.conversion import *

# Set the output directory
out_dir = os.getcwd()

# Set the input directory. This example uses the JavaScript examples in the installation folder of the geemap package.
js_dir = get_js_examples(out_dir)

# Convert Earth Engine JavaScripts Python
js_to_python_dir(in_dir=js_dir, out_dir=out_dir, use_qgis=False)

# Convert Python scripts to Jupyter notebooks
py_to_ipynb_dir(js_dir)
```

> **注意：** 自动转换应该适用于 Earth Engine 开发人员指南中的大多数 JavaScript 示例。但是，如果您的 Earth Engine 脚本具有复杂的结构（例如，许多嵌套函数或 for 循环），则自动转换可能无法正常工作。在这种情况下，您可能需要在转换后进行一些手动编辑。

## 3.9 从 Python 调用 JavaScript 函数

上一节演示了如何将 Earth Engine JavaScript 片段转换为 Python。对于具有复杂结构的 Earth Engine JavaScript 片段（例如，嵌套的`map`函数、`for` 循环），将它们转换为 Python 可能具有挑战性。幸运的是，借助 [Open Earth Engine Library (OEEL)](https://www.open-geocomputing.org/OpenEarthEngineLibrary/ "Open Earth Engine Library (OEEL)")，您可以直接从 Python 调用 Earth Engine JavaScript 函数。 Geemap 为 OEEL 提供了一个包装器，只需一行代码就可以更轻松地从 Python 调用 Earth Engine JavaScript 函数。本节展示了从 Python 调用 Earth Engine JavaScript 函数的四个示例。要使用 OEEL，您需要安装 `Node.js` 和 `Git`。前往 [https://nodejs.org/en/download](https://nodejs.org/en/download "https://nodejs.org/en/download") 下载 Node.js 并前往 [https://git-scm.com/downloads](https://git-scm.com/downloads "https://git-scm.com/downloads") 下载 Git。按照网站上的安装说明安装 Node.js 和 Git。接下来，通过在终端**Terminal**或 **Anaconda Prompt** 中运行以下命令来安装 [OEEL Python 包](https://github.com/open-geocomputing/OpenEarthEngineLibrary/tree/oeel-python "OEEL Python 包")：

```
pip install oeel
```

OEEL Python包安装成功后，运行以下代码导入oeel并开始初始化：

```
import oeel
```

[Open Earth Engine Library (OEEL)](https://www.open-geocomputing.org/OpenEarthEngineLibrary/ "Open Earth Engine Library (OEEL) ") 包含一个 Earth Engine JavaScript 函数集合，可以从 Python 调用。成功导入 `oeel` 后，调用 `requiredJS()` 函数将 OEEL JavaScript 库加载到 Jupyter Notebook 中：

```
oeel = geemap.requireJS()
```

现在可以从 Python 访问 OEEL JavaScript 库。只需键入 `oeel`。在代码单元格中并按 `Tab` 键查看可用函数列表：  
![请添加图片描述](https://img-blog.csdnimg.cn/536c5ccf53fc446d9c94aaca90bc7e5d.jpeg)  
图 3.35 通过带有自动完成功能的点符号访问 OEEL JavaScript 库

以下示例显示如何从 OEEL JavaScript 库调用 `oeel.Algorithms.Sentinel2.cloudfree()` 函数。指定函数的 `maxCloud` 和 `S2Collection` 参数。结果是一个包含 Sentinel-2 图像的 `ImageCollection`，其云像素百分比小于指定的 `maxCloud` 阈值。生成的 `ImageCollection` 可以使用其他 Earth Engine Python API 函数进行进一步处理，例如 `filterDate()` 和 `size()`：

```
ic = ee.ImageCollection("COPERNICUS/S2_SR")

icSize = (
    oeel.Algorithms.Sentinel2.cloudfree(maxCloud=20, S2Collection=ic)
    .filterDate('2020-01-01', '2020-01-02')
    .size()
)
print('Cloud free imagery: ', icSize.getInfo())
```

除了调用 OEEL JavaScript 库中的 JavaScript 函数外，您还可以调用自定义 JavaScript 模块中的 JavaScript 函数，只要它们的格式如下：

```
var generateRasterGrid = function(origin, dx, dy, proj) {
    var coords = origin.transform(proj).coordinates();
    origin = ee.Image.constant(coords.get(0)).addBands(ee.Image.constant(coords.get(1)));

    var pixelCoords = ee.Image.pixelCoordinates(proj);

    var grid = pixelCoords
       .subtract(origin)
       .divide([dx, dy]).floor()
       .toInt().reduce(ee.Reducer.sum()).bitwiseAnd(1).rename('grid');

    var xy = pixelCoords.reproject(proj.translate(coords.get(0), coords.get(1)).scale(dx, dy));

    var id = xy.multiply(ee.Image.constant([1, 1000000])).reduce(ee.Reducer.sum()).rename('id');

    return grid
      .addBands(id)
      .addBands(xy);
  }

exports.grid_test = grid_test;
```

请注意，自定义 JavaScript 模块必须包含函数（例如，`var generateRasterGrid = function()`）和至少一个导出语句（例如，`exports.grid_test = grid_test;`），以使 JavaScript 函数可以从 Python 中访问。可以在 [https://tinyurl.com/27xy4oh9](https://tinyurl.com/27xy4oh9 "https://tinyurl.com/27xy4oh9") 找到自定义 JavaScript 模块的示例。 Geemap 可以从 HTTP URL、本地文件或 Earth Engine 用户存储库加载自定义 JavaScript 模块。首先，尝试从 HTTP URL 加载自定义 JavaScript 模块：

```
url = 'https://tinyurl.com/27xy4oh9'
lib = geemap.requireJS(lib_path=url)
```

请注意，HTTP URL 被传递给 `lib_path` 参数。成功加载自定义 JavaScript 模块后，调用 `lib.availability` 以查看可用函数列表：

```
lib.availability
```

此自定义 JavaScript 模块中提供了三个函数：

```
{'generateGrid': 'function',
 'generateRasterGrid': 'function',
 'grid_test': 'function'}
```

您可以通过键入 `lib.function_name()` 来调用自定义 JavaScript 模块中的函数，并为函数提供所需的参数。例如，要调用 `generateRasterGrid()` 函数，请键入以下代码：

```
grid = lib.generateGrid(-180, -70, 180, 70, 10, 10, 0, 0)
grid.first().getInfo()
```

`generateGrid()` 函数根据指定的参数生成坐标网格，并返回一个 `FeatureCollection`。使用 `grid.first().getInfo()` 打印出 `FeatureCollection` 中的第一个特征（Feature）。输出应如下所示：

```
{'type': 'Feature',
 'geometry': {'geodesic': False,
  'type': 'Polygon',
  'coordinates': [[[-180, -50],
    [-170, -50],
    [-170, -40],
    [-180, -40],
    [-180, -50]]]},
 'id': '0',
 'properties': {'nx': '0', 'ny': '0'}}
```

JavaScript 函数生成的 `FeatureCollection` 与使用 Earth Engine Python API 生成的任何其他 `FeatureCollection` 类似。您可以使用 `Map.addLayer()` 方法将其添加到地图中：

```
Map = geemap.Map()
style = {'fillColor': '00000000'}
Map.addLayer(grid.style(**style), {}, 'Grid')
Map
```

![请添加图片描述](https://img-blog.csdnimg.cn/7da8b1ee1aba4bb880d297647d03544d.jpeg)  
图 3.36 由 JavaScript 函数生成的坐标网格

同样，您可以从本地文件加载自定义 JavaScript 模块。运行上面的示例后，应该已经在当前工作目录中创建了一个名为 `grid.js` 的文件。在文本编辑器中打开文件，您应该会看到如下所示的 `grid_test()` 函数：

```
var grid_test = function() {

    var gridRaster = generateRasterGrid(ee.Geometry.Point(0, 0), 10, 10, ee.Projection('EPSG:4326'))
    Map.addLayer(gridRaster.select('id').randomVisualizer(), {}, 'Grid raster')

    var gridVector = generateGrid(-180, -70, 180, 70, 10, 10, 0, 0)
    Map.addLayer(gridVector, {}, 'Grid vector')
}
```

请注意，该函数使用 `Map`，它是 JavaScript 环境中的全局变量，指的是 Earth Engine JavaScript 代码编辑器中的交互式地图。要在 Python 中使用 `Map` 对象，首先需要使用 `geemap.Map()` 创建一个 `Map` 对象，并将其传递给 `requireJS()` 函数的 `Map` 参数：

```
Map = geemap.Map()
lib = geemap.requireJS(lib_path='grid.js', Map=Map)
```

然后，调用 `grid_test()` 函数生成坐标网格并将其添加到地图中：  
![请添加图片描述](https://img-blog.csdnimg.cn/6a3ba73c5ead418e8529e8b62fd608c1.jpeg)  
图 3.37 由 JavaScript 函数生成的栅格网格

最后，您可以从 Earth Engine 用户存储库加载自定义 JavaScript 模块。为此，您需要指定用户存储库名称和 JavaScript 模块的路径，例如 `users/gena/packages:grid`：

```
lib = geemap.requireJS('users/gena/packages:grid')
```

整个用户存储库将被克隆到当前工作目录。如果这是您第一次克隆 Earth Engine 用户存储库，系统将提示您通过 Google 进行身份验证。按照屏幕上的说明进行身份验证并将用户存储库克隆到您的计算机。成功加载自定义 JavaScript 模块后，调用 `lib.availability` 以查看可用函数列表。然后，调用其中一个可用函数并为该函数提供所需的参数。例如调用 `generateGrid()` 函数生成坐标网格：

```
grid = lib.generateGrid(-180, -70, 180, 70, 10, 10, 0, 0)
```

```
Map = geemap.Map()
style = {'fillColor': '00000000'}
Map.addLayer(grid.style(**style), {}, 'Grid')
Map
```

地图应该如图 3.36 所示。

## 3.10 小结

在本章中，我们学习了几种 Earth Engine 数据类型，包括 `Image`、`ImageCollection`、`Geometry`、`Feature` 和 `FeatureCollection`。我们还探索了地球引擎数据目录并访问了各种地理空间数据集。希望在本章结束时，您可以轻松地从 Earth Engine 数据目录中搜索和加载数据集。在下一章中，我们将介绍如何访问和可视化存储在本地的地理空间数据集。

## 3.11 参考文献

-   [https://geemap.org/notebooks/03\_inspector\_tool/](https://geemap.org/notebooks/03_inspector_tool/ "https://geemap.org/notebooks/03_inspector_tool/")
    
-   [https://geemap.org/notebooks/08\_ee\_js\_to\_ipynb/](https://geemap.org/notebooks/08_ee_js_to_ipynb/ "https://geemap.org/notebooks/08_ee_js_to_ipynb/")
    
-   [https://geemap.org/notebooks/15\_convert\_js\_to\_py/](https://geemap.org/notebooks/15_convert_js_to_py/ "https://geemap.org/notebooks/15_convert_js_to_py/")
    
-   [https://geemap.org/notebooks/19\_search\_places\_and\_datasets/](https://geemap.org/notebooks/19_search_places_and_datasets/ "https://geemap.org/notebooks/19_search_places_and_datasets/")
    
-   [https://geemap.org/notebooks/22\_import\_assets](https://geemap.org/notebooks/22_import_assets "https://geemap.org/notebooks/22_import_assets")
    
-   [https://geemap.org/notebooks/30\_image\_props\_stats/](https://geemap.org/notebooks/30_image_props_stats/ "https://geemap.org/notebooks/30_image_props_stats/")
    
-   [https://geemap.org/notebooks/38\_cloud\_geotiff/](https://geemap.org/notebooks/38_cloud_geotiff/ "https://geemap.org/notebooks/38_cloud_geotiff/")
    
-   [https://geemap.org/notebooks/44\_cog\_stac/](https://geemap.org/notebooks/44_cog_stac/ "https://geemap.org/notebooks/44_cog_stac/")
    
-   [https://geemap.org/notebooks/64\_data\_catalog/](https://geemap.org/notebooks/64_data_catalog/ "https://geemap.org/notebooks/64_data_catalog/")
    
-   [https://developers.google.com/earth-engine/guides/image\_overview](https://developers.google.com/earth-engine/guides/image_overview "https://developers.google.com/earth-engine/guides/image_overview")
    
-   [https://developers.google.com/earth-engine/guides/ic\_creating](https://developers.google.com/earth-engine/guides/ic_creating "https://developers.google.com/earth-engine/guides/ic_creating")
    
-   [https://developers.google.com/earth-engine/guides/ic\_filtering](https://developers.google.com/earth-engine/guides/ic_filtering "https://developers.google.com/earth-engine/guides/ic_filtering")
    
-   [https://developers.google.com/earth-engine/guides/features](https://developers.google.com/earth-engine/guides/features "https://developers.google.com/earth-engine/guides/features")
    
-   [https://developers.google.com/earth-engine/guides/feature\_collections](https://developers.google.com/earth-engine/guides/feature_collections "https://developers.google.com/earth-engine/guides/feature_collections")