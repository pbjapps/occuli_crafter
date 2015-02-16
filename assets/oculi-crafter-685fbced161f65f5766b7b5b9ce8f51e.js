define("oculi-crafter/app",["exports","ember","ember/resolver","ember/load-initializers","oculi-crafter/config/environment"],function(t,e,n,d,i){"use strict";e["default"].MODEL_FACTORY_INJECTIONS=!0;var r=e["default"].Application.extend({modulePrefix:i["default"].modulePrefix,podModulePrefix:i["default"].podModulePrefix,Resolver:n["default"]});d["default"](r,i["default"].modulePrefix),t["default"]=r}),define("oculi-crafter/initializers/app-version",["exports","oculi-crafter/config/environment","ember"],function(t,e,n){"use strict";var d=n["default"].String.classify;t["default"]={name:"App Version",initialize:function(t,i){var r=d(i.toString());n["default"].libraries.register(r,e["default"].APP.version)}}}),define("oculi-crafter/initializers/export-application-global",["exports","ember","oculi-crafter/config/environment"],function(t,e,n){"use strict";function d(t,d){var i=e["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[i]&&(window[i]=d)}t.initialize=d,t["default"]={name:"export-application-global",initialize:d}}),define("oculi-crafter/router",["exports","ember","oculi-crafter/config/environment"],function(t,e,n){"use strict";var d=e["default"].Router.extend({location:n["default"].locationType});d.map(function(){}),t["default"]=d}),define("oculi-crafter/templates/application",["exports","ember"],function(t,e){"use strict";t["default"]=e["default"].Handlebars.template(function(t,n,d,i,r){this.compilerInfo=[4,">= 1.0.0"],d=this.merge(d,e["default"].Handlebars.helpers),r=r||{};var a,l="";return a=d._triageMustache.call(n,"outlet",{hash:{},hashTypes:{},hashContexts:{},contexts:[n],types:["ID"],data:r}),(a||0===a)&&r.buffer.push(a),r.buffer.push('\n<div class="container">\n  <h1>Oculi Roughness</h1>\n  <table class="table table-striped table-bordered table-condensed">\n    <tr>\n      <td>Rough</td>\n      <td>Tumbled</td>\n      <td>Faceted</td>\n      <td>Brilliant</td>\n    </tr>\n    <tr>\n      <td><div class="rough oculi-emerald"></div></td>\n      <td><div class="tumbled oculi-emerald"></div></td>\n      <td><div class="faceted oculi-emerald"></div></td>\n      <td><div class="brilliant oculi-emerald"></div></td>\n    </tr>\n  </table>\n\n  <h1>Oculi Types</h1>\n  <table class="table table-striped table-bordered table-condensed">\n    <tr>\n      <td>Oculi Gem</td>\n      <td>Type</td>\n      <td>Image</td>\n    </tr>\n    <tr>\n      <td>Sapphire</td>\n      <td>Basic</td>\n      <td><div class="rough oculi-sapphire"></div></td>\n    </tr>\n    <tr>\n      <td>Ruby</td>\n      <td>Basic</td>\n      <td><div class="rough oculi-ruby"></div></td>\n    </tr>\n    <tr>\n      <td>Emerald</td>\n      <td>Basic</td>\n      <td><div class="rough oculi-emerald"></div></td>\n    </tr>\n    <tr>\n      <td>Tourmaline</td>\n      <td>Level 1</td>\n      <td><div class="rough oculi-tourmaline"></div></td>\n    </tr>\n    <tr>\n      <td>Amethyst</td>\n      <td>Level 1</td>\n      <td><div class="rough oculi-amethyst"></div></td>\n    </tr>\n    <tr>\n      <td>Citrine</td>\n      <td>Level 1</td>\n      <td><div class="rough oculi-citrine"></div></td>\n    </tr>\n    <tr>\n      <td>Diamond</td>\n      <td>Level 1</td>\n      <td><div class="rough oculi-diamond"></div></td>\n    </tr>\n    <tr>\n      <td>Onyx</td>\n      <td>Level 2</td>\n      <td><div class="rough oculi-onyx"></div></td>\n    </tr>\n    <tr>\n      <td>Spinel</td>\n      <td>Level 2</td>\n      <td><div class="rough oculi-spinel"></div></td>\n    </tr>\n    <tr>\n      <td>Princess Stone</td>\n      <td>Level 3</td>\n      <td><div class="rough oculi-princess"></div></td>\n    </tr>\n  </table>\n</div>\n'),l})}),define("oculi-crafter/config/environment",["ember"],function(t){var e="oculi-crafter";try{var n=e+"/config/environment",d=t["default"].$('meta[name="'+n+'"]').attr("content"),i=JSON.parse(unescape(d));return{"default":i}}catch(r){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("oculi-crafter/tests/test-helper"):require("oculi-crafter/app")["default"].create({name:"oculi-crafter",version:"0.0.0.702c2d11"});