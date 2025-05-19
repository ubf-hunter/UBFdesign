function App() {
  return (
    <>
      <header>
        <img src="logoSB.png" alt="Logo" />

        <div className="headerList">
          <a href="">GraphicDesign</a>
          {/**<a href="">uiDesign</a>
          <a href="">FrontendDev</a> */}

          <a href="">About</a>
          <div className="btns">
            <a href="">Work With Me</a>
          </div>
        </div>
      </header>
      <div className="Conteneur">
        <span>Featured Work</span>
        <div className='composatWorkArt'>
          <span>Titre du WorkArt</span>
          <img src="" alt="work1" />
        </div>
      </div>
    </>
  );
}

export default App;
