import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import CharacterItem from './CharacterItem';
import Load from './Load';

const uri = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=';
const uriKey = '&ts=1000&apikey=ca81f171fcb8a38257b8b7d247dd291b&hash=df49aae01b6118fcb863407bdfabcdc4';

function Home() {

    let resp;

    const [state, setState] = useState();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        async function fetch() {
            axios.get(uri + data.name.toLowerCase() + uriKey)
                .then(res => {
                    resp = res;
                    setState(resp.data.data.results);
                })
                .catch(() => {
                    alert('the limit of requests to the marvel api has been reached, try again later')
                })
        }
        fetch();
        // console.log(state);
    }

    return (
        <div className="containerHome" id="containerHome">
            <div>
                <h2 style={{ color: '#fff' }}>Look for your favorite marvel characters</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="text" {...register("name")} />
                    <input id="button" value="SEARCH" type="submit" />
                </form>
            </div>

            {
                !state &&
                <Load/>

            }
            <div className="character__content">
                {
                    state &&
                    state.map(i => {
                        return (

                            <CharacterItem name={i.name} image={i.thumbnail.path + '.jpg'} id={i.id}/>

                        );
                    })
                }
            </div>
        </div>
    );
}

export default Home;