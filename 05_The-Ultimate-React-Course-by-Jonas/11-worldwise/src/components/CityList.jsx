import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CityList.module.css";
import CityItem from "./CityItem";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Please add your first city" />;
  return (
    <div className={styles.citylist}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </div>
  );
}

export default CityList;
