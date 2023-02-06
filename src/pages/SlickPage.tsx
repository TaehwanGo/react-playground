import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickPage.scss';
import styled from 'styled-components';

const Page = styled.div`
  background-color: white;
  color: black;
  height: 100vh;
`;

interface H3Props {
  bgColor: string;
}

const H3 = styled.h3<H3Props>`
  width: 95%;
  height: 300px;
  text-align: center;
  margin: 0 auto;
  background-color: ${(props) => props.bgColor};
`;

const OneDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const TwoDiv = styled.div`
  width: 100%;
  height: 100%;
  & div {
    width: 50%;
  }
`;

const SlickPage = () => {
  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    dots: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    adaptiveHeight: true,
    arrows: true,
  };
  return (
    <Page>
      <Slider {...settings}>
        <OneDiv>
          <H3 bgColor="orange">1</H3>
        </OneDiv>
        <TwoDiv>
          <H3 bgColor="gray">2</H3>
        </TwoDiv>
        <OneDiv>
          <H3 bgColor="green">3</H3>
        </OneDiv>
        <OneDiv>
          <H3 bgColor="orange">4</H3>
        </OneDiv>
        <TwoDiv>
          <H3 bgColor="gray">5</H3>
        </TwoDiv>
        <OneDiv>
          <H3 bgColor="green">6</H3>
        </OneDiv>
      </Slider>
    </Page>
  );
};

export default SlickPage;
