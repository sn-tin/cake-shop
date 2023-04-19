import React, { useEffect } from 'react';
import styles from "./About.module.scss"

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.about}>
      <h2>About Cake It</h2>
      <p>Cake It is a functioning e-commerce website for cakes. 
        It is a personal project of <a href="https://kristinedejesus.vercel.app" target="_blank" rel="noopener noreferrer">Kristine de Jesus</a>, a front-end developer,
        aims to showcase her skills as a professional who can build a highly useful web application such as an E-commerce store. 
        This website is built using ReactJS (JSX, Hooks, Context API), SCSS Modules, and Stripe. 
        <br/>
        The images and cake descriptions used in this website belongs to <a href="https://www.buttercakefactory.com/" target="_blank" rel="noopener noreferrer">The Buttercake Factory</a>.</p>
    </div>
  )
}
