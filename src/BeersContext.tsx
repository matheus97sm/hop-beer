import { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.punkapi.com/v2',
});

type Beers = {
  name: string;
  description: string;
  image_url: string | null;
  abv: number;
  ibu: number;
  food_pairing: string[] | null;
};

type BeersInput = Omit<Beers, 'food_pairing'>;

type BeersProviderProps = {
  children: ReactNode;
};

type BeersContextData = {
  beers: Beers[] | null;
  isFetching: boolean;
  createBeers: (beerInput: BeersInput) => void;
};

export const BeersContext = createContext<BeersContextData>(
  {} as BeersContextData
);

export function BeersProvider({ children }: BeersProviderProps) {
  const [beers, setBeers] = useState<Beers[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    api
      .get('/beers')
      .then((response) => {
        setBeers(response.data);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  function createBeers(beerInput: BeersInput) {
    const newBeer: Beers = {
      name: beerInput.name,
      description: beerInput.description,
      ibu: beerInput.ibu,
      abv: beerInput.abv,
      image_url: beerInput.image_url,
      food_pairing: null,
    };

    setBeers([...beers, newBeer]);
  }

  return (
    <BeersContext.Provider value={{ beers, isFetching, createBeers }}>
      {children}
    </BeersContext.Provider>
  );
}
