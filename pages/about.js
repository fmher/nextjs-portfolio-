// this is going to be our /about
// import css module file
import styles from '../styles/About.module.css'

// file name lowered cased, func is uppercased due to documentation
export default function About() {
    return (
        <div>
            <h1>About me</h1>

            {/* more than one style can use string interpolation */}
            <p className={styles.coolColor} >I am now a software engineer looking to get hired!!! </p>

            <p>{`only way to use backticks`}</p>

            <h2>I am a different color</h2>

            <style jsx>{`
                h2 {
                    color: purple
                }
            `}</style>

            {/* two ways to render images: stored locally & url */}

            <img 
                src='/next.svg'
                alt='logo of my new fav framework'
            />

            {/* getting image from outside source */}
            <img 
                src='https://placekitten.com/300/602'
                alt='a magnificent creature'
            />

        </div>
    )
}