/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2011 kindsoft.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://www.kindsoft.net/
* @licence http://www.kindsoft.net/license.php
*******************************************************************************/
KindEditor.plugin("quickformat",function(e){function t(e){for(var t=e.first();t&&t.first();)t=t.first();return t}var n=this,o="quickformat",r=e.toMap("blockquote,center,div,h1,h2,h3,h4,h5,h6,p");n.clickToolbar(o,function(){n.focus();for(var o,a=n.edit.doc,i=n.cmd.range,c=e(a.body).first(),m=[],f=[],h=i.createBookmark(!0);c;){o=c.next();var s=t(c);s&&"img"==s.name||(r[c.name]?(c.html(c.html().replace(/^(\s|&nbsp;|\u3000)+/gi,"")),c.css("text-indent","2em")):f.push(c),(!o||r[o.name]||r[c.name]&&!r[o.name])&&(f.length>0&&m.push(f),f=[])),c=o}e.each(m,function(t,n){var o=e('<p style="text-indent:2em;"></p>',a);n[0].before(o),e.each(n,function(e,t){o.append(t)})}),i.moveToBookmark(h),n.addBookmark()})});