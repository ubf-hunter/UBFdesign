import Button from './Button';
import './Workart.scss';

const Workart = ({
  imageUrl,
  titlew,
  workartUrl,
  description,
  workartUrl2,
}) => {
  return (
    <div
      className="Workart"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="ContentTy">
        <span className="Titre">{titlew}</span>
        <span className="description">{description}</span>
        <Button title="Show more" />
      </div>
      <div className="WorkartUrl">
        <img src={workartUrl} alt="" />
        <img src={workartUrl2} alt="" />
      </div>
    </div>
  );
};

export default Workart;
