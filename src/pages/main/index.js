import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';
import './style.scss';
import pic1 from '../../images/1.jpg';

export default class Main extends Component{
    render(){
        return (
            <Page>
                <div className='container'>
                    <header>
                        <Link to='/blog/login'>登录</Link>
                        <Link to='/blog/register'>注册</Link>
                    </header>

                    <div className="section">
                        <img src={pic1}/>
                    </div>
                </div>
            </Page>
        );
    }
}

