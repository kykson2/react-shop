interface Iproduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    totalCount?: number;
    totalPrice?: number;
}

interface IproductObj {
    product: Iproduct;
}

interface Icart {
    id: number;
    count: number;
}

interface IcartArr {
    cart: Icart[];
}

interface IcartDispatch {
    id: number;
    count: number;
}

interface IgetStorageCartList {
    id: number;
    title: string;
    count: number;
}

interface IbreadCrumbsState {
    prev: string;
    current: string;
}

interface IbreadCrumbsSelector {
    breadCrumbs: IbreadCrumbsState;
}

interface IhistoryProductState {
    id: number;
    title: string;
    image: string;
}

interface IhistoryProduct {
    historyProduct: IhistoryProductState[];
}

interface IproductPageProps {
    limit?: number;
    prevAddr?: string;
}

export type {
    Iproduct,
    Icart,
    IcartArr,
    IproductObj,
    IcartDispatch,
    IgetStorageCartList,
    IbreadCrumbsState,
    IbreadCrumbsSelector,
    IhistoryProductState,
    IhistoryProduct,
    IproductPageProps,
};
