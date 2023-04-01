import Nav from '@components/Nav/Nav';
import Jumbotron from '@components/Jumbotron/Jumbotron';
import SoundSection from '@components/SoundSection/SoundSection';
import DisplaySection from '@components/DisplaySection/DisplaySection';
import WebgiViewer from '@components/WebgiViewer/WebgiViewer';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <SoundSection />
      <DisplaySection />
      <WebgiViewer />
    </div>
  );
}

export default App;
