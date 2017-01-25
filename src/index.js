import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import $ from 'jquery'
import './index.css'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import OfferIndex from './module/OfferIndex'
import OfferLists from './module/OfferLists'
import OfferEdit from './module/OfferEdit'
import OfferShare from './module/OfferShare'
import Loading from './module/Loading'

var l = console.log;

// Reducer
function counter(state= {count:99}, action) {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return { count: count + 1 }
    default:
      return state
  }
}
// Store
const store = createStore(counter)

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={OfferIndex}></Route>
      <Route path="/OfferLists" component={OfferLists}></Route>
      <Route path="/OfferEdit" component={OfferEdit}></Route>
      <Route path="/OfferShare" component={OfferShare}></Route>
    </Router>
  </Provider>
), document.getElementById('app'))



/*render((
	<Loading/>
), document.getElementById('loading'))
*/

//base64数据格式
/*$(function(){
	var canvas=document.getElementById('myCanvas');  
	var ctx=canvas.getContext('2d');  
	ctx.fillStyle='#FF0000';  
	ctx.fillRect(0,0,100,100); 
	var imageData =  canvas.toDataURL('image/png');  
	//document.getElementById('myimage').src = imageData;
	var data=imageData.substr(22);    
	l(data);  


	$.ajax({
	    type: "POST",
	    url: "http://os2017.51qiantu.com/offer/generate",
	    dataType:"json",
	    data: {
	      "reName": '孙悟空',
	      "pic":data,
	      "watermark":1,
	    },
	    success: function(data){
	        console.log('+>');
	        console.log(data);
	    }
	});

})*/



//查询所有offer
/*$.ajax({
    type: "POST",
    url: "http://os2017.51qiantu.com/offer/getOffer",
    dataType:"json",
    data: {"idNum": '140427198902272916'},
    success: function(data){
        console.log(data);
    }
});*/

//查询单独offer
/*$.ajax({
    type: "GET",
    url: "http://os2017.51qiantu.com/offer/detail/"+8,
    dataType:"json",
    success: function(data){
        console.log('==>');
        console.log(data);
    }
});*/

//提交offer修改信息


//提交学生信息
/*$.ajax({
    type: "POST",
    url: "http://os2017.51qiantu.com/student/save",
    dataType:"json",
    data: {
      "name": "徐明",
      "mobile": "13800001111",
      "country": "中国",
      "region": "浙江",
      "degree": "博士"
    },
    success: function(data){
        console.log('==>');
        console.log(data);
    }
});*/






                      








