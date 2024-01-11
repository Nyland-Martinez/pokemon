'use client'
import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css'

const Home = () => {

  const [pokemonList, setPokemonList] = useState([]);

  const getPokemonsData = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const result = await response.data;
    console.log(result.results);
    setPokemonList(result.results);
  }


  return (
    <main className={styles.main}>
      <button onClick={getPokemonsData} style={{ color:'white', backgroundColor:'grey', paddingLeft:8, paddingRight:8 }}>Fetch Pokemon</button>
      <ul>
        {
          pokemonList.map((item, index) => {

            return (
              <li key={index}>
                <h3 style={{ margin: 0 }}>
                <Link href={`/pokemon/${item.name}`}>
                    {item.name}
                </Link>
                </h3>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}

export default Home;