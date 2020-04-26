import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getDashboard} from '../../redux/actions/DashboardActions';

class Admincontent extends Component {


    constructor(props){
        super(props)
        this.state={
            loginTime : localStorage.getItem("logintime")
        }
    }

    componentDidMount() {
    if (!this.props.load) {
          this.props.getDashboard()
        }
    }


    render() {

        console.log(this.props)
        const dashData = this.props.dashboard;
        return (
            <div>
        <main className="main-container">
            <div className="in-main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 px-0">

                            <div className="right-main-column">
                                <div className="right-col-container">
                                    <div className="main-content">
                                        <div className="in-mcontainer">
                                           
                                            <div className="grid-container2">
                                                <div className="row">                                                    
                                                   <div className="col-12 col-xl-6 col-lg-4 col-md-12">
                                                        <h1>Welcome, John Smith</h1>
                                                        <h3>Last Login {this.state.loginTime}</h3>
                                                   </div>
                                                   <div className="col-12 col-xl-6 col-lg-8 col-md-12 text-right mt-2">
                                                       <ul className="dt-buttons">
                                                            <li>
                                                                <a href="#" className="dt-add secondary button">
                                                                    <em>New Bank</em>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="button1 secondary">
                                                                   Last 1 Week  
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="button1 secondary">
                                                                   Ysterday 
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="button1 secondary">
                                                                    Today 
                                                                </a>
                                                            </li>
                                                             
                                                        </ul>
                                                   </div>                                                
                                               </div>
                                               <div className="vspacer20"></div>
                                               <div className="row">
                                                  <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                      <div className="widget-box wb-single medium">
                                                         <a href="/bankList"> 
                                                          <div className="row">
                                                              <div className="col-12 text-center">
                                                                <div className="number">
                                                                    <h2 className="counter">{dashData.bankCount}</h2> 
                                                                </div> 
                                                              </div>
                                                           </div>
                                                      <div className="row">
                                                       <div className="col-12 text-center">
                                                          <div className="small-heading">
                                                                <h3>Total Banks</h3>
                                                          </div> 
                                                          </div>
                                                         </div>
                                                        </a> 
                                                      </div> 
                                                  </div>
                                                  <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                    <div className="widget-box wb-single medium">
                                                        <div className="row">
                                                            <div className="col-12 text-center">
                                                              <div className="number">
                                                                  <h2 className="counter">{dashData.atmCount}</h2> 
                                                              </div> 
                                                            </div>
                                                         </div>
                                                    <div className="row">
                                                     <div className="col-12 text-center">
                                                        <div className="small-heading">
                                                              <h3>Total ATM</h3>
                                                        </div> 
                                                        </div>
                                                       </div> 
                                                    </div> 
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                    <div className="widget-box wb-single medium">
                                                        <div className="row">
                                                            <div className="col-12 text-center">
                                                              <div className="number">
                                                                  <h2 className="counter">{dashData.lowCashAtm}</h2> 
                                                              </div> 
                                                            </div>
                                                         </div>
                                                    <div className="row">
                                                     <div className="col-12 text-center">
                                                        <div className="small-heading">
                                                              <h3>Low Cash ATMs</h3>
                                                        </div> 
                                                        </div>
                                                       </div> 
                                                    </div> 
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                                                    <div className="widget-box wb-single medium">
                                                        <div className="row">
                                                            <div className="col-12 text-center">
                                                              <div className="number">
                                                                  <h2 className="counter">{dashData.outOfService}</h2> 
                                                              </div> 
                                                            </div>
                                                         </div>
                                                    <div className="row">
                                                     <div className="col-12 p-0 text-center">
                                                        <div className="small-heading">
                                                              <h3>Out of Services ATMs</h3>
                                                        </div> 
                                                        </div>
                                                       </div> 
                                                    </div> 
                                                </div>

                                             </div>
                                   <div className="vspacer20"></div>
 
                                      <div className="row">
                                        <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                            <div className="widget-box1">
                                                  <div className="component-title6">
                                                       <h3>Top 10 Transacted ATMs</h3>
                                                     </div> 
                                                     <div className="component-box">
                                                        <div className="row"> 
                                                            <div className="col-12" style={{"height":"120px" }}>
                                                                   
                                                            </div>
                                                       </div>   
                                                   </div>
                                            </div> 
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                            <div className="widget-box1">
                                                  <div className="component-title6">
                                                       <h3>Most 10 Failed ATMs</h3>
                                                     </div> 
                                                     <div className="component-box">
                                                        <div className="row"> 
                                                            <div className="col-12" style={{ "height":"120px" }}>
                                                                 
                                                            </div>
                                                      </div>   
                                                   </div>
                                            </div> 
                                        </div>
                                    </div>
                                    <div className="vspacer20"></div>
                                              <div className="row">
                                                  <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                                      <div className="widget-box1">
                                                            <div className="component-title6">
                                                                 <h3>ATM Availability</h3>
                                                               </div> 
                                                               <div className="component-box">
                                                                  <div className="row"> 
                                                                      <div className="col-12" style={{"height":"200px" }}>
                                                                             
                                                                      </div>
                                                                 </div>   
                                                             </div>
                                                      </div> 
                                                  </div>
                                                  <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                                                      <div className="widget-box1">
                                                            <div className="component-title6">
                                                                 <h3>Faulty Device Type</h3>
                                                               </div> 
                                                               <div className="component-box">
                                                                  <div className="row"> 
                                                                      <div className="col-12" style={{ "height" :"200px" }}>
                                                                           
                                                                      </div>
                                                                </div>   
                                                             </div>
                                                      </div> 
                                                  </div>
                                              </div>
                                           </div>
                                          
                                            <div className="vspacer30"></div>
                                            <div className="global-footer">
                                                <div className="in-glfooter">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-3 col-lg-2 col-md-2 col-sm-3 px-0">
                                                                <div className="glfooter-content">
                                                                    <div className="glfooter-box">
                                                                        <div className="logo-left">
                                                                            <img src="../images/logo/kiya-logo.png" alt="kiy-logo" /> 
                                                                        </div>
                                                                      </div>
                                                                  </div>  
                                                            </div>
                                                            <div className="col-6 col-lg-8 col-md-8 col-sm-6">
                                                                <div className="glfooter-content">
                                                                    <div className="glfooter-box">
                                                                         <div className="glcopyright-text1">
                                                                            <em>Powered by Kiya.ai ATM Monitoring System © 2020 Infrasoft Technologies Ltd - All rights reserved</em>
                                                                        </div>
                                                                     </div>
                                                                 </div>
                                                            </div>
                                                            <div className="col-3 col-lg-2 col-md-2 col-sm-3 px-0">
                                                                <div className="glfooter-content">
                                                                    <div className="glfooter-box">
                                                                        <div className="logo-right">
                                                                            <img src="../images/logo/infrasoft-logo.png" alt="infrasoft-logo" /> 
                                                                        </div>
                                                                      </div>
                                                                  </div>  
                                                            </div>
                                                         </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>

            </div>
        )
    }
}


const mapStateToProps =(state) =>{
    return {
        dashboard : state.dashboard,
        load: state.loading,
    }
}

export default connect(mapStateToProps,{getDashboard})(Admincontent);
