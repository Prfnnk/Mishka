import React, { useState } from "react";
import "./styles/style.scss";
import LeftArrow from "./img/huge-arrow-left.png";
import RightArrow from "./img/huge-arrow-right.png";
import Modal from "../modal";

const feedbackList = [
  {
    discription:
      "Я молодая мама, но все равно фотографии не набирали и близко такого количества лайков, как у популярных инстамамочек. В отчаянии, я накупила аксессуаров и игрушек в Мишке и мои фотографии сразу стали более стильными, а также набирают больше лайков!",
    name: "Анастасия Красильникова",
    link: "@misssssiskras"
  },
  {
    discription:
      "Купил вязаных зверят своей девушке в подарок. Что сказать, полный восторг!! Качество на высоте, а какие мелые игрушки! Девушка(да и я, что таить) в восторге!!!",
    name: "Дмитрий Котов",
    link: "@kotov_D"
  },
  {
    discription:
      "Не ожидала такого качества пряжи и вязки, когда заказывала корзинки в свой дачный домик, но была приятна удивлена. Спасибо команде Мишки за такие чудесные изделия! Буду заказывать еще :)",
    name: "Надежда Миронова",
    link: "@mir.nadenka"
  },
  {
    discription:
      "Искала своему дедуле на день рождения самый лучший подарок и нашла его здесь - в Мишке! Игрушки просто потрясающие, красивые и миленькие, спасибо вам!",
    name: "Катюшка Кекова",
    link: "@k_ekus"
  },
  {
    discription:
      "Решила немного украсить свою квартирку и заказала несколько предметов декора в Мишке. Чтобы полностью воплотить мой замысел, решили вязать на заказ. Очень качественные изделия, уровень работы менеджеров на высоте. Результатов довольна. Спасибо.",
    name: "Алла Пугачевич",
    link: "@allo_puga"
  }
];

const Feedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [discription, setDiscription] = useState("");
  const onSubmit = () => {
    const newFeedback = {
      discription,
      name,
      link
    };
    feedbackList.push(newFeedback);
    setShowModal(false);
    setName("");
    setLink("");
    setDiscription("");
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback">
        <div className="feedback__text">
          <div className="feedback__title">Отзывы</div>
          <div className="feedback__block">
            <div className="feedback__discription">
              {feedbackList[activeIndex].discription}
            </div>
            <div className="feedback__sign">
              <div className="feedback__sign-name">
                {feedbackList[activeIndex].name}
              </div>
              <a
                href="https://www.instagram.com/prfnnk/"
                className="feedback__sign-link"
                target="blank"
              >
                {feedbackList[activeIndex].link}
              </a>
            </div>
          </div>
        </div>
        <div className="feedback__buttons">
          <button className="button" onClick={() => setShowModal(true)}>
            НАПИСАТЬ
          </button>
          <div className="feedback__more">
            <button
              className="feedback__more-arrow"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              <img src={LeftArrow} alt="стрелка влево" />
            </button>
            <button
              className="feedback__more-arrow"
              disabled={activeIndex === feedbackList.length - 1}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              <img src={RightArrow} alt="стрелка направо" />
            </button>
          </div>
        </div>
        {showModal ? (
          <Modal onClose={setShowModal}>
            <div className="modal__wrapper">
              <div className="modal__data">
                <div className="modal__name">
                  <div className="modal__name-item">Имя:</div>
                  <div className="modal__name-item">Instagram:</div>
                  <div className="modal__name-item">Отзыв:</div>
                </div>
                <div className="modal__input">
                  <div className="modal__input-item">
                    <input
                      type="text"
                      placeholder="Мишка Мишкин"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>
                  <div className="modal__input-item">
                    <input
                      type="text"
                      placeholder="@mishka"
                      value={link}
                      onChange={e => setLink(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="modal__feedback">
                <textarea
                  placeholder="Mishka супер, потому что..."
                  cols="37"
                  rows="7"
                  value={discription}
                  onChange={e => setDiscription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="modal__send">
              <button
                className="button"
                onClick={() => onSubmit()}
                disabled={!(discription && name && link)}
              >
                ОТПРАВИТЬ
              </button>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
export default Feedback;
