import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  //使用action返回的数据
  const formErrors = useActionData();

  return (
    <div>
      <h2>Ready to order? Let`s go!</h2>

      {/* 表单提交的方法 */}
      <Form method="Post">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required className="input" />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input" />
          </div>
          {formErrors?.phone && <p>{formErrors?.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order" : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

//要么成功提交数据至服务器并返回对应的格式化后的数据
//要么返回错误
export async function action({ request }) {
  //获取post提交的数据
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  //更新数据成为需要的形式
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    //因为如果页面没有勾选，cart里面不会有priority这个属性，所以要手动设置一下
    priority: data.priority === "on",
  };

  const errors = {};

  if (!isValidPhone(order.phone)) errors.phone = "Invalid Number";

  if (Object.keys(errors).length > 0) return errors;

  //这一步任务是把order传上服务器，并返回这个数据对象
  const newOrder = await createOrder(order);
  // console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
