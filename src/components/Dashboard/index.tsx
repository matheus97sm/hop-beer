import { BeersProvider } from 'BeersContext';
import { BeerList } from 'components/BeerList';
import { SideBar } from 'components/SideBar';
import { DashboardWrapper } from './styles';

export function Dashboard() {
  return (
    <BeersProvider>
      <DashboardWrapper className="container">
        <h1>Every beer around the world</h1>

        <div>
          <SideBar />
          <BeerList />
        </div>
      </DashboardWrapper>
    </BeersProvider>
  );
}
