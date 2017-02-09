import React from 'react'
import Mask from './Mask.js'
import shareImg from '../img/shareImg2.png'

export default React.createClass({
  getInitialState(){
    return {
      show:this.props.show
    }
  },

  clickFun(){
    this.setState({
      show:false
    })
  },

  //这个非常非常重要！！
  componentWillReceiveProps(nextProps) {
      this.setState({show: nextProps.show});
  },

  render() {
    if(this.state.show){
      return (  
        <div className="shareBox" ref="lala" ref={(div) => { this.myDiv = div; }}>
            <Mask />
            <img src={shareImg} onClick={this.clickFun}/>
        </div>
      )
    }else{
      return null;
    }
  }
})
