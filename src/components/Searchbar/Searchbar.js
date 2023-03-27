export const Searchbar = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="query" autoFocus autoComplete="off" />
      <button type="submit">Search</button>
    </form>
  );
};
