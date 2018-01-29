import React from 'react'
import { Card } from 'antd'

require('../styles/antd-theme.less')

const CardRow = props => (
  <div className="links">

    <Card style={{ width: '100%' }}>
      <div className="flex-row">
        <img src={props.imageSource} height="75px" width="75px" alt="" />
        <div className="flex-col">
          { props.children }
        </div>
      </div>
    </Card>
  </div>
)

export default CardRow
