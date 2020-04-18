import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mishka from "./img/mishka-img.png";
import goroskop from "./img/corona-img.png";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 50px;
`;
const Title = styled.div`
  font-size: 50px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Item = styled(Link)`
  width: 500px;
  height: 400px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const MainPage = () => {
  return (
    <Wrapper>
      <Title>Выбери проект</Title>
      <List>
        <Item to="/mishka/">
          <img src={mishka} alt="" />
        </Item>
        <Item to="/corona/">
          <img src={goroskop} alt="" />
        </Item>
      </List>
    </Wrapper>
  );
};
export default MainPage;
