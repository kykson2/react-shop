import fashionSrc from '@/image/img_shop_fashion.jpeg';
import grocerySrc from '@/image/img_shop_grocery.jpeg';
import digitalSrc from '@/image/img_shop_digital.jpeg';

const CarouselData = [
    {
        src: fashionSrc,
        alt: '패션',
        title: '물빠진 청바지!',
        content: '이제 막 도착한 패션 청바지를 구경해 보세요.',
        path: '/fashion',
    },
    {
        src: grocerySrc,
        alt: '식료품',
        title: '신선한 식품',
        content: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.',
        path: '',
    },
    {
        src: digitalSrc,
        alt: '디지털',
        title: '신속한 업무처리',
        content: '다양한 디지털 상품을 둘러보세요.',
        path: '/digital',
    },
];

export default CarouselData;
