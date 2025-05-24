import './Workart.scss';

const Workart = ({ imageUrl, titlew }) => {
  return (
    <div
      className="Workart"
      style={{
        height: '500px',
        width: 'auto',
        minWidth: '120%',
        maxWidth: '200%',
        //  marginBottom: '16px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: '3/4', // ratio contrôlé
        display: 'flex',
        //alignItems: 'flex-end',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: 'white',
        position: 'relative',
        padding: '12px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <span
        className="Titre"
        style={{
          // backgroundColor: 'rgba(0, 0, 0, 0.4)',
          padding: '0.5rem 1rem',
          //borderRadius: '8px',
        }}
      >
        {titlew}
      </span>
      {/**<div className="cadreImg"></div>   <img
        src={imageUrl}
        alt="Image"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />**/}

      <div>View Work</div>
    </div>
  );
};

export default Workart;
