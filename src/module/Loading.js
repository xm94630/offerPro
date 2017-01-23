import React from 'react'
import loading from '../img/triangle.gif'

export default React.createClass({
  render() {
    return (
        <div className="loadingBox myHide">
            <div className="mask"></div>
            <img src={loading}/>
        </div>
    )
  }
})
