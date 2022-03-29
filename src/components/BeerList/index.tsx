import { useContext } from 'react';

import { BeersContext } from 'BeersContext';

import DefaultImage from 'images/default.png';
import { BeerItem, BeerListMain, BeerListWrapper } from './styles';

export function BeerList() {
  const { beers, isFetching } = useContext(BeersContext);

  return (
    <BeerListMain>
      <BeerListWrapper>
        {isFetching && <p>Carregando...</p>}

        {beers?.map((beer) => (
          <BeerItem key={beer.name}>
            <img src={beer.image_url || DefaultImage} alt={beer.name} />
            <h3>{beer.name}</h3>

            <div>
              <span>
                <strong>IBU:</strong> {beer.ibu}
              </span>

              <span>
                <strong>ABV:</strong> {beer.abv}
              </span>
            </div>

            <p>
              {beer.description.length <= 100
                ? beer.description
                : `${beer.description.slice(0, 100)}...`}
            </p>
          </BeerItem>
        ))}
      </BeerListWrapper>
    </BeerListMain>
  );
}
