import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    // 调用这个class的setState方法，把this.state作为参数传入，然后修改count的数值
    this.setState((curState) => {
      return {
        count: curState.count - 1,
      };
    });
  }

  handleIncrement() {
    this.setState((curState) => {
      return {
        count: curState.count + 1,
      };
    });
  }

  render() {
    //这个里面可以写简单的render logic

    //是一个构造函数，这里date是一个实例化对象
    const date = new Date("june 21 2027");
    // 调用date函数的方法
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}
export default Counter;
