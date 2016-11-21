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
          The YouTube Data API is called with the query pattern "&lt;firstName&gt; &lt;last name&gt; shooting", sorted by relevance, with moderate SafeSearch enabled.
          Because, sadly, many of these violent incidents were poorly covered by the media, some search results contain unrelated or questinably accurate videos.
          In the future, I'd like to implement a user-created blacklist of unrelated content, as well as a flagging system for particularly violent content.
        </p>
        <p>
          Each page also contains contact information for the US Congressional delegation for the area in which the death occured.
          This data is taken from <a href="http://whoismyrepresentative.com/api" target="_blank">this public API provided by whoismyrepresentative.com</a>.
        </p>
        <h2>Technology</h2>
        <p>
          The backend for making all API requests was built on Ruby on Rails. The database is built in PostgreSQL.
        </p>
        <p>
          The site itself is built using React, bootstrapped with Facebook's <code>create-react-app</code>. State is managed by Redux, including the Redux Thunk middleware for managing asynchronous requests. The only code re-use comes from <a href="https://www.npmjs.com/package/react-youtube-grid" target="_blank">an npm package that I published myself</a> for handling the YouTube embeds.
        </p>
      </div>
    )
  }
}
