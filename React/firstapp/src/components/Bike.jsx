// import "./../App.css"
function Bike({color,model,bikeInfo}) {

const {speed,weight,price,city="karachi"} =bikeInfo;

  const myStle = {
    backgroundColor :"blue",
    fontSize :"40px"
  };
  return (
    <>
      <h1>Bike</h1>
      <p
        // className="myBike" //exterrnal css
        // style={{backgroundColor:"red",color:"white"}}  // inline css
        // style={myStle} internal css  
      >
        Color is {color}
      </p>
      <p>model is {model}</p>
      <h2>Bike speed is {speed}</h2>
      <h2>Bike price is {price}</h2>
      <h2>Bike weight is {weight}</h2>
      <h2>Bike city is {city}</h2>
    </>
  );
}
export default Bike;
