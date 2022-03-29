import { BeersContext } from 'BeersContext';
import { FormEvent, useContext, useState } from 'react';
import { Button } from 'styles/button';

import { TextInput } from 'styles/input';
import { CloseButton, ModalForm, ModalWrapper } from './styles';

type ModalProps = {
  handleOpenCloseModal: () => void;
};

export function Modal({ handleOpenCloseModal }: ModalProps) {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ibu, setIbu] = useState<number>(0);
  const [abv, setAbv] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>('');

  const { createBeers } = useContext(BeersContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    createBeers({
      name,
      description,
      ibu,
      abv,
      image_url: imageUrl,
    });

    setName('');
    setDescription('');
    setIbu(0);
    setAbv(0);
    setImageUrl('');

    handleOpenCloseModal();
  }

  return (
    <ModalWrapper>
      <ModalForm onSubmit={(e) => handleSubmit(e)}>
        <CloseButton onClick={() => handleOpenCloseModal()}>x</CloseButton>

        <h2>Add a new beer</h2>

        <label htmlFor="name">
          <span>Name:* </span>

          <TextInput
            type="text"
            placeholder="Beer name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label htmlFor="description">
          <span>Description:* </span>

          <TextInput
            type="text"
            placeholder="Beer description"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>

        <label htmlFor="ibu">
          <span>IBU: </span>

          <TextInput
            type="number"
            placeholder="Beer IBU"
            id="ibu"
            name="ibu"
            step="0.01"
            value={ibu}
            onChange={(e) => setIbu(Number(e.target.value))}
          />
        </label>

        <label htmlFor="abv">
          <span>ABV: </span>

          <TextInput
            type="number"
            placeholder="Beer ABV"
            id="abv"
            name="abv"
            step="0.01"
            value={abv}
            onChange={(e) => setAbv(Number(e.target.value))}
          />
        </label>

        <label htmlFor="imageURL">
          <span>Image (url): </span>

          <TextInput
            type="text"
            placeholder="Beer Image url"
            id="imageURL"
            name="imageURL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>

        <Button type="submit">Add beer</Button>
      </ModalForm>
    </ModalWrapper>
  );
}
