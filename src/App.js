import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import axios from 'axios'
import Card from './Components/Cards/Card';
import Spinner from './Components/spinner/Spinner'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [spin, setspin] = useState(false);
  const [data, setdata] = useState([])
  useEffect(() => {
    try {
      setspin(false)
      axios.get(`https://pjnewsdata.herokuapp.com/`)
        .then(res => {
          const persons = res.data;
          setspin(true)
          setdata(persons.articles)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <>
      <Router>

        <h1 className='text-Roboto'>Live Spaces</h1>
        <p className='text-monospace'><i className="fa fa-check-circle"></i>All NFTs on Cyber either belong to or were minted by their space creator.</p>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <div className='container'>
              {!spin && <Spinner />}
              <div className='row w-100 '>
                {data.length < 1 ? null : data.map((elem, index) => {
                  return <Card key={index} url={elem.urlToImage} author={elem.author === null ? "Prince Jain " : elem.author.slice(0, 70)} desc={elem.description === null ? "hello " : elem.description.slice(0, 70)} title={elem.title === null ? "There is no title " : elem.title.slice(0, 50)} bt1={elem.source.name === null ? "Oops! 😑no info... " : elem.source.name.slice(0, 18)} />
                })}
              </div>
            </div>
          </Route>

          <Route exact path='/general'>
          <div className='container'>
          {!spin && <Spinner />}
          <div className='row w-100 '>
        {data.slice(12,21).map((elem,index)=>{
          return <Card key={index} url={elem.urlToImage} author={elem.author === null ? "Prince Jain " : elem.author.slice(0, 70)} desc={elem.description === null ? "hello " : elem.description.slice(0, 70)} title={elem.title === null ? "There is no title " : elem.title.slice(0, 50)} bt1={elem.source.name === null ? "Oops! 😑no info... " : elem.source.name.slice(0, 18)} />
        })}
          
          </div>
            </div>
          
          </Route>
          
          
          <Route exact path='/sports'>
          <div className='container'>
          {!spin && <Spinner />}
          <div className='row w-100 '>
        {data.slice(20,35).map((elem,index)=>{
          return <Card key={index} url={elem.urlToImage} author={elem.author === null ? "Prince Jain " : elem.author.slice(0, 70)} desc={elem.description === null ? "hello " : elem.description.slice(0, 70)} title={elem.title === null ? "There is no title " : elem.title.slice(0, 50)} bt1={elem.source.name === null ? "Oops! 😑no info... " : elem.source.name.slice(0, 18)} />
        })}
          
          </div>
            </div>
          </Route>
          <Route exact path='/science'>
          <div className='container'>
          {!spin && <Spinner />}
          <div className='row w-100 '>
        {data.slice(37,52).map((elem,index)=>{
          return <Card key={index} url={elem.urlToImage} author={elem.author === null ? "Prince Jain " : elem.author.slice(0, 70)} desc={elem.description === null ? "hello " : elem.description.slice(0, 70)} title={elem.title === null ? "There is no title " : elem.title.slice(0, 50)} bt1={elem.source.name === null ? "Oops! 😑no info... " : elem.source.name.slice(0, 18)} />
        })}
          
          </div>
            </div>
          </Route>
          <Route exact path='/entertainment'>
          <div className='container'>
          {!spin && <Spinner />}
          <div className='row w-100 '>
        {data.slice(52,65).map((elem,index)=>{
          return <Card key={index} url={elem.urlToImage} author={elem.author === null ? "Prince Jain " : elem.author.slice(0, 70)} desc={elem.description === null ? "hello " : elem.description.slice(0, 70)} title={elem.title === null ? "There is no title " : elem.title.slice(0, 50)} bt1={elem.source.name === null ? "Oops! 😑no info... " : elem.source.name.slice(0, 18)} />
        })}
          
          </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
