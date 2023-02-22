import { useSearchParams } from 'react-router-dom';
import { Input, Wrapper } from './SearchForm.styled';

export const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const onSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    if (!query) return;
    setSearchParams({ search: query });
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Enter name of movie..." name="query" />

        <button type="submit">Search</button>
      </form>
    </Wrapper>
  );
};
