import React, { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';

const uri = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=';
const uriKey = '&ts=1000&apikey=ca81f171fcb8a38257b8b7d247dd291b&hash=df49aae01b6118fcb863407bdfabcdc4';

function Home() {

    const [state, setState] = useState();

    // useEffect(() => {
    //     async function fetch() {
    //         const resp = await axios.get(uri);

    //     }
    // },[])

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
        <>
            <span>Home page</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} />
                <input value="Search" type="submit" />
            </form>
            
            <div className="character__content">
            {
                !state && 
                <span>No data</span>

            }
            {
                state?.map(i => {
                    return (
                        <div className="character__item">
                            <span>{i.name}</span>
                            {/* <p>{i.description}</p> */}
                            <img id="charImg" src={i.thumbnail.path + '.jpg'}/>
                            <Link to="/character/:id">View More</Link>
                        </div>
                    );
                })
            }
            </div>

        </>
    );
}

export default Home;