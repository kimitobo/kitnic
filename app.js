!function e(t,r,a){function i(o,s){if(!r[o]){if(!t[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(n)return n(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var m=r[o]={exports:{}};t[o][0].call(m.exports,function(e){var r=t[o][1][e];return i(r?r:e)},m,m.exports,e,t,r,a)}return r[o].exports}for(var n="function"==typeof require&&require,o=0;o<a.length;o++)i(a[o]);return i}({1:[function(e,t,r){t.exports=[{id:"github.com/kitnic-forks/arduino-uno",summary:"The Arduino Uno is a microcontroller board based on the ATmega328."},{id:"git.defproc.co.uk/DefProc/piezo-sensor",summary:"A conditioning circuit for using a piezo as an impact sensor for foam darts"},{id:"github.com/kitnic-forks/BQ25570_Harvester",summary:"TI BQ25570 step-up DC-DC energy harvester and battery charger"},{id:"github.com/descampsa/DynamixelShield",summary:"Arduino shield to connect Dynamixel servomotors"},{id:"github.com/8BitMixtape/NextLevelEdition",summary:"8-BitMixtape NextLevelEdition"},{id:"github.com/kitnic-forks/FM_Transmitter",summary:"Simple low powered FM radio transmitter based on a MAX2606"},{id:"github.com/GenericLab/Unagi_Gar-Lampli",summary:"based on this new attiny bootloader and a minimal board to check / follow a fermentation curve time/temp profile and show by different colors."},{id:"github.com/dvdfreitag/Signal-Detector",summary:"A low-cost RF power detector based on the AD8319"},{id:"github.com/GenericLab/Gar-Lampli",summary:"Gär Lämpli"},{id:"github.com/kitnic-forks/neo",summary:"comma neo research platform"},{id:"github.com/kanflo/aaduino",summary:"An AA sized ISM radio Arduino clone"},{id:"github.com/InaneCoding/KOS01_IdealDiode20A",summary:"20A 5V-60V Ideal Diode using the LTC4359 controller"},{id:"github.com/jpralves/cseduino",summary:"CSEduino, a very low cost DIY Arduino like board"},{id:"github.com/JarrettR/USBvil",summary:"USBvil is a low-cost PIC dev board that fits into a common flashdrive case."},{id:"github.com/monostable/jelly",summary:"A jellyfish shaped light-following bristle bot"},{id:"github.com/kitnic-forks/Bus_Pirate",summary:"The Bus Pirate is an open source hacker multi-tool that talks to electronic stuff."},{id:"github.com/kasbah/push-on-hold-off",summary:"Simple power switch using a push button. Push to turn on, hold to turn off."},{id:"github.com/kasbah/nomech",summary:"A 4x4 capacitive touch button grid"},{id:"github.com/kitnic-forks/HACK",summary:"HackAday Cortex Kit"},{id:"github.com/mattvenn/esp8266-breakout",summary:"ESP8266-12 breakout board"},{id:"github.com/pcbsz/AtariSynth",summary:"Simple Atari punk synth."},{id:"github.com/pcbsz/LM386",summary:"Simple LM386 amplifier"},{id:"github.com/pcbsz/SimpleAmp",summary:"Simple LM3886TF amplifier."},{id:"github.com/robotsrulz/SP_Adapter",summary:"Logitech G25/G27 shifter/pedals adapter to use as standalone device"},{id:"github.com/UDXS/Arduitsy",summary:"A tiny Arduino dev board that can fit anywhere!"}]},{}],2:[function(e,t,r){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i=e("react"),n=i.createClass({displayName:"FadeImage",propTypes:{style:i.PropTypes.any,speed:i.PropTypes.any,src:i.PropTypes.string.isRequired},getInitialState:function(){return{opacity:0}},fadeIn:function(){this.setState({opacity:1})},render:function(){var e=this.props.style||{};return e.transition="opacity "+(this.props.speed||1)+"s",e.opacity=this.state.opacity,i.createElement("img",a({},this.props,{style:e,src:this.props.src,onLoad:this.fadeIn}))}});t.exports=n},{react:"react"}],3:[function(e,t,r){"use strict";function a(e,t,r){var a=e;return r&&(a=i(a)),a.length>t&&(a=a.substr(0,t)," "!==a[t]&&(a=a.concat(" ")),a=a.concat("...")),r&&(a=i(a)),a}function i(e){return e.split("").reverse().join("")}var n=e("react"),o=e("react-responsive"),s=e("../lazy_load"),c=e("../fade_image"),l=e("../media_queries"),m=n.createClass({displayName:"BoardCard",propTypes:{lazyLoad:n.PropTypes.bool,data:n.PropTypes.object},render:function(){var e,t=this;return e=this.props.lazyLoad?n.createElement(s,{once:!0,component:n.createElement("div",{className:"img"}),distance:300},n.createElement(o,{query:l.mobile},function(e){return e?n.createElement(c,{src:"boards/"+t.props.data.id+"/images/top-large.png",className:"img"}):n.createElement(c,{src:"boards/"+t.props.data.id+"/images/top.png",className:"img"})})):n.createElement("img",{src:"boards/"+this.props.data.id+"/images/top.svg",className:"img"}),n.createElement("div",{className:"boardCard"},n.createElement("a",{href:"/boards/"+this.props.data.id},n.createElement("div",{className:"imgContainer"},e),n.createElement("div",{className:"title"},a(this.props.data.id.split("/").slice(2).join(" / "),30,!0)),n.createElement("div",{className:"url"},a(this.props.data.id.split("/").slice(0,2).join(" / "),30,!0)),n.createElement("div",{className:"summary"},a(this.props.data.summary,85))))}});t.exports=m},{"../fade_image":2,"../lazy_load":10,"../media_queries":11,react:"react","react-responsive":"react-responsive"}],4:[function(e,t,r){"use strict";var a=e("react"),i=e("./board_card"),n=e("./intro"),o=a.createClass({displayName:"BoardList",propTypes:{data:a.PropTypes.array,searching:a.PropTypes.bool},render:function(){var e=this.props.searching?null:a.createElement(n,null);if(0===this.props.data.length)return a.createElement("div",null,a.createElement("div",{style:{height:"40%"}}),a.createElement("div",{style:{width:"100%",textAlign:"center"}},"Sorry, no results."));var t=this.props.data.map(function(e,t){return a.createElement(i,{data:e,key:e.id+t,lazyLoad:!0})});return a.createElement("div",null,e,a.createElement("div",{className:"boardList"},t))}});t.exports=o},{"./board_card":3,"./intro":6,react:"react"}],5:[function(e,t,r){"use strict";var a=e("react"),i=e("react-search-input"),n=e("../title_bar"),o=e("./board_list"),s=e("../boards.json"),c=i["default"],l=a.createClass({displayName:"Main",getInitialState:function(){return{result:s,searching:!1}},render:function(){return a.createElement("div",null,a.createElement(n,{submissionButton:!0},a.createElement("div",{className:"searchContainer"},a.createElement("div",{className:"searchBackground"},a.createElement("div",{className:"searchInputIcon"},a.createElement("span",{className:"icon-search searchIcon"})),a.createElement(c,{className:"searchInput",onChange:this.searchUpdated})))),a.createElement(o,{data:this.state.result,searching:this.state.searching}))},handleKeydown:function(e){return 13==e.which&&document.getElementsByClassName("searchInput")[0].firstElementChild.blur(),!1},componentDidMount:function(){document.getElementsByClassName("searchInput")[0].firstElementChild.addEventListener("keydown",this.handleKeydown)},searchUpdated:function(e){var t=["id","summary"],r=s.filter(i.createFilter(e,t));if(e.length>2){var a=0===r.length?"no_result":"result";ga("send","pageview","/search?q="+e+"&results="+a)}this.setState({result:r,searching:e.length>0})}});t.exports=l},{"../boards.json":1,"../title_bar":12,"./board_list":4,react:"react","react-search-input":"react-search-input"}],6:[function(e,t,r){"use strict";function a(e){return i.createElement("center",null,i.createElement("div",{style:o.introContainer},i.createElement("div",{className:"introText",style:o.intro},i.createElement("p",null,"Kitnic is a registry of open hardware electronics projects that are ready for you to order and build. Click on any project to get further info, download the Gerbers and see the bill of materials."),i.createElement("p",null,"*** If you are having issues controlling carts from the Firefox extension, use Chrome for now, a fix will be released as v1.2.8 as soon as Mozilla approves the changes. ***"),i.createElement("p",null,"To quickly purchase the parts from various retailers you should ",i.createElement("a",{className:"clickableLink",onClick:n},"install")," the 1-click BOM extension. It's pretty useful on it's own too and can be used on other sites. Read more about it ",i.createElement("a",{className:"clickableLink",href:"http://1clickBOM.com"},"here"),"."),i.createElement("p",null,"Help build an open hardware repository of useful electronics projects! ",i.createElement("a",{href:"/submit"},"Submit")," your own project to have it listed here. Follow Kitnic on ",i.createElement("a",{href:"https://twitter.com/kitnic_it"},"Twitter"),", ",i.createElement("a",{href:"https://www.facebook.com/kitnicit"},"Facebook"),", ",i.createElement("a",{href:"https://reddit.com/r/kitnic"},"Reddit"),", ",i.createElement("a",{href:"https://hackaday.io/project/11871-kitnic"},"Hackaday.io")," or ",i.createElement("a",{href:"https://github.com/monostable/kitnic"},"GitHub")," to get updates as we progress and add content."),i.createElement("p",null,i.createElement("i",null,"We are giving away free PCB manufacturing vouchers with ",i.createElement("a",{href:"http://dangerousprototypes.com/store/pcbs"},"Dangerous Prototypes")," for the first 20 projects that register. Current status: 5/20 left.")))))}var i=e("react"),n=e("../install_extension"),o={introContainer:{marginLeft:"10%",marginRight:"10%",marginTop:32,marginBottom:32},intro:{backgroundColor:"#FAFAFA",padding:20,borderRadius:5,textAlign:"left",maxWidth:700}};t.exports=a},{"../install_extension":8,react:"react"}],7:[function(e,t,r){"use strict";var a=e("react"),i=e("react-dom"),n=e("./index");i.render(a.createElement(n,null),document.getElementById("content"))},{"./index":5,react:"react","react-dom":"react-dom"}],8:[function(e,t,r){"use strict";var a=e("browser-version"),i=function(){var e=a(),t=void 0;return t=/Chrome/.test(e)?function(){chrome.webstore.install(void 0,void 0,function(e){return console.log(e)})}:/Firefox/.test(e)?function(){window.open("//addons.mozilla.org/firefox/downloads/latest/634060/addon-634060-latest.xpi","_self")}:function(){window.open("//1clickBOM.com","_self")}};t.exports=i()},{"browser-version":"browser-version"}],9:[function(e,t,r){"use strict";t.exports=function(e,t){"number"!=typeof t&&(t=0);var r=e.getBoundingClientRect(),a={top:r.top+t,left:r.left+t,right:r.right-t,bottom:r.bottom-t},i=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,o=a.top>=0&&a.left>=0,s=a.bottom<=i&&a.right<=n;return o&&s}},{}],10:[function(e,t,r){"use strict";var a=e("react"),i=e("react-dom"),n=e("./is_visible"),o=a.createClass({displayName:"LazyLoad",propTypes:{distance:a.PropTypes.number,component:a.PropTypes.node.isRequired,children:a.PropTypes.node.isRequired,once:a.PropTypes.bool},getDefaultProps:function(){return{distance:100,component:a.createElement("div",null),once:!1}},getInitialState:function(){return{visible:!1}},componentDidMount:function(){this._checkViewport(),this._timer=setInterval(this._checkViewport,1e3)},componentWillUnmount:function(){clearInterval(this._timer)},_checkViewport:function(){if(!this.props.once||!this.state.visible){var e=i.findDOMNode(this);this.setState({visible:n(e,this.props.distance)})}},render:function(){return this.state.visible?this.props.children:this.props.component}});t.exports=o},{"./is_visible":9,react:"react","react-dom":"react-dom"}],11:[function(e,t,r){"use strict";var a="\n  (orientation: portrait) and (max-device-width: 480px)\n  , (orientation: landscape) and (max-device-width: 660px)\n",i="\n  (orientation: portrait) and (max-device-width: 480px)\n  , (orientation: landscape) and (max-device-width: 660px)\n  , (max-width: 810px)\n",n="(max-width: 810px)";t.exports={mobile:a,mobile_or_small_width:i,small_width:n}},{}],12:[function(e,t,r){"use strict";var a=e("react"),i=e("semantic-ui-react"),n=i.Button,o=a.createClass({displayName:"TitleBar",propTypes:{children:a.PropTypes.any,submissionButton:a.PropTypes.bool},render:function(){var e=void 0;return e=this.props.submissionButton?a.createElement(n,{color:"green",onClick:function(){return location.href="/submit"}},"Submit a project"):null,a.createElement("div",{className:"titleBar"},a.createElement("div",{className:"logoContainer"},a.createElement("a",{href:"/"},a.createElement("img",{className:"logoImg",src:"/images/logo.svg"}))),a.createElement("div",{className:"middleContainer"},this.props.children),a.createElement("div",{className:"submitContainer"},e,a.createElement("a",{className:"contributeContainer",title:"Contribute to Kitnic",href:"https://github.com/monostable/kitnic/"},a.createElement("div",{className:"contributeButton"},a.createElement("span",{className:"octicon octicon-mark-github githubIcon"})))))}});t.exports=o},{react:"react","semantic-ui-react":"semantic-ui-react"}]},{},[7]);