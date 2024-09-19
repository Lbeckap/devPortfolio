import styles from './Header.module.css';

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <img></img>
                    <p className={styles.headerTitle}>Lori Phillips.</p>
                </div>
                <nav className={styles.nav}>
                    <a>Projects</a>
                    <a>About</a>
                    <a>Let's Connect!</a>
                </nav>
            </div>
        </>
    )
}