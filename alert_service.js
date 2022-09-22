import fetch from 'node-fetch';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon'
import * as turf from '@turf/turf'
// const smtp = require('./smtp')

const BASE_URL = 'https://3qbqr98twd.execute-api.us-west-2.amazonaws.com/test/clinicianstatus/';
const EMAIL = 'dummy.coding.assessment@gmail.com'; // unused
const PASSWORD = 'dummy_password'; // unused

const poll = ({ fn, interval }) => {
  console.log('Start poll...');

  const executePoll = async (resolve, reject) => {
    console.log('- poll');
    const result = await fn(7);

    const point = turf.point(result['features'][0]['geometry']['coordinates']);
    const shapes = result['features'][1]['geometry'];

    if (turf.booleanPointInPolygon(point, shapes)) {
      return resolve('success');
    } else {
      // Send email alert
      // Use smtp

      return 'failure, send alert'
      setTimeout(executePoll, interval, resolve, reject);
    }
  };

  return new Promise(executePoll);
};

const getClinicianStatus = async (id) => {
  return await fetch(BASE_URL + id)
                .then((response) => response.json());
};

const POLL_INTERVAL = 1000;
const pollForStatus = poll({
  fn: getClinicianStatus,
  interval: POLL_INTERVAL,
});

// Create function to run for an hour and constantly poll status

console.log(await pollForStatus)
