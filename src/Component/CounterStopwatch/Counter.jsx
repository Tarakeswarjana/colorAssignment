import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      timer:""
    };
  }


  increasecounter = (str) => {
 this. timer = setInterval(() => {
      this.setState((prev) => ({ counter: prev.counter + 1 }));
     
    }, 500);



    if (str === "stop") {
        // alert("ll");
    clearInterval(this.timer )
    this.setState({timer:""});

    //    this.setState((prev) => ({ counter:0 }))
      }
   

  };
 

  
  decrementCounter = () => {
    this.setState((prev) => ({ counter: prev.counter - 1 }));
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button style={{ cursor: "pointer" }} onClick={this.increasecounter}>
          start
        </button>
        <br></br>
        <button
          style={{ cursor: "pointer" }}
          onClick={() =>  this.increasecounter("stop")}
        >
          decrease
        </button>
        <h1>hoellow counter</h1>
      </>
    );
  }
}
export default Counter;
