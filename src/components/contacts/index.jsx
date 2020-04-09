import React from "react";
import "./styles/style.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__block">
        <div className="contacts__title">Контакты</div>
        <div className="contacts__info">
          <div className="contacts__name">
            <div className="contacts__name-item">e-mail:</div>
            <div className="contacts__name-item">адрес:</div>
          </div>
          <div className="contacts__address">
            <div className="contacts__address-link">info@mimimishkashop.ru</div>
            <div className="contacts__address-item">
              г. Санкт-Петербург, <br />
              ул. Большая Конюшенная, <br />
              д. 19/8, офис 101
            </div>
          </div>
        </div>
        <button className="button">НАПИШИТЕ НАМ</button>
      </div>
      <div className="contacts__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.6143608459215!2d37.54256741593237!3d55.79993398056598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549c16789dad9%3A0x9e6e6943aa9f4cc2!2z0JrRgNCw0YHQvdC-0LDRgNC80LXQudGB0LrQsNGPINGD0LsuLCAxNiwg0JzQvtGB0LrQstCwLCAxMjUxNjc!5e0!3m2!1sru!2sru!4v1586100535219!5m2!1sru!2sru"
          height="457"
          width="525"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="map-link"
        ></iframe>
      </div>
    </div>
  );
};
export default Contacts;
