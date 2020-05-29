import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/style.scss";

const OrderDone = ({ data, setGetOrder, setData }) => {
  const history = useHistory();

  const confirmOrder = () => {
    history.push("/mishka");
    setGetOrder(false);
    setData(undefined);
    console.log(data);
  };

  return (
    <div className="order">
      <div className="order__title">
        Спасибо за заказ, {data.name} {data.patronymic}!
      </div>
      <div className="order__confirmation">
        Вы оставили заявку на {data.type}. <br />
        Мы свяжемся с вами в ближайшее время для уточнения деталей!
      </div>
      <div className="button-block">
        <div className="button" onClick={() => confirmOrder()}>
          Ура!
        </div>
      </div>
    </div>
  );
};
export default OrderDone;
