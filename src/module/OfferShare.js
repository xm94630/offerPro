import React from 'react'
import pic from '../img/fontPic2.png'
import offerPic from '../img/offerPic.png'
import ad from '../img/ad.png'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import $ from 'jquery'
import Sharing from './Sharing.js'

var l = console.log;

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
    		<div className="adImgBox"><a href="/#/OfferForm"><img src={ad} width="100%"/></a></div>
    	
        <Sharing show={this.state.shareBox}/>
      </div>
    )
  }
})


// Map Redux state to component props
function mapStateToProps(state) {
  return {
    ID: state.ID,
    name: state.name,
    offers: state.offers,
    offerIndex: state.offerIndex
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    //saveOfferIndex: (offerIndex) => dispatch({type: 'saveOfferIndex',offerIndex:offerIndex})
  }
}
//包装 OfferLists
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(offerShare);






