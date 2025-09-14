System.register("chunks:///_virtual/%E5%8C%BA%E6%9C%8D%E9%80%89%E6%8B%A9.ts.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,i,o,r,l,c,a,u,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,c=e.Button,a=e.Label,u=e.director,s=e.Component}],execute:function(){var p,d,f,g,b,B,h,y,E;r._RF.push({},"8e992Rt+pdKY5ZsmGwIl6/l","%E5%8C%BA%E6%9C%8D%E9%80%89%E6%8B%A9.ts",void 0);var R=l.ccclass,m=l.property;e("SelectRegion",(p=R("SelectRegion"),d=m([c]),f=m(a),g=m(c),p((h=t((B=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,i(t,"regionButtons",h,o(t)),i(t,"selectedLabel",y,o(t)),i(t,"enterButton",E,o(t)),t.selectedRegion="",t}return n(t,e),t.prototype.onLoad=function(){var e=this;this.regionButtons.forEach((function(t){t.node.on("click",(function(){e.selectedRegion=t.node.name,e.selectedLabel.string="当前选择："+e.selectedRegion}))})),this.enterButton.node.on("click",(function(){e.selectedRegion?u.loadScene("GameMain"):e.selectedLabel.string="请先选择一个大区哦~"}))},t}(s)).prototype,"regionButtons",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=t(B.prototype,"selectedLabel",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=t(B.prototype,"enterButton",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=B))||b));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./%E5%8C%BA%E6%9C%8D%E9%80%89%E6%8B%A9.ts.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});