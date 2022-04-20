import { Modal } from 'components/Modal';
import { useState } from 'react';
import { Button } from 'styles/button';
import { SideBarMenuButton, SideBarWrapper } from './styles';

export function SideBar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  function handleOpenCloseMenu() {
    setMenuOpen(!menuOpen);
  }

  function handleOpenCloseModal() {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <SideBarWrapper>
        <header>
          <h3>Menu</h3>

          <SideBarMenuButton
            type="button"
            onClick={() => handleOpenCloseMenu()}
          >
            <span />
          </SideBarMenuButton>
        </header>

        {menuOpen && (
          <Button type="button" onClick={() => handleOpenCloseModal()}>
            Add a new beer
          </Button>
        )}
      </SideBarWrapper>

      {modalOpen && (
        <Modal handleOpenCloseModal={() => handleOpenCloseModal()} />
      )}
    </>
  );
}
