import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="navbar-header">
          <Link to="/" className="brand-logo">
            <svg
              width="79"
              height="29"
              viewBox="0 0 124 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.40492 0.406225V24.3734H0.884004V0.406225H8.40492Z"
                fill="#565E6D"
              />
              <path
                d="M30.6379 24.3734L26.1321 15.775H26.0982V24.3734H18.5773V0.406225H29.757C31.6994 0.406225 33.3594 0.756028 34.7371 1.45563C36.1148 2.13268 37.1424 3.06925 37.82 4.26535C38.5202 5.43888 38.8702 6.7704 38.8702 8.25988C38.8702 9.86221 38.4185 11.284 37.5151 12.5252C36.6343 13.7665 35.3582 14.6579 33.6869 15.1995L38.9041 24.3734H30.6379ZM26.0982 10.7649H29.0795C29.8022 10.7649 30.3443 10.607 30.7056 10.291C31.067 9.95248 31.2477 9.43342 31.2477 8.73381C31.2477 8.10191 31.0557 7.60541 30.6718 7.24432C30.3104 6.88324 29.7796 6.70269 29.0795 6.70269H26.0982V10.7649Z"
                fill="#565E6D"
              />
              <path
                d="M63.4291 20.7513H55.4339L54.2482 24.3734H46.3546L55.129 0.406225H63.8018L72.5423 24.3734H64.6148L63.4291 20.7513ZM61.5997 15.098L59.4315 8.42914L57.2633 15.098H61.5997Z"
                fill="#565E6D"
              />
              <path
                d="M96.8138 28.2664L94.5101 24.475C93.9906 24.5653 93.3921 24.6104 92.7145 24.6104C90.456 24.6104 88.3781 24.08 86.481 23.0193C84.6064 21.9587 83.1158 20.4917 82.0091 18.6186C80.9024 16.7454 80.3491 14.6353 80.3491 12.2883C80.3491 9.9412 80.9024 7.83109 82.0091 5.95795C83.1158 4.08481 84.6064 2.62917 86.481 1.59104C88.3781 0.530348 90.456 0 92.7145 0C94.973 0 97.0396 0.530348 98.9142 1.59104C100.789 2.62917 102.268 4.08481 103.352 5.95795C104.459 7.83109 105.012 9.9412 105.012 12.2883C105.012 14.2065 104.64 15.9781 103.894 17.603C103.149 19.2054 102.121 20.5707 100.811 21.6991L105.69 28.2664H96.8138ZM88.0055 12.2883C88.0055 13.9132 88.412 15.2108 89.2251 16.1812C90.0382 17.1291 91.2013 17.603 92.7145 17.603C94.2051 17.603 95.357 17.1291 96.1701 16.1812C96.9831 15.2108 97.3897 13.9132 97.3897 12.2883C97.3897 10.6408 96.9831 9.34315 96.1701 8.39529C95.357 7.42487 94.2051 6.93966 92.7145 6.93966C91.2013 6.93966 90.0382 7.42487 89.2251 8.39529C88.412 9.34315 88.0055 10.6408 88.0055 12.2883Z"
                fill="#565E6D"
              />
              <path
                d="M122.022 0.406225V24.3734H114.501V0.406225H122.022Z"
                fill="#565E6D"
              />
              <path
                d="M4.113 40C3.34016 40 2.64142 39.8678 2.0168 39.6033C1.40276 39.3388 0.915764 38.958 0.555811 38.4608C0.195857 37.9636 0.0105869 37.3765 0 36.6994H2.38205C2.41381 37.1543 2.57261 37.514 2.85846 37.7785C3.15489 38.0429 3.55719 38.1752 4.06536 38.1752C4.58412 38.1752 4.99171 38.0535 5.28814 37.8102C5.58457 37.5563 5.73279 37.2284 5.73279 36.8264C5.73279 36.4984 5.63222 36.2287 5.43106 36.0171C5.22991 35.8055 4.97583 35.6416 4.66881 35.5252C4.37238 35.3982 3.95949 35.2607 3.43015 35.1126C2.71024 34.901 2.12267 34.6948 1.66743 34.4938C1.22278 34.2822 0.836363 33.9701 0.50817 33.5575C0.190564 33.1344 0.0317606 32.5737 0.0317606 31.8755C0.0317606 31.2196 0.195857 30.6484 0.52405 30.1618C0.852243 29.6751 1.31277 29.3049 1.90564 29.051C2.4985 28.7865 3.17606 28.6543 3.93832 28.6543C5.0817 28.6543 6.00805 28.9346 6.71737 29.4953C7.43728 30.0454 7.83429 30.8176 7.90839 31.812H5.46283C5.44165 31.4312 5.27755 31.1191 4.97054 30.8758C4.6741 30.6219 4.2771 30.495 3.77951 30.495C3.34545 30.495 2.99608 30.6061 2.73141 30.8282C2.47733 31.0504 2.35029 31.373 2.35029 31.7962C2.35029 32.0924 2.44557 32.341 2.63613 32.542C2.83728 32.7324 3.08078 32.8911 3.36662 33.018C3.66306 33.1344 4.07595 33.2719 4.60529 33.4306C5.3252 33.6422 5.91277 33.8537 6.368 34.0653C6.82324 34.2769 7.21495 34.5943 7.54315 35.0174C7.87134 35.4406 8.03544 35.9959 8.03544 36.6836C8.03544 37.276 7.88193 37.8261 7.57491 38.3338C7.26789 38.8416 6.81794 39.2489 6.22508 39.5557C5.63222 39.8519 4.92819 40 4.113 40Z"
                fill="#565E6D"
              />
              <path
                d="M17.9825 28.813V30.6061H15.0287V39.8889H12.8055V30.6061H9.85174V28.813H17.9825Z"
                fill="#565E6D"
              />
              <path
                d="M26.8778 37.7785H22.4631L21.7326 39.8889H19.3982L23.3841 28.7971H25.9726L29.9586 39.8889H27.6083L26.8778 37.7785ZM26.2743 36.0012L24.6704 31.3677L23.0665 36.0012H26.2743Z"
                fill="#565E6D"
              />
              <path
                d="M37.6418 39.8889L35.1962 35.5728H34.1481V39.8889H31.9249V28.813H36.0855C36.9431 28.813 37.6735 28.9664 38.277 29.2731C38.8804 29.5694 39.3304 29.9766 39.6268 30.495C39.9338 31.0028 40.0874 31.574 40.0874 32.2088C40.0874 32.9387 39.8756 33.5999 39.4521 34.1923C39.0287 34.7741 38.3987 35.1761 37.5624 35.3982L40.2144 39.8889H37.6418ZM34.1481 33.9066H36.0061C36.6096 33.9066 37.0595 33.7638 37.3559 33.4782C37.6524 33.182 37.8006 32.7747 37.8006 32.2564C37.8006 31.7486 37.6524 31.3572 37.3559 31.0821C37.0595 30.7965 36.6096 30.6537 36.0061 30.6537H34.1481V33.9066Z"
                fill="#565E6D"
              />
              <path
                d="M50.1178 28.813V30.6061H47.164V39.8889H44.9408V30.6061H41.987V28.813H50.1178Z"
                fill="#565E6D"
              />
              <path
                d="M54.4078 28.813V35.668C54.4078 36.4191 54.6036 36.9956 54.9954 37.3976C55.3871 37.789 55.9376 37.9847 56.6469 37.9847C57.3668 37.9847 57.9226 37.789 58.3143 37.3976C58.7061 36.9956 58.9019 36.4191 58.9019 35.668V28.813H61.141V35.6521C61.141 36.5936 60.9346 37.3923 60.5217 38.0482C60.1194 38.6935 59.5742 39.1801 58.886 39.5081C58.2085 39.836 57.4515 40 56.6151 40C55.7894 40 55.0377 39.836 54.3601 39.5081C53.6932 39.1801 53.1638 38.6935 52.7721 38.0482C52.3804 37.3923 52.1845 36.5936 52.1845 35.6521V28.813H54.4078Z"
                fill="#565E6D"
              />
              <path
                d="M71.8486 32.2405C71.8486 32.8329 71.7057 33.3883 71.4198 33.9066C71.1446 34.425 70.7052 34.8429 70.1018 35.1602C69.5089 35.4776 68.7572 35.6363 67.8467 35.6363H65.9888V39.8889H63.7655V28.813H67.8467C68.7043 28.813 69.4348 28.9611 70.0382 29.2573C70.6417 29.5535 71.0916 29.9608 71.3881 30.4791C71.6951 30.9975 71.8486 31.5846 71.8486 32.2405ZM67.7515 33.8432C68.3655 33.8432 68.8207 33.7056 69.1172 33.4306C69.4136 33.145 69.5618 32.7483 69.5618 32.2405C69.5618 31.1615 68.9584 30.6219 67.7515 30.6219H65.9888V33.8432H67.7515Z"
                fill="#565E6D"
              />
              <path
                d="M84.9289 33.2878V35.1602H78.1956V33.2878H84.9289Z"
                fill="#565E6D"
              />
              <path
                d="M101.354 28.813V39.8889H99.1304V35.1761H94.3822V39.8889H92.159V28.813H94.3822V33.3671H99.1304V28.813H101.354Z"
                fill="#565E6D"
              />
              <path
                d="M106.21 28.813V35.668C106.21 36.4191 106.406 36.9956 106.797 37.3976C107.189 37.789 107.74 37.9847 108.449 37.9847C109.169 37.9847 109.725 37.789 110.116 37.3976C110.508 36.9956 110.704 36.4191 110.704 35.668V28.813H112.943V35.6521C112.943 36.5936 112.737 37.3923 112.324 38.0482C111.921 38.6935 111.376 39.1801 110.688 39.5081C110.011 39.836 109.254 40 108.417 40C107.591 40 106.84 39.836 106.162 39.5081C105.495 39.1801 104.966 38.6935 104.574 38.0482C104.182 37.3923 103.987 36.5936 103.987 35.6521V28.813H106.21Z"
                fill="#565E6D"
              />
              <path
                d="M121.856 34.2081C122.481 34.3245 122.994 34.6366 123.397 35.1444C123.799 35.6521 124 36.234 124 36.8899C124 37.4823 123.852 38.0059 123.555 38.4608C123.27 38.9051 122.851 39.2542 122.301 39.5081C121.75 39.762 121.099 39.8889 120.348 39.8889H115.568V28.813H120.141C120.893 28.813 121.539 28.9346 122.078 29.1779C122.629 29.4213 123.042 29.7598 123.317 30.1935C123.603 30.6272 123.746 31.1191 123.746 31.6692C123.746 32.3145 123.571 32.8541 123.222 33.2878C122.883 33.7215 122.428 34.0283 121.856 34.2081ZM117.791 33.383H119.823C120.353 33.383 120.76 33.2666 121.046 33.0339C121.332 32.7906 121.475 32.4468 121.475 32.0025C121.475 31.5582 121.332 31.2144 121.046 30.971C120.76 30.7277 120.353 30.6061 119.823 30.6061H117.791V33.383ZM120.03 38.08C120.57 38.08 120.988 37.953 121.284 37.6991C121.591 37.4452 121.745 37.0856 121.745 36.6201C121.745 36.144 121.586 35.7738 121.269 35.5093C120.951 35.2343 120.522 35.0967 119.982 35.0967H117.791V38.08H120.03Z"
                fill="#565E6D"
              />
            </svg>
          </Link>
          <button className="burger-menu" onClick={toggleMenu}>
            <span className="burger-icon"></span>
          </button>
        </div>
        <ul className={`navbar-nav ${isOpen ? "active" : ""}`}>
          <li
            className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname.startsWith("/CardsPage") ? "active" : ""
            }`}
          >
            <Link to="/CardsPage">Start-ups</Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname.startsWith("/investors") ? "active" : ""
            }`}
          >
            <Link to="/investors">Investors</Link>
          </li>
          <li
            className={`nav-item ${
              location.pathname === "/incubators" ? "active" : ""
            }`}
          >
            <Link to="/incubators">Incubators</Link>
          </li>
        </ul>
        <div className={`nav-btns ${isOpen ? "active" : ""}`}>
            <Link to="/signUp">
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "9px",
                  border: "2px solid #1769AA",
                  margin: "2px",
                  width: "208px",
                  height: "44px",
                  textTransform: "none",
                  color: "#1769AA",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "#007bff3",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                Register as a startup
              </Button>
            </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
