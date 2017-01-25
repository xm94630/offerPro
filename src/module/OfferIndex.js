import React from 'react'
import pic1 from '../img/pic1.png'
import $ from 'jquery'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
var l = console.log;

var OfferIndex = React.createClass({
  componentDidMount() {
    $(function(){
          $('.loadingBox').show();
    })
  },
  handleClick(){
  },
  render() {
    var onIncreaseClick = this.props.onIncreaseClick
    var value = this.props.value
    return (
      <div className="page OfferIndex">
          <div onClick={onIncreaseClick}>{value}</div>
          <img src={pic1} width="100%"/>
          <p className="MT10">输入身份证号码<br/>快速查询您的offer信息</p>
          <div className="sanjiao MT10"></div>
          <input type="text" className="myInput W80P MT10"/>
          <div type="text" className="myInput submitBtn W80P MT10" onClick={this.handleClick} >查 询</div>
      </div>
    )
  }
})


// Action
const increaseAction = { type: 'increase' }
// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

//包装 OfferIndex
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferIndex);
