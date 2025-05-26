import './Workart.scss';
const Button = ({ title }) => {
  return (
    <div className="Button">
      <span>{title}</span>
      <div className="icone2">
        <img src="arrow-upb.png" alt="" />
      </div>
    </div>
  );
};
export default Button;
