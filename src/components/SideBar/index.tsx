import { Modal } from 'components/Modal';
import { useState } from 'react';

export function SideBar() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <h1>Sidebar</h1>

      {modalOpen && <Modal />}
    </>
  );
}
