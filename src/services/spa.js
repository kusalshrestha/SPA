import axios from 'axios';
import utils from './../utils/utils';
import { BASE_URL } from './../constants/uri/uri';

const VERSION = 'api/v1';
const PATH = 'competitions';
const FIXTURES = 'fixtures';
const TEAMS = 'teams';

const SPA = {

  getFixtures: () => {
    console.log('0000', utils.buildPath([BASE_URL, VERSION, FIXTURES]))
    return axios.get(utils.buildPath([BASE_URL, VERSION, FIXTURES]))
      .then(res => {
        return res.data;
      });
  },

};

export default SPA;
