import Image from 'next/image'
import EmailCapture from '../components/EmailCapture'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.studioBanner}>
        <Image src="/sxd-noir-logo.png" alt="Salt x Diamond Studios Noir" width={44} height={44} className={styles.studioLogo} />
        <span className={styles.studioPresents}>Salt x Diamond Studios Noir presents</span>
      </div>
      <Image src="/hotg-logo.png" alt="House of the Geisha" width={1344} height={752} className={styles.hotgLogo} priority />
      <EmailCapture />
      <div className={styles.rule} aria-hidden="true" />
      <div className={styles.description}>
        <p className={styles.lede}>A world where wealth and power have flourished for centuries under a forgotten spiritual contract — and the contract has come due.</p>
        <p>House of the Geisha is an adult supernatural horror series set in Sakura City. At the center of that contract stands Madame Orochi, the enigmatic mistress of the Kurenai House. When the morally compromised are summoned to her door, the house does not judge them in a courtroom. It sends them somewhere far worse.</p>
        <p>Drawing from global folklore, Japanese horror, erotic supernatural cinema, and the uncompromising visual language of mid-1980s theatrical anime, the series explores power, complicity, desire, exploitation, and consequence through a world in which the people accustomed to controlling others eventually discover that they are no longer the ones in control.</p>
        <p>Beneath its supernatural mythology, House of the Geisha is an allegory for industries where access, ambition, sexuality, and power become dangerously intertwined — and for what remains when the systems protecting the powerful finally disappear.</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerCopy}>© 2026 houseofthegeisha.com &nbsp;·&nbsp; Salt x Diamond Studios</div>
      </footer>
    </main>
  )
}
