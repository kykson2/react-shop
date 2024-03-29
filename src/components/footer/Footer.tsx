import React, { FC } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

const Footer: FC = () => {
    return (
        <>
            <footer className="footer h-72  md:bottom-0 w-full md:h-72 flex flex-col items-center  pt-10 bg-slate-200 dark:bg-slate-900 dark:text-gray-400 overflow-x-auto">
                <a
                    className="text-sm font-medium"
                    href="https://github.com/kykson2"
                    target="_blank"
                >
                    김관우
                </a>
                <div>
                    <ul className="flex items-center gap-2 mt-7">
                        <li className="footer-icons">
                            <svg
                                viewBox="0 -140 780 780"
                                enableBackground="new 0 0 32 20"
                                version="1.1"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="m293.2 348.73l33.359-195.76h53.358l-33.384 195.76h-53.333zm246.11-191.54c-10.569-3.966-27.135-8.222-47.821-8.222-52.726 0-89.863 26.551-90.181 64.604-0.297 28.129 26.515 43.822 46.754 53.185 20.771 9.598 27.752 15.716 27.652 24.283-0.133 13.123-16.586 19.115-31.924 19.115-21.355 0-32.701-2.967-50.225-10.273l-6.878-3.111-7.487 43.822c12.463 5.467 35.508 10.199 59.438 10.445 56.09 0 92.502-26.248 92.916-66.885 0.199-22.27-14.016-39.215-44.801-53.188-18.65-9.056-30.072-15.099-29.951-24.269 0-8.137 9.668-16.838 30.56-16.838 17.446-0.271 30.088 3.534 39.936 7.5l4.781 2.259 7.231-42.427m137.31-4.223h-41.23c-12.772 0-22.332 3.486-27.94 16.234l-79.245 179.4h56.031s9.159-24.121 11.231-29.418c6.123 0 60.555 0.084 68.336 0.084 1.596 6.854 6.492 29.334 6.492 29.334h49.512l-43.187-195.64zm-65.417 126.41c4.414-11.279 21.26-54.724 21.26-54.724-0.314 0.521 4.381-11.334 7.074-18.684l3.606 16.878s10.217 46.729 12.353 56.527h-44.293v3e-3zm-363.3-126.41l-52.239 133.5-5.565-27.129c-9.726-31.274-40.025-65.157-73.898-82.12l47.767 171.2 56.455-0.063 84.004-195.39-56.524-1e-3"
                                    fill="#0E4595"
                                />
                                <path
                                    d="m146.92 152.96h-86.041l-0.682 4.073c66.939 16.204 111.23 55.363 129.62 102.42l-18.709-89.96c-3.229-12.396-12.597-16.096-24.186-16.528"
                                    fill="#F2AE14"
                                />
                            </svg>
                        </li>
                        <li className="footer-icons">
                            <svg
                                enableBackground="new 0 0 32 20"
                                height="20"
                                overflow="visible"
                                viewBox="0 0 32 20"
                                width="32"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g>
                                    <g id="Master_Card_1_">
                                        <g id="Master_Card">
                                            <circle
                                                cx="10"
                                                cy="10"
                                                fill="#F93232"
                                                id="Red_x5F_Circle"
                                                r="10"
                                            />
                                            <path
                                                d="M22,0c-2.246,0-4.312,0.75-5.98,2H16v0.014        C15.604,2.312,15.24,2.648,14.893,3h2.214c0.308,0.313,0.592,0.648,0.855,1H14.03c-0.242,0.319-0.464,0.652-0.667,1h5.264        c0.188,0.324,0.365,0.654,0.518,1h-6.291c-0.143,0.325-0.269,0.658-0.377,1h7.044c0.104,0.326,0.186,0.661,0.258,1h-7.563        c-0.067,0.328-0.123,0.66-0.157,1h7.881C19.979,9.328,20,9.661,20,10h-8c0,0.339,0.027,0.67,0.06,1h7.882        c-0.038,0.339-0.093,0.672-0.162,1h-7.563c0.069,0.341,0.158,0.673,0.261,1h7.044c-0.108,0.342-0.234,0.675-0.377,1h-6.291        c0.151,0.344,0.321,0.678,0.509,1h5.264c-0.202,0.348-0.427,0.681-0.669,1H14.03c0.266,0.352,0.553,0.687,0.862,1h2.215        c-0.348,0.353-0.711,0.688-1.107,0.986C17.672,19.245,19.745,20,22,20c5.523,0,10-4.478,10-10S27.523,0,22,0z"
                                                fill="#FED049"
                                                id="Yellow_x5F_Circle"
                                            />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </li>
                        <li className="footer-icons">
                            <svg
                                enableBackground="new 0 0 40 40"
                                version="1.1"
                                viewBox="0 0 40 40"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g id="E-Com">
                                    <g id="CVC_5_" />
                                    <g id="Mastercard_5_" />
                                    <g id="Visa_6_" />
                                    <g id="Discover" />
                                    <g id="Amex_3_">
                                        <g id="Amex">
                                            <g>
                                                <path
                                                    clipRule="evenodd"
                                                    d="M34,9.5H6c-1.1,0-2,0.9-2,2v17c0,1.1,0.9,2,2,2h28      c1.1,0,2-0.9,2-2v-17C36,10.4,35.1,9.5,34,9.5z"
                                                    fill="#3498D8"
                                                    fillRule="evenodd"
                                                />
                                            </g>
                                        </g>
                                        <g id="Amex_1_">
                                            <g>
                                                <path
                                                    clipRule="evenodd"
                                                    d="M10.7,20.3h1.6l-0.8-2L10.7,20.3z M33,16.5h-4.1l-1,1.1      l-0.9-1.1h-8.7l-0.8,1.8l-0.8-1.8h-3.5v0.8l-0.4-0.8h-3l-2.9,7h3.5l0.4-1.1h1l0.4,1.1h3.9v-0.8l0.3,0.8h2l0.3-0.9v0.9h8l1-1.1      l0.9,1.1l4.1,0L30.1,20L33,16.5z M20.9,22.5h-1.1l0-3.9l-1.7,3.9h-1l-1.7-3.9v3.9h-2.3l-0.4-1.1h-2.4l-0.4,1.1H8.6l2.1-5h1.7      l1.9,4.7v-4.7h1.9l1.5,3.4l1.4-3.4h1.9V22.5z M30.8,22.5h-1.5L28,20.8l-1.5,1.7h-4.5v-5h4.6l1.4,1.6l1.5-1.6h1.4L28.7,20      L30.8,22.5z M23.1,18.5v0.9h2.5v1h-2.5v1h2.8l1.3-1.5L26,18.5H23.1z"
                                                    fill="#FFFFFF"
                                                    fillRule="evenodd"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Bitcoin_3_" />
                                    <g id="Google_Wallet_5_" />
                                    <g id="PayPal_3_" />
                                    <g id="Square_Payment_1_" />
                                    <g id="Shop_5_" />
                                    <g id="Postage" />
                                    <g id="Package_7_" />
                                    <g id="Discount_3_" />
                                    <g id="Earth_3_" />
                                    <g id="Barcode_3_" />
                                    <g id="Cart_Plus_6_" />
                                    <g id="Cart_Minus_6_" />
                                    <g id="Cart_4_" />
                                    <g id="Receipt_5_" />
                                    <g id="Truck_9_" />
                                    <g id="Calculator_6_" />
                                    <g id="Euro_Symbol" />
                                    <g id="Cent_Symbol" />
                                    <g id="Dollar_Symbol" />
                                    <g id="Pound_Symbol" />
                                    <g id="Bank_5_" />
                                    <g id="Wallet_3_" />
                                    <g id="Coins_6_" />
                                    <g id="Bills_6_" />
                                    <g id="Dollar_Alt" />
                                    <g id="Dollar" />
                                </g>
                                <g id="Lockup" />
                            </svg>
                        </li>
                        <li className="footer-icons">
                            <svg
                                height="20px"
                                enableBackground="new 0 0 512 512"
                                version="1.1"
                                viewBox="0 0 512 512"
                                width="28px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g id="_x32_50-paypal">
                                    <g>
                                        <path
                                            d="M250.585,271.874c68.566-0.811,120.299-28.097,142.106-91.593    c21.911-61.671,16.332-118.676-44.63-142.311c-39.457-15.316-52.441-11.563-206.923-11.563c-10.042,0-18.765,7.405-20.288,17.142    L61.412,420.778c-1.014,7.404,4.564,14.099,12.272,14.099h75.669c2.029,0,2.738-0.708,3.043-2.534    c4.158-25.664,18.259-116.447,21.808-135.922C180.089,264.774,206.563,272.586,250.585,271.874z"
                                            fill="#002D8A"
                                        />
                                        <path
                                            d="M423.427,150.46c-1.826-1.319-2.536-1.827-3.043,1.317c-2.029,11.565-5.173,22.823-8.927,34.083    C370.985,301.29,258.8,291.249,204.026,291.249c-6.188,0-10.245,3.348-11.057,9.534    c-22.923,142.411-27.488,172.131-27.488,172.131c-1.015,7.202,3.55,13.085,10.752,13.085h64.41c8.723,0,15.925-6.391,17.65-15.112    c0.709-5.479-1.115,6.187,14.606-92.609c4.665-22.314,14.504-19.98,29.719-19.98c72.019,0,128.211-29.214,144.948-113.91    C454.161,209.088,452.234,171.963,423.427,150.46z"
                                            fill="#019BE1;"
                                        />
                                    </g>
                                </g>
                                <g id="Layer_1" />
                            </svg>
                        </li>
                        <li className="footer-icons">
                            <svg
                                height="40px"
                                version="1.1"
                                viewBox="0 0 480 301"
                                width="38px"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <title />
                                <desc />
                                <defs />
                                <g
                                    fill="none"
                                    fillRule="evenodd"
                                    id="round-rect"
                                    stroke="none"
                                    strokeWidth="1"
                                >
                                    <g id="dinner_club">
                                        <path
                                            d="M444,3.03581628e-06 C420,5.30180998e-06 165.902344,-4.81179503e-06 24,3.03581628e-06 C12,3.6994511e-06 -6.11066753e-13,12.0056015 -1.42108547e-14,24.0112 C-1.42108547e-14,96.1913435 2.8991193e-06,240.111972 -1.42108547e-14,264.123169 C-1.38851962e-06,288.134366 12,300.139965 36,300.139965 C169.869629,300.139965 420,300.139967 444,300.139965 C468,300.139965 480,288.134366 480,264.123169 C479.999998,240.111972 479.999994,115.769809 480,36.0167984 C480,12.0056015 468,3.03581628e-06 444,3.03581628e-06 Z"
                                            fill="#F4F4F4"
                                            id="Rectangle-2"
                                        />
                                        <g
                                            id="logo"
                                            transform="translate(100.000000, 53.000000)"
                                        >
                                            <path
                                                d="M154.420108,133.332572 C190.797177,133.50691 224,103.612902 224,67.2456502 C224,27.4760374 190.797177,-0.0132226657 154.420108,4.77155547e-06 L123.113382,4.77155547e-06 C86.30058,-0.0132226657 56,27.4842384 56,67.2456502 C56,103.620838 86.30058,133.507174 123.113382,133.332572 L154.420108,133.332572 L154.420108,133.332572 Z"
                                                fill="#4186CD"
                                                id="Shape"
                                            />
                                            <path
                                                d="M122.661481,5.33333333 C88.7891339,5.3439674 61.3413108,32.793163 61.3333333,66.6709203 C61.3413108,100.542829 88.788868,127.989366 122.661481,128 C156.541806,127.989366 183.995214,100.542829 184,66.6709203 C183.994948,32.793163 156.541806,5.3439674 122.661481,5.33333333 L122.661481,5.33333333 Z M85.3333333,65.3375545 L85.3333333,65.3375545 C85.3640206,48.9092814 95.3092524,34.9002675 109.333333,29.3333333 L109.333333,101.333333 C95.3092524,95.7695651 85.3637649,81.768202 85.3333333,65.3375545 L85.3333333,65.3375545 Z M136,101.333333 L136,101.333333 L136,29.3333333 C150.020232,34.8854088 159.974444,48.8987944 160,65.3308276 C159.974444,81.7678723 150.020232,95.7707076 136,101.333333 L136,101.333333 Z"
                                                fill="#FFFFFF"
                                                id="Shape"
                                            />
                                            <g
                                                fill="#211E1F"
                                                id="text"
                                                transform="translate(0.000000, 146.000000)"
                                            >
                                                <path
                                                    d="M5.67394601,9.45112304 C5.67394601,3.95322282 2.77755874,4.31527573 0.000232997126,4.25554853 L0.000232997126,2.66666667 C2.40709331,2.78427621 4.87453287,2.78427621 7.28628612,2.78427621 C9.87954413,2.78427621 13.4001307,2.66666667 17.9713013,2.66666667 C33.9595641,2.66666667 42.6666667,13.2376891 42.6666667,24.0621486 C42.6666667,30.1155809 39.0880638,45.3333333 17.2280405,45.3333333 C14.0802493,45.3333333 11.1747751,45.2131871 8.27396093,45.2131871 C5.49663519,45.2131871 2.77755874,45.2733755 0,45.3333333 L0,43.7467575 C3.70255733,43.3775558 5.49663519,43.2555647 5.67371301,39.0977215 L5.67371301,9.45112304 L5.67394601,9.45112304 L5.67394601,9.45112304 Z M10.6666667,37.6034278 L10.6666667,37.6034278 C10.6666667,42.1379037 14.045611,42.6666667 17.0516903,42.6666667 C30.3127151,42.6666667 34.6666667,33.0667301 34.6666667,24.2910418 C34.6666667,13.2825518 27.299688,5.33333333 15.456245,5.33333333 C12.9365113,5.33333333 11.7785455,5.50662541 10.6668983,5.56905499 L10.6666667,37.6034278 L10.6666667,37.6034278 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M42.6666667,43.8167561 L43.8471279,43.8167561 C45.5896016,43.8167561 46.838492,43.8167561 46.838492,41.8861467 L46.838492,26.0778649 C46.838492,23.5137708 45.9047048,23.1569679 43.5981023,21.9969734 L43.5981023,21.061494 C46.5257403,20.2382721 50.0203289,19.1377081 50.2646514,18.9616178 C50.704385,18.7282983 51.0759246,18.6666667 51.3886763,18.6666667 C51.6969601,18.6666667 51.8260583,19.0188472 51.8260583,19.4876874 L51.8260583,41.8861467 C51.8260583,43.8167561 53.1969924,43.8167561 54.9418176,43.8167561 L56,43.8167561 L56,45.3333333 C53.878697,45.3333333 51.6967249,45.2168937 49.4580813,45.2168937 C47.2147346,45.2168937 44.9690364,45.274123 42.6669018,45.3333333 L42.6669018,43.8167561 L42.6666667,43.8167561 L42.6666667,43.8167561 Z M47.9988704,8 L47.9988704,8 C46.5820016,8 45.3333333,6.69558974 45.3333333,5.28205128 C45.3333333,3.92 46.6395061,2.66666667 47.9988704,2.66666667 C49.4097835,2.66666667 50.6666667,3.81353846 50.6666667,5.28205128 C50.6666667,6.75076923 49.4654396,8 47.9988704,8 L47.9988704,8 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M62.5230726,26.4256431 C62.5230726,24.2685376 61.8768843,23.6874398 59.136702,22.5780713 L59.136702,21.471124 C61.6478193,20.6545054 64.0401049,19.8951162 66.8462068,18.6668868 C67.0205961,18.6668868 67.1923398,18.7857477 67.1923398,19.2501857 L67.1923398,23.0447104 C70.5282235,20.6545054 73.3920877,18.6666667 77.3117677,18.6666667 C82.2722715,18.6666667 84.0247624,22.2851011 84.0247624,26.8348329 L84.0247624,41.8863668 C84.0247624,43.8167561 85.3100841,43.8167561 86.9481527,43.8167561 L88,43.8167561 L88,45.3333333 C85.9494379,45.3333333 83.9059308,45.2168937 81.8070865,45.2168937 C79.7014077,45.2168937 77.595729,45.274123 75.4949005,45.3333333 L75.4949005,43.8167561 L76.5443226,43.8167561 C78.1843754,43.8167561 79.3466766,43.8167561 79.3466766,41.8863668 L79.3466766,26.7798046 C79.3466766,23.4494979 77.3117677,21.818462 73.9758839,21.818462 C72.1087503,21.818462 69.1278182,23.3352593 67.1921193,24.620498 L67.1921193,41.8859265 C67.1921193,43.816536 68.4838345,43.816536 70.1223441,43.816536 L71.1717662,43.816536 L71.1717662,45.3331132 C69.1278182,45.3331132 67.0796812,45.2164534 64.9766481,45.2164534 C62.8753786,45.2164534 60.7679361,45.2739029 58.6666667,45.3331132 L58.6666667,43.816536 L59.7204982,43.816536 C61.3563621,43.816536 62.5226317,43.816536 62.5226317,41.8859265 L62.5226317,26.4256431 L62.5230726,26.4256431 L62.5230726,26.4256431 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M93.1087094,29.9175192 C92.9760063,30.4780691 92.9760063,31.4085678 93.1087094,33.523231 C93.4846615,39.4241262 97.3884457,44.2702685 102.486799,44.2702685 C106.000662,44.2702685 108.751061,42.4064578 111.109131,40.1089301 L112,40.9810529 C109.061986,44.7696292 105.424813,48 100.193997,48 C90.0425686,48 88,38.4277494 88,34.4541986 C88,22.2723785 96.4246019,18.6666667 100.889785,18.6666667 C106.06304,18.6666667 111.619472,21.8342072 111.679682,28.4217818 C111.679682,28.7992327 111.679682,29.1673061 111.619472,29.544757 L111.041455,29.9175192 L93.1087094,29.9175192 L93.1087094,29.9175192 Z M104.82543,26.6666667 L104.82543,26.6666667 C106.471856,26.6666667 106.666667,26.0733288 106.666667,25.5281459 C106.666667,23.2027775 104.621153,21.3333333 100.921739,21.3333333 C96.8984717,21.3333333 94.1255309,23.3816388 93.3333333,26.6666667 L104.82543,26.6666667 L104.82543,26.6666667 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M112,43.8167686 L113.478957,43.8167686 C115.007075,43.8167686 116.10204,43.8167686 116.10204,41.8861751 L116.10204,25.4945096 C116.10204,23.6873984 114.080041,23.3352208 113.255874,22.8685855 L113.255874,21.996946 C117.252776,20.1854325 119.444152,18.6666667 119.941957,18.6666667 C120.266254,18.6666667 120.427369,18.8427555 120.427369,19.4282507 L120.427369,24.6778978 L120.543248,24.6778978 C121.908391,22.4041513 124.211722,18.6666667 127.547637,18.6666667 C128.916912,18.6666667 130.666667,19.6571661 130.666667,21.7592261 C130.666667,23.3352208 129.629744,24.7395289 128.097289,24.7395289 C126.393184,24.7395289 126.393184,23.3352208 124.480454,23.3352208 C123.548877,23.3352208 120.485618,24.6778978 120.485618,28.1798637 L120.485618,41.8861751 C120.485618,43.8165485 121.578105,43.8165485 123.112832,43.8165485 L126.176091,43.8165485 L126.176091,45.3333333 C123.164472,45.2736833 120.873741,45.2166745 118.514846,45.2166745 C116.271831,45.2166745 113.970565,45.2739034 112.000207,45.3333333 L112.000207,43.8167686 L112,43.8167686 L112,43.8167686 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M134.437445,38.427357 C135.23441,42.5300522 137.680036,46.0117167 142.150753,46.0117167 C145.753375,46.0117167 147.101819,43.7751616 147.101819,41.599561 C147.101819,34.2662862 133.762877,36.6270943 133.762877,26.6235511 C133.762877,23.1421211 136.520038,18.6666667 143.249783,18.6666667 C145.206054,18.6666667 147.835968,19.229322 150.221551,20.474197 L150.655945,26.8066485 L149.245148,26.8066485 C148.635243,22.8959594 146.494684,20.6572944 142.573137,20.6572944 C140.125201,20.6572944 137.801971,22.0876112 137.801971,24.7576453 C137.801971,32.0346545 152,29.7910662 152,39.5461034 C152,43.6464542 148.755099,48 141.471566,48 C139.02363,48 136.148229,47.1302286 134.00767,45.8900424 L133.333333,38.7422095 L134.437445,38.427357 L134.437445,38.427357 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M205.272792,14.8744149 L203.784914,14.8744149 C202.650832,7.59251775 197.699491,4.66331589 191.021933,4.66331589 C184.157575,4.66331589 174.196378,9.45503912 174.196378,24.3972572 C174.196378,36.9831943 182.79123,46.0078139 191.973941,46.0078139 C197.877064,46.0078139 202.77214,41.7749175 203.964963,35.235539 L205.333333,35.6066808 L203.964963,44.6970724 C201.45981,46.3202308 194.71946,48 190.778643,48 C176.824864,48 168,38.5971916 168,24.5875261 C168,11.8230651 178.913205,2.66666667 190.60287,2.66666667 C195.432903,2.66666667 200.084912,4.29217403 204.678406,5.97405738 L205.272792,14.8744149 L205.272792,14.8744149 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M208.00047,43.7911168 L209.181119,43.7911168 C210.928573,43.7911168 212.179778,43.7911168 212.179778,41.8278683 L212.179778,8.78571017 C212.179778,4.9268112 211.243726,4.80795533 208.872786,4.15659825 L208.872786,3.20754189 C211.365789,2.4377766 213.983443,1.36762603 215.29368,0.653819251 C215.973141,0.300161457 216.476446,0 216.659893,0 C217.041135,0 217.16555,0.358358309 217.16555,0.834900995 L217.16555,41.8278683 C217.16555,43.7911168 218.534349,43.7911168 220.281803,43.7911168 L221.333333,43.7911168 L221.333333,45.3333333 C219.223453,45.3333333 217.041135,45.2147013 214.794845,45.2147013 C212.553729,45.2147013 210.309791,45.273122 208,45.3333333 L208,43.7911168 L208.00047,43.7911168 L208.00047,43.7911168 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M246.647891,41.2452648 C246.647891,42.2997532 247.295037,42.3569905 248.299229,42.3569905 C249.010866,42.3569905 249.894778,42.2997532 250.666667,42.2997532 L250.666667,43.528155 C248.120929,43.7593059 243.271576,44.9855063 242.146658,45.3333333 L241.849863,45.1569982 L241.849863,40.435136 C238.306405,43.2923811 235.581475,45.3333333 231.379491,45.3333333 C228.186384,45.3333333 224.875006,43.2923811 224.875006,38.3941838 L224.875006,23.4508295 C224.875006,21.9340394 224.640471,20.4742666 221.333333,20.183897 L221.333333,19.0743728 C223.464675,19.0171354 228.186607,18.6668868 228.958496,18.6668868 C229.614791,18.6668868 229.614791,19.0743728 229.614791,20.3578106 L229.614791,35.4088151 C229.614791,37.1635805 229.614791,42.1804353 234.75603,42.1804353 C236.766645,42.1804353 239.426637,40.6636452 241.908329,38.627316 L241.908329,22.9222645 C241.908329,21.7599058 239.071823,21.1192876 236.947622,20.5334852 L236.947622,19.4833998 C242.263144,19.1311699 245.581217,18.6666667 246.168334,18.6666667 C246.647668,18.6666667 246.647668,19.0739325 246.647668,19.7189535 L246.647668,41.2452648 L246.647891,41.2452648 L246.647891,41.2452648 Z"
                                                    id="Shape"
                                                />
                                                <path
                                                    d="M259.006299,23.3540339 C261.510814,21.2594673 264.894629,18.9166489 268.345137,18.9166489 C275.617454,18.9166489 280,25.1461889 280,31.8566586 C280,39.9273995 273.985853,48 265.017372,48 C260.382009,48 257.938983,46.519322 256.307147,45.8449976 L254.429588,47.2582663 L253.11726,46.5844068 C253.673031,42.9489588 253.992067,39.3739467 253.992067,35.6176271 L253.992067,9.12348668 C253.992067,5.11635835 253.046074,4.99292978 250.666667,4.31651332 L250.666667,3.33094431 C253.180878,2.53156416 255.805771,1.42024213 257.123302,0.67874092 C257.813876,0.311476998 258.31265,0 258.506815,0 C258.880482,0 259.00559,0.372145278 259.00559,0.867021792 L259.00559,23.3538015 L259.006299,23.3538015 L259.006299,23.3540339 Z M258.666903,39.0838506 L258.666903,39.0838506 C258.666903,41.4118175 260.923323,45.3333333 265.128802,45.3333333 C271.844071,45.3333333 274.666667,38.9014008 274.666667,33.4512329 C274.666667,26.8414695 269.526084,21.3333333 264.629164,21.3333333 C262.30147,21.3333333 260.359514,22.8044791 258.666667,24.2153472 L258.666667,39.0838506 L258.666903,39.0838506 L258.666903,39.0838506 Z"
                                                    id="Shape"
                                                />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </li>
                        <li className="footer-icons">
                            <svg
                                height="40px"
                                enableBackground="new 0 0 512 512"
                                version="1.1"
                                viewBox="0 0 512 512"
                                width="38px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <g id="_x39_3-discover_x2C__Credit_card">
                                    <g>
                                        <path
                                            d="M434.334,81H77.667C57.424,81,41,97.424,41,117.667v276.665C41,414.576,57.424,431,77.667,431H431    c20.243,0,40-16.424,40-36.668V117.667C471,97.424,454.576,81,434.334,81z"
                                            fill="#F9F9F9"
                                        />
                                        <path d="M432.771,228.354c9.243-1.909,14.284-8.097,14.284-17.722c0-21.771-23.146-18.639-40.408-18.639l-0.001,62.639h12.223    v-25.055h1.681l16.958,25.055h14.973L432.771,228.354z M422.457,221.021h-3.589v-19.02h3.742c7.715,0,11.917,3.207,11.917,9.243    C434.527,217.66,430.325,221.021,422.457,221.021z" />
                                        <polygon points="363.943,192.07 398.549,192.07 398.549,202.764 376.168,202.764 376.168,216.668 397.784,216.668     397.784,227.208 376.168,227.208 376.168,244.167 398.549,244.167 398.549,254.708 363.943,254.708   " />
                                        <polygon points="311.465,192.07 328.194,234.236 345.153,192.07 358.521,192.07 331.403,256.389 324.834,256.389 298.097,192.07       " />
                                        <path
                                            d="M268.764,189.779c18.868,0,34.07,15.277,34.07,34.069c0,18.868-15.279,34.07-34.07,34.07    c-18.868,0-34.069-15.279-34.069-34.07C234.694,204.98,249.974,189.779,268.764,189.779z"
                                            fill="fill:#FF6F00"
                                        />
                                        <path d="M231.104,194.438v14.514c-15.353-15.354-35.749-3.589-35.749,14.514c0,19.098,21.006,29.411,35.749,14.667v14.514    c-22.687,10.923-48.354-4.354-48.354-29.181C182.75,199.632,208.035,182.98,231.104,194.438z" />
                                        <path d="M156.855,245.083c8.708,0,17.111-11.687-2.521-18.638c-11.457-4.202-15.43-8.708-15.43-17.34    c0-17.723,23.374-23.986,37.965-10.922l-6.417,8.248c-7.944-8.86-19.021-4.736-19.021,1.912c0,3.36,2.063,5.269,9.396,7.866    c13.903,5.042,18.028,9.55,18.028,19.555c0,22.536-29.639,28.571-43.236,8.632l7.869-7.562    C146.313,242.257,151.049,245.083,156.855,245.083L156.855,245.083z" />
                                        <rect
                                            height="62.638"
                                            width="12.223"
                                            x="118.66"
                                            y="192.07"
                                        />
                                        <g>
                                            <path
                                                d="M471,394.332V292.98c-29.646,18.515-201.373,106.348-369.99,138.008h330.455     C451.545,430.739,471,414.421,471,394.332z"
                                                fill="#FF6F00"
                                            />
                                        </g>
                                        <path d="M79.321,192.07H61.445v62.638h17.875c23.604,0,33.687-17.11,33.687-31.242C113.008,205.056,99.258,192.07,79.321,192.07z     M93.604,239.278c-3.743,3.361-8.861,4.889-16.729,4.889h-3.209v-41.403h3.209c7.868,0,12.757,1.299,16.729,5.041    c4.354,3.821,6.799,9.625,6.799,15.66C100.404,229.5,97.958,235.305,93.604,239.278z" />
                                    </g>
                                </g>
                                <g id="Layer_1" />
                            </svg>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex items-center mt-7 gap-4">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <FaIcons.FaFacebookF className="w-5 h-5 m-auto" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/gwanwoo_x"
                                target="_blank"
                            >
                                <AiIcons.AiOutlineInstagram className="w-7 h-7 m-auto" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.github.com/kykson2"
                                target="_blank"
                            >
                                <AiIcons.AiFillGithub className="w-6 h-6 m-auto" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="my-7 text-sm font-medium">
                    Copyright © 2022 Zero Base
                </div>
            </footer>
        </>
    );
};

export default Footer;
