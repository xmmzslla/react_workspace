import Left3 from './Left3';

// Left1의 자식
const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

export default Left2;
