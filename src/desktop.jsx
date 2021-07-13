import React from "react";
import {
    BookIcon,
    ChartIcon,
    DownArrowIcon,
    HeartIcon,
    HomeIcon,
    ListIcon,
    MenuIcon,
    MessageIcon,
    NotificationIcon,
    PenIcon,
    ShoppingCartIcon
} from "./Icons";
import {Link, Route, Switch} from "react-router-dom";
import MenuItem from "./components/MenuItem";
import DesktopProfile from "./DesktopProfile.jsx";
import DesktopMain from "./DesktopMain";
import DesktopSettings from "./DesktopSettings";

class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="h-full w-full flex flex-col">
                <div className="flex flex-row justify-between">
                    <div className="ml-6 mt-6 flex flex-row">
                        <svg width="85" height="85" viewBox="0 0 85 85" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M37.4755 1.46533C40.1274 1.53512 45.7662 1.63282 47.1061 1.46533L52.3401 7.74614L60.7145 11.5146L68.6702 10.0491L74.951 16.7486L73.2761 24.9137L77.2539 33.9162L83.5347 37.4753V46.059L78.5101 50.665L73.2761 60.5049L74.951 67.4138L67.8327 74.9508L61.5519 72.8571L50.8745 77.6724L47.1061 83.5345H37.4755L34.5445 77.6724L23.8671 72.8571L16.9582 74.9508L10.2587 67.4138L11.7242 60.5049L7.11827 50.665C5.44339 49.6182 2.09363 47.399 2.09363 46.8965V37.4753L7.74635 33.9162L11.7242 23.8669L10.2587 16.7486L16.9582 10.0491L24.7045 11.5146L34.5445 7.74614L37.4755 1.46533Z"
                                fill="#A4C2F7" stroke="#C4D9FC"/>
                            <path
                                d="M85 39.0631C85 37.5134 84.1518 36.0881 82.7886 35.3514L78.4266 32.9855L74.6328 23.8239L76.0495 19.0653C76.4905 17.5802 76.0826 15.9728 74.987 14.8776L70.1251 10.0171C69.0297 8.92153 67.4222 8.51429 65.9374 8.95596L61.1803 10.3726L52.0159 6.57311L49.6499 2.20988C48.9113 0.847923 47.4862 -0.00038147 45.9368 -9.91821e-05H39.0632C37.5138 -9.91821e-05 36.0886 0.847923 35.3501 2.20988L32.9842 6.57323L23.8226 10.3671L19.0669 8.95043C17.5814 8.50758 15.9727 8.91566 14.8778 10.0129L10.0173 14.8748C8.92164 15.97 8.51383 17.5774 8.95482 19.0625L10.3715 23.8211L6.57335 32.9855L2.21277 35.35C0.849002 36.0871 -0.000565486 37.5128 2.82404e-07 39.0631V45.9367C2.82404e-07 47.4864 0.848154 48.9116 2.21136 49.6484L6.57335 52.0143L10.3671 61.1758L8.95049 65.9345C8.50951 67.4196 8.91736 69.0269 10.013 70.1221L14.8749 74.9827C15.9695 76.0796 17.5778 76.4872 19.0626 76.0438L23.8197 74.6272L32.9813 78.4209L35.3472 82.7843C36.0847 84.1495 37.5114 85.0001 39.0632 85H45.9368C47.4862 85 48.9113 84.152 49.6499 82.79L52.0157 78.4267L61.1774 74.6328L65.9331 76.0495C67.4185 76.494 69.0281 76.0859 70.1222 74.987L74.9827 70.1279C76.0784 69.0327 76.4862 67.4253 76.0451 65.9402L74.6285 61.1816L78.4223 52.0199L82.7829 49.6555C84.1501 48.9186 85.0018 47.49 85 45.9367V39.0631ZM82.1667 45.9367C82.1667 46.4472 81.8876 46.9166 81.4386 47.1593L76.6418 49.7631C76.355 49.919 76.1308 50.1693 76.0071 50.4715L71.8251 60.5552C71.7015 60.8554 71.684 61.1886 71.7755 61.5002L73.3338 66.7418C73.4794 67.2299 73.3455 67.7587 72.9854 68.1188L68.1247 72.9794C67.7651 73.3423 67.2342 73.4769 66.745 73.3294L61.5033 71.7711C61.1922 71.6775 60.8583 71.6945 60.5584 71.8192L50.4703 75.9984C50.1683 76.1216 49.9182 76.3453 49.762 76.6316L47.1567 81.4356C46.9135 81.8841 46.4444 82.1636 45.9342 82.1637H39.0633C38.5534 82.1637 38.0845 81.8847 37.8408 81.437L35.2355 76.6415C35.0793 76.3551 34.8292 76.1315 34.5272 76.0083L24.4448 71.8249C24.1447 71.7004 23.8109 71.6834 23.4998 71.7767L18.2583 73.3351C17.7694 73.4815 17.2397 73.3468 16.8798 72.9851L12.0204 68.1176C11.6601 67.7574 11.5264 67.2286 11.6719 66.7405L13.2302 61.4989C13.3218 61.1874 13.3042 60.8542 13.1806 60.554L9.0014 50.4658C8.87772 50.1637 8.65367 49.9134 8.36667 49.7576L3.55998 47.158C3.11151 46.9156 2.83243 46.4466 2.83328 45.9369V39.0632C2.83328 38.5527 3.11236 38.0833 3.56131 37.8407L8.35819 35.2368C8.64503 35.0809 8.8692 34.8306 8.99292 34.5284L13.1748 24.4446C13.2985 24.1445 13.316 23.8113 13.2245 23.4997L11.6662 18.2578C11.5206 17.7697 11.6541 17.241 12.0147 16.8808L16.8752 12.0203C17.2365 11.6598 17.7658 11.5257 18.255 11.6703L23.4966 13.2286C23.8079 13.3213 24.1414 13.3043 24.4416 13.1805L34.5297 9.00133C34.8317 8.87804 35.0818 8.65437 35.238 8.36798L37.8433 3.56404C38.0852 3.11534 38.5533 2.83485 39.063 2.83298H45.9367C46.4466 2.83298 46.9155 3.11203 47.1592 3.55972L49.7645 8.36507C49.9207 8.65147 50.1708 8.87511 50.4728 8.99838L60.5552 13.1748C60.8551 13.2994 61.1891 13.3164 61.5001 13.2228L66.7417 11.6645C67.2306 11.5191 67.7599 11.6536 68.1202 12.0145L72.9808 16.8751C73.341 17.2352 73.4747 17.764 73.3293 18.2521L71.771 23.4937C71.6794 23.8053 71.697 24.1385 71.8207 24.4387L75.9998 34.5268C76.1234 34.8289 76.3477 35.0792 76.6345 35.2351L81.4385 37.8404C81.8869 38.0827 82.1661 38.5518 82.1652 39.0615L82.1667 45.9367Z"
                                fill="#3B82F6"/>
                            <path
                                d="M42.5367 73.7142C59.7553 73.7142 73.7137 59.7558 73.7137 42.5372C73.7137 25.3186 59.7553 11.3602 42.5367 11.3602C25.3182 11.3602 11.3597 25.3186 11.3597 42.5372C11.3597 59.7558 25.3182 73.7142 42.5367 73.7142Z"
                                fill="#E8EDFC"/>
                            <path
                                d="M30.7698 24.9403L54.9284 25.0096C54.9284 25.0096 54.5308 22.8881 54.5308 22.7378C54.5308 22.5874 52.6966 18.9792 52.6966 18.9792C52.6966 18.9792 50.9226 16.9045 50.8023 16.7842C50.682 16.6639 47.8255 14.7997 47.8255 14.7997L45.4337 13.8186L45.5008 13.3614L40.2508 13.3529L40.3442 13.7557L37.2715 15.2207L34.415 17.2352C34.415 17.2352 32.7311 19.31 32.671 19.4603C32.6109 19.6107 31.1976 22.5273 31.1976 22.5273L30.7698 24.9403Z"
                                fill="#3B82F6"/>
                            <path
                                d="M30.7698 24.9408L31.1734 22.6548C31.1882 22.5707 31.2106 22.4882 31.2402 22.4081L31.8931 20.6458C31.9227 20.5658 31.9607 20.4891 32.0063 20.4171L32.8489 19.0885C32.8947 19.0163 32.9436 18.9461 32.9955 18.8782L33.9594 17.6148C34.0111 17.5469 34.0693 17.4843 34.1331 17.4276L35.3965 16.3067C35.4604 16.25 35.5278 16.1974 35.5983 16.1491L36.8096 15.3202C36.8801 15.272 36.9536 15.2283 37.0297 15.1893L38.1833 14.5988C38.2594 14.5598 38.3375 14.525 38.4173 14.4944L40.3442 13.7561"
                                stroke="#17282F" strokeWidth="0.999996"/>
                            <path
                                d="M45.433 13.8186L47.4506 14.4827C47.5316 14.5093 47.6097 14.5441 47.6837 14.5866L49.3127 15.5209C49.3868 15.5633 49.4573 15.6117 49.5237 15.6654L50.7404 16.6507C50.8068 16.7045 50.8701 16.762 50.93 16.823L52.0436 17.9566C52.1034 18.0176 52.1588 18.0827 52.2093 18.1516L53.1975 19.5001C53.248 19.5689 53.2928 19.6418 53.3316 19.7179L53.9941 21.019C54.0328 21.0951 54.0665 21.1737 54.095 21.2543L54.5306 22.4894C54.5591 22.57 54.5828 22.6522 54.6016 22.7356L54.7981 23.6043C54.817 23.6876 54.8298 23.7722 54.8365 23.8573L54.9277 25.0096"
                                stroke="#17282F" strokeWidth="0.999996"/>
                            <path d="M40.2584 21.7206L40.2495 13.353L45.4996 13.3615L45.5117 21.7396"
                                  stroke="#17282F"
                                  strokeWidth="0.999996"/>
                            <path d="M35.9639 20.6109V22.3434H37.6964V20.6109H35.9639Z" stroke="#17282F"
                                  strokeWidth="0.999996"/>
                            <path d="M48.0907 20.6109H49.8233V22.3434H48.0907V20.6109Z" stroke="#17282F"
                                  strokeWidth="0.999996"/>
                            <path
                                d="M32.5836 28.335L32.5961 35.4552L33.5906 37.8043L34.9452 39.6561L37.6716 42.2453L38.8546 43.3598L39.3862 43.7885L40.5865 44.0457H45.6276C45.6276 44.0457 46.4335 43.6856 46.5878 43.6341C46.7422 43.5827 47.428 42.9826 47.428 42.9826L51.2689 39.0903L52.1605 37.8557L52.6235 36.6554L53.1378 35.4552L53.2579 34.6493L53.3093 28.5279V28.2808"
                                stroke="#17282F" strokeWidth="0.999996"/>
                            <path
                                d="M53.4108 28.3792C53.4108 28.3792 56.8754 29.3165 56.6867 32.1628C56.4981 35.0092 53.3851 35.2757 53.3851 35.2757L53.1373 35.2964"
                                stroke="#17282F" strokeWidth="0.999996"/>
                            <path
                                d="M32.2163 28.3306C32.2163 28.3306 28.7839 29.2451 28.9726 32.0914C29.1612 34.9378 32.2742 35.2043 32.2742 35.2043L32.522 35.225"
                                stroke="#17282F" strokeWidth="0.999996"/>
                            <path d="M29.1256 55.4325L27.3649 69.4353" stroke="#17282F"/>
                            <path
                                d="M36.0546 43.6343L37.8968 50.5324L42.1491 45.5492L43.9264 45.516L48.2618 50.7816L50.0392 43.7719"
                                stroke="#17282F"/>
                            <path
                                d="M49.8707 42.7102L49.8889 43.0788C49.8932 43.1642 49.8974 43.2497 49.9016 43.3351L49.9081 43.4653C49.9122 43.5475 49.9476 43.6252 50.0071 43.6822L50.144 43.8134C50.2053 43.8721 50.2767 43.9191 50.3548 43.9521L50.3586 43.9537C50.4374 43.9869 50.5176 44.0166 50.599 44.0428L58.0643 46.4403C58.1457 46.4664 58.2255 46.497 58.3035 46.5321L59.8053 47.2075C59.883 47.2425 59.9555 47.2878 60.0209 47.3423L61.6177 48.673C61.6831 48.7275 61.7407 48.7907 61.7888 48.8609L62.9891 50.6094C63.0292 50.6678 63.0779 50.7703 63.098 50.8382C63.216 51.2377 63.5888 52.4952 63.7231 52.8956C63.7456 52.9627 63.7875 53.0697 63.8054 53.1382C63.905 53.52 64.144 54.6601 64.2233 55.0412C64.2377 55.1106 64.2584 55.2235 64.2695 55.2935L65.6031 63.7047"
                                stroke="#17282F"/>
                            <path d="M56.948 55.5151L58.5923 69.2573" stroke="#17282F"/>
                            <path d="M64.7459 59.9868L57.7212 60.8651" stroke="#17282F"/>
                            <path d="M21.3699 59.9857L28.3715 60.9639" stroke="#17282F"/>
                            <path
                                d="M46.6338 48.8553L44.7906 51.5455L45.5713 67.5914L42.8752 71.5359L40.1512 67.4978L41.2926 51.5039L39.4348 48.8173C39.5549 48.683 42.1495 45.5491 42.1495 45.5491L43.9268 45.5159L46.6338 48.8553Z"
                                fill="#3B82F6" stroke="#17282F"/>
                            <path
                                d="M36.0767 42.9504L36.0541 43.6344L36.0767 43.9502L35.9639 44.1756L35.5881 44.4012L34.5883 44.6718L33.4307 45.0552L27.6725 47.0096L26.9208 47.3178L26.1766 47.7689L25.5151 48.2048L24.9739 48.6935L24.3876 49.2422L23.8764 49.7984L23.3878 50.5276L22.9819 51.2718L22.6511 52.0386C22.6511 52.0386 22.4256 52.6475 22.3504 52.9031C22.2753 53.1586 22.1926 53.76 22.1926 53.76L21.937 55.3611L21.3807 58.7363L20.7267 62.3821L20.3584 64.3591"
                                stroke="#17282F"/>
                            <path
                                d="M28.6327 28.3611L56.9985 28.3134C57.0321 28.3134 57.0654 28.3067 57.0964 28.2937C57.1274 28.2807 57.1556 28.2618 57.1792 28.2379C57.2029 28.214 57.2216 28.1857 57.2343 28.1545C57.2469 28.1234 57.2533 28.0901 57.2531 28.0564L57.2316 25.2838C57.2311 25.2156 57.2036 25.1503 57.1551 25.1022C57.1067 25.0542 57.0413 25.0272 56.973 25.0272L28.7373 25.0169C28.6685 25.0169 28.6024 25.0436 28.553 25.0915C28.5036 25.1393 28.4748 25.2045 28.4727 25.2732L28.3842 28.105C28.3831 28.1383 28.3888 28.1715 28.4008 28.2025C28.4128 28.2336 28.431 28.2619 28.4542 28.2857C28.4774 28.3096 28.5051 28.3286 28.5358 28.3416C28.5665 28.3545 28.5994 28.3611 28.6327 28.3611Z"
                                fill="#3B82F6" stroke="#17282F" strokeWidth="1.03117"/>
                        </svg>
                        <svg className="my-auto ml-2" width="163" height="46" viewBox="0 0 163 46" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5445 14.5045C8.1425 14.5045 8.67533 14.4048 9.143 14.2055C9.61833 14.0062 10.017 13.7263 10.339 13.366C10.661 13.0057 10.9063 12.5687 11.075 12.055C11.2513 11.5413 11.3395 10.9663 11.3395 10.33V0.370999H14.433V10.33C14.433 11.319 14.272 12.2352 13.95 13.0785C13.6357 13.9142 13.1795 14.6387 12.5815 15.252C11.9912 15.8577 11.2705 16.333 10.4195 16.678C9.5685 17.0153 8.61017 17.184 7.5445 17.184C6.47117 17.184 5.509 17.0153 4.658 16.678C3.807 16.333 3.0825 15.8577 2.4845 15.252C1.89417 14.6387 1.438 13.9142 1.116 13.0785C0.801667 12.2352 0.6445 11.319 0.6445 10.33V0.370999H3.738V10.3185C3.738 10.9548 3.82233 11.5298 3.991 12.0435C4.16733 12.5572 4.4165 12.998 4.7385 13.366C5.06817 13.7263 5.46683 14.0062 5.9345 14.2055C6.40983 14.4048 6.9465 14.5045 7.5445 14.5045ZM23.3268 8.7315C23.8941 8.7315 24.3886 8.6625 24.8103 8.5245C25.232 8.37883 25.5808 8.17567 25.8568 7.915C26.1405 7.64667 26.3513 7.32467 26.4893 6.949C26.6273 6.56567 26.6963 6.14017 26.6963 5.6725C26.6963 5.22783 26.6273 4.82533 26.4893 4.465C26.3513 4.10467 26.1443 3.798 25.8683 3.545C25.5923 3.292 25.2435 3.10033 24.8218 2.97C24.4001 2.832 23.9018 2.763 23.3268 2.763H21.0153V8.7315H23.3268ZM23.3268 0.370999C24.4385 0.370999 25.4006 0.501332 26.2133 0.761999C27.026 1.02267 27.6968 1.38683 28.2258 1.8545C28.7548 2.32217 29.1458 2.88183 29.3988 3.5335C29.6595 4.18517 29.7898 4.89817 29.7898 5.6725C29.7898 6.4775 29.6556 7.21733 29.3873 7.892C29.119 8.559 28.7165 9.134 28.1798 9.617C27.6431 10.1 26.9685 10.4757 26.1558 10.744C25.3508 11.0123 24.4078 11.1465 23.3268 11.1465H21.0153V17H17.9218V0.370999H23.3268ZM37.1875 8.283C37.7702 8.283 38.2762 8.21017 38.7055 8.0645C39.1425 7.91883 39.499 7.7195 39.775 7.4665C40.0587 7.20583 40.2695 6.89917 40.4075 6.5465C40.5455 6.19383 40.6145 5.80667 40.6145 5.385C40.6145 4.54167 40.3347 3.89383 39.775 3.4415C39.223 2.98917 38.3759 2.763 37.2335 2.763H35.2555V8.283H37.1875ZM45.1455 17H42.351C41.822 17 41.4387 16.793 41.201 16.379L37.705 11.0545C37.5747 10.8552 37.429 10.7133 37.268 10.629C37.1147 10.5447 36.8847 10.5025 36.578 10.5025H35.2555V17H32.162V0.370999H37.2335C38.3605 0.370999 39.3265 0.489832 40.1315 0.727499C40.9442 0.957499 41.6074 1.28333 42.121 1.705C42.6424 2.12667 43.0257 2.63267 43.271 3.223C43.5164 3.80567 43.639 4.44967 43.639 5.155C43.639 5.71467 43.5547 6.24367 43.386 6.742C43.225 7.24033 42.9874 7.69267 42.673 8.099C42.3664 8.50533 41.983 8.86183 41.523 9.1685C41.0707 9.47517 40.5532 9.71667 39.9705 9.893C40.1699 10.008 40.3539 10.146 40.5225 10.307C40.6912 10.4603 40.8445 10.6443 40.9825 10.859L45.1455 17ZM55.7273 10.721L53.7033 5.1895C53.6037 4.94417 53.5002 4.65283 53.3928 4.3155C53.2855 3.97817 53.1782 3.614 53.0708 3.223C52.9712 3.614 52.8677 3.982 52.7603 4.327C52.653 4.66433 52.5495 4.9595 52.4498 5.2125L50.4373 10.721H55.7273ZM61.1898 17H58.7978C58.5295 17 58.311 16.9348 58.1423 16.8045C57.9737 16.6665 57.8472 16.4978 57.7628 16.2985L56.5208 12.906H49.6323L48.3903 16.2985C48.329 16.4748 48.2102 16.6358 48.0338 16.7815C47.8575 16.9272 47.639 17 47.3783 17H44.9633L51.5068 0.370999H54.6578L61.1898 17ZM83.9365 0.370999L78.773 17H75.9785L72.3445 5.638C72.2448 5.362 72.1528 5.02467 72.0685 4.626C72.0225 4.81767 71.9765 4.99783 71.9305 5.1665C71.8845 5.33517 71.8347 5.49233 71.781 5.638L68.1125 17H65.3065L60.1545 0.370999H62.742C63.0103 0.370999 63.2327 0.436166 63.409 0.5665C63.593 0.689166 63.7157 0.857832 63.777 1.0725L66.606 11.02C66.6673 11.2653 66.7248 11.5337 66.7785 11.825C66.8398 12.1087 66.9012 12.4077 66.9625 12.722C67.0238 12.4 67.089 12.0972 67.158 11.8135C67.2347 11.5298 67.3152 11.2653 67.3995 11.02L70.6655 1.0725C70.7268 0.896165 70.8457 0.735166 71.022 0.589499C71.206 0.443832 71.4283 0.370999 71.689 0.370999H72.5975C72.8658 0.370999 73.0843 0.436166 73.253 0.5665C73.4217 0.696833 73.5482 0.865499 73.6325 1.0725L76.887 11.02C77.048 11.4953 77.1937 12.0435 77.324 12.6645C77.4237 12.0588 77.5348 11.5107 77.6575 11.02L80.4865 1.0725C80.5325 0.880832 80.6475 0.715999 80.8315 0.577999C81.0232 0.439999 81.2493 0.370999 81.51 0.370999H83.9365ZM99.997 0.370999V17H98.41C98.1646 17 97.9576 16.9617 97.789 16.885C97.628 16.8007 97.4708 16.6627 97.3175 16.471L88.635 5.385C88.681 5.891 88.704 6.35867 88.704 6.788V17H85.9785V0.370999H87.6C87.7303 0.370999 87.8415 0.378665 87.9335 0.393999C88.0331 0.401666 88.1175 0.424666 88.1865 0.462999C88.2631 0.493666 88.336 0.5435 88.405 0.612499C88.474 0.673833 88.5506 0.758166 88.635 0.865499L97.352 11.9975C97.329 11.7292 97.3098 11.4647 97.2945 11.204C97.2791 10.9433 97.2715 10.7018 97.2715 10.4795V0.370999H99.997ZM106.805 17H103.7V0.370999H106.805V17ZM113.633 2.832V7.4435H119.452V9.824H113.633V14.5275H121.016V17H110.528V0.370999H121.016V2.832H113.633ZM137.776 0.370999V17H136.189C135.944 17 135.737 16.9617 135.568 16.885C135.407 16.8007 135.25 16.6627 135.097 16.471L126.414 5.385C126.46 5.891 126.483 6.35867 126.483 6.788V17H123.758V0.370999H125.379C125.51 0.370999 125.621 0.378665 125.713 0.393999C125.812 0.401666 125.897 0.424666 125.966 0.462999C126.042 0.493666 126.115 0.5435 126.184 0.612499C126.253 0.673833 126.33 0.758166 126.414 0.865499L135.131 11.9975C135.108 11.7292 135.089 11.4647 135.074 11.204C135.058 10.9433 135.051 10.7018 135.051 10.4795V0.370999H137.776ZM144.584 17H141.479V0.370999H144.584V17ZM157.094 10.721L155.07 5.1895C154.97 4.94417 154.866 4.65283 154.759 4.3155C154.652 3.97817 154.544 3.614 154.437 3.223C154.337 3.614 154.234 3.982 154.127 4.327C154.019 4.66433 153.916 4.9595 153.816 5.2125L151.804 10.721H157.094ZM162.556 17H160.164C159.896 17 159.677 16.9348 159.509 16.8045C159.34 16.6665 159.213 16.4978 159.129 16.2985L157.887 12.906H150.999L149.757 16.2985C149.695 16.4748 149.576 16.6358 149.4 16.7815C149.224 16.9272 149.005 17 148.745 17H146.33L152.873 0.370999H156.024L162.556 17ZM7.073 42.585C7.648 42.585 8.131 42.516 8.522 42.378C8.913 42.24 9.2235 42.056 9.4535 41.826C9.69117 41.596 9.85983 41.3277 9.9595 41.021C10.0668 40.7143 10.1205 40.3885 10.1205 40.0435C10.1205 39.6832 10.063 39.3612 9.948 39.0775C9.833 38.7862 9.65283 38.5408 9.4075 38.3415C9.16217 38.1345 8.844 37.9773 8.453 37.87C8.06967 37.7627 7.60583 37.709 7.0615 37.709H3.945V42.585H7.073ZM3.945 30.763V35.57H6.406C7.464 35.57 8.26133 35.3783 8.798 34.995C9.34233 34.6117 9.6145 34.0022 9.6145 33.1665C9.6145 32.3002 9.36917 31.683 8.8785 31.315C8.38783 30.947 7.62117 30.763 6.5785 30.763H3.945ZM6.5785 28.371C7.66717 28.371 8.59867 28.4745 9.373 28.6815C10.1473 28.8885 10.7798 29.1837 11.2705 29.567C11.7688 29.9503 12.133 30.4142 12.363 30.9585C12.593 31.5028 12.708 32.1162 12.708 32.7985C12.708 33.1895 12.6505 33.5652 12.5355 33.9255C12.4205 34.2782 12.2403 34.6117 11.995 34.926C11.7573 35.2327 11.4507 35.5125 11.075 35.7655C10.707 36.0185 10.2662 36.2332 9.7525 36.4095C12.0372 36.9232 13.1795 38.1575 13.1795 40.1125C13.1795 40.8178 13.0453 41.4695 12.777 42.0675C12.5087 42.6655 12.1177 43.183 11.604 43.62C11.0903 44.0493 10.4578 44.3867 9.7065 44.632C8.95517 44.8773 8.0965 45 7.1305 45H0.8515V28.371H6.5785ZM22.6832 42.5045C23.2812 42.5045 23.814 42.4048 24.2817 42.2055C24.757 42.0062 25.1557 41.7263 25.4777 41.366C25.7997 41.0057 26.045 40.5687 26.2137 40.055C26.39 39.5413 26.4782 38.9663 26.4782 38.33V28.371H29.5717V38.33C29.5717 39.319 29.4107 40.2352 29.0887 41.0785C28.7743 41.9142 28.3182 42.6387 27.7202 43.252C27.1298 43.8577 26.4092 44.333 25.5582 44.678C24.7072 45.0153 23.7488 45.184 22.6832 45.184C21.6098 45.184 20.6477 45.0153 19.7967 44.678C18.9457 44.333 18.2212 43.8577 17.6232 43.252C17.0328 42.6387 16.5767 41.9142 16.2547 41.0785C15.9403 40.2352 15.7832 39.319 15.7832 38.33V28.371H18.8767V38.3185C18.8767 38.9548 18.961 39.5298 19.1297 40.0435C19.306 40.5572 19.5552 40.998 19.8772 41.366C20.2068 41.7263 20.6055 42.0062 21.0732 42.2055C21.5485 42.4048 22.0852 42.5045 22.6832 42.5045ZM47.8265 36.6855C47.8265 37.9045 47.6233 39.0238 47.217 40.0435C46.8107 41.0632 46.2395 41.941 45.5035 42.677C44.7675 43.413 43.882 43.9842 42.847 44.3905C41.812 44.7968 40.662 45 39.397 45H33.0605V28.371H39.397C40.662 28.371 41.812 28.578 42.847 28.992C43.882 29.3983 44.7675 29.9695 45.5035 30.7055C46.2395 31.4338 46.8107 32.3078 47.217 33.3275C47.6233 34.3472 47.8265 35.4665 47.8265 36.6855ZM44.6525 36.6855C44.6525 35.7732 44.5298 34.9567 44.2845 34.236C44.0468 33.5077 43.698 32.8943 43.238 32.396C42.7857 31.89 42.2337 31.5028 41.582 31.2345C40.938 30.9662 40.2097 30.832 39.397 30.832H36.1655V42.539H39.397C40.2097 42.539 40.938 42.4048 41.582 42.1365C42.2337 41.8682 42.7857 41.4848 43.238 40.9865C43.698 40.4805 44.0468 39.8672 44.2845 39.1465C44.5298 38.4182 44.6525 37.5978 44.6525 36.6855ZM66.4161 36.6855C66.4161 37.9045 66.2129 39.0353 65.8066 40.078C65.4079 41.113 64.8406 42.01 64.1046 42.769C63.3686 43.528 62.4831 44.1222 61.4481 44.5515C60.4131 44.9732 59.2631 45.184 57.9981 45.184C56.7407 45.184 55.5946 44.9732 54.5596 44.5515C53.5246 44.1222 52.6352 43.528 51.8916 42.769C51.1556 42.01 50.5844 41.113 50.1781 40.078C49.7717 39.0353 49.5686 37.9045 49.5686 36.6855C49.5686 35.4665 49.7717 34.3395 50.1781 33.3045C50.5844 32.2618 51.1556 31.361 51.8916 30.602C52.6352 29.843 53.5246 29.2527 54.5596 28.831C55.5946 28.4017 56.7407 28.187 57.9981 28.187C58.8414 28.187 59.6349 28.2867 60.3786 28.486C61.1222 28.6777 61.8046 28.9537 62.4256 29.314C63.0466 29.6667 63.6024 30.0998 64.0931 30.6135C64.5914 31.1195 65.0131 31.6868 65.3581 32.3155C65.7031 32.9442 65.9637 33.6265 66.1401 34.3625C66.3241 35.0985 66.4161 35.8728 66.4161 36.6855ZM63.2536 36.6855C63.2536 35.7732 63.1309 34.9567 62.8856 34.236C62.6402 33.5077 62.2914 32.8905 61.8391 32.3845C61.3867 31.8785 60.8347 31.4913 60.1831 31.223C59.5391 30.9547 58.8107 30.8205 57.9981 30.8205C57.1854 30.8205 56.4532 30.9547 55.8016 31.223C55.1576 31.4913 54.6056 31.8785 54.1456 32.3845C53.6932 32.8905 53.3444 33.5077 53.0991 34.236C52.8537 34.9567 52.7311 35.7732 52.7311 36.6855C52.7311 37.5978 52.8537 38.4182 53.0991 39.1465C53.3444 39.8672 53.6932 40.4805 54.1456 40.9865C54.6056 41.4848 55.1576 41.8682 55.8016 42.1365C56.4532 42.4048 57.1854 42.539 57.9981 42.539C58.8107 42.539 59.5391 42.4048 60.1831 42.1365C60.8347 41.8682 61.3867 41.4848 61.8391 40.9865C62.2914 40.4805 62.6402 39.8672 62.8856 39.1465C63.1309 38.4182 63.2536 37.5978 63.2536 36.6855ZM90.9218 28.371L85.7583 45H82.9638L79.3298 33.638C79.2302 33.362 79.1382 33.0247 79.0538 32.626C79.0078 32.8177 78.9618 32.9978 78.9158 33.1665C78.8698 33.3352 78.82 33.4923 78.7663 33.638L75.0978 45H72.2918L67.1398 28.371H69.7273C69.9957 28.371 70.218 28.4362 70.3943 28.5665C70.5783 28.6892 70.701 28.8578 70.7623 29.0725L73.5913 39.02C73.6527 39.2653 73.7102 39.5337 73.7638 39.825C73.8252 40.1087 73.8865 40.4077 73.9478 40.722C74.0092 40.4 74.0743 40.0972 74.1433 39.8135C74.22 39.5298 74.3005 39.2653 74.3848 39.02L77.6508 29.0725C77.7122 28.8962 77.831 28.7352 78.0073 28.5895C78.1913 28.4438 78.4137 28.371 78.6743 28.371H79.5828C79.8512 28.371 80.0697 28.4362 80.2383 28.5665C80.407 28.6968 80.5335 28.8655 80.6178 29.0725L83.8723 39.02C84.0333 39.4953 84.179 40.0435 84.3093 40.6645C84.409 40.0588 84.5202 39.5107 84.6428 39.02L87.4718 29.0725C87.5178 28.8808 87.6328 28.716 87.8168 28.578C88.0085 28.44 88.2347 28.371 88.4953 28.371H90.9218ZM102.704 42.447V45H92.9638V28.371H96.0573V42.447H102.704ZM113.699 38.721L111.675 33.1895C111.575 32.9442 111.472 32.6528 111.365 32.3155C111.257 31.9782 111.15 31.614 111.043 31.223C110.943 31.614 110.839 31.982 110.732 32.327C110.625 32.6643 110.521 32.9595 110.422 33.2125L108.409 38.721H113.699ZM119.162 45H116.77C116.501 45 116.283 44.9348 116.114 44.8045C115.945 44.6665 115.819 44.4978 115.735 44.2985L114.493 40.906H107.604L106.362 44.2985C106.301 44.4748 106.182 44.6358 106.006 44.7815C105.829 44.9272 105.611 45 105.35 45H102.935L109.479 28.371H112.63L119.162 45ZM134.901 28.371V45H133.314C133.069 45 132.862 44.9617 132.693 44.885C132.532 44.8007 132.375 44.6627 132.222 44.471L123.539 33.385C123.585 33.891 123.608 34.3587 123.608 34.788V45H120.883V28.371H122.504C122.635 28.371 122.746 28.3787 122.838 28.394C122.937 28.4017 123.022 28.4247 123.091 28.463C123.167 28.4937 123.24 28.5435 123.309 28.6125C123.378 28.6738 123.455 28.7582 123.539 28.8655L132.256 39.9975C132.233 39.7292 132.214 39.4647 132.199 39.204C132.183 38.9433 132.176 38.7018 132.176 38.4795V28.371H134.901ZM141.709 30.832V35.4435H147.528V37.824H141.709V42.5275H149.092V45H138.604V28.371H149.092V30.832H141.709Z"
                                fill="#3B82F6"/>
                        </svg>
                    </div>
                    <div className="hidden md:flex md:flex-row">

                        <div className="my-auto mr-6"><NotificationIcon/></div>

                        <svg className="my-auto mr-4" width="57" height="57" viewBox="0 0 57 57" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <circle cx="28.5" cy="28.5" r="27" stroke="#3B82F6" strokeWidth="3"/>
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M43.8766 45.6529V49.573C43.8766 50.0143 43.5191 50.3717 43.0778 50.3717H13.9223C13.481 50.3717 13.1235 50.0143 13.1235 49.573V45.6529C13.1235 41.5402 16.4574 38.2083 20.5712 38.2073C22.0249 38.2063 23.305 37.4585 24.0419 36.3242C24.7821 35.1865 24.7059 34.1972 24.7059 33.3976L24.7208 33.3607C21.1363 31.877 18.6152 28.3454 18.6152 24.2247V23.9121C17.1918 23.9121 16.119 22.7873 16.119 21.4619V17.3122C16.087 15.8674 16.1529 10.7722 19.8333 7.22461C24.1128 3.0999 30.8944 3.43739 35.8069 5.64402C35.9667 5.71591 35.9617 5.94456 35.7999 6.01146L34.5189 6.53865C34.3272 6.61753 34.3681 6.9001 34.5738 6.92207L35.1958 6.98897C38.5427 7.34642 41.3275 9.34437 42.7164 11.7118C42.7293 11.7347 42.7253 11.7647 42.7064 11.7846C41.6001 12.9129 40.981 14.4316 40.981 16.0132V21.3171C40.981 22.7479 39.8218 23.9121 38.385 23.9121V24.2247C38.385 28.3454 35.8638 31.877 32.2793 33.3607L32.2943 33.3976C32.2943 34.1746 32.2118 35.177 32.9583 36.3242C33.6951 37.4585 34.9752 38.2063 36.429 38.2073C40.5427 38.2083 43.8766 41.5402 43.8766 45.6529Z"
                                    fill="#D1E7FF"/>
                                <path
                                    d="M42.7161 11.7116C42.7294 11.7343 42.7254 11.7646 42.706 11.7844C41.6004 12.9131 40.9811 14.4319 40.9811 16.0131V21.317C40.9811 22.7477 39.8222 23.9121 38.3851 23.9121C38.3851 20.8906 38.3868 19.3117 38.3862 18.4629C38.3858 17.927 37.8681 17.5419 37.356 17.6995C35.7462 18.1947 33.8685 18.4499 31.8951 18.0211C28.4224 17.2662 27.4389 15.9053 24.6062 15.2253C21.4411 14.4665 18.5704 16.8908 18.5904 19.9921C18.5964 21.0115 18.6134 22.2856 18.6154 23.9121C17.192 23.9121 16.1192 22.7873 16.1192 21.4618V17.3121C16.0872 15.8674 16.1531 10.7721 19.8335 7.22455C24.1126 3.09975 30.8949 3.43743 35.8066 5.64426C35.9665 5.71605 35.9622 5.9448 35.8001 6.0115L34.519 6.5389C34.3275 6.61778 34.3678 6.90004 34.5737 6.92211L35.196 6.98891C38.5431 7.34676 41.3277 9.34401 42.7161 11.7116Z"
                                    fill="#B9DCFF"/>
                                <path
                                    d="M37.3556 17.6995C37.8677 17.5419 38.3854 17.9266 38.3858 18.4624C38.3865 19.3406 38.3847 20.9995 38.3847 24.2246C38.3847 28.3453 35.8636 31.8769 32.279 33.3606C25.7972 36.0512 18.6149 31.2714 18.6149 24.2246C18.6149 22.4023 18.5965 21.1076 18.5899 19.9921C18.57 16.8908 21.4406 14.4665 24.6058 15.2253C27.4384 15.9053 28.4219 17.2662 31.8946 18.0211C33.8681 18.4499 35.746 18.1947 37.3556 17.6995Z"
                                    fill="#D1E7FF"/>
                                <path
                                    d="M43.8766 45.6527V49.5728C43.8766 50.0139 43.5189 50.3715 43.0778 50.3715H13.9223C13.4812 50.3715 13.1235 50.0139 13.1235 49.5728V45.6527C13.1235 41.54 16.4579 38.2086 20.5707 38.2071C22.0248 38.2066 23.3052 37.4578 24.0419 36.324C26.6133 38.5208 30.3853 38.5221 32.9583 36.324C33.6948 37.4578 34.9753 38.2066 36.4295 38.2071C40.5422 38.2086 43.8766 41.54 43.8766 45.6527Z"
                                    fill="#B9DCFF"/>
                                <path
                                    d="M24.5942 40.6191C24.225 40.7352 23.829 40.7992 23.4044 40.8029C19.2811 40.8393 15.9193 44.0996 15.9193 48.2231V48.9737C15.9193 49.7457 15.2934 50.3715 14.5214 50.3715H13.9223C13.4812 50.3715 13.1235 50.0139 13.1235 49.5728V45.6527C13.1235 41.5399 16.4579 38.2086 20.5707 38.2071C22.0248 38.2066 23.3052 37.4578 24.0419 36.324C24.3388 36.5776 24.6567 36.8055 24.9916 37.0051C26.4647 37.8829 26.2299 40.1048 24.5942 40.6191Z"
                                    fill="#D1E7FF"/>
                                <path
                                    d="M32.4059 40.6191C32.7751 40.7352 33.1711 40.7992 33.5957 40.8029C37.719 40.8393 41.0809 44.0996 41.0809 48.2231V48.9737C41.0809 49.7457 41.7067 50.3715 42.4787 50.3715H43.0778C43.5189 50.3715 43.8766 50.0139 43.8766 49.5728V45.6527C43.8766 41.5399 40.5422 38.2086 36.4295 38.2071C34.9753 38.2066 33.6949 37.4578 32.9583 36.324C32.6613 36.5776 32.3434 36.8055 32.0085 37.0051C30.5356 37.8829 30.7703 40.1048 32.4059 40.6191Z"
                                    fill="#A2D0FF"/>
                                <path
                                    d="M32.4068 35.0372C29.9469 36.0669 27.2435 36.1468 24.5928 35.0372C24.7282 34.4754 24.7056 34.1116 24.7056 33.3977L24.7206 33.3607C27.1251 34.3588 29.8698 34.3608 32.279 33.3607L32.294 33.3977C32.294 34.1119 32.2716 34.4756 32.4068 35.0372Z"
                                    fill="#B9DCFF"/>
                                <path
                                    d="M35.8006 6.01146C34.8592 6.39857 34.6508 6.53496 34.2185 6.46377C26.2959 5.15956 20.0574 9.30204 19.2039 17.397C19.1889 17.5391 19.1525 17.6785 19.0895 17.8068C18.4819 19.0437 18.5899 19.9591 18.6028 21.4809C18.6163 23.082 16.2036 23.1845 16.1227 21.5855C16.1176 21.4856 16.1196 21.7488 16.1196 17.3122C16.0877 15.8674 16.1536 10.7722 19.8339 7.22461C24.1134 3.0999 30.8951 3.43739 35.8076 5.64402C35.9673 5.71591 35.9623 5.94456 35.8006 6.01146Z"
                                    fill="#D1E7FF"/>
                                <path
                                    d="M26.2627 30.6088C27.8873 31.6247 26.6052 34.1178 24.8269 33.4042C21.1748 31.9386 18.6148 28.3779 18.6148 24.2247C18.6148 22.4002 18.5964 21.1121 18.5898 19.9922C18.5835 18.9896 18.879 18.058 19.3888 17.2817C20.0296 16.3061 21.5768 16.7313 21.5852 17.9953C21.5918 19.1189 21.6102 20.4014 21.6102 22.2278C21.6101 25.8719 23.526 28.8973 26.2627 30.6088Z"
                                    fill="#E8F3FF"/>
                                <path
                                    d="M44.6758 45.6533V50.3718C44.6758 50.8129 44.3182 51.1706 43.877 51.1706C43.4359 51.1706 43.0783 50.8129 43.0783 50.3718V45.6533C43.0783 41.9794 40.1053 39.0063 36.4311 39.0063C34.6927 39.0063 33.1153 38.1207 32.2118 36.637C31.9822 36.2603 32.1016 35.7689 32.4784 35.5394C32.855 35.3097 33.3465 35.4292 33.5761 35.8061C34.1873 36.8097 35.2547 37.4088 36.4311 37.4088C40.988 37.4086 44.6758 41.0961 44.6758 45.6533ZM29.7861 37.0358C28.1139 37.4003 26.4167 37.0304 25.0703 36.106C25.3012 35.5949 25.4431 35.0451 25.4881 34.4753C32.335 36.4908 39.1842 31.3232 39.1842 24.2247C39.1842 17.45 39.1925 17.5579 39.165 17.2801C39.0599 16.1791 37.469 16.3289 37.5752 17.4368C37.593 17.6179 37.5867 17.7763 37.5867 24.2246C37.5867 29.2347 33.5107 33.3107 28.5005 33.3107C23.4904 33.3107 19.4144 29.2347 19.4144 24.2246C19.4144 22.4251 19.3952 21.0317 19.3889 19.9868C19.3728 17.3653 21.797 15.3733 24.4203 16.0021C28.12 16.8893 29.6111 19.197 34.3533 18.9761C34.7939 18.9554 35.1344 18.5815 35.1137 18.1408C35.0931 17.7002 34.7214 17.362 34.2784 17.3803C30.0033 17.5813 28.8183 15.4141 24.7928 14.4487C21.1531 13.5757 17.7691 16.3448 17.7914 19.9967C17.7968 20.846 17.8079 21.7761 17.8135 22.9218C17.2818 22.6445 16.9181 22.0945 16.9181 21.4619C16.9181 21.4436 16.9182 17.3128 16.9179 17.2947C16.8779 15.4841 17.1358 10.9348 20.388 7.79977C24.0216 4.29732 29.7066 4.29602 34.1268 5.83677L33.4883 6.09957C32.726 6.41319 32.8853 7.54436 33.7073 7.63243L35.1113 7.7828C37.8136 8.07216 40.2034 9.4813 41.7344 11.671C40.7296 12.892 40.1826 14.4119 40.1826 16.0131V21.4618C40.1826 21.9029 40.5402 22.2606 40.9814 22.2606C41.4225 22.2606 41.7801 21.9029 41.7801 21.4618V16.0131C41.7801 14.625 42.3162 13.3165 43.2896 12.3292C43.5606 12.0546 43.5939 11.6115 43.4049 11.3064C41.8123 8.75242 39.4425 7.10793 36.7379 6.44833C37.1755 6.0751 37.0894 5.38166 36.583 5.12555C34.2608 3.95264 30.9483 3.1293 27.7959 3.25062C19.8209 3.55974 15.1525 9.51565 15.3207 17.3211V21.462C15.3207 22.9902 16.3899 24.2744 17.825 24.6193C17.9739 28.6992 20.421 32.2024 23.9076 33.8696V34.0798C23.9076 35.9213 22.4154 37.4089 20.57 37.4089C16.0037 37.4089 12.3253 41.1053 12.3253 45.6534V50.3719C12.3253 50.813 12.683 51.1707 13.1241 51.1707C13.5652 51.1707 13.9229 50.813 13.9229 50.3719V45.6534C13.9229 41.9797 16.8958 39.0064 20.57 39.0064C21.9303 39.0064 23.2256 38.4613 24.1837 37.4344C25.8866 38.5968 28.0247 39.0549 30.1262 38.5969C30.5573 38.503 30.8306 38.0774 30.7366 37.6463C30.6427 37.2152 30.2168 36.9416 29.7861 37.0358ZM36.5882 47.0768H34.1918C33.7507 47.0768 33.3931 47.4345 33.3931 47.8756C33.3931 48.3167 33.7507 48.6744 34.1918 48.6744H36.5882C37.0293 48.6744 37.387 48.3167 37.387 47.8756C37.387 47.4345 37.0293 47.0768 36.5882 47.0768Z"
                                    fill="#3B82F6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="47.9318" height="47.9318" fill="white"
                                          transform="translate(4.53412 3.23865)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="my-auto mr-12"><DownArrowIcon/></div>
                    </div>

                    <div className="mt-10 mr-6 md:hidden">
                        <MenuIcon/>
                    </div>
                </div>

                <div className="flex flex-row mt-10">
                    <div className="hidden md:flex mdd:flex-col mt-8 ml-3 w-28">
                        <div className="mx-auto flex flex-col space-y-16">
                            <Link to="/"> <MenuItem icon={HomeIcon} active={true}/></Link>
                            <Link to="/settings"> <MenuItem icon={ListIcon}/></Link>
                            <Link to="/profile"> <MenuItem icon={PenIcon}/></Link>
                            <Link to="/"> <MenuItem icon={MessageIcon}/></Link>
                            <Link to="/"> <MenuItem icon={BookIcon}/></Link>
                            <Link to="/"> <MenuItem icon={ChartIcon}/></Link>
                            <Link to="/"> <MenuItem icon={HeartIcon}/></Link>
                            <Link to="/"> <MenuItem icon={ShoppingCartIcon}/></Link>

                        </div>
                    </div>

                    <div className="h-full w-full mx-4 md:ml-5 md:mr-12">
                        <Switch>
                            <Route exact path="/">
                                <DesktopMain/>
                            </Route>
                            <Route path="/profile">
                                <DesktopProfile/>
                            </Route>
                            <Route path="/settings">
                                <DesktopSettings/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default Desktop;