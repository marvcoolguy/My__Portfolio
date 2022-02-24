import React from 'react';
import Link from 'next/link';
import ab__styles from '../styles/About.module.css';

const About = () => {
  return (
    <section className={ab__styles.about}>
      <div className="lettered__heading">About Me</div>

      <div className={ab__styles.grid}>
        <div className={ab__styles.avatar}>
          <svg
            width="400"
            height="400"
            viewBox="0 0 570 570"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.77124 215.115C-29.8252 367.672 62.558 522.632 215.115 561.229C367.672 599.825 522.632 507.442 561.229 354.885C599.825 202.328 507.442 47.3677 354.885 8.77124C202.328 -29.8252 47.3677 62.558 8.77124 215.115ZM42.4492 222.151C8.481 356.415 89.7863 492.793 224.05 526.761C358.313 560.73 494.692 479.424 528.66 345.161C562.628 210.898 481.323 74.5191 347.059 40.5509C212.796 6.58265 76.4174 87.8879 42.4492 222.151Z"
              fill="url(#paint0_radial_24_55)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_24_55"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(190.93 131.951) rotate(57.811) scale(651.958)"
              >
                <stop offset="0.0709103" stopColor="#2FFFF3" />
                <stop offset="0.447917" stopColor="#1FAAC9" />
                <stop offset="0.916667" stopColor="#FF0080" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className={ab__styles.text}>
          <div className={ab__styles.text__box}>
            <h2>Hi, I &#39; m Chioma Otu</h2>

            <p>
              A creative frontend developer with a good eye for design
              conversion and I enjoy building beautiful, functional and useable
              websites and web apps.
            </p>
          </div>

          <div className={ab__styles.text__box}>
            <p>Here are some of the technologies I’ve been working with:</p>

            <div className={ab__styles.tech}>
              <ul className={ab__styles.js}>
                <li>&#123; Javascript &#125;</li>
                <li>&#123; React &#125;</li>
                <li>&#123; Next Js &#125;</li>
              </ul>

              <ul className={ab__styles.css}>
                <li>&#123; CSS 3 &#125;</li>
                <li>&#123; Tailwind &#125;</li>
                <li>&#123; Bootstrap &#125;</li>
              </ul>
            </div>
          </div>

          <div className={ab__styles.text__box}>
            <p>
              In my free time, I love writing fantasy fictions, listening to
              music and day dreaming.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom__nav">
        <Link href="/" passHref>
          <a className="back">
            <svg
              width="40"
              height="20"
              viewBox="0 0 49 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM49 10.5L2 10.5V13.5L49 13.5V10.5Z"
                fill="#FF69B4"
              />
            </svg>
            <span>Back to home</span>
          </a>
        </Link>

        <Link href="/project" passHref>
          <a className="forward">
            <span>Go to my projects</span>
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
          </a>
        </Link>
      </div>
    </section>
  );
};

export default About;
