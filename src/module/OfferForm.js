import React from 'react'
import pic3 from '../img/pic3.png'
import $ from 'jquery'
import {hashHistory} from 'react-router';
import Loading from './Loading'
import Dialog from './Dialog.js'

export default React.createClass({

  getInitialState(){
    return{
      "okFun":"",
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

    //前端验证
    if(this.state.name.replace(/(^\s*)|(\s*$)/g,'').length==0){
      that.setState({
        loadingShow:false,
        diglogShow:true,
        ajaxInfo:"客户姓名不能为空"
      });
      return;
    }else if(!/1\d{10}$/.test(this.state.mobile)){
      that.setState({
        loadingShow:false,
        diglogShow:true,
        ajaxInfo:"手机号码格式错误"
      });
      return;
    }else if(this.state.country.length==0){
      that.setState({
        loadingShow:false,
        diglogShow:true,
        ajaxInfo:"意向国家不能为空"
      });
      return;
    }else if(this.state.degree.length==0){
      that.setState({
        loadingShow:false,
        diglogShow:true,
        ajaxInfo:"攻读学位不能为空"
      });
      return;
    }else if(this.state.region.length==0){
      that.setState({
        loadingShow:false,
        diglogShow:true,
        ajaxInfo:"所在地区不能为空"
      });
      return;
    }

    //提交学生信息
    $.ajax({
        type: "POST",
        url: "http://liuxue.xdf.cn/wcm/WCMV6/xdf/do_custom.jsp",
        dataType:"jsonp",
        jsonp:"jsonCallBack",
        data: {
          "jumpUrl": '',
          "Remark": '新媒体',
          "isPC": 'no',
          "isSend": 'yes',
          "Name": this.state.name,
          "Phone": this.state.mobile,
          "Country": this.state.country,
          "City": this.state.region,
          "Degree": this.state.degree
        },
        success: function(data){
          if(data && data.count==1){
            that.setState({
              okFun:'goBack',
              loadingShow:false,
              diglogShow:true,
              ajaxInfo:'提交成功'
            });
          }else{
            that.setState({
              loadingShow:false,
              diglogShow:true,
              ajaxInfo:'提交失败'
            });
          };
        }
    });

  },

  render() {
    return (
      <div className="page OfferForm">
          <img src={pic3} width="100%"/>
          <input placeholder="姓名" name="name" type="text" value={this.props.ID} onChange={this.setValue} className="myInput W80P MT10"/>
          <input placeholder="手机号码" name="mobile" type="text" value={this.props.ID} onChange={this.setValue} className="myInput W80P MT10"/>
          <div className="selectBox W80P MT10">
            <select defaultValue="意向国家" placeholder="" name="country" type="text" value={this.props.ID} onChange={this.setValue} className="myInput">
              <option disabled>意向国家</option>
              <option>美国</option>
              <option>英国</option>
              <option>加拿大</option>
              <option>澳大利亚</option>
              <option>新西兰</option>
              <option>欧洲</option>
              <option>亚洲</option>
            </select>
            <div className="sanjiao"></div>
          </div>
          <div className="selectBox W80P MT10">
            <select defaultValue="攻读学位" placeholder="" name="degree" type="text" value={this.props.ID} onChange={this.setValue} className="myInput">
              <option disabled>攻读学位</option>
              <option>中学</option>
              <option>本科</option>
              <option>研究生</option>
              <option>博士</option>
            </select>
            <div className="sanjiao"></div>
          </div>
          <div className="selectBox W80P MT10">
            <select defaultValue="所在地区" placeholder="" name="region" type="text" value={this.props.ID} onChange={this.setValue} className="myInput">
              <option disabled defaultValue="selected">所在地区</option>
              <option>北京中关村</option>
              <option>北京国贸</option>
              <option>上海</option>
              <option>南京</option>
              <option>武汉</option>
              <option>西安</option>
              <option>郑州</option>
              <option>深圳</option>
              <option>广州</option>
              <option>长沙</option>
              <option>重庆</option>
              <option>合肥</option>
              <option>成都</option>
              <option>杭州</option>
              <option>昆明</option>
              <option>济南</option>
              <option>天津</option>
              <option>青岛</option>
              <option>苏州</option>
              <option>厦门</option>
              <option>福州</option>
              <option>石家庄</option>
              <option>沈阳</option>
              <option>大连</option>
              <option>南昌</option>
              <option>长春</option>
              <option>乌鲁木齐</option>
              <option>兰州</option>
              <option>太原</option>
              <option>宁波</option>
              <option>哈尔滨</option>
              <option>无锡</option>
              <option>唐山</option>
              <option>洛阳</option>
              <option>贵阳</option>
              <option>南宁</option>
              <option>常州</option>
              <option>呼和浩特</option>
              <option>宜昌</option>
              <option>温州</option>
              <option>徐州</option>
            </select>
            <div className="sanjiao"></div>
          </div>
          <div type="text" className="myInput submitBtn W80P MT20" onClick={this.handleClick} >提 交</div>
      
          <Loading isShow={this.state.loadingShow}/>
          <Dialog isShow={this.state.diglogShow} info={this.state.ajaxInfo} type="okBtn" okFun={this.state.okFun}/>
      </div>
    )
  }
})
