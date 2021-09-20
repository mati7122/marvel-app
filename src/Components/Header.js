import '../StyleSheet.css';

const styles = {

    header: {
        margin: 0,
        backgroundColor: 'red',
        color: '#fff',
        display: 'flex',
        alignItems: 'center'
    },

    img: {
        width: 200,
        height: 100
    }

}

function Header() {
    return (
        <header>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png'} alt="title"/>
            <h1>HEROES APP</h1>
        </header>
    );
}

export default Header;