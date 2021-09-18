
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
        <div style={styles.header}>
            <img style={styles.img} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png'}/>
            <h1>HEROES APP</h1>
        </div>
    );
}

export default Header;