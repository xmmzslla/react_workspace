import { UserContext } from './contexts/UserContext';
import { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Right3 from './Right3';

const Right2 = () => {
  const { name } = useContext(UserContext);
  const { number } = useContext(ThemeContext);

  return (
    <div>
      <h1>Right2:</h1>
      <h1>Name:{name}</h1>
      <h1>Number:{number}</h1>
      <Right3 />
    </div>
  );
};

export default Right2;
