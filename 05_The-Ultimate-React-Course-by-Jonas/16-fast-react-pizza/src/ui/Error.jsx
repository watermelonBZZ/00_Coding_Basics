import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  //返回，与useNavigation的区别
  const navigate = useNavigate();
  //可以直接获取父级页面的error
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
