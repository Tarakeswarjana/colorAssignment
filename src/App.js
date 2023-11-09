import logo from './logo.svg';
import { useContext } from 'react';
import './App.css';
import RangeCalendar from './Component/RangeCalendar';
import GalarySlider from './Component/GalarySlider';
import { images } from './Constant';
import Card1 from './Component/Card1';
import Sidebar from './Component/Sidebar';
import InputsField from './Component/InputsField';
import Counter from './Component/CounterStopwatch/Counter';
import { userContext } from './Component/context/DataContext';
import BoxModel from './Component/BoxContextModel.jsx/BoxModel';
function App() {

  const contextData = useContext(userContext);
  const{name,setName}=useContext(userContext)
  console.log("contextData",name)


  return (
    // <div className="flex justify-center items-center h-screen">
    //   <h1 className="text-3xl  font-bold underline">
    //     Hello world!
    //   </h1>
    //   {/* <RangeCalendar /> */}
    //   {/* <GalarySlider images={images} /> */}


    //  <div style={{display:"flex",}}>
    //   <div style={{flex:1,}}>
    //     <Sidebar/>
    //   </div>
    //   <div style={{flex:3}}>
    //   {/* <InputsField/> */}
    //   <Counter/>
    //   </div>
    //  </div>



    // </div>


    <>
    <div style={{   display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height:"100vh"}} >
           <BoxModel/>
        </div>
   
    </>
  );
}

export default App;
