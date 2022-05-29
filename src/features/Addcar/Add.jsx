import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import '../Addcar/Add.css';

const Add = () => {
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
 
        <section className="beacumb"> 
            <div className="crumb">Cars</div>
            <FiChevronRight className="rightchevron" />
            <div className="listcumb">List car</div>
            <FiChevronRight className="chevronrigh" />
            <div className="figma">Add New Car</div>
        </section>  

        <h5 className="neutral">Add New Car</h5>

        <form action="" className="form">

        </form>
    </>
  )
}

export default Add