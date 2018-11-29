import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import fullpage from 'fullpage.js';
import './style.scss';
import pic1  from '../../images/1.jpg';
import pic2  from '../../images/2.jpg';
import pic3  from '../../images/3.jpg';
import pic4  from '../../images/4.jpg';

export default class Main extends Component{
  constructor(props){
     super(props)
  }

  componentDidMount(){
    var fullPageInstance = new fullpage('#fullpage', {
      navigation: true,
      scrollHorizontally: true,
      css3: true,
      scrollingSpeed: 700,
      scrollBar: false,
      easing: 'easeInOutCubic',
      slidesNavigation: true,
      easingcss3: 'ease',
  });
  }

  render(){
    return (
      <Page>
        <div className='container'>
          <header>
            <Link to='/login'>登录</Link>
            <Link to='/login'>注册</Link>
          </header>
        <div id="fullpage">
          <div className="section">
            <img src={pic1}/>
          </div>
          <div className="section">
            <img src={pic2}/>
          </div>
          <div className="section">
            <img src={pic3}/>
          </div>
          <div className="section">
            <img src={pic4}/>
          </div>
        </div>


        </div>
        
      </Page>
    )
  }
}