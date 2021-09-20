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
            <h1 style={{color: '#fff'}}>CHARACTER INFO</h1>
            {
                !state &&
                <></>
            }
            {
                state?.map(i => {
                    return (
                        <div className="containerCharacter">
                            <section>
                                <div>
                                    <h2>{i.name}</h2>
                                    <img id="charImg" src={i.thumbnail.path + '.jpg'} />
                                </div>
                                <div className="bio">
                                    <h2>Bio</h2>
                                    <p>{i.description}</p>
                                </div>
                            </section>
                            <h1>Comics</h1>
                            <div>
                                
                                <h2>Events</h2>
                                
                                <span>{i.events.items.map(a => {
                                    return (
                                        <div>
                                            <span>{a.name}</span>
                                        </div>
                                    );

                                })}
                                </span>
                                {/* <h2>Comics</h2> */}
                                {/* <h4>Comics disponibles totales: {i.comics.available}</h4> */}
                                {/* <span>{i.comics.items.map(a => {
                                    return(
                                        <div>
                                            <span>{a.name}</span>
                                            <img src={a.resourceURI + '.png'} />
                                        </div>
                                    );
                                })}</span> */}
                                <h2>Series</h2>
                                <span>{i.series.items.map(a => {
                                    return (
                                        <div>
                                            <span>{a.name}</span>
                                        </div>
                                    );
                                })}
                                </span>
                            </div>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Character;