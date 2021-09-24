import React, { useEffect, useState } from 'react';
import { useParams } from "react-router";
import axios from "axios";

const uri = 'https://gateway.marvel.com:443/v1/public/characters/';
const uriKey = '?&ts=1000&apikey=ca81f171fcb8a38257b8b7d247dd291b&hash=df49aae01b6118fcb863407bdfabcdc4';

function Character() {

    const [state, setState] = useState();

    let { id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            const resp = await axios.get(uri + id + uriKey)
            setState(resp.data.data.results);
        }
        fetch();
        // console.log(state);
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
                                    <img id="characterImg" src={i.thumbnail.path + '.jpg'} alt="character"/>
                                </div>
                                <div className="containerCharacter__bio">
                                    <h2>Bio</h2>

                                    {i.description &&
                                        <p>{i.description}</p>
                                    }
                                    {!i.description &&
                                        <p>Not available</p>
                                    }
                                </div>
                            </section>
                            <h1>Comics</h1>
                            <section className="containerCharacter__comics">

                                <div>
                                
                                <h2>Events</h2>

                                {!i.events.items && <span>Not available</span>}
                                
                                {i.events.items.map(a => {
                                    return (
                                        <div>
                                            <span>{a.name}</span>
                                        </div>
                                    );

                                })}

                                </div>

                                <div>
                                <h2>Series</h2>

                                {!i.series.items && <span>Not available</span>}

                                {i.series.items.map(a => {
                                    return (
                                        <div>
                                            <span>{a.name}</span>
                                        </div>
                                    );
                                })}
                                </div>
                            </section>
                        </div>
                    );
                })
            }
        </>
    );
}

export default Character;