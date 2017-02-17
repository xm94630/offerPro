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
import OfferForm from './module/OfferForm'
var l = console.log;


// Reducer
function counter(state= {ID:'',name:'',offers:[{}],offerIndex:-1,shareUrl:''}, action) {
  const ID = state.ID
  const name = state.name
  const offers = state.offers
  const offerIndex = state.offerIndex
  const shareUrl = state.shareUrl
  switch (action.type) {

    case 'saveUrl':
      return { 
        shareUrl: action.shareUrl,

        ID: action.ID,
        name: name,
        offers: offers,
        offerIndex: offerIndex
      }
    case 'saveID':
       return {
        ID: action.ID,
        name: name,
        offers: offers,
        offerIndex: offerIndex
       }
    case 'saveName':
      return { 
        ID: ID,
        name: action.name,
        offers: offers,
        offerIndex: offerIndex
      }
    case 'saveOffers':
      return {
        ID:ID,
        name:name,
        offers:action.data,
        offerIndex: offerIndex
      }
    case 'saveOfferIndex':
      return {
        ID:ID,
        name:name,
        offers:offers,
        offerIndex:action.offerIndex
      }
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
      <Route path="/OfferShare/:offerId" component={OfferShare}></Route>
      <Route path="/OfferForm" component={OfferForm}></Route>
    </Router>
  </Provider>
), document.getElementById('app'))




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






                      








