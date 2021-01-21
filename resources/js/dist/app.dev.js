"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./vue/App"));

var _router = _interopRequireDefault(require("./vue/router"));

var _vuex = _interopRequireDefault(require("vuex"));

var _store = _interopRequireDefault(require("./vue/store"));

var _dayjs = _interopRequireDefault(require("dayjs"));

var _vueOffline = _interopRequireDefault(require("vue-offline"));

require("remixicon/fonts/remixicon.css");

require("../js/vue//assets/styles/index.css");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _vueFontawesome = require("@fortawesome/vue-fontawesome");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('./bootstrap');

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faFolderPlus, _freeSolidSvgIcons.faHighlighter, _freeSolidSvgIcons.faFileInvoice, _freeSolidSvgIcons.faEdit, _freeSolidSvgIcons.faBackspace, _freeSolidSvgIcons.faSave, _freeSolidSvgIcons.faTrash, _freeSolidSvgIcons.faTrashAlt, _freeSolidSvgIcons.faTimesCircle, _freeSolidSvgIcons.faTimes, _freeSolidSvgIcons.faChevronCircleLeft, _freeSolidSvgIcons.faHome);

_vue["default"].component('font-awesome-icon', _vueFontawesome.FontAwesomeIcon);

_vue["default"].use(_vuex["default"]); // Vue.use(VueOffline, {
//     mixin: false
// })


_vue["default"].use(_vueOffline["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].filter('formatDate', function (value) {
  if (value) {
    //   return moment(String(value)).format('MM/DD/YYYY hh:mm')
    return (0, _dayjs["default"])(String(value)).format('DD/MM/YYYY');
  }
});

var app = new _vue["default"]({
  el: '#app',
  components: {
    App: _App["default"]
  },
  router: _router["default"],
  store: _store["default"] // methods: {
  //     goTo(route) {
  //         this.$router.push(route);
  //     }
  // }

}); // Vue.config.productionTip = false
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')