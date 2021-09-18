const styles = {

    header: {
        margin: 0,
        backgroundColor: 'red',
        color: '#fff'
    }

}

function Header() {
    return (
        <div style={styles.header}>
            <h1>MARVEL HEROES APP</h1>
        </div>
    );
}

export default Header;