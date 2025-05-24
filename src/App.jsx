import Library from './components/Library';
function App() {
  const items = [
    { url: './public/MIngaMockup.png', titlew: 'Minga App' },
    { url: './public/MIngaMockup.png', titlew: 'Titre du workart' },
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
