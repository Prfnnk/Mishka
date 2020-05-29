import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import OrderDone from "../form/components/order";
import cn from "classnames";

import Modal from "../modal";

import "./styles/style.scss";
import "../banner/components/banner-header/styles/style.scss";

const EMAIL_RE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const [getOrder, setGetOrder] = useState(false);
  const [data, setData] = useState();

  console.log(errors);

  const onSubmit = (val) => {
    console.log(val);
    setData(val);
    setGetOrder(true);
  };

  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="form__header">
          <div className="form__header-wrapper">
            <div className="form__links">
              <div className="banner__menu">
                <div className="banner__menu-item">Новые поступления</div>
                <div className="banner__menu-item">Распродажа</div>
              </div>
              <div className="banner__menu banner__menu_tablet">
                <div className="banner__menu-item">Каталог товаров</div>
                <div className="banner__menu-item">Вязание на заказ</div>
              </div>
              <div className="banner__delivery">
                Бесплатная доставка по России
              </div>
            </div>
            <div className="form__title">Вязание на заказ</div>
          </div>
          <div className="form__header-img"></div>
        </div>
        <div className="form__description">
          Мы будем рады воплотить в жизнь ваши пожелания! <br />
          Заполните простую форму заказа и мы свяжемся с вами, чтобы уточнить
          детали.
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form__block">
            <div className="block__name">ТИП</div>
            <div className="block__input">
              <div className="block__input-item block__input-item_mobile">
                <div className="radio">
                  <input
                    type="radio"
                    name="type"
                    value="Аксессуар для интерьера"
                    checked
                    className="radio__input"
                    id="1"
                    ref={register}
                  />
                  <label htmlFor="1" className="radio__label"></label>
                </div>

                <div className="block__text">Аксессуар для интерьера</div>
              </div>
              <div className="block__input-item block__input-item_mobile">
                <div className="radio">
                  <input
                    type="radio"
                    name="type"
                    value="Детская игрушка"
                    className="radio__input"
                    id="2"
                    ref={register}
                  />
                  <label htmlFor="2" className="radio__label"></label>
                </div>
                <div className="block__text">Детская игрушка</div>
              </div>
            </div>
          </div>
          <div className="form__block form__block_color">
            <div className="block__name">ЦВЕТ</div>
            <div className="block__input block__input_color">
              <div className="block__input-item block__input-item_color block__input-item_mobile">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="color"
                    id="white"
                    value="white"
                    className="checkbox__input"
                    ref={register}
                    checked
                  />
                  <label htmlFor="white" className="checkbox__label"></label>
                </div>
                <div className="block__text">Белый</div>
              </div>
              <div className="block__input-item block__input-item_color block__input-item_mobile">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="color"
                    id="grey"
                    value="grey"
                    className="checkbox__input"
                    ref={register}
                  />
                  <label htmlFor="grey" className="checkbox__label"></label>
                </div>
                <div className="block__text">Серый</div>
              </div>
              <div className="block__input-item block__input-item_color block__input-item_mobile">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="color"
                    id="tiffani"
                    value="tiffani"
                    className="checkbox__input"
                    ref={register}
                  />
                  <label htmlFor="tiffani" className="checkbox__label"></label>
                </div>
                <div className="block__text">"Тиффани"</div>
              </div>
              <div className="block__input-item block__input-item_color block__input-item_mobile">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="color"
                    id="black"
                    value="black"
                    className="checkbox__input"
                    ref={register}
                  />
                  <label htmlFor="black" className="checkbox__label"></label>
                </div>
                <div className="block__text">Черный</div>
              </div>
              <div className="block__input-item block__input-item_color block__input-item_mobile">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="color"
                    id="pink"
                    value="pink"
                    className="checkbox__input"
                    ref={register}
                  />
                  <label htmlFor="pink" className="checkbox__label"></label>
                </div>
                <div className="block__text">Розовый</div>
              </div>
              <div className="block__input-item block__input-item_color block__input-item_mobile">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="color"
                    id="orange"
                    value="orange"
                    className="checkbox__input"
                    ref={register}
                  />
                  <label htmlFor="orange" className="checkbox__label"></label>
                </div>
                <div className="block__text">Оранжевый</div>
              </div>
            </div>
          </div>
          <div className="form__block">
            <div className="block__name">ФИО</div>
            <div className="block__input">
              <div className="block__input-item">
                <div className="block__input-name">Фамилия:</div>
                <div className={cn("input", { input_error: !!errors.surname })}>
                  <input
                    type="text"
                    placeholder="Укажите фамилию"
                    name="surname"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div className="block__input-item">
                <div className="block__input-name">Имя:</div>
                <div className={cn("input", { input_error: !!errors.name })}>
                  <input
                    type="text"
                    placeholder="Введите ваше имя"
                    name="name"
                    ref={register({ required: true })}
                  />
                </div>
              </div>
              <div className="block__input-item">
                <div className="block__input-name">Отчество:</div>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Отчество, если желаете"
                    name="patronymic"
                    ref={register}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form__block form__block_color">
            <div className="block__name">ИНФО</div>
            <div className="block__input">
              <div className="block__input-item">
                <div className="block__input-name">Тел.:</div>
                <div
                  className={cn("input", {
                    input_error: !!errors.tel,
                    input_tel: true,
                  })}
                >
                  <InputMask
                    mask="+7 (999) 999-99-99"
                    name="tel"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  >
                    {(inputProps) => {
                      return (
                        <input
                          ref={register({ required: true, minLength: 16 })}
                          {...inputProps}
                        />
                      );
                    }}
                  </InputMask>
                </div>
              </div>
              <div className="block__input-item block__input-item_mail">
                <div className="block__input-name">E-mail:</div>
                <div
                  className={cn("input", {
                    input_error: !!errors["e-mail"],
                    input_mail: true,
                  })}
                >
                  <input
                    type="text"
                    placeholder="Без спама, честно!"
                    name="e-mail"
                    ref={register({
                      required: true,
                      pattern: EMAIL_RE,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form__block">
            <div className="block__name">ДОП</div>
            <div className="block__input">
              <textarea
                name="add_info"
                rows="6"
                placeholder="Опишите все ваши пожелания к заказу"
                ref={register}
              ></textarea>
            </div>
          </div>
          <div className="form__block">
            <div className="form__order">
              <div className="form__button">
                <button className="button" type="submit">
                  ОТПРАВИТЬ ЗАКАЗ
                </button>
              </div>
              <div className="form__text">
                Все поля обязательны для заполнения
              </div>
            </div>
          </div>
        </form>
      </div>
      {getOrder ? (
        <Modal onClose={setGetOrder}>
          <OrderDone
            data={data}
            setData={setData}
            setGetOrder={setGetOrder}
          ></OrderDone>
        </Modal>
      ) : null}
    </div>
  );
};
export default Form;
