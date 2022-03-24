import { useContext } from 'react';

import { BeersContext } from 'BeersContext';
import { BeerListWrapper } from './styles';

export function BeerList() {
  const { beers, isFetching } = useContext(BeersContext);

  return (
    <>
      <input type="search" />

      <BeerListWrapper>
        {isFetching && <p>Carregando...</p>}

        {beers?.map((beer) => {
          return <li key={beer.name}>{beer.name}</li>;
        })}
      </BeerListWrapper>
    </>
  );
}
