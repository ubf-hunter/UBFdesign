import Workart from './Workart';

const Library = ({ items }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr', // Toujours 2 colonnes
        gap: '20rem',
        width: '100%',
        maxWidth: '1800px',
        margin: '0 auto',
        padding: '1rem',
      }}
    >
      {items.map((item, index) => (
        <Workart key={index} imageUrl={item.url} titlew={item.titlew} />
      ))}
    </div>
  );
};
export default Library;
