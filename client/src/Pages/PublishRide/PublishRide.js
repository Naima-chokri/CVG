import React, { useState } from "react";
import { Form, FormControl, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './PublishRide.css'


const PublishRide = () => {
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    DepartureTime:"",
    ArrivingTime:"",
    StartingArea:"",
    ArrivalArea:"",
    NbrOfPerson:"",
    Price:"",
    Date:"",
    CarName:"",
    Roules:"",
    Description:""
  });

  const { DepartureTime, ArrivingTime, StartingArea,ArrivalArea, NbrOfPerson,Price,Date, CarName, Roules,Description} = loginFormData;

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      DepartureTime,
      ArrivingTime,
      StartingArea,
      ArrivalArea,
      NbrOfPerson,
      Price,
      Date,
      CarName,
      Roules,
      Description
      
    };
    console.log(userData);
    navigate('/Search')
  };


  return (
    // <Form
    //   style={{
    //     marginTop: 100,
    //     display: "flex",
    //     alignItems: "center",
    //     flexDirection: "column ",
    //   }}
    // >
    //     <h1 style={{margin: "30px 0"}}>Publish a ride</h1>
    //   <Row style={{ width: "360px" }}>
    //   <FormControl
    //       type="date"
    //       name="DepartureTime"
    //       style={{ width: "100%", margin: "10px 0px" }}
    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="DepartureTime"
    //       placeholder="DepartureTime"
    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="arrivingTime"
    //       placeholder="arrivingTime"
    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="StartingArea"  
    //       placeholder="Starting Area"
    //       min={0}
    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="ArrivalArea"
    //       placeholder="Arrival Area"
    //       min={0}
    //     />

    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="number"
    //       name="NbrOfPerson"
    //       placeholder="Nbr Of Person"
    //       min={0}
    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="number"
    //       name="Price"
    //       placeholder="Price"
    //       min={0}
    //     />
    //     <Form.Control
    //     style={{ margin: "10px 0px" }}
    //       as="textarea"
    //       rows="3"
    //       name="roules"
    //       placeholder="Put your roules for the ride, and separate them with ','"
    //     />
    //     <Form.Control
    //     style={{ margin: "10px 0px" }}
    //       as="textarea"
    //       rows="3"
    //       name="des"
    //       placeholder="Description from the driver"
    //     />
    //     <Form.Control
    //       style={{ margin: "10px 0px" }}
    //       type="text"
    //       name="carName"
    //       placeholder="Car name"
    //     />
    //     <button
    //       style={{
    //         padding: "5px 10px",
    //         borderRadius: "6px",
    //         margin: "10px 0px",
    //         backgroundColor: "var(--color-primary)",
    //         color: "white",
    //       }}
    //     >
    //       Publish
    //     </button>
    //   </Row>
    // </Form>

     
//      <form>
//   <div className="form-row " style={{ marginTop: "100px" , textAlign:"center"}}>
//     <div className="col-md-6" style={{ marginTop: "100px" , textAlign:"center"}}>
//       <input type="text" className="form-control" placeholder="First name" />
//     </div>
//     <div className="col-md-6">
//       <input type="text" className="form-control" placeholder="Last name" />
//     </div>
//   </div>
// </form>
 <div>
<section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4 " style={{top: "30px"}}>
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample photo" className="img-fluid" style={{borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem'}} />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Publish a ride</h3>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m">DepartureTime</label>
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="DepartureTime"/>
                     
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n">ArrivingTime</label>

                      <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder="arrivingTime" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4"> 
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m1">StartingArea</label>

                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" placeholder="StartingArea"/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n1">ArrivalArea</label>

                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" placeholder="ArrivalArea" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4"> 
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m1">Nbr of Person</label>

                      <input type="text" id="form3Example1m1" className="form-control form-control-lg" placeholder="Nbr of Person"/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n1">Price</label>

                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" placeholder="Price" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4"> 
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m1">Date</label>

                      <input type="Date" id="form3Example1m1" className="form-control form-control-lg" placeholder="Date"/>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n1">Car name</label>

                      <input type="text" id="form3Example1n1" className="form-control form-control-lg" placeholder="car name" />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example90">Roules</label>
                  <input type="text" id="form3Example90" className="form-control form-control-lg"  placeholder="Put your roules for the ride, and separate them with ','"/>
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example97">Description</label>

                  <input type="text" id="form3Example97" className="form-control form-control-lg" placeholder="Description from the driver"/>
                </div>
                <div className="d-flex justify-content-end pt-3">
                  <button type="button" className="btn btn-warning btn-lg ms-2" onClick={onSubmit} style={{ backgroundColor: "#1d6d86",  borderColor: "#1d6d86"}}>Publish</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div> 

    
  );
};

export default PublishRide;
