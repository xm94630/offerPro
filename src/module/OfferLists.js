import React from 'react'
import pic1 from '../img/pic2.png'
import card from '../img/card.png'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
var l = console.log;

var OfferLists = React.createClass({
  render() {
  	var onIncreaseClick = this.props.onIncreaseClick
  	var ID = this.props.ID
    return (
    	<div className="page OfferLists">
    		<div onClick={onIncreaseClick}>{ID}</div>
    		<div className="picBox">
	    		<img src={pic1} width="100%"/>
	    		<span className="studentName">令狐冲</span>
    		</div>
    	    <p className="MT10">您有以下录取信息</p>
    	    <div className="cardGroup">
	    	    <div className="cardBox MT5">
	    	    	<img src={card} width="100%"/>
	    	    	<a href="/">
		    	    	<div className="offerBox">
		    	    		<div className="offerBoxCon">
			    	    		录取学院：<span className="schoolName">斯特拉斯克莱德</span><br/>
								录取专业：<span className="schoolName">艺术与设计</span>
							</div>
		    	    	</div>
	    	    	</a>
	    	    </div>
    	    </div>
    	    <p className="mini MT2 MB15">指导老师：<span className="teacherName">岳不群</span></p>
    	</div>
    )
  }
})


// Action
const increaseAction = { type: 'increase' }
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    ID: state.ID
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}
//包装 OfferLists
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferLists);
