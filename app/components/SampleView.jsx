import { Input, Select, Card, Table } from 'antd'
import { observer, inject }    from 'mobx-react'
import React from 'react'
import _     from 'lodash'

import Devtools from 'mobx-react-devtools'


const Search = Input.Search
const Option = Select.Option

@inject('sampleStore')
@observer class SampleView extends React.Component {
  render() {
    console.log('SampleStore', this.props.sampleStore)
    return (
      <div className="center-contents">
        <Devtools />
        <Card title="Sample View" style={{ width: '60%' }}>
          <Search onChange={this.search} placeholder="Search MSAG" enterButton />
        </Card>
      </div>
    )
  }
}

export default SearchMsag
