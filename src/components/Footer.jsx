import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <body>
      <footer class="footer">
        <div className="up-btn">
          <svg
            onClick={scrollToTop}
            width="252"
            height="248"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_209_779)">
              <ellipse
                cx="125.691"
                cy="120"
                rx="25.6909"
                ry="24"
                fill="white"
              />
            </g>
            <path
              d="M126.71 107.878C125.929 107.097 124.662 107.097 123.881 107.878L111.153 120.606C110.372 121.387 110.372 122.653 111.153 123.434C111.935 124.215 113.201 124.215 113.982 123.434L125.296 112.121L136.609 123.434C137.39 124.215 138.657 124.215 139.438 123.434C140.219 122.653 140.219 121.387 139.438 120.606L126.71 107.878ZM127.296 130.708L127.296 109.292L123.296 109.292L123.296 130.708L127.296 130.708Z"
              fill="#BDBDBD"
            />
            <defs>
              <filter
                id="filter0_d_209_779"
                x="0"
                y="0"
                width="251.382"
                height="248"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="50" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_209_779"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_209_779"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div class="logo">
          <Link to="/">
            <svg
              width="109"
              height="44"
              viewBox="0 0 109 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.38819 0.446847V26.8108H0.777068V0.446847H7.38819Z"
                fill="white"
              />
              <path
                d="M26.9317 26.8108L22.971 17.3525H22.9412V26.8108H16.3301V0.446847H26.1574C27.8648 0.446847 29.324 0.831631 30.535 1.6012C31.7461 2.34594 32.6494 3.37617 33.245 4.69188C33.8605 5.98277 34.1682 7.44744 34.1682 9.08587C34.1682 10.8484 33.7711 12.4124 32.977 13.7778C32.2027 15.1431 31.081 16.1237 29.6119 16.7195L34.198 26.8108H26.9317ZM22.9412 11.8414H25.5618C26.1971 11.8414 26.6736 11.6677 26.9912 11.3201C27.3089 10.9477 27.4677 10.3768 27.4677 9.60719C27.4677 8.9121 27.299 8.36595 26.9615 7.96876C26.6438 7.57156 26.1773 7.37296 25.5618 7.37296H22.9412V11.8414Z"
                fill="white"
              />
              <path
                d="M55.7562 22.8264H48.7282L47.6859 26.8108H40.7472L48.4602 0.446847H56.0838L63.767 26.8108H56.7985L55.7562 22.8264ZM54.1481 16.6078L52.2422 9.27206L50.3363 16.6078H54.1481Z"
                fill="white"
              />
              <path
                d="M85.1024 31.093L83.0774 26.9225C82.6208 27.0218 82.0946 27.0714 81.4991 27.0714C79.5137 27.0714 77.6872 26.488 76.0196 25.3213C74.3717 24.1545 73.0614 22.5409 72.0886 20.4805C71.1158 18.42 70.6294 16.0989 70.6294 13.5171C70.6294 10.9353 71.1158 8.6142 72.0886 6.55374C73.0614 4.49329 74.3717 2.89209 76.0196 1.75015C77.6872 0.583382 79.5137 0 81.4991 0C83.4844 0 85.3009 0.583382 86.9488 1.75015C88.5966 2.89209 89.897 4.49329 90.8499 6.55374C91.8227 8.6142 92.3091 10.9353 92.3091 13.5171C92.3091 15.6272 91.9816 17.576 91.3264 19.3633C90.6712 21.1259 89.7679 22.6278 88.6164 23.869L92.9047 31.093H85.1024ZM77.3597 13.5171C77.3597 15.3045 77.717 16.7319 78.4317 17.7994C79.1464 18.842 80.1689 19.3633 81.4991 19.3633C82.8094 19.3633 83.8219 18.842 84.5366 17.7994C85.2513 16.7319 85.6087 15.3045 85.6087 13.5171C85.6087 11.7049 85.2513 10.2775 84.5366 9.23482C83.8219 8.16735 82.8094 7.63362 81.4991 7.63362C80.1689 7.63362 79.1464 8.16735 78.4317 9.23482C77.717 10.2775 77.3597 11.7049 77.3597 13.5171Z"
                fill="white"
              />
              <path
                d="M107.261 0.446847V26.8108H100.65V0.446847H107.261Z"
                fill="white"
              />
              <path
                d="M3.61546 44C2.93611 44 2.3219 43.8545 1.77283 43.5636C1.23307 43.2727 0.804986 42.8538 0.488576 42.3069C0.172165 41.7599 0.00930618 41.1141 0 40.3694H2.0939C2.12181 40.8698 2.26141 41.2654 2.51267 41.5563C2.77325 41.8472 3.12688 41.9927 3.57358 41.9927C4.02958 41.9927 4.38787 41.8589 4.64845 41.5912C4.90902 41.3119 5.03931 40.9512 5.03931 40.509C5.03931 40.1483 4.9509 39.8515 4.77408 39.6188C4.59726 39.3861 4.37391 39.2057 4.10403 39.0777C3.84346 38.9381 3.48052 38.7868 3.01521 38.6239C2.38239 38.3912 1.86589 38.1642 1.46573 37.9431C1.07487 37.7104 0.73519 37.3671 0.446698 36.9133C0.167512 36.4478 0.0279186 35.8311 0.0279186 35.0631C0.0279186 34.3416 0.172165 33.7132 0.460657 33.1779C0.749149 32.6427 1.15397 32.2354 1.67512 31.9561C2.19626 31.6652 2.79186 31.5197 3.46191 31.5197C4.46698 31.5197 5.28127 31.8281 5.90478 32.4448C6.53761 33.0499 6.88659 33.8994 6.95173 34.9933H4.802C4.78339 34.5743 4.63914 34.2311 4.36926 33.9634C4.10869 33.6841 3.75971 33.5445 3.32231 33.5445C2.94076 33.5445 2.63365 33.6667 2.401 33.9111C2.17765 34.1554 2.06598 34.5103 2.06598 34.9758C2.06598 35.3016 2.14973 35.5751 2.31724 35.7962C2.49406 36.0056 2.7081 36.1802 2.95937 36.3198C3.21995 36.4478 3.58289 36.5991 4.0482 36.7737C4.68102 37.0064 5.19751 37.2391 5.59768 37.4719C5.99785 37.7046 6.34218 38.0537 6.63067 38.5192C6.91916 38.9846 7.06341 39.5955 7.06341 40.3519C7.06341 41.0036 6.92847 41.6087 6.65859 42.1672C6.38871 42.7258 5.99319 43.1738 5.47205 43.5113C4.9509 43.8371 4.33204 44 3.61546 44Z"
                fill="white"
              />
              <path
                d="M15.8072 31.6943V33.6667H13.2107V43.8778H11.2564V33.6667H8.66V31.6943H15.8072Z"
                fill="white"
              />
              <path
                d="M23.6264 41.5563H19.7458L19.1036 43.8778H17.0516L20.5554 31.6768H22.8308L26.3345 43.8778H24.2686L23.6264 41.5563ZM23.096 39.6014L21.6861 34.5045L20.2762 39.6014H23.096Z"
                fill="white"
              />
              <path
                d="M33.0883 43.8778L30.9386 39.1301H30.0173V43.8778H28.063V31.6943H31.7203C32.4741 31.6943 33.1163 31.863 33.6467 32.2005C34.1772 32.5263 34.5727 32.9743 34.8333 33.5445C35.1031 34.1031 35.2381 34.7314 35.2381 35.4296C35.2381 36.2326 35.0519 36.9598 34.6797 37.6115C34.3075 38.2515 33.7537 38.6937 33.0185 38.9381L35.3497 43.8778H33.0883ZM30.0173 37.2973H31.6505C32.181 37.2973 32.5765 37.1402 32.8371 36.826C33.0976 36.5002 33.2279 36.0522 33.2279 35.482C33.2279 34.9234 33.0976 34.4929 32.8371 34.1903C32.5765 33.8761 32.181 33.719 31.6505 33.719H30.0173V37.2973Z"
                fill="white"
              />
              <path
                d="M44.0551 31.6943V33.6667H41.4587V43.8778H39.5044V33.6667H36.908V31.6943H44.0551Z"
                fill="white"
              />
              <path
                d="M47.8262 31.6943V39.2348C47.8262 40.061 47.9984 40.6952 48.3427 41.1374C48.687 41.5679 49.1709 41.7832 49.7945 41.7832C50.4273 41.7832 50.9159 41.5679 51.2602 41.1374C51.6045 40.6952 51.7767 40.061 51.7767 39.2348V31.6943H53.7449V39.2173C53.7449 40.253 53.5635 41.1316 53.2005 41.853C52.8469 42.5629 52.3676 43.0982 51.7627 43.4589C51.1671 43.8196 50.5017 44 49.7665 44C49.0407 44 48.3799 43.8196 47.7843 43.4589C47.198 43.0982 46.7327 42.5629 46.3884 41.853C46.0441 41.1316 45.8719 40.253 45.8719 39.2173V31.6943H47.8262Z"
                fill="white"
              />
              <path
                d="M63.1572 35.4645C63.1572 36.1162 63.0316 36.7271 62.7803 37.2973C62.5384 37.8675 62.1522 38.3271 61.6217 38.6762C61.1006 39.0253 60.4398 39.1999 59.6395 39.1999H58.0062V43.8778H56.0519V31.6943H59.6395C60.3933 31.6943 61.0354 31.8572 61.5659 32.183C62.0963 32.5088 62.4918 32.9568 62.7524 33.527C63.0223 34.0972 63.1572 34.7431 63.1572 35.4645ZM59.5557 37.2275C60.0955 37.2275 60.4957 37.0762 60.7562 36.7737C61.0168 36.4595 61.1471 36.0231 61.1471 35.4645C61.1471 34.2776 60.6166 33.6841 59.5557 33.6841H58.0062V37.2275H59.5557Z"
                fill="white"
              />
              <path
                d="M74.6552 36.6166V38.6762H68.7365V36.6166H74.6552Z"
                fill="white"
              />
              <path
                d="M89.0932 31.6943V43.8778H87.1389V38.6937H82.965V43.8778H81.0107V31.6943H82.965V36.7038H87.1389V31.6943H89.0932Z"
                fill="white"
              />
              <path
                d="M93.3619 31.6943V39.2348C93.3619 40.061 93.534 40.6952 93.8784 41.1374C94.2227 41.5679 94.7066 41.7832 95.3301 41.7832C95.963 41.7832 96.4515 41.5679 96.7959 41.1374C97.1402 40.6952 97.3124 40.061 97.3124 39.2348V31.6943H99.2806V39.2173C99.2806 40.253 99.0992 41.1316 98.7362 41.853C98.3826 42.5629 97.9033 43.0982 97.2984 43.4589C96.7028 43.8196 96.0374 44 95.3022 44C94.5763 44 93.9156 43.8196 93.32 43.4589C92.7337 43.0982 92.2684 42.5629 91.9241 41.853C91.5797 41.1316 91.4076 40.253 91.4076 39.2173V31.6943H93.3619Z"
                fill="white"
              />
              <path
                d="M107.115 37.629C107.665 37.757 108.116 38.1002 108.47 38.6588C108.823 39.2173 109 39.8574 109 40.5788C109 41.2305 108.87 41.8065 108.609 42.3069C108.358 42.7956 107.99 43.1796 107.506 43.4589C107.022 43.7382 106.45 43.8778 105.789 43.8778H101.588V31.6943H105.608C106.269 31.6943 106.836 31.8281 107.311 32.0957C107.795 32.3634 108.158 32.7358 108.4 33.2129C108.651 33.69 108.777 34.2311 108.777 34.8362C108.777 35.546 108.623 36.1395 108.316 36.6166C108.018 37.0937 107.618 37.4311 107.115 37.629ZM103.542 36.7213H105.329C105.794 36.7213 106.152 36.5933 106.404 36.3373C106.655 36.0696 106.78 35.6915 106.78 35.2027C106.78 34.714 106.655 34.3358 106.404 34.0681C106.152 33.8005 105.794 33.6667 105.329 33.6667H103.542V36.7213ZM105.51 41.888C105.985 41.888 106.352 41.7483 106.613 41.469C106.883 41.1898 107.018 40.7941 107.018 40.2821C107.018 39.7585 106.878 39.3512 106.599 39.0603C106.32 38.7577 105.943 38.6064 105.468 38.6064H103.542V41.888H105.51Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <ul class="menu">
          <li class="menu__item">
            <Link to="/" className="menu__link">
              Home
            </Link>
          </li>
          <li class="menu__item">
            <Link to="startups" className="menu__link">
              Startups
            </Link>
          </li>
          <li class="menu__item">
            <Link to="investors" className="menu__link">
              Investors
            </Link>
          </li>
          <li class="menu__item">
            <Link to="Incubators" className="menu__link">
              Incubators
            </Link>
          </li>
        </ul>
        <p>&copy;2024 Iraqi Startup Hub | All Rights Reserved</p>
      </footer>
    </body>
  );
};

export default Footer;
