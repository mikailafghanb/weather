
import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './App';
// import 'weather-icons2/css/weather-icons.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './assets/test.css';
/**
 * This is the main entry point of the portlet.
 *
 * See https://tinyurl.com/js-ext-portlet-entry-point for the most recent 
 * information on the signature of this function.
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({ portletNamespace, user_name, portletElementId }) {

    ReactDOM.render(
        <AppComponent />,
        // document.getElementById(portletNamespace),
        // document.getElementById(user_name),
        document.getElementById(portletElementId)
    );

}