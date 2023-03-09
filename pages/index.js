import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import React from "react"
import { saveAs } from "file-saver"
import { useRouter } from 'next/router'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        

        <section id='About'>
          <div id='grid'>
            <div id='size-small'>
        
               <h2 id='profile-name'> Feu Matthew Her </h2>
              <p id='profile-p'>

              I am a full-stack developer who comes from the love of video games. My 
              love for video games sparked an interest which led me to coding. This simple 
              exposure got me fascinated. Creating a simple function is what actually got 
              me hooked. It was so fascinating, fun, and challenging to get my code to work. 
              Now, I am just passionate about technology. I graduated in March 2023 from 
              General Assembly and am excited to begin my career as a software engineer. 
              I believe that my bootcamp experience and exposure has built a solid 
              foundation for me to become a software engineer that can thrive at any company.

              </p>

            </div>
            <img
              src='/pictures/image.jpeg'
              alt='picture of myself'
              id='picture'
            />
          </div>
          


        </section>
        {/* allows you to see resume under navbar */}
        <div id='Resume'>Resume</div>

        <section  class='btn-center'>
          <a href="/pictures/edited-resume.docx" download="GA-resume">
            <button>Download Resume</button>
          </a>
        </section>

        <div id='Project'>Project</div>

        <section class='project-flex'>
          <div id='background'>
            
            <img
              src='/pictures/click-faster.png'
              alt='project'
              width='90%'
            />

            <p class='project-name'>Click-Faster</p>

            <p class='project-desc'>A game where you click a red circle to increase your score while being timed. To beat the game your score has to be higher than "score to beat". You lose if the timer reaches zero. </p>

            <div class='btn-position'>
              
              <a href='https://github.com/fmher/click-faster' >
                <button class='btn-width'>SEE CODE</button>
              </a>
              <a href='https://fmher.github.io/click-faster/'>
                <button class='btn-width'>LIVE SITE</button>
              </a>
            </div>

          </div>


          <div id='background'>
            
            <img
              src='/pictures/pkmn.png'
              alt='project'
              width='90%'
            />

            <p class='project-name'>Pokemon Fandom</p>

            <p class='project-desc'>A website that allows pokemon fans to come together to talk to each other. You can create an account, favorite pokemon, talk to other users in the world chat, and leave comments on each pokemon.</p>

            <div class='btn-position'>
              <a href='https://github.com/fmher/project-2'>
                <button class='btn-width'>SEE CODE</button>
              </a>
              <a href='https://project-pokemon-fanbase.herokuapp.com/'>
                <button class='btn-width'>LIVE SITE</button>
              </a>
            </div>

          </div>

          <div id='background'>
            
            <img
              src='/pictures/group-project.png'
              alt='project'
              width='90%'
            />

            <p class='project-name'>Review N Price</p>

            <p class='project-desc'>This was a group project where we got a website to display youtube reviews and display how much each reviewed item cost. Also displaying what category each reviewed item belong too.</p>

            <div class='btn-position'>
              <a href='https://github.com/fmher/project-3-client'>
                <button class='btn-width'>SEE CODE</button>
              </a>
              <a href='https://stellular-horse-44ede4.netlify.app/'>
                <button class='btn-width'>LIVE SITE</button>
              </a>

            </div>


          </div>

        </section>


        <section id='Contact' >
          <h2>Contact Information</h2>
          <div class='contact-position'>
            <h1>Email: feumatthewher2@gmail.com</h1>
            <a href='https://www.linkedin.com/in/feu-her/'>
              <img src='/pictures/linkedin.png' alt='linkedin' class='link-img'/>
            </a>
            <a href='https://github.com/fmher'>
              <img src='/pictures/github.png' alt='github' class='github-img' />
            </a>

          </div>
          
        </section>

        <h2>Tech Stack</h2>
        <h1>My current tech stack consists off Javascript, React, HTML, CSS, Git, SQL, mySQL, MongoDB, and Sequelize.</h1>

      </main>
    </>
  )
}
