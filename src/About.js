import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h2>Data Sources</h2>
        <p>
          Raw data was taken from <a href="http://mappingpoliceviolence.org/" target="_blank">Mapping Police Violence</a>.
          I cleaned up text formatting and encoding in order to save the data as a .csv which was then loaded into a PostgreSQL database.
          Additionally, I collapsed some of the data categories into broader overall categories. The original database migration took place on 11/10/2016, and used <a href="http://mappingpoliceviolence.org/s/MPVDatasetDownload-756f.xlsx" target="_blank">this file</a>.
        </p>
        <p>
          The YouTube videos you see in the detailed view are generated via a simple search.
          The YouTube Data API is called with the query pattern "&lt;firstName&gt; &lt;lastName&gt; shooting", sorted by relevance, with moderate SafeSearch enabled.
          Because, sadly, many of these violent incidents were poorly covered by the media, some search results contain unrelated or questionably accurate videos.
          In the future, I'd like to implement a user-created blacklist of unrelated content, as well as a flagging system for particularly violent content.
        </p>
        <p>
          Each page also contains contact information for the US Congressional delegation for the area in which the death occurred.
          This data is taken from <a href="http://whoismyrepresentative.com/api" target="_blank">this public API provided by whoismyrepresentative.com</a>.
        </p>
        <h2>Technology</h2>
        <p>
          The backend for making all API requests was built on Ruby on Rails. The database is built in PostgreSQL. I chose Rails for the ease of setup, despite the "heaviness" of its memory usage.
          The three resources (people, representatives, and videos) are far from RESTfully routed, as each only has one route. The most complex is the /people route, which takes a number of optional query parameters. Those parameters are then turned into a hash, which is passed to ActiveRecord to search the database.
          The /representatives/:zip and /videos/:name routes both take in one parameter and use the HTTParty gem to hit an external API. Sending API requests via the server is generally more secure and obscures the API key.
        </p>
        <p>
          The front end of the site itself is built using React, bootstrapped with Facebook's <code>create-react-app</code>. State is managed by Redux, including the Redux Thunk middleware for managing asynchronous requests.
          I'm a huge fan of how Thunk handles asynchronous dispatches to the Redux store. It allows for a more functional design approach to state management.
          The only code re-use comes from <a href="https://www.npmjs.com/package/react-youtube-grid" target="_blank">an npm package that I published myself</a> for handling the YouTube embeds.
        </p>
        <p>
          I deployed the Rails API separately from the front-end. The Rails app is deployed on a DigitalOcean server using the Dokku platform. This container management system has quickly grown to be my favorite way of deploying apps.
          <br/>
          The front-end package is deployed on an iPage server that serves some of my purely static projects. I'm using React Router's <code>hashHistory</code> method, which works just fine without a server to talk to.
        </p>
      </div>
    )
  }
}
