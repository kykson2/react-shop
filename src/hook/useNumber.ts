import { useState } from 'react';

type useNumberType = [number, (num: number) => void];

const useNumber = (): useNumberType => {
    const [number, setNumber] = useState<number>(0);

    const onHandler = (num: number): void => {
        console.log(num);
        setNumber(num);
    };

    return [number, onHandler];
};

export default useNumber;
