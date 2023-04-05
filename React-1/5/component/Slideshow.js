import Slideshow from './component/Slideshow';

function App() {
  const images = [
    'https://www.incimages.com/uploaded_files/image/1920x1080/getty_164908494_970566970450014_63814.jpg',
    'https://www.globotreks.com/wp-content/uploads/2020/08/Fun-and-Interesting-Facts-about-India-colored-powder.jpg',
    'https://img.freepik.com/free-photo/holi-color-background-black-background_24972-870.jpg',
  ];
  return (
    <div className="App">
      <Slideshow images={images} slideDuration={5000} />
    </div>
  );
}

export default App;
