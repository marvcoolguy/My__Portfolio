/* eslint-disable @next/next/no-img-element */
import ct__styles from '../styles/contact.module.css';

import Link from 'next/link';

const Contact = () => {
  return (
    <section className={ct__styles.contact}>
      <div className="lettered__heading">Contact Me</div>

      <div className={ct__styles.grid}>
        <div className={ct__styles.image}>
          <img
            src="/images/casual-life-3d-likes.png"
            alt="3d woman sitting in front of a laptop"
          />
        </div>

        <div className={ct__styles.form}>
          <input
            className={ct__styles.input__group}
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Jane Doe"
            required
          />

          <input
            className={ct__styles.input__group}
            type="email"
            name="email"
            id="email"
            placeholder="janedoe@gmail.com"
            required
          />

          <input
            className={ct__styles.input__group}
            type="text"
            name="subject"
            id="subject"
            placeholder="Are you open for a freelance gig?"
            required
          />

          <textarea
            className={ct__styles.text__area}
            name="message"
            id="message"
            placeholder="Hey, I got a job offer for you. Please contact me through my mail as soon as you get this, let's talk in details."
            cols="30"
            rows="7"
          ></textarea>

          <button className={ct__styles.button}>Send Message</button>
        </div>
      </div>

      <div className="bottom__nav">
        <Link href="/resume" passHref>
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
            <span>Back to resume</span>
          </a>
        </Link>

        <Link href="/" passHref>
          <a className="forward">
            <span>Go to home</span>
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

export default Contact;
