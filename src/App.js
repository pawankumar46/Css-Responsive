import React , {useState, useEffect} from 'react'
import pic3 from './images/pic3.jpg'
import pie from  './images/pie-chart.jpg'
import line from './images/graph.png'
import last from './images/bi-line.png'
import count from './images/count.jpg'
import axios from 'axios'

function App(props) {
    const [data , setData] = useState([])
  return (
 
         <div>
          <nav>


          </nav>
<div className="col-md-12">
    <div className="row">
      
      <div className="col-md-6">
        
          <div className="shadow-sm p-1 bg-body">
           <img src={pic3} alt='' style={{width : "100%" , height: '350px'}} /> 
         
        </div>
      </div>
    
      <div className="col-md-3" >
        <div className="row">
          <div className="col-md-6">
            <div className="shadow-sm p-1 bg-body" style={{height:" 160px"}}>
            <img  src={count} alt=''  style={{height : '140px' , width : '150px'}}/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="shadow-sm p-1 bg-body" style={{height:" 160px"}}>
               
               <img  src={pie} alt=''  style={{height : '140px' , width : '150px'}}/>
                
            </div>
          </div>
        </div>
    
        <div className="row" style={{marginTop: "10px"}}>
          <div className="col-md-12">
            <div className="shadow-sm p-1 bg-body " style={{height:" 160px"}}>
            <img  src={line} alt=''  style={{height : '140px' , width : '350px'}}/>
            </div>
          </div>
        </div>
    
      </div>
    
      <div className="col-md-3">
        <div className="row">
          <div className="col-md-12">
            <div className="shadow-sm p-1 bg-body " style={{height:" 160px"}}>
               <div style={{textAlign : 'center'}}> 
               <h4>Weather</h4>
                <p><i class=" fs-3 bi bi-brightness-high-fill"></i>Temperature = 23c</p>
                <p> <i class=" fs-3 bi bi-cloud-rain-fill"></i>Precipitation = 2%</p>
               </div>
               
            </div>
          </div>
          <div className="col-md-12 " style={{marginTop: "10px" }}>
            <div className="shadow-sm p-1 " style={{height:" 160px" , backgroundColor : '#FFC0CB'}}>
              <div >
              <h5>Notes</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero </p>
              </div>
             
          </div>
        </div>
    
        
    
      </div>
      </div>
    
      <div className="row" style={{marginTop: "10px"}}>
        <div className="col-md-3" style={{padding: "2px"}}>
         <div className="shadow-sm p-1 bg-body " style={{height:" 160px"}}>
         <div className="row" style={{marginLeft: "5px" , marginRight : '5px'}}>
           <div className="col-md-8" style={{backgroundColor: "#90EE90"}}>
               <h4 style={{textAlign : 'center'}}>Items</h4>
               
             </div>
           <div className="col-md-4" style={{backgroundColor: "#D3D3D3"}}>
           <h4 style={{textAlign : 'center'}}>No's</h4>
           </div>
         </div>
         <div className="row" style={{marginTop: "40px",padding : "2px"}}>
           <div className="col-md-4" >
               <h5>500</h5>
             </div>
           <div className="col-md-4">
               <h5>100</h5>
           </div>
           <div className="col-md-4">
             <h5>200</h5>
         </div>
         </div>
         </div>
         
       </div>
       <div className="col-md-3" style={{padding: "2px"}}>
         <div className="shadow-sm p-1 bg-body " style={{height: "160px"}}>
         <div className="row" style={{marginLeft: "5px" , marginRight : '5px'}}>
           <div className="col-md-8" style={{backgroundColor: "#90EE90"}}>
           <h4 style={{textAlign : 'center'}}>Items</h4>
             </div>
           <div className="col-md-4" style={{backgroundColor: "#D3D3D3"}}>
           <h4 style={{textAlign : 'center'}}>No's</h4>
           </div>
         </div>
         <div className="row" style={{marginTop: "40px"}}>
           <div className="col-md-4">
               <h5 style={{paddingLeft : '5px'}}>600</h5>
             </div>
           <div className="col-md-4">
               <h5>250</h5>
           </div>
           <div className="col-md-4">
             <h5>90</h5>
         </div>
         </div>
         </div>
         
       </div>
       <div className="col-md-3" style={{padding: "2px"}}>
         <div className="shadow-sm p-1 bg-body " style={{height: "160px"}}>
         <div className="row" style={{marginLeft: "5px" , marginRight : '5px'}}>
           <div className="col-md-8" style={{backgroundColor: "#90EE90"}}>
           <h4 style={{textAlign : 'center'}}>Items</h4>
             </div>
           <div className="col-md-4" style={{backgroundColor: "#D3D3D3"}}>
           <h4 style={{textAlign : 'center'}}>No's</h4>
           </div>
         </div>
         <div className="row" style={{marginTop: "40px"}}>
           <div className="col-md-4">
               <h5>500</h5>
             </div>
           <div className="col-md-4">
               <h5>400</h5>
           </div>
           <div className="col-md-4">
             <h5>600</h5>
         </div>
         </div>
         </div>
         
       </div>
       <div className="col-md-3" >
          
         <div className="shadow-sm p-1 " style={{height: "160px" , backgroundColor : '#F1E5AC'}}>
           <h5>Notes</h5>
           <p><i class=" fs-4 bi bi-pen"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero
           </p>
         </div>
      
       
     </div>
     </div>
    
        <div className="row" style={{marginTop: "10px"}}>
        
          <div className="col-md-3"  style={{padding: "2px"}}>
           <div className="shadow-sm p-1 bg-body "  style={{height: "160px"}}>
           <div className="row" style={{marginLeft: "5px" , marginRight : '5px'}}>
             <div className="col-md-8" style={{backgroundColor: "#90EE90"}}>
             <h4 style={{textAlign : 'center'}}>Items</h4>
               </div>
             <div className="col-md-4" style={{backgroundColor: "#D3D3D3"}}>
             <h4 style={{textAlign : 'center'}}>No's</h4>
             </div>
           </div>
           <div className="row" style={{marginTop: "40px"}}>
             <div className="col-md-4">
                 <h5>400</h5>
               </div>
             <div className="col-md-4">
                 <h5>50</h5>
             </div>
             <div className="col-md-4">
               <h5>100</h5>
           </div>
           </div>
           </div>
           
         </div>
         <div className="col-md-3" style={{padding: "2px"}}>
           <div className="shadow-sm p-1 bg-body " style={{height: "160px"}}>
           <div className="row" style={{marginLeft: "5px" , marginRight : '5px'}}>
             <div className="col-md-8" style={{backgroundColor: "#FFC0CB"}}>
             <h4 style={{textAlign : 'center'}}>Items</h4>
               </div>
             <div className="col-md-4" style={{backgroundColor: "#D3D3D3"}}>
             <h4 style={{textAlign : 'center'}}>No's</h4>
             </div>
           </div>
           <div className="row" style={{marginTop: "40px"}}>
             <div className="col-md-4">
                 <h5>700</h5>
               </div>
             <div className="col-md-4">
                 <h5>300</h5>
             </div>
             <div className="col-md-4">
               <h5>150</h5>
           </div>
           </div>
           </div>
           
         </div>
         <div className="col-md-3"  style={{padding: "2px"}}>
         <div className="shadow-sm p-1 bg-body " style={{height: "160px"}}>
             <img src={last} alt='' style={{height : '140px' , width : '350px'}}/>
           </div>
           
         </div>
         <div className="col-md-3" style={{padding: "2px"}}>
           <div className="shadow-sm p-1 bg-body " style={{height: "160px"}}>
             <h4 style={{textAlign : 'center', marginTop : '40px'}}><i class="bi bi-star"></i>4.6</h4>
           </div>
        
         
       </div>
       </div>
    
    </div>
  </div>
    </div>
  );
}

export default App
