import { Form, Input, SearchButton, Label } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" autoFocus autoComplete="off" />
      <SearchButton type="submit">
        <Label>
          Search
          <BsSearch style={{ width: 20, height: 20 }} />
        </Label>
      </SearchButton>
    </Form>
  );
};
