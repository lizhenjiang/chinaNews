/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("baidumap",function(e){var a=this,i="baidumap",t=a.lang(i+"."),n=e.undef(a.mapWidth,558),d=e.undef(a.mapHeight,360);a.clickToolbar(i,function(){function o(){s=v[0].contentWindow,c=e.iframeDoc(v)}var s,c,m=['<div style="padding:10px 20px;">','<div class="ke-header">','<div class="ke-left">',t.address+' <input id="kindeditor_plugin_map_address" name="address" class="ke-input-text" value="" style="width:200px;" /> ','<span class="ke-button-common ke-button-outer">','<input type="button" name="searchBtn" class="ke-button-common ke-button" value="'+t.search+'" />',"</span>","</div>",'<div class="ke-right">','<input type="checkbox" id="keInsertDynamicMap" name="insertDynamicMap" value="1" /> <label for="keInsertDynamicMap">'+t.insertDynamicMap+"</label>","</div>",'<div class="ke-clearfix"></div>',"</div>",'<div class="ke-map" style="width:'+n+"px;height:"+d+'px;"></div>',"</div>"].join(""),r=a.createDialog({name:i,width:n+42,title:a.lang(i),body:m,yesBtn:{name:a.lang("yes"),click:function(){var e=s.map,i=e.getCenter(),t=i.lng+","+i.lat,o=e.getZoom(),c=[h[0].checked?a.pluginsPath+"baidumap/index.html":"http://api.map.baidu.com/staticimage","?center="+encodeURIComponent(t),"&zoom="+encodeURIComponent(o),"&width="+n,"&height="+d,"&markers="+encodeURIComponent(t),"&markerStyles="+encodeURIComponent("l,A")].join("");h[0].checked?a.insertHtml('<iframe src="'+c+'" frameborder="0" style="width:'+(n+2)+"px;height:"+(d+2)+'px;"></iframe>'):a.exec("insertimage",c),a.hideDialog().focus()}},beforeRemove:function(){u.remove(),c&&c.write(""),v.remove()}}),l=r.div,p=e('[name="address"]',l),u=e('[name="searchBtn"]',l),h=e('[name="insertDynamicMap"]',r.div),v=e('<iframe class="ke-textarea" frameborder="0" src="'+a.pluginsPath+'baidumap/map.html" style="width:'+n+"px;height:"+d+'px;"></iframe>');v.bind("load",function(){v.unbind("load"),e.IE?o():setTimeout(o,0)}),e(".ke-map",l).replaceWith(v),u.click(function(){s.search(p.val())})})});