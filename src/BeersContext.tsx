import { useFetch } from 'hooks/useFetch';
import { createContext, ReactNode } from 'react';

type Beers = {
  name: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  food_pairing: string[];
};

type BeersProviderProps = {
  children: ReactNode;
};

type BeersContextData = {
  beers: Beers[] | null;
  isFetching: boolean;
};

export const BeersContext = createContext<BeersContextData>(
  {} as BeersContextData
);

export function BeersProvider({ children }: BeersProviderProps) {
  const { data: beers, isFetching } = useFetch<Beers[]>('/beers');

  return (
    <BeersContext.Provider value={{ beers, isFetching }}>
      {children}
    </BeersContext.Provider>
  );
}
