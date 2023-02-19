import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperInstance, { Pagination, Navigation } from 'swiper';
import styled from 'styled-components';
import './SwiperPage.scss';
import * as ReactDOMServer from 'react-dom/server';

const Page = styled.div`
  background-color: white;
  color: black;
  height: 100vh;
`;

const SlideCard = styled.div`
  height: 300px;
  background-color: #eeeeee;
  border-radius: 10px;
  color: black;
`;

interface SwiperNavigationButtonProps {
  direction: 'prev' | 'next';
}
const SwiperNavigationButton = styled.button<SwiperNavigationButtonProps>`
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  ${({ direction }) => direction === 'prev' && 'left: 10px;'}
  ${({ direction }) => direction === 'next' && 'right: 10px;'}
`;

const SwiperWrapper = styled.div`
  position: relative;
`;

const SwiperPageButton = styled.button`
  background-color: orange;
  padding: 10px;
`;

const SwiperPage = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  const [swiper, setSwiper] = useState<SwiperInstance>();

  return (
    <Page>
      <SwiperWrapper>
        <Swiper
          modules={[Pagination, Navigation]}
          loop
          pagination={{
            dynamicBullets: true,
            clickable: true,
            renderBullet: (index, className) => {
              return ReactDOMServer.renderToStaticMarkup(
                <SwiperPageButton
                  type="button"
                  className={className}
                  onClick={() => {
                    console.log('bullet clicked', index);
                    // not working
                    swiper?.slideTo(index);
                  }}
                >
                  {index}
                </SwiperPageButton>,
              );
            },
          }}
          navigation={{
            prevEl,
            nextEl,
          }}
          spaceBetween={10}
          slidesPerView={1.1}
          centeredSlides
          onSlideChange={() => console.log('slide change')}
          onSwiper={(_swiper) => setSwiper(_swiper)}
        >
          <SwiperSlide>
            <SlideCard>Slide 1</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 2</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 3</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 4</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 5</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 6</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 7</SlideCard>
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard>Slide 8</SlideCard>
          </SwiperSlide>
        </Swiper>
        <SwiperNavigationButton direction="prev" ref={(node) => setPrevEl(node)}>
          prev
        </SwiperNavigationButton>
        <SwiperNavigationButton direction="next" ref={(node) => setNextEl(node)}>
          next
        </SwiperNavigationButton>
      </SwiperWrapper>
    </Page>
  );
};

export default SwiperPage;
