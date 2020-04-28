import React, { Component } from 'react'
import HeadNavFoot from '../HeadNavFoot'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { getBankDash } from '../../redux/actions/BankActions'

class BankDashboard extends Component {

    constructor(props){
      super(props);
      this.state={
        bank : props.location.state.item
      }
    }


    componentDidMount(){
      this.props.getBankDash(this.props.location.state.item.tenantId);
    }

    render() {
      const dashData = this.props.bankDash;
      console.log(dashData)
      const activeAtms = dashData.activeAtm;
      // console.log(activeAtms.length)

      const bank = this.state.bank;
      const bankName = bank.bankName;
        return (
            <div>
                <HeadNavFoot />
      {/* ================================= Main Page Content - Start ===============================*/}
      <main className="main-container">
        <div className="in-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 px-0">
                {/*============================== Right Main Column Starts ==================================*/}
                {/* ***************************************************************************************** */}
                <div className="right-main-column">
                  <div className="right-col-container">
                    {/*================================ Body code starts Here ===================================*/}
                    <div className="main-content">
                      <div className="in-mcontainer">
                        {/*=============================== breadcrumb starts ===============================*/}
                        <div className="breadcrumb">
                          <ul className="lst-breadcrumb">
                            <li>
                              <Link to="/banks">Banks</Link>
                            </li>
                            <li>
                              {bankName}
                            </li>
                          </ul>
                          {/*.lst-breadcrumb*/}
                        </div>
                        {/* .breadcrumb */}
                        {/*=============================== breadcrumb ends ===============================*/}
                        {/*============================ grid container starts ============================*/}
                        <div className="grid-container2">
                          <div className="row">                                                    
                            <div className="col-12 col-xl-6 col-lg-4 col-md-12">
                              <h1>{bankName}</h1>
                            </div>
                            <div className="col-12 col-xl-6 col-lg-8 col-md-12 text-right mt-2">
                              <ul className="dt-buttons">
                                <li>
                                  <a href="#" className="dt-add secondary button">
                                    <em>New ATM</em>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    5 Y
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    3 Y
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    1 Y
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    6 M
                                  </a>
                                </li>
                                <li>
                                  <a href="#" className="button1 secondary">
                                    1 M
                                  </a>
                                </li> 
                                <li>
                                  <a href="#" className="button1 secondary active">
                                    Today
                                  </a>
                                </li>
                              </ul>
                              {/* dt-buttons */}
                            </div>                                                
                          </div>
                          <div className="vspacer20" />
                          <div className="row">
                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                              <div className="widget-box1">
                                <div className="component-title6">
                                  <h3>ATM Cash Availability</h3>
                                </div> 
                                <div className="component-box">
                                  <div className="row"> 
                                    <div className="col-12" style={{height: '260px'}}>
                                    </div>
                                  </div>   
                                </div>
                              </div> 
                            </div>
                            <div className="col-xl-6 col-lg-12 col-sm-12 col-12">
                              <div className="row"> 
                                <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                  <div className="widget-box wb-single medium">
                                    <Link to={{pathname:"/atms" , state:{atms:dashData.activeAtm , item :this.state.bank}}}> 
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="number">
                                            <h2>{dashData.activeAtmCount}</h2> 
                                          </div> 
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="small-heading">
                                            <h3>Active ATMs</h3>
                                          </div> 
                                        </div>
                                      </div>
                                    </Link> 
                                  </div> 
                                </div>
                                <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                  <div className="widget-box wb-single medium">
                                  <Link to={{pathname:"/atms" , state:{atms:dashData.inactiveAtm , item :this.state.bank}}}>
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="number">
                                            <h2>{dashData.inactiveAtmCount}</h2> 
                                          </div> 
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="small-heading">
                                            <h3>Inactive ATMs</h3>
                                          </div> 
                                        </div>
                                      </div> 
                                    </Link>
                                  </div> 
                                </div>
                                <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                  <div className="widget-box wb-single medium">
                                  <Link to={{pathname:"/atms" , state:{atms:dashData.outOfServiceAtm , item :this.state.bank}}}>
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="number">
                                            <h2>{dashData.outOfServiceAtmCount}</h2> 
                                          </div> 
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="small-heading">
                                            <h3>Out of Service ATMs</h3>
                                          </div> 
                                        </div>
                                      </div> 
                                    </Link>
                                  </div> 
                                </div>
                                <div className="col-xl-6 col-lg-6 col-sm-6 col-12">
                                  <div className="widget-box wb-single medium">
                                    <Link to={{pathname:"/atms" , state:{item:bank}}}> 
                                      <div className="row">
                                        <div className="col-12 text-center">
                                          <div className="number">
                                            <h2>
                                              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
                                                <g>
                                                  <g>
                                                    <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                                                                                    c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                                                                                    l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                                                                                    c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z" />
                                                  </g>
                                                </g>
                                              </svg>
                                            </h2> 
                                          </div> 
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-12 p-0 text-center">
                                          <div className="small-heading">
                                          
                                            <h3>
                                            View All ATMs
                                            </h3>
                                            
                                          </div> 
                                        </div>
                                      </div>
                                    </Link> 
                                  </div> 
                                </div>
                              </div>
                            </div> 
                          </div>
                          <div className="vspacer20" />
                          <div className="row">
                            <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                              <div className="widget-box1">
                                <div className="component-title6">
                                  <h3>ATM Transactions</h3>
                                </div> 
                                <div className="component-box">
                                  <div className="row"> 
                                    <div className="col-12" style={{height: '230px'}}>
                                    </div>
                                  </div>   
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                        {/* grid container ends */} 
                        <div className="vspacer50" />
                        {/*============================ grid container ends ============================*/}
                      </div>
                      {/* .in-mcontainer */}
                    </div>
                    {/* .main-content */}
                    {/*================================ Body code starts Ends ===================================*/}
                    {/* ***************************************************************************************** */}
                  </div>
                  {/* .right-col-container */}
                </div>
                {/*  .right-main-column */}
                {/*============================== Right Main Column Ends ==========================================*/}
                {/* *********************************************************************************************** */}
              </div>
              {/*  col-12 */}
            </div>
            {/* row */}
          </div>
          {/* .container-fluid  */}
        </div>
        {/* .in-main */}
      </main>
      {/* .main-container */}
      {/* ============================================== Main Page Content - End ===============================================*/}
    
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return{
      bankDash : state.bankDash,
      load : state.loading
    }
}

export default connect(mapStateToProps,{getBankDash})(BankDashboard);
