import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from "axios";

const uri = 'https://gateway.marvel.com:443/v1/public/characters/';
const uriKey = '?&ts=1000&apikey=ca81f171fcb8a38257b8b7d247dd291b&hash=df49aae01b6118fcb863407bdfabcdc4';

function Character(props) {

    const [state, setState] = useState();

    let { id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            const resp = await axios.get(uri + id + uriKey)
            setState(resp.data.data.results);
        }
        fetch();
    });

    return (
        <>
            <h2>Character Info</h2>
            {
                !state &&
                <></>
            }
            {
                state?.map(i => {
                    return (
                        <div>
                            <h2>{i.name}</h2>
                            <img id="charImg" src={i.thumbnail.path + '.jpg'} />
                            <p>{i.description}</p>
                            <span>{i.comics.available}</span>
                            <div>
                                <span>{i.comics.items.map(a => a.name)}</span>
                      
                                {/* <img src={i.comics.items.map(a => a.resourceURI + '.jpg')}/> */}
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Character;