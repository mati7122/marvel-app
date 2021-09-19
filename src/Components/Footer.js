import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/signo-de-github.svg';
import portfolio from '../assets/portfolio.svg';

const styles = {
    background: {
        margin: 0,
        padding: 0,
        backgroundColor: "red",
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // position: 'fixed',
        // left: 0,
        // bottom: 0,
        width: '100%'
    },
    img: {
        width: 30,
        height: 30
    },
    container: {
        width: 200,
        display: 'flex',
        justifyContent: 'space-around'
    }
}

const Footer = () => {
    return (
        <footer style={styles.background}>
            <span>App create by Matías Herrera using Marvel API</span>
            <h2>Visit</h2>
            <div style={styles.container}>
                <a href="https://www.linkedin.com/in/matías-facundo-herrera-5830b7200/" target="_blank">
                    <img style={styles.img} src={LinkedIn} />
                </a>
                <a href="https://github.com/mati7122" target="_blank">
                    <img style={styles.img} src={GitHub} />
                </a>
                <a href="https://portfolio-psi-kohl-25.vercel.app" target="_blank">
                    <img style={styles.img} src={portfolio}/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;