import styles from './Navigation.module.css'

export function Navigation({
    children
}) {
    return (
        <nav className={styles.nav}>
            <ul>
                {children}
            </ul>
        </nav>
    );
}