import React, {Component} from 'react';
import img2 from './image/img2.jpg'
class Hcards extends Component{
    render(){
        return(
            <div className="container">
    <div className="card border-0 py-3" style={{background:'#00000000'}}>
      <div className="row ">
        <div className="col-md-4">
            <img src={img2}
             className="w-100"></img>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3 text-left">
              <h4 className="card-title text-white">Lorem ipsum dolor sit amet</h4>
              <small className="card-text" style={{color:'black',}}>Published June 19 </small>
              <p className="card-text" style={{color:'black'}}>Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

        </div>
      </div>

      <div className="card border-0 py-3" style={{background:'#00000000'}}>
      <div className="row ">
        <div className="col-md-4">
            <img src={img2}
             className="w-100"></img>
          </div>
          <div className="col-md-8 px-3">
            <div className="card-block px-3 text-left">
              <h4 className="card-title text-white">Lorem ipsum dolor sit amet</h4>
              <small className="card-text" style={{color:'black'}}>Published June 19 </small>
              <p className="card-text" style={{color:'black'}}>Duis aute irure dolor in reprehenderit in
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
               Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>

        </div>
      </div>




    </div>

        );
    }

}
export default Hcards;