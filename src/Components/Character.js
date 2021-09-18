function Character(){
    return(
        <>
            <h2>Character Info</h2>
            <img src={i.thumbnail.path + '.jpg'}/>
            <h1>{i.name}</h1>
            <p>{i.description}</p>
        </>
    );
}

export default Character;