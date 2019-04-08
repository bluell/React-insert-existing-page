import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/Overview';
import Detail from './components/Detail';

// Used for debug, please comment before build.
// import sampleDetailData from './data/sample.json';

// Any Druapl realted.
class DrupalWrapper {
  /**
   * Get Drupal object from Drupal,
   * if run without drupal, set some simulate data for debug.
   */
  static getDrupal() {
    let drupal = {};
    if (typeof window.Drupal !== 'undefined') {
      drupal = {
        creds: window.Drupal.settings.my_app,
        t: window.Drupal.t,
      };
    } else {
      drupal = {
        creds: {
          api_base_url: 'https://my.app.com/',
          api_key: '123-456-789',
          locale: 'zh_TW',
          page_id: '987654321',
        },
        t: function(){},
      };
    }
    return drupal;
  }

  /**
   * Get direction from html tag.
   */
  static getDirection() {
    return document.querySelector('html').dir;
  }
}

const drupal = DrupalWrapper.getDrupal();
const direc = DrupalWrapper.getDirection();

// Use sample data to debug.
// Please also import sample data that you want in the top.
const debugDetailPage = false;

/**
 * Render my APP in the DOM.
 * @param {object} data
 */
function renderMyApp(data) {
  const pageId = drupal.creds.page_id;
  ReactDOM.render(
    <Overview data={data} creds={drupal.creds} direc={direc} t={drupal.t} />,
    document.getElementById('my-app'),
  );
  ReactDOM.render(
    <Detail data={data} creds={drupal.creds} direc={direc} t={drupal.t} />,
    document.getElementById('my-app-2'),
  );
}

// Render enter, render the DOM.
if (typeof drupal.creds !== 'undefined') {
  if (debugDetailPage) {
    // Comment this when build.
    // renderMyApp(sampleDetailData);
  } else if (document.querySelector('#my-app')) {
    apiHandler.getData()
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            renderMyApp(data);
          });
        } else {
          console.log(res.statusText);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
