import { observable } from 'mobx'
// import config from 'Config'
// import axios  from 'axios'
// import Fuse   from 'fuse.js'
// import _      from 'lodash'

class SampleStore {
  @observable all = []
  @observable filtered = []
  @observable communities = []
  @observable sample = 'Sample String,'

  searchRecords = () => {
    /*
     * Implement Search
     */
  }

  getRecords = () => {
    /* Use axios or another async to grab records */
    /*
      axios.get(`${config.api}/get`)
        .then((response) => {
          this.all = JSON.parse(response.data)
        })
     */
  }
}

export default new SampleStore()
