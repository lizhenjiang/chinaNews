/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("preview",function(e){var i=this,a="preview";i.clickToolbar(a,function(){var o=(i.lang(a+"."),'<div style="padding:10px 20px;"><iframe class="ke-textarea" frameborder="0" style="width:708px;height:400px;"></iframe></div>'),r=i.createDialog({name:a,width:750,title:i.lang(a),body:o}),t=e("iframe",r.div),l=e.iframeDoc(t);l.open(),l.write(i.fullHtml()),l.close(),e(l.body).css("background-color","#FFF"),t[0].contentWindow.focus()})});