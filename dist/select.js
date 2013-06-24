define("arale/select/0.9.5/select",["arale/overlay/1.1.0/overlay","$","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/widget/1.1.0/widget","arale/base/1.1.0/base","arale/class/1.1.0/class","arale/events/1.1.0/events","arale/templatable/0.9.1/templatable","gallery/handlebars/1.0.2/handlebars","./select.handlebars"],function(a,b,c){function d(a,b){var c,d=[],e=a.options,f=e.length,g=!1;for(c=0;f>c;c++){var h,i={},j=e[c],k=["text","value","defaultSelected","selected"];for(h in k){var l=k[h];i[l]=j[l]}i.defaultSelected=j.defaultSelected?"true":"false",j.selected?(i.selected="true",g=!0):i.selected="false",d.push(i)}return g||(newModel[0].selected="true"),{select:d,classPrefix:b}}function e(a,b){var c,d,e,f,g=[],h=[];for(c=0,e=a.length;e>c;c++){var i=a[c];i.selected?(i.selected=i.defaultSelected="true",h.push(c)):i.selected=i.defaultSelected="false",g.push(i)}if(h.length>0)for(h.pop(),d=0,f=h.length;f>d;d++)g[d].selected="false";else g[0].selected="true";return{select:g,classPrefix:b}}function f(a,b){var c;return c=h.isNumeric(a)?a:"string"==typeof a?b.index(b.parent().find(a)):b.index(a)}var g=a("arale/overlay/1.1.0/overlay"),h=a("$"),i=a("arale/templatable/0.9.1/templatable"),j=a("./select.handlebars"),k=g.extend({Implements:i,attrs:{trigger:{value:null,getter:function(a){return h(a).eq(0)}},classPrefix:"ui-select",template:j,align:{baseXY:[0,"100%-1px"]},name:"",value:"",length:0,selectedIndex:-1,multiple:!1,disabled:!1,selectSource:null},events:{"click [data-role=item]":function(a){var b=h(a.currentTarget);this.select(b)},"mouseenter [data-role=item]":function(a){h(a.currentTarget).addClass(this.get("classPrefix")+"-hover")},"mouseleave [data-role=item]":function(a){h(a.currentTarget).removeClass(this.get("classPrefix")+"-hover")}},initAttrs:function(a,b){k.superclass.initAttrs.call(this,a,b);var c=this.get("trigger");if("select"==c[0].tagName.toLowerCase()){var f=c.attr("name");f&&this.set("name",f),this.set("selectSource",c);var g='<a href="#" class="'+this.get("classPrefix")+'-trigger"></a>',i=h(g);this.set("trigger",i),c.after(i).hide(),this.set("model",d(c[0],this.get("classPrefix")))}else{var f=this.get("name");if(f){var j=h("input[name="+f+"]").eq(0);j[0]||(j=h('<input type="hidden" id="select-'+f+'" name="'+f+'" />').insertBefore(c)),this.set("selectSource",j)}this.set("model",e(this.get("model"),this.get("classPrefix")))}},setup:function(){var a=this.get("trigger");this.delegateEvents(a,"click",this._trigger_click),this.delegateEvents(a,"mouseenter",function(){a.addClass(this.get("classPrefix")+"-trigger-hover")}),this.delegateEvents(a,"mouseleave",function(){a.removeClass(this.get("classPrefix")+"-trigger-hover")}),this.options=this.$("[data-role=content]").children(),this.select("[data-selected=true]"),this.set("length",this.options.length),this._tweakAlignDefaultValue(),this._blurHide(a),k.superclass.setup.call(this)},render:function(){return k.superclass.render.call(this),this._setTriggerWidth(),this},_setTriggerWidth:function(){var a=this.get("trigger"),b=this.element.outerWidth(),c=parseInt(a.css("padding-left"),10),d=parseInt(a.css("padding-right"),10),e=parseInt(a.css("border-left-width"),10),f=parseInt(a.css("border-right-width"),10);a.css("width",b-c-d-e-f)},_tweakAlignDefaultValue:function(){var a=this.get("align");"VIEWPORT"===a.baseElement._id&&(a.baseElement=this.get("trigger")),this.set("align",a)},_trigger_click:function(a){var b=this;a.preventDefault(),b.get("disabled")||b.show()},destroy:function(){this.element.remove(),k.superclass.destroy.call(this)},select:function(a){var b=f(a,this.options),c=this.get("selectedIndex");if(this.set("selectedIndex",b),c!==b){var d=this.options.eq(b);this.trigger("change",d)}return this.hide(),this},syncModel:function(a){this.set("model",e(a,this.get("classPrefix"))),this.renderPartial("[data-role=content]"),this.options=this.$("[data-role=content]").children(),this.set("length",this.options.length),this.set("selectedIndex",-1),this.set("value","");var b=f("[data-selected=true]",this.options);return this.get("selectedIndex"),this.set("selectedIndex",b),this._setTriggerWidth(),this},getOption:function(a){var b=f(a,this.options);return this.options.eq(b)},addOption:function(a){var b=this.get("model").select;return b.push(a),this.syncModel(b),this},removeOption:function(a){var b=f(a,this.options),c=this.get("selectedIndex"),d=this.options.eq(b);return d.remove(),this.options=this.$("[data-role=content]").children(),this.set("length",this.options.length),b===c?this.set("selectedIndex",0):c>b&&this.set("selectedIndex",c-1),this},_onRenderSelectedIndex:function(a){if(-1!=a){var b=this.options.eq(a),c=this.currentItem,d=b.attr("data-value");if(!c||b[0]!=c[0]){var e=this.get("selectSource");e&&(e[0].value=d),c&&c.attr("data-selected","false").removeClass(this.get("classPrefix")+"-selected"),b.attr("data-selected","true").addClass(this.get("classPrefix")+"-selected"),this.set("value",d);var f=this.get("trigger"),g=f.find("[data-role=trigger-content]");g.length?g.html(b.html()):f.html(b.html()),this.currentItem=b}}},_onRenderDisabled:function(a){var b=this.get("classPrefix")+"-disabled",c=this.get("trigger");c[a?"addClass":"removeClass"](b);var d=this.options.eq(this.get("selectedIndex"));this.trigger("disabledChange",d,a)}});c.exports=k}),define("arale/select/0.9.5/select.handlebars",["gallery/handlebars/1.0.2/runtime"],function(a,b,c){var d=a("gallery/handlebars/1.0.2/runtime"),e=d.template;c.exports=e(function(a,b,c,d,e){function f(a,b,d){var e,f,g="";return g+='\n        <li data-role="item" class="'+k((e=d.classPrefix,typeof e===j?e.apply(a):e))+'-item" data-value="',(f=c.value)?f=f.call(a,{hash:{},data:b}):(f=a.value,f=typeof f===j?f.apply(a):f),g+=k(f)+'" data-defaultSelected="',(f=c.defaultSelected)?f=f.call(a,{hash:{},data:b}):(f=a.defaultSelected,f=typeof f===j?f.apply(a):f),g+=k(f)+'" data-selected="',(f=c.selected)?f=f.call(a,{hash:{},data:b}):(f=a.selected,f=typeof f===j?f.apply(a):f),g+=k(f)+'">',(f=c.text)?f=f.call(a,{hash:{},data:b}):(f=a.text,f=typeof f===j?f.apply(a):f),(f||0===f)&&(g+=f),g+="</li>\n        "}this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||{};for(var g in a.helpers)c[g]=c[g]||a.helpers[g];e=e||{};var h,i="",j="function",k=this.escapeExpression,l=this;return i+='<div class="',(h=c.classPrefix)?h=h.call(b,{hash:{},data:e}):(h=b.classPrefix,h=typeof h===j?h.apply(b):h),i+=k(h)+'">\n    <ul class="',(h=c.classPrefix)?h=h.call(b,{hash:{},data:e}):(h=b.classPrefix,h=typeof h===j?h.apply(b):h),i+=k(h)+'-content" data-role="content">\n        ',h=c.each.call(b,b.select,{hash:{},inverse:l.noop,fn:l.programWithDepth(1,f,e,b),data:e}),(h||0===h)&&(i+=h),i+="\n    </ul>\n</div>\n"})});
