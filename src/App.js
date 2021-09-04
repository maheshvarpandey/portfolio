import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "./SliderStyle/slider-animations.css";
import "./SliderStyle/styles.css";
import './App.css';


const content = [
  {
    title: "Vulputate Mollis Ultricies Fermentum Parturient",
    description:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
    button: "Read More",
    image: "https://i.imgur.com/ZXBtVw7.jpg",
    user: "Luan Gjokaj",
    userProfile: "https://i.imgur.com/JSW6mEk.png"
  },
  {
    title: "Tortor Dapibus Commodo Aenean Quam",
    description:
      "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
    button: "Discover",
    image: "https://i.imgur.com/DCdBXcq.jpg",
    user: "Erich Behrens",
    userProfile: "https://i.imgur.com/0Clfnu7.png"
  },
  {
    title: "Phasellus volutpat metus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
    button: "Buy now",
    image: "https://i.imgur.com/DvmN8Hx.jpg",
    user: "Bruno Vizovskyy",
    userProfile: "https://i.imgur.com/4KeKvtH.png"
  }
];

function App() {
  const allElements = document.querySelectorAll('*:not([theme-button]):not([class*="gray"])');
const themeButtons = document.querySelectorAll('[theme-button]');
const escapeRegExp = (string) =>  string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const replaceAll = (str, term, replacement) => str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
let currTheme = 'indigo';

const changeTheme = (theme) => {
  allElements.forEach((element) => {
    console.log("jj");
    if (element.getAttribute('class') !== null) {
      const newClasses = replaceAll(element.getAttribute('class'), currTheme, theme);
      element.setAttribute('class', newClasses);
    }
  });
  currTheme = theme;
}

themeButtons.forEach((button) => {
   button.addEventListener('click', (e) => {
  changeTheme(e.target.getAttribute('theme-button'));
  });
});

  return (
    <div className="">
     <div>
      <div className="h-screen w-screen bg-indigo-400 overflow-hidden absolute flex items-center">
          <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
            <div className="w-64 h-64 -mx-32 bg-indigo-300 opacity-50 rounded-full" />
            <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-indigo-300 rounded-full" />
            <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-indigo-300 rounded-full" />
        </div>
      <div className="container mx-auto h-screen pt-20 px-8 relative">
        <div className="flex w-full rounded-lg lg:overflow-hidden overflow-auto lg:flex-row flex-col shadow-2xl">
          <div className="text-center font-extrabold text-3xl justify-center items-center w-full"> 
          
          <Slider className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                  style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                  <div className="inner">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <button className="buttonSlider">{item.button}</button>
                  </div>
                  <section className="text-center justify-center">
                    <img className="text-center" src={item.userProfile} alt={item.user} />
                    <span className="text-center">
                      Posted by <strong>{item.user}</strong>
                    </span>
                  </section>
                </div>
              ))}
            </Slider>
          </div> 
        </div>
      
      </div>
      <div className="fixed h-screen right-0 top-0 items-center flex">
        <div className="p-2 bg-none border-l-0 border-t-4 border-b-4 border-indigo-400 inline-flex items-center rounded-tl-lg shadow-2xl rounded-bl-lg  flex-col">
          <button className="bg-gray-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="gray" />
          <button className="bg-red-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="red" />
          {/* <button className="bg-orange-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="orange" /> */}
          <button className="bg-green-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="green" />
          {/* <button className="bg-teal-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="teal" /> */}
          <button className="bg-blue-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="blue" />
          <button className="bg-indigo-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="indigo" />
          <button className="bg-purple-500 sideWidth h-8 transition-all rounded-full mb-2 outline-none focus:outline-none" theme-button="purple" />
          <button className="bg-pink-500 sideWidth h-8 transition-all rounded-full outline-none focus:outline-none" theme-button="pink" />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
