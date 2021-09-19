// import Search from 'magnifying-glass.svg';
import search from '../assets/magnifying-glass.svg';
import React, { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';

const uri = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=';
const uriKey = '&ts=1000&apikey=ca81f171fcb8a38257b8b7d247dd291b&hash=df49aae01b6118fcb863407bdfabcdc4';

function Home() {

    const [state, setState] = useState();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        async function fetch() {
            const resp = await axios.get(uri + data.name + uriKey);
            setState(resp.data.data.results);
        }
        fetch();
        console.log(state);
    }

    return (
        <div className="containerHome">
            {/* <span>Home page</span> */}
            <h2>Look for your favorite marvel characters</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input id="text" {...register("name")} />
                <input id="button" value="SEARCH" type="submit" />
            </form>
            
            <div className="character__content">
            {
                !state && 
                <></>

            }
            {
                state?.map(i => {
                    return (
                        <div className="character__item">
                            <span>{i.name}</span>
                            <img id="charImg" src={i.thumbnail.path + '.jpg'}/>
                            <Link to={`/character/${i.id}`}><span style={{color: '#fff', textDecoration: 'none'}}>View More</span></Link>
                        </div>
                    );
                })
            }
            </div>

        </div>
    );
}

export default Home;