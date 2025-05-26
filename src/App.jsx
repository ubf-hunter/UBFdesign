import Library from './components/Library';

function App() {
  const items = [
    {
      url: 'moiElegant.png',
      titlew: 'ECHO',
      url2: 'Accueil.png',
      url3: 'Settings.png',
      description: `App de detection d'effraction`,
    },
    {
      url: 'moiElegant.png',
      titlew: 'Minga App',
      url2: 'MingaR.png',
      url3: 'MingaH.png',
      description: ' Lorem ipsum dolor sit amet,  architecto cum ducimus.',
    },
  ];
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
        <div className="boxbox">
          <Library items={items}></Library>
        </div>
      </div>
    </>
  );
}

export default App;
