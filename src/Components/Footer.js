import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/signo-de-github.svg';
import portfolio from '../assets/portfolio.svg';

const styles = {
    background: {
        marginTop: 30,
        padding: 0,
        backgroundColor: "#FF1414",
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    img: {
        width: 30,
        height: 30
    },
    container: {
        width: 200,
        display: 'flex',
        justifyContent: 'space-around',
        margin: 10
    },
    span:{
        marginTop: 10,
        marginBottom: 10
    }
}

const Footer = () => {
    return (
        <footer style={styles.background}>
            <span style={styles.span}>App created by Matías Herrera using Marvel API</span>
            <h2>Visit</h2>
            <div style={styles.container}>
                <a href="https://www.linkedin.com/in/matías-facundo-herrera-5830b7200/" target="_blank" rel="noreferrer">
                    <img style={styles.img} src={LinkedIn} alt="linkedin"/>
                </a>
                <a href="https://github.com/mati7122" target="_blank" rel="noreferrer">
                    <img style={styles.img} src={GitHub} alt="linkedin"/>
                </a>
                <a href="https://portfolio-psi-kohl-25.vercel.app" target="_blank" rel="noreferrer">
                    <img style={styles.img} src={portfolio} alt="linkedin"/>
                </a>
            </div>
        </footer>
    );
}

export default Footer;