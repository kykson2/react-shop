import { useState, useEffect } from "react";

type useOnOffProps = [boolean, () => void, () => void];

const useOnOff = (): useOnOffProps => {
  const [onOff, setOnOff] = useState<boolean>(false);

  const onOffHandler = (): void => {
    setOnOff(!onOff);
  };

  // 사이드바가 열려있을 때 사이드바 영역 외 다른 영역 클릭 시 사이드바 닫기
  const offHandler = () => {
    onOff && setOnOff(!onOff);
  };

  return [onOff, onOffHandler, offHandler];
};

export default useOnOff;
