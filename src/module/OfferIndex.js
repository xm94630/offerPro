import React from 'react'
import pic1 from '../img/pic1.png'
import $ from 'jquery'
import {hashHistory} from 'react-router';
import Loading from './Loading'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
var l = console.log;

var OfferIndex = React.createClass({
  componentDidMount() {
    $(function(){
      $('.loadingBox').show();
    })
  },
  //将input中身份证信息更新到redux中
  updateIDValue(e){
    var myID = e.target.value;
    this.props.saveID(myID);
  },
  //提交表单
  handleClick(){
    var ID = this.props.ID;
    var saveOffers = this.props.saveOffers
    var saveName = this.props.saveName
    //根据id查询所有offer
    $.ajax({
        type: "POST",
        url: "http://os2017.51qiantu.com/offer/getOffer",
        dataType:"json",
        data: {"idNum": ID}, 
        success: function(data){
            if(data && data.code==1){
              //根据ID，保存对应的offer的信息!
              saveOffers(data.ret);
              //保存姓名
              saveName(data.ret && data.ret[0] && data.ret[0].sName );
              //页面跳转
              hashHistory.push('/OfferLists');
            }else{
              alert('no')
            };
        }
    });
  },
  render() {
    return (
      <div className="page OfferIndex">
          <div>{this.props.ID}</div>
          <div>{this.props.offers[0].cName}</div>
          <img src={pic1} width="100%"/>
          <p className="MT10">输入身份证号码<br/>快速查询您的offer信息</p>
          <div className="sanjiao MT10"></div>
          <input type="text" value={this.props.ID} onChange={this.updateIDValue} className="myInput W80P MT10"/>
          <div type="text" className="myInput submitBtn W80P MT10" onClick={this.handleClick} >查 询</div>
      
          <Loading isShow={false}/>
      </div>
    )
  }
})


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    ID: state.ID,
    offers: state.offers
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    saveID: (ID) => dispatch({type: 'saveID',ID:ID}),
    saveOffers: (arr) => dispatch({type: 'saveOffers',data:arr}),
    saveName: (name) => dispatch({type: 'saveName',name:name})
  }
}

//包装 OfferIndex
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferIndex);
