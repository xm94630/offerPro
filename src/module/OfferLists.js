import React from 'react'
import pic1 from '../img/pic2.png'
import card from '../img/card.png'
import {hashHistory} from 'react-router';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

var OfferLists = React.createClass({
	selectOffer(index){
		this.props.saveOfferIndex(index);
		hashHistory.push('/OfferEdit');
	},
  	render() {
	  	var ID = this.props.ID
	  	var name = this.props.name
	  	var offers = this.props.offers
	  	var offerIndex = this.props.offerIndex

	  	//指导老师
	  	//接口中的offer老师都是一样的，读取其中一个就行~
	  	var teacher = this.props.offers[0].teacher;

	  	var selectOffer = this.selectOffer
	    return (
	    	<div className="page OfferLists">
	    		<div className="picBox">
		    		<img src={pic1} width="100%"/>
		    		<span className="studentName">{this.props.name}</span>
	    		</div>
	    	    <p className="MT10">您有以下录取信息</p>
	    	    <div className="cardGroup">

	        		{
	    	            (offers).map(function(offer,i) {
		  		            return (
		  	    	    	    <div className="cardBox MT5" key={i} onClick={selectOffer.bind(null,i)}>
		  	    	    	    	<img src={card} width="100%"/>
		  	    	    	    	<div>
		  	    		    	    	<div className="offerBox">
		  	    		    	    		<div className="offerBoxCon">
		  	    			    	    		录取学院：<span className="schoolName">{offer.school}</span><br/>
		  	    								录取专业：<span className="schoolName">{offer.major}</span>
		  	    							</div>
		  	    		    	    	</div>
		  	    	    	    	</div>
		  	    	    	    </div>
		  		            )
	    	            })
	    			}

	    	    </div>
	    	    <p className="mini MT2 MB15">指导老师：<span className="teacherName">{teacher}</span></p>
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
    saveOfferIndex: (offerIndex) => dispatch({type: 'saveOfferIndex',offerIndex:offerIndex})
  }
}
//包装 OfferLists
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferLists);
