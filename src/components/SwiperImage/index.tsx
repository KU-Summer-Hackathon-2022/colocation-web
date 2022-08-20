import classNames from 'classnames';
import React, { FC, useEffect, useRef, useState } from 'react';
// import {Root} from './styled';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

type Props = {
  data: string[];
}

const SwiperImage: FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [imageList, setImageList] = useState([
    data[data?.length - 1],
    ...data,
    data[0],
  ]);

  const [currentImgIndex, setCurrentImgIndex] = useState(1);

  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
    transition: `all 0.4s ease-in-out`,
  });

  const nextSlide = () => {
    setCurrentImgIndex(currentImgIndex + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  const prevSlide = () => {
    setCurrentImgIndex(currentImgIndex - 1);
    setStyle({
      transform: `translateX(-${currentImgIndex - 1}00%)`,
      transition: `all 0.4s ease-in-out`,
    });
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden max-w-[480px] min-w-[280px] w-full bg-black"
      >
        <div ref={ref} style={style} className={`flex`}>
          {imageList?.map((el, i) => {
            return (
              <img
                key={i}
                src={el}
                alt=''
                className={'w-auto h-auto object-contain'}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute w-full flex justify-between top-[50%]">
        <button className="text-white text-xl" onClick={prevSlide}>
          <IoIosArrowBack />
        </button>
        <button className="text-white text-xl" onClick={nextSlide}>
          <IoIosArrowForward />
        </button>
      </div>
      {/* ... 생략 ... */}
    </div>
  );
};

export default SwiperImage;