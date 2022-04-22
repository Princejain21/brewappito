import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='col col-md-4 col-sm-8  my-2 box'>
    <div className="card "  >
    <img className="card-img-top  img-fluid" src={props.url?props.url:'https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/04/GettyImages-1389231641-e1650444900367.jpg'} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title text-white">{props.title}</h5>
      <p className="card-text text-white">{props.desc?props.desc:'A case of attack on an Indian-origin Sikh taxi driver has come to the fore in America.'}</p>
  <small className='text-danger'><b>BY: {props.author?props.author:"prince jain"}</b></small>
  <div className='row justify-content-start ml-2 my-1'>
      <a href="#F" className="btn btn-dark px-1 text-white">{props.bt1}</a>
    </div>
  </div>
    </div>
      </div>
  )
}
