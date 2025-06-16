import { useState } from 'react';

type Props = {
  onSearch: (query: string) => void;
};

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(input.trim());
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search images..."
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};
