## s5-React-Router-With-Data-Loading

### s5-p1-p7

- Section Overview
- Setting Up a New Project: "Fast React Pizza Co."
- Application Planning
- Setting Up a Professional File Structure
- A New Way Of Implementing Routes
- Building the App Layout

如何规划与建立页面逻辑

```
react-router-dom

创建
申明路径和对应的component
router = createBrowserRouter()

渲染，这个里面包含了所有要渲染的component
<RouterProvider router={router} />
```

- 1.定义获取数据的异步函数
- 2.把这个函数传入需要的 router 中
- 3.在 router 对应的组件中使用`useLoaderData()`就会自动在页面渲染的时候 fetch 数据（以前的方法是先渲染页面，再获取数据）

### s5-p1-p9-Handling-Errors-With-Error-Elements

在 router 中设置 errorElement 属性

function handleSubmit(e) {
//这是什么意思
e.preventDeault();
}
这种方式非常常见于单页应用（SPA），其中表单提交和数据处理通常需要与后端 API 进行交互，而不是传统的表单提交流程。

useNavigate()
在不点击链接的情况下，根据某些逻辑或事件的结果来改变用户的位置（即路由地址）

### s5-p12-Writing-Data-With-React-Router-"Actions"

```
//表单提交的方法
<Form method="Post">

//设置action获取post请求方法的数据
export async function action({ request }) {
  //获取post提交的数据
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  //更新数据成为需要的形式
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    //因为如果页面没有勾选，cart里面不会有priority这个属性，所以要手动设置一下
    priority: data.priority === "on",
  };

  //这一步任务是把order传上服务器，并返回这个数据对象
  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

//在form中加数据，但不要在组件中渲染
//value={}要stringify()的原因是value只接受字符串数据类型

<input type="hidden" name="cart" value={JSON.stringify(cart)} />

//在router中传入action
```

### s5-p13-Error-Handling-in-Form-Actions

如果 form 提交出现了 error，如何在页面上显示错误提示
`useActionData()`
这个一般会获取 action return 的数据

`{formErrors?.phone && <p>{formErrors?.phone}</p>}`
如果返回的是存在特定属性的对象，显然一个带属性信息的 p 标签

## s5-Tailwind-CSS

安装 tailwind、官方插件和 prettier 插件
`npm install -D prettier prettier-plugin-tailwindcss`

p22 9-using-CSS-grid
grid 模式下，max-w-3xl 和 mx-auto 需要放在一个 div 中才会生效
注意 overflow-scroll 的位置

设了`focus:outline-none focus:ring`就要和 ring 一起用
`focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2`

可以通过给 tailwinds 设置前面加 prefix `sm:`来确保在小窗口中不会显示一些设置
