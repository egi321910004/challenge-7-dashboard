import React from 'react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiPlus } from 'react-icons/fi';
import img3 from '../Car/car.png';
import img4 from '../Car/key.svg';
import img5 from '../Car/clock.svg';
import "../Car/Car.css";

const Car = () => {
  return (
    <>
      <section className="cars">
        <div className="car">
          <h5 className="main">CARS</h5>
        </div>
        <div className="listcar">
          <h6 className="menu">List Car</h6>
        </div>
      </section>

      <section className="breadcrumb">
        <div className="crumb">Cars</div>
        <FiChevronRight className="rightchevron" />
        <div className="licar">List car</div>
      </section>

      <h5 className="listmobil">List Car</h5>

      <Link to="/dashboard/add" className="newcar">
        <div> <FiPlus /> Add New Car</div>
      </Link>

      <section className="sizebutton">
        <Button className="all">All</Button>
        <Button className="small">Small</Button>
        <Button className="medium">Medium</Button>
        <Button className="big">Large</Button>
      </section>

      <section className="card">
        <div className="crd1">
          <div className="cdr1">
            <img src={img3} alt="Mobil Innova" className="innova" />

            <div className="name-car">
              <h5 className="inova-car">Innova</h5>
              <h6 className="inova-price">Rp 500.000 / hari</h6>
            </div>

            <div className="rent">
              <img src={img4} alt="icon key" className="icon-key" />
              <p className="start-rent">Start rent - Finish rent</p>
            </div>

            <div className="update-car">
              <img src={img5} alt="icon clock" className="icon-clock" />
              <p className="updated">Updated at 4 Apr 2022, 09.00</p>
            </div>
          </div>

          <div className="switch">
            <Button className="delete">Delete</Button>
            <Button className="edit">Edit</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Car