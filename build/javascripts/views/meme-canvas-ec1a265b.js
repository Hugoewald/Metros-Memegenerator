MEME.MemeCanvasView=Backbone.View.extend({initialize:function(){var t=document.createElement("canvas"),e=MEME.$("#meme-canvas");t&&t.getContext?(e.html(t),this.canvas=t,this.setDownload(),this.render()):e.html(this.$("noscript").html()),this.listenTo(this.model,"change",this.render)},setDownload:function(){var t=document.createElement("a");"undefined"==typeof t.download&&this.$el.append('<p class="m-canvas__download-note">Right-click button and select "Download Linked File..." to save image.</p>')},render:function(){function t(t){var e=l.background.height,i=l.background.width;if(e&&i){var n=e*r.imageScale,a=i*r.imageScale,o=r.backgroundPosition.x||r.width/2,h=r.backgroundPosition.y||r.height/2;t.drawImage(l.background,0,0,i,e,o-a/2,h-n/2,a,n)}}function e(t){return l.background.height>0?!1:void(r.backgroundColor&&(t.fillStyle=r.backgroundColor,t.fillRect(0,0,r.width,r.height)))}function i(t){r.overlayColor&&(t.save(),t.globalAlpha=r.overlayAlpha,t.fillStyle=r.overlayColor,t.fillRect(0,0,r.width,r.height),t.globalAlpha=1,t.restore())}function n(t){var e=Math.round(.75*r.width),i=s,n=s;t.font=r.fontSize+"pt "+r.fontFamily,t.fillStyle=r.fontColor,t.textBaseline="top",r.textShadow&&(t.shadowColor="black",t.shadowOffsetX=-2,t.shadowOffsetY=1,t.shadowBlur=10),"center"==r.textAlign?(t.textAlign="center",i=r.width/2,n=r.height-r.height/1.15,e=r.width-r.width/3):"right"==r.textAlign?(t.textAlign="right",i=r.width-s):t.textAlign="left";var a=1.5,o=r.headlineText.split(" "),o=_.filter(o,function(t){return""!=t}),h=/\r|\n/,l=[];_.each(o,function(t){if(h.exec(t)){var e=t.split(h);_.each(e,function(t,i){l.push(t),i+1!=e.length&&l.push("\n")})}else l.push(t)});var l=_.filter(l,function(t){return""!=t}),d="";_.each(l,function(o,h){if("\n"==o)t.fillText(d,i,n),d="",n+=Math.round(r.fontSize*a);else{var l=d+o+" ",s=t.measureText(l),c=s.width;c>e&&h>0?(t.fillText(d,i,n),d=o+" ",n+=Math.round(r.fontSize*a)):d=l}}),t.fillText(d,i,n),t.shadowColor="transparent"}function a(t){var e=Math.round(.5*r.width),i=s,n=s;t.font=r.TextSize+"pt "+r.fontFamily,t.fillStyle=r.fontColor,t.textBaseline="middle",r.textShadow&&(t.shadowColor="black",t.shadowOffsetX=-2,t.shadowOffsetY=1,t.shadowBlur=10),"center"==r.textAlign?(t.textAlign="center",i=r.width/2,n=r.height-r.height/1.5,e=r.width-r.width/3):"right"==r.textAlign?(t.textAlign="right",i=r.width-s,n=r.height-r.height/1.5):(t.textAlign="left",n=r.height-r.height/1.5);var a=1.2,o=r.MainText.split(" "),o=_.filter(o,function(t){return""!=t}),h=/\r|\n/,l=[];_.each(o,function(t){if(h.exec(t)){var e=t.split(h);_.each(e,function(t,i){l.push(t),i+1!=e.length&&l.push("\n")})}else l.push(t)});var l=_.filter(l,function(t){return""!=t}),d="";_.each(l,function(o,h){if("\n"==o)t.fillText(d,i,n),d="",n+=Math.round(r.fontSize*a);else{var l=d+o+" ",s=t.measureText(l),c=s.width;c>e&&h>0?(t.fillText(d,i,n),d=o+" ",n+=Math.round(r.fontSize*a)):d=l}}),t.fillText(d,i,n),t.shadowColor="transparent"}function o(t){t.textBaseline="bottom",t.textAlign="left",t.fillStyle=r.fontColor,t.font="normal 14pt UnitSlabPro",t.fillText(r.creditText,s,r.height-s)}function h(t){var e,i,n,a;if(i=a=l.watermark.height,e=n=l.watermark.width,i&&e){var o=r.width*r.watermarkMaxWidthRatio;e>o&&(a=i*(o/e),n=o),t.globalAlpha=r.watermarkAlpha,t.drawImage(l.watermark,0,0,e,i,r.width-s-n,r.height-s-a,n,a),t.globalAlpha=1}}if(this.canvas){var l=this.model,r=this.model.toJSON(),d=this.canvas.getContext("2d"),s=Math.round(r.width*r.paddingRatio);this.canvas.width=r.width,this.canvas.height=r.height,d.clearRect(0,0,r.width,r.height),t(d),e(d),i(d),n(d),a(d),o(d),h(d);var c=this.canvas.toDataURL();this.$("#meme-download").attr({href:c,download:(r.downloadName||"share")+".png"}),this.canvas.style.cursor=this.model.background.width?"move":"default"}},events:{"mousedown canvas":"onDrag"},onDrag:function(t){function e(t){t.preventDefault(),i.set("backgroundPosition",{x:Math.max(n.width-a,Math.min(l.x-(h.x-t.clientX),a)),y:Math.max(n.height-o,Math.min(l.y-(h.y-t.clientY),o))})}if(t.preventDefault(),this.model.hasBackground()){var i=this.model,n=i.toJSON(),a=i.background.width*n.imageScale/2,o=i.background.height*n.imageScale/2,h={x:t.clientX,y:t.clientY},l=n.backgroundPosition;l.x=l.x||n.width/2,l.y=l.y||n.height/2;var r=MEME.$(document).on("mousemove.drag",e).on("mouseup.drag",function(t){r.off("mouseup.drag mousemove.drag"),e(t)})}}});