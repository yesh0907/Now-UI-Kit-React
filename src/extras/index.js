// Load all external JS files
require('./plugins/bootstrap-switch');
require('./plugins/nouislider.min.js');
require('./plugins/bootstrap-datepicker');
const nowuiKit = require('./now-ui-kit');
import $ from 'jquery';
$(document).ready(() => {
    nowuiKit.default.initSliders();
});