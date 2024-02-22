

// import { useState } from "react"
// import './App.css'


// const App = () => {
//     const [file, setFile] = useState ();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }
//   return (
//     <div className="Container">
//         <div className="wrap">
       
//         <img src={file} className="big"/>
//       </div>    
//       <input type='file'  placeholder="ADD IMAGE" onChange={handleChange} id=""/>
//     </div>
//   );
// }

// export default App;


import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';

const App = () => {
  return (
    <>
    <div className='container'></div>
      <input type="text"  className='texting' placeholder='Names'/>
      <button>Add Name</button>

      <Hero/>
      <Footer/>
    
    </>
  );
}

export default App;
