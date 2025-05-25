import Workart from './Workart';
import './Workart.scss';

const Library = ({ items }) => {
  return (
    <div className="Library">
      {items.map((item, index) => (
        <Workart
          key={index}
          workartUrl={item.url2}
          workartUrl2={item.url3}
          imageUrl={item.url}
          titlew={item.titlew}
          description={item.description}
        />
      ))}
    </div>
  );
};
export default Library;
