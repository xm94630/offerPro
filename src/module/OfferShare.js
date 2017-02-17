import React from 'react'
import pic from '../img/fontPic2.png'
import offerPic from '../img/offerPic.png'
import offer from '../img/offer.png'
import ad from '../img/ad.png'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import $ from 'jquery'
import Sharing from './Sharing.js'

var offerShare = React.createClass({
  getInitialState(){
    return {
      reName:'',
      imgNew:'',
      school:'',
      major:'',
      shareBox:false
    }
  },
  
  componentDidMount(){
    var that = this;
    var offerId = this.props.params.offerId;

    //保存本页面地址
    this.props.saveUrl( window.location.href  );

    //判断的依据就是，如果是一步一步得到的，那么是有redux存储的！
    if(that.props.offerIndex===-1){
      //这个是微信上直接得到的分享页面
    }else{
      //这个是用户自己生成的分享页面，隐藏测测的那个链接
      that.adBox.style.display = "none";
    }
    
    //根据id查询所有offer
    $.ajax({
        type: "GET",
        url: "http://os2017.51qiantu.com/offer/detail/"+offerId,
        dataType:"json",
        success: function(data){
          var data = data.ret;
          var imgNew = data.imgNew;
          var reName = data.reName;
          var school = data.school;
          var major = data.major;
          render(reName,imgNew,school,major);

          document.getElementsByTagName('title')[0].innerHTML = '【录取喜报】恭喜 '+reName+' 同学获得 '+school+' 录取OFFER！';

        }
    });

    function render(name,img,school,major){
      that.setState({
        reName: name,
        imgNew: img,
        school: school,
        major: major
      });

      //canvas读取读片
      var ctx = document.getElementById('myCanvas').getContext("2d");
      var w = $(window).width()
      $('#myCanvas').attr("width",w).attr("height",w); 
      var image = new Image();         
      image.src = 'http://os2017.51qiantu.com/'+img;  
      image.onload = function() {  
        ctx.drawImage(image, 0, 0,w,w);  
      } 
    }
  },
  
  shareFun(){
    this.setState({shareBox:true})
  },

  render() {
    return (
    	<div className="page OfferEdit">
    		<div className="picBox">
          <img src={offer} className="hidePic"/>
          <img src={pic} width="100%"/>
	    		<span className="studentName2">{this.state.reName}</span>
    		</div>
    		<div className="canvasBox">
    			<canvas id="myCanvas" width="100" height="100"></canvas>
    		</div>	
    		<div className="checkInfoBox2 MT15">
				<span>获得 {this.state.school} - {this.state.major} 录取offer！</span>
    		</div>
    		<div type="text" className="myInput submitBtn W80P MT10" onClick={this.shareFun}>分享喜悦</div>
    		
        <div className="adImgBox" ref={(adBox) => { this.adBox = adBox; }} >
          <a href="/#/OfferForm"><img src={ad} width="100%"/></a>
        </div>
    	
        <Sharing show={this.state.shareBox}/>
      </div>
    )
  }
})


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    shareUrl: state.shareUrl,
    ID: state.ID,
    name: state.name,
    offers: state.offers,
    offerIndex: state.offerIndex
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    saveUrl: (shareUrl) => dispatch({type: 'saveUrl',shareUrl:shareUrl})
  }
}
//包装 OfferLists
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(offerShare);






