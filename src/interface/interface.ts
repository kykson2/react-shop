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

interface IcartState {
    id: number;
    count: number;
}

interface Icart {
    cart: IcartState[];
}

interface Istate {
    product: Iproduct;
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

export type {
    Iproduct,
    IcartState,
    Icart,
    Istate,
    IcartDispatch,
    IgetStorageCartList,
    IbreadCrumbsState,
    IbreadCrumbsSelector,
};
