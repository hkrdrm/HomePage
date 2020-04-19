import React        from 'react'
import Devtools     from 'mobx-react-devtools'
import GoogleSearch from './GoogleSearch'
import CardRow      from './CardRow'

const Home = () => (
  <div className="center-contents">
    <Devtools />
    <div className="center-col">
      <GoogleSearch />
      <CardRow imageSource="https://images.squarespace-cdn.com/content/5441db9ae4b0ea3fd727c19f/1413695661294-CKF955B1UH7JI5OWS98K/image-asset.png?content-type=image%2Fpng">
        <h3><a href="http://sabnzbd.zombiepirate.pro/">Sabnzbd Plus+</a></h3>
        <p>To see everything currently downloading.</p>
      </CardRow>
      <CardRow imageSource="https://cdn.rawgit.com/Sonarr/Sonarr/develop/Logo/256.png">
        <h3><a href="http://sonarr.zombiepirate.pro/">Sonarr</a></h3>
        <p>Here to add tv shows to the auto downloader.</p>
      </CardRow>
      <CardRow imageSource="https://nzbgeek.info/images/vig-logo.png">
        <h3><a href="https://nzbgeek.info/">NzbGeek</a></h3>
        <p>Go here for movies or tv shows Sonarr can&#39;t find.</p>
      </CardRow>
    </div>
  </div>
)

export default Home
