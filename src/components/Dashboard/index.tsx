import { BeersProvider } from 'BeersContext';
import { BeerList } from 'components/BeerList';
import { SideBar } from 'components/SideBar';
import { DashboardWrapper } from './styles';

export function Dashboard() {
  return (
    <BeersProvider>
      <DashboardWrapper>
        <BeerList />
        <SideBar />
      </DashboardWrapper>
    </BeersProvider>
  );
}
