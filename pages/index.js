import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={styles.landing__page}>
      <svg
        className={styles.ring}
        width="100"
        height="100"
        viewBox="0 0 157 157"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.40437 58.9671C-8.17565 100.786 17.1484 143.263 58.9671 153.843C100.786 164.423 143.263 139.099 153.843 97.2807C164.423 55.462 139.099 12.9844 97.2807 2.40436C55.462 -8.17566 12.9844 17.1483 2.40437 58.9671ZM11.6362 60.8959C2.32488 97.7 24.6122 135.084 61.4163 144.395C98.2205 153.707 135.604 131.419 144.916 94.6152C154.227 57.8111 131.94 20.4271 95.1357 11.1158C58.3315 1.80443 20.9475 24.0917 11.6362 60.8959Z"
          fill="url(#paint0_radial_23_100)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_23_100"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(52.3376 36.1704) rotate(57.811) scale(178.714)"
          >
            <stop offset="0.416667" stopColor="#49E0D8" />
            <stop offset="0.791667" stopColor="#FF69B4" />
          </radialGradient>
        </defs>
      </svg>

      <svg
        className={styles.gender}
        width="26"
        height="43"
        viewBox="0 0 26 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13ZM13 26H14V33.5H19.5V35.5H14V42.5H12V35.5H6V33.5H12V26H13ZM24.2273 13C24.2273 19.2007 19.2007 24.2273 13 24.2273C6.79935 24.2273 1.77273 19.2007 1.77273 13C1.77273 6.79935 6.79935 1.77273 13 1.77273C19.2007 1.77273 24.2273 6.79935 24.2273 13Z"
          fill="#2FFFF3"
        />
      </svg>

      <div className="lettered__heading">Hello World</div>

      <div className={styles.text__display}>
        <div className={styles.letteredName}>
          <span>c</span>
          <span>h</span>
          <span>i</span>
          <span>o</span>
          <span>m</span>
          <span>a</span>
          <span>.</span>
        </div>

        <div className={styles.profession}>
          <span>f</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>

          <span>-</span>

          <span>e</span>
          <span>n</span>
          <span>d</span>

          <svg
            className={styles.separator__star}
            width="31"
            height="29"
            viewBox="0 0 31 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 0L18.98 10.7102H30.2414L21.1307 17.3295L24.6107 28.0398L15.5 21.4205L6.38933 28.0398L9.8693 17.3295L0.758624 10.7102H12.02L15.5 0Z"
              fill="#F5E020"
            />
          </svg>

          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>.</span>
        </div>

        <button className={`${styles.intro__button} ${styles.btn}`}>
          Hire me!
        </button>
      </div>

      {/* yellow ball */}
      <svg
        className={styles.yellowBall}
        width="100"
        height="100"
        viewBox="0 0 143 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.2282 139.439C14.6805 128.822 -7.15076 89.776 3.4667 52.2282C14.0842 14.6805 53.1297 -7.15073 90.6774 3.46673C128.225 14.0842 150.056 53.1298 139.439 90.6775C128.821 128.225 89.7759 150.056 52.2282 139.439Z"
          fill="url(#paint0_radial_16_78)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_16_78"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(49.1904 32.8695) rotate(59.4027) scale(161.66)"
          >
            <stop offset="0.0709103" stopColor="#F5E020" />
            <stop offset="0.552849" stopColor="#82760A" />
          </radialGradient>
        </defs>
      </svg>

      {/* pink ball */}
      <svg
        className={styles.pinkBall}
        width="150"
        height="150"
        viewBox="0 0 187 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="93.2427"
          cy="93.2427"
          r="83"
          transform="rotate(82.4044 93.2427 93.2427)"
          fill="url(#paint0_radial_16_77)"
        />
        <circle cx="66" cy="65" r="28" fill="url(#paint1_radial_16_77)" />
        <defs>
          <radialGradient
            id="paint0_radial_16_77"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(56.7427 130.743) rotate(-46.3868) scale(189.914)"
          >
            <stop offset="0.0709103" stopColor="#F5B6D6" />
            <stop offset="0.552849" stopColor="#5F3C4D" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_16_77"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(66 65) rotate(90) scale(28)"
          >
            <stop stopColor="white" stopOpacity="0.75" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* green ball */}
      <svg
        className={styles.bigBall}
        width="650"
        height="650"
        viewBox="0 0 703 703"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="351.106"
          cy="351.106"
          r="266"
          transform="rotate(66.0377 351.106 351.106)"
          fill="url(#paint0_radial_52_751)"
        />
        <circle
          cx="234.677"
          cy="249.807"
          r="89.7349"
          transform="rotate(-38.9623 234.677 249.807)"
          fill="url(#paint1_radial_52_751)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_52_751"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(234.13 471.287) rotate(-46.3868) scale(608.639)"
          >
            <stop offset="0.0709103" stopColor="#2FFFF3" />
            <stop offset="0.552849" stopColor="#2B6663" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_52_751"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(234.677 249.807) rotate(90) scale(89.7349)"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {/* bottom nav */}
      <Link href="/about" passHref>
        <div className={styles.bottom__nav}>
          <a>Go to about me</a>

          <svg
            width="40"
            height="20"
            viewBox="0 0 42 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.0607 13.0607C41.6464 12.4749 41.6464 11.5251 41.0607 10.9393L31.5147 1.3934C30.9289 0.807609 29.9792 0.807609 29.3934 1.3934C28.8076 1.97918 28.8076 2.92893 29.3934 3.51472L37.8787 12L29.3934 20.4853C28.8076 21.0711 28.8076 22.0208 29.3934 22.6066C29.9792 23.1924 30.9289 23.1924 31.5147 22.6066L41.0607 13.0607ZM1.31134e-07 13.5L40 13.5L40 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z"
              fill="aqua"
            />
          </svg>
        </div>
      </Link>
    </section>
  );
}
