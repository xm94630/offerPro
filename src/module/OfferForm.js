import React from 'react'
import pic3 from '../img/pic3.png'
import $ from 'jquery'
import {hashHistory} from 'react-router';
import Loading from './Loading'
import Dialog from './Dialog.js'
var l = console.log;

export default React.createClass({

  getInitialState(){
    return{
      "name": "",
      "mobile": "",
      "country": "",
      "region": "",
      "degree": "",
      "loadingShow":false,
      "diglogShow":false
    }
  },

  componentDidMount() {
  },

  setValue(e){

    var v = e.target.value;
    var name = e.target.name;
    console.log(v)
    console.log(name)
    switch(name){
      case 'name':
        this.setState({
          diglogShow:false,
          name:v
        });
        break;
      case 'mobile':
        this.setState({
          diglogShow:false,
          mobile:v
        });
        break;
      case 'country':
        this.setState({
          diglogShow:false,
          country:v
        });
        break;
      case 'region':
        this.setState({
          diglogShow:false,
          region:v
        });
        break;
      case 'degree':
        this.setState({
          diglogShow:false,
          degree:v
        });
        break;
    }
  },


  //提交表单
  handleClick(){

    //loding界面
    var that = this;
    that.setState({loadingShow:true});

    //提交学生信息
    $.ajax({
        type: "POST",
        url: "http://os2017.51qiantu.com/student/save",
        dataType:"json",
        data: {
          "name": this.state.name,
          "mobile": this.state.mobile,
          "country": this.state.country,
          "region": this.state.region,
          "degree": this.state.degree
        },
        success: function(data){
          if(data && data.code==1){
            that.setState({
              loadingShow:false,
              diglogShow:true,
              ajaxInfo:data.ret
            });
          }else{
            that.setState({
              loadingShow:false,
              diglogShow:true,
              ajaxInfo:data.ret
            });
          };
        }
    });

  },

  render() {
    return (
      <div className="page OfferForm">
          <img src={pic3} width="100%"/>
          <input placeholder="姓名" name="name" type="text" value={this.props.ID} onChange={this.setValue} className="myInput W80P MT20"/>
          <input placeholder="手机号码" name="mobile" type="text" value={this.props.ID} onChange={this.setValue} className="myInput W80P MT10"/>
          <div className="selectBox W80P MT10">
            <select defaultValue="意向国家" placeholder="" name="country" type="text" value={this.props.ID} onChange={this.setValue} className="myInput">
              <option disabled>意向国家</option>
              <option>美国</option>
              <option>英国</option>
            </select>
            <div className="sanjiao"></div>
          </div>
          <div className="selectBox W80P MT10">
            <select defaultValue="攻读学位" placeholder="" name="degree" type="text" value={this.props.ID} onChange={this.setValue} className="myInput">
              <option disabled>攻读学位</option>
              <option>美国</option>
              <option>英国</option>
            </select>
            <div className="sanjiao"></div>
          </div>
          <div className="selectBox W80P MT10">
            <select defaultValue="所在地区" placeholder="" name="region" type="text" value={this.props.ID} onChange={this.setValue} className="myInput">
              <option disabled defaultValue="selected">所在地区</option>
              <option>美国</option>
              <option>英国</option>
            </select>
            <div className="sanjiao"></div>
          </div>
          <div type="text" className="myInput submitBtn W80P MT30" onClick={this.handleClick} >提 交</div>
      
          <Loading isShow={this.state.loadingShow}/>
          <Dialog isShow={this.state.diglogShow} info={this.state.ajaxInfo} type="okBtn"/>
      </div>
    )
  }
})
