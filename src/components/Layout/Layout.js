/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

class Layout extends React.Component {
  constructor(props) {
    console.log("constructor")
    super(props);
    this.callApi = this.callApi.bind(this);
  }
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  async callApi() {
    console.log("calling api...");
    try {
      let response = await fetch('https://api.github.com/search/repositories?q=react', {
        method: 'GET',
        headers: {
          "Accept": "application/vnd.github.mercy-preview+json"
        }
      });
      let responseJson = await response.json();
      console.log(responseJson);
    } catch(err) {
      console.log("error: ", err);
    }
  }

  render() {
    return (
      <div>
        <h1>GithubActiveProjects Test</h1>
        <button onClick={this.callApi}>Click Here</button>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
