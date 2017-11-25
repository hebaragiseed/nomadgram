import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';


Reactotron.configure({name: 'Nomadgram'}).connect()
  .use(reactotronRedux());

export default Reactotron;
