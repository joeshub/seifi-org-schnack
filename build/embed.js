!function(){"use strict";var n="function"==typeof fetch?fetch.bind():function(n,t){return t=t||{},new Promise(function(e,s){var a=new XMLHttpRequest;for(var c in a.open(t.method||"get",n),t.headers)a.setRequestHeader(c,t.headers[c]);function o(){var n,t=[],e=[],s={};return a.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(a,c,o){t.push(c=c.toLowerCase()),e.push([c,o]),n=s[c],s[c]=n?n+","+o:o}),{ok:1==(a.status/200|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:o,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return e},get:function(n){return s[n.toLowerCase()]},has:function(n){return n.toLowerCase()in s}}}}a.withCredentials="include"==t.credentials,a.onload=function(){e(o())},a.onerror=s,a.send(t.body)})};function t(n){var t,e="";return e+='<ul class="schnack-comments">\n    ',n.comments.forEach(function(s){e+='\n        <li id="comment-'+(null==(t=s.id)?"":t)+'" data-id="'+(null==(t=s.id)?"":t)+'" class="schnack-comment',s.approved||s.trusted||(e+=" schnack-not-approved"),e+='">\n            <div class="schnack-dateline">\n                <span class="schnack-author">',s.author_url&&(e+='<a href="'+(null==(t=s.author_url)?"":t)+'" target="_blank">'),e+=null==(t=s.display_name||s.name)?"":t,s.author_url&&(e+="</a>"),e+="</span>\n                ",n.user&&n.user.admin&&!s.trusted&&["trust","block"].forEach(function(n){e+='\n                <button class="schnack-action" data-target="'+(null==(t=s.user_id)?"":t)+'" data-class="user" data-action="'+(null==(t=n)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n)?"":t)+'"></i> <span>'+(null==(t=n)?"":t)+"</span></button>\n                "}),e+='\n                <span class="schnack-date"><a href="#comment-'+(null==(t=s.id)?"":t)+'">'+(null==(t=s.created_at_s)?"":t)+'</a></span>\n            </div>\n            <blockquote class="schnack-body">\n                '+(null==(t=s.comment)?"":t)+"\n            </blockquote>\n            ",s.approved||s.trusted?n.user&&(e+='\n            <button class="schnack-reply" data-reply-to="'+(null==(t=s.id)?"":t)+'">reply</button>\n            '):(e+='\n            <div class="schnack-awaiting-approval">\n                ',n.user&&n.user.admin&&["approve","reject"].forEach(function(n){e+='\n                <button class="schnack-action" data-target="'+(null==(t=s.id)?"":t)+'" data-class="comment" data-action="'+(null==(t=n)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n)?"":t)+'"></i> <span>'+(null==(t=n)?"":t)+"</span></button>\n                "}),e+="\n                "+(null==(t=n.user.admin?"This":"Your")?"":t)+" comment is still waiting for "+(null==(t=n.user.admin?"your ":"")?"":t)+"approval"+(null==(t=n.user.admin?"":" by the site owner")?"":t)+".\n            </div>\n            "),e+="\n            ",n.replies[s.id]&&(n.comments=n.replies[s.id],e+="\n            "+(null==(t=n.comments_tpl(n))?"":t)+"\n            "),e+="\n        </li>\n    "}),e+="\n</ul>\n"}var e=function(n){return document.querySelector(n)},s=function(n){this.options=n,this.options.endpoint=n.host+"/comments/"+n.slug,this.initialized=!1,this.firstLoad=!0;var t=new URL(n.host);"localhost"!==t.hostname&&(document.domain=t.hostname.split(".").slice(1).join(".")),this.refresh()};s.prototype.refresh=function(){var s=this,a=this.options,c=a.target,o=a.slug,i=a.host,r=a.endpoint;n(r,{credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(n){return n.json()}).then(function(a){a.comments_tpl=t,e(c).innerHTML=function(n){var t,e="";n.user?(e+="\n    ",n.user.admin&&(e+='\n    <div class="schnack-settings">\n        <button class="schnack-action" data-target="notification" data-class="setting" data-action="true">un</button>\n        <button class="schnack-action" data-target="notification" data-class="setting" data-action="false">mute notifications</button>\n    </div>\n    '),e+='\n<div class="schack-login-status">\n    (signed in as <span class="schnack-user">@'+(null==(t=n.user.name)?"":t)+'</span> :: <a class="schnack-signout" href="#">sign out</a>)\n</div>\n<div class="schnack-above">\n    <div class="schnack-form">\n        <textarea class="schnack-body" placeholder="Post a comment. Markdown is supported!"></textarea>\n        <blockquote class="schnack-body" style="display:none"></blockquote>\n        <br>\n        <button class="schnack-preview">Preview</button>\n        <button style="display:none" class="schnack-write">Edit</button>&nbsp;\n        <button class="schnack-button">Send comment</button>&nbsp;\n        <button class="schnack-cancel-reply" style="display:none">Cancel</button>\n    </div>\n</div>\n'):(e+="\nTo post a comment you need to sign in via<br>\n",n.auth.forEach(function(n,s){e+="\n    "+(null==(t=s?" or ":"")?"":t)+'<button class="schnack-signin-'+(null==(t=n.id)?"":t)+'"><i class="icon schnack-icon-'+(null==(t=n.id)?"":t)+'"></i> '+(null==(t=n.name)?"":t)+"</button>\n"}),e+="\n"),e+="\n";var s=[];return n.replies={},n.comments.forEach(function(t){t.reply_to?(n.replies[t.reply_to]||(n.replies[t.reply_to]=[]),n.replies[t.reply_to].push(t)):s.push(t)}),n.comments=s,e+="\n"+(null==(t=n.comments_tpl(n))?"":t)+'\n<style type="text/css">\n.schnack-action > * { pointer-events: none; }\n</style>\n'}(a);var l=e(c+" div.schnack-above"),u=e(c+" div.schnack-form"),d=e(c+" textarea.schnack-body"),h=e(c+" .schnack-form blockquote.schnack-body"),p=window.localStorage.getItem("schnack-draft-"+o);p&&d&&(d.value=p);var f,m=e(c+" .schnack-button"),k=e(c+" .schnack-preview"),y=e(c+" .schnack-write"),v=e(c+" .schnack-cancel-reply"),b=(f=c+" .schnack-reply",document.querySelectorAll(f));if(m&&(m.addEventListener("click",function(t){var e=d.value;n(r,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:e,replyTo:u.dataset.reply})}).then(function(n){return n.json()}).then(function(n){d.value="",window.localStorage.setItem("schnack-draft-"+o,d.value),n.id&&(s.firstLoad=!0,window.location.hash="#comment-"+n.id),s.refresh()})}),k.addEventListener("click",function(t){var e=d.value;d.style.display="none",k.style.display="none",h.style.display="block",y.style.display="inline",n(i+"/markdown",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({comment:e})}).then(function(n){return n.json()}).then(function(n){h.innerHTML=n.html})}),y.addEventListener("click",function(n){d.style.display="inline",k.style.display="inline",h.style.display="none",y.style.display="none"}),d.addEventListener("keyup",function(){window.localStorage.setItem("schnack-draft-"+o,d.value)}),b.forEach(function(n){n.addEventListener("click",function(){u.dataset.reply=n.dataset.replyTo,v.style.display="inline-block",n.parentElement.appendChild(u)})}),v.addEventListener("click",function(){l.appendChild(u),delete u.dataset.reply,v.style.display="none"})),a.user){var g=e("a.schnack-signout");g&&g.addEventListener("click",function(t){t.preventDefault(),n(i+"/signout",{credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(){return s.refresh()})})}else a.auth.forEach(function(n){var t=e(c+" .schnack-signin-"+n.id);t&&t.addEventListener("click",function(t){var e=window.open(i+"/auth/"+n.id,n.name+" Sign-In","resizable,scrollbars,status,width=600,height=500");window.__schnack_wait_for_oauth=function(){e.close(),s.refresh()}})});if(a.user&&a.user.admin){if(!s.initialized){var w=document.createElement("script");w.setAttribute("src",i+"/push.js"),document.head.appendChild(w),s.initialized=!0}var L=function(t){var e=t.target.dataset;n(i+"/"+e.class+"/"+e.target+"/"+e.action,{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:""}).then(function(){return s.refresh()})};document.querySelectorAll(".schnack-action").forEach(function(n){n.addEventListener("click",L)})}if(s.firstLoad&&window.location.hash.match(/^#comment-\d+$/)){var E=document.querySelector(window.location.hash);E.scrollIntoView(),E.classList.add("schnack-highlight"),s.firstLoad=!1}})},function(){var n=document.querySelector("script[data-schnack-target]");if(!n)return console.warn("schnack script tag needs some data attributes");var t=n.dataset,e=t.schnackSlug,a=new URL(n.getAttribute("src")),c=a.protocol+"//"+a.host;new s({target:t.schnackTarget,slug:e,host:c})}()}();
