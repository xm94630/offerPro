import React from 'react'
import Mask from './Mask.js'


export default React.createClass({
  getInitialState(){
    return {
      show:this.props.isShow,
      info:this.props.info
    }
  },

  clickFun(){
    this.setState({
      show:false
    })
    if(this.props.okFun=='goBack'){
      //返回
      window.history.go(-1);
    }
  },

  //这个非常非常重要！！
  componentWillReceiveProps(nextProps) {
      this.setState({
        show: nextProps.isShow,
        info: nextProps.info,
      });
  },

  render() {
    if(this.state.show){
      return (  
        <div className="dialogBox" ref="lala" ref={(div) => { this.myDiv = div; }}>
            <Mask />
            <div className="dialogCon">
              <div className="title myHide">学生姓名：xxx</div>
              <div className="con">{this.state.info}</div>
              <div type="text" className="myInput submitBtn W90P MT20" onClick={this.clickFun} >
                {this.props.type=="okBtn"?"确 认":"再次查询"}
              </div>
            </div>
        </div>
      )
    }else{
      return null;
    }
  }
})
