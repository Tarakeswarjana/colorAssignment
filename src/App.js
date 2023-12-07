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
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Timer from './Component/Timer';
import Trsting from './Component/Trsting';
import T from './Component/T';
import { store } from './Redux/Store';
import { Provider } from 'react-redux';

function App() {

  const contextData = useContext(userContext);
  const { name, setName } = useContext(userContext)
  console.log("contextData", name)

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    // Add any additional styles you want for the container
    // For example, background color, padding, etc.
    backgroundColor: "#f0f0f0",
  };

  return (

    <Provider store={store}>
      <h1>hellow world
        <Timer />



        {/* <Trsting /> */}
        <T />
      </h1 >
    </Provider>



    //     <>

    //     <section>
    //         <h2 >
    //           <Skeleton height={30} width={300} />
    //         </h2>
    //         <div
    //             style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "center",}}>

    // <div>
    //    <Skeleton  height={20} width={20} /> 
    //   </div>

    //   <span
    //   style={{
    //     fontSize: "8px",
    //     color: "green",
    //     fontWeight: "bold",
    //     cursor: "pointer",
    //   }}
    // >
    // <Skeleton  height={20} width={20} /> 
    // </span>
    //             </div>
    //       </section>








    //     </>
  );
}

export default App;
