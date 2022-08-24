import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import FilterRideForm from "../Components/FilterRideForm";
import SearchRideForm from "../Components/SearchRideForm";
import { Link } from "react-router-dom";

const Search = () => {
  const [show, setShow] = useState(true);
  const data = [
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
    {
      Driver: "alex",
      DepartureTime: "17:50",
      arrivingTime: "18:50",
      startingArea: "zaghoan",
      arrivalArea: "tunis",
      price: "50$",
      NbrOfPerson: 5,
    },
  ];

  return (
    <Container style={{ marginTop: "125px" }}>
      <Row>
        <Col
          md={12}
          lg={6}
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {show ? <FilterRideForm /> : <SearchRideForm />}
          <button
            style={{
              padding: "5px 25px",
              borderRadius: "6px",
              margin: "17px 0px",
              backgroundColor: "var(--color-primary)",
              color: "white",
            }}
            onClick={() => setShow(!show)}
          >
            change search
          </button>
        </Col>
        <Col md={12} lg={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {data.map((el) => (
              <div
                style={{
                  padding: 20,
                  width: "360px",
                  margin: "10px 5px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: 15,
                  cursor: "pointer",
                  //   "&:hover": {
                  //     boxShadow: '0px 0px 48px 0px rgba(0,0,0,0.55)'
                  //   },
                  // ma 7abetech te5dem :/
                }}
              >
                <Link
                  to="/ItemRide"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "var(--fontSize-text-p)",
                        textAlign: "center",
                        color: "var(--color-primary)",
                      }}
                      className="fw-bold fst-italic"
                    >
                      <span
                        className="bi bi-person-circle"
                        style={{
                          marginRight: "5px",
                        }}
                      ></span>
                      {el.Driver}
                    </span>
                    <span
                      style={{
                        fontSize: "var(--fontSize-text-p)",
                        textAlign: "center",
                        color: "var(--color-time)",
                      }}
                      className="fw-bold fst-italic"
                    >
                      {el.price}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      backgroundColor: "#dfdfdf",
                      padding: "10px 20px",
                      borderRadius: 7,
                      marginTop: 10,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "var(--fontSize-text-p)",
                          textAlign: "center",
                          color: "var(--color-primary)",
                        }}
                        className="fw-bold fst-italic"
                      >
                        {el.DepartureTime}
                      </div>
                      <div
                        style={{
                          fontSize: "var(--fontSize-text-p)",
                          textAlign: "center",
                          color: "var(--color-primary)",
                        }}
                        className="fw-bold fst-italic"
                      >
                        {el.arrivingTime}
                      </div>
                    </div>
                    <div>
                      <div>{el.startingArea}</div>
                      <div>{el.arrivalArea}</div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "var(--fontSize-text-p)",
                        textAlign: "center",
                        color: "var(--color-primary)",
                      }}
                      className="fw-bold fst-italic"
                    >
                      <div>{el.NbrOfPerson} Person(s)</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
