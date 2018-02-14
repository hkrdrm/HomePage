import { Input, Card, Button } from 'antd'
import React from 'react'

const Search = Input.Search

const GoogleSearch = () => {
  return(
    <Card title="Google Search">
      <form method="get" action="http://www.google.com/search">
        <div className="form-item">
          <Search
            type="text"
            name="q"
            placeholder="Search Google"
          />
        </div>
        <div className="form-item">
          <Button type="primary" htmlType="submit">Search</Button>
        </div>
      </form>
    </Card>
  )
}

export default GoogleSearch
