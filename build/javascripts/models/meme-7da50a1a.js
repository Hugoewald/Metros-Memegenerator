MEME.MemeModel=Backbone.Model.extend({defaults:{backgroundPosition:{x:null,y:null},creditText:"Source:",creditSize:12,downloadName:"share",fontColor:"#fff",fontFamily:"Belizio Narrow SemiBold",fontFamilyOpts:["Belizio Narrow SemiBold","Belizio Narrow Bold","LA Web Display Kis Bold","Arial","Georgia"],fontSize:24,fontSizeOpts:[14,24,36],fontColorOpts:["#fff","#000"],headlineText:"Skriv din text!",height:378,width:755,imageScale:1,imageSrc:"",overlayAlpha:.5,backgroundColor:"#51CEF2",backgroundColorOpts:["#007632","#ED8522","#F4E007","#E0584E","#000","#FAD0D1","#9BB6D4","#53AFAE","#DECCBE","#AF64A9"],overlayColor:"#000",overlayColorOpts:["#007632","#ED8522","#F4E007","#E0584E","#000","#FAD0D1","#9BB6D4","#53AFAE","#DECCBE","#AF64A9"],paddingRatio:.05,textAlign:"left",textAlignOpts:["left","center","right"],textShadow:!0,textShadowEdit:!0,watermarkAlpha:.75,watermarkMaxWidthRatio:.25,watermarkSrc:"",watermarkOpts:[]},initialize:function(){this.background=new Image,this.watermark=new Image,this.background.onload=this.watermark.onload=_.bind(function(){this.trigger("change")},this),this.get("imageSrc")&&(this.background.src=this.get("imageSrc")),this.get("watermarkSrc")&&this.setWatermarkSrc(this.get("watermarkSrc")),this.listenTo(this,"change:imageSrc",function(){this.background.src=this.get("imageSrc")}),this.listenTo(this,"change:watermarkSrc",function(){this.setWatermarkSrc(this.get("watermarkSrc"))})},hasBackground:function(){return this.background.width&&this.background.height},loadFileForImage:function(t,a){var r=new FileReader;r.onload=function(){a.src=r.result},r.readAsDataURL(t)},loadBackground:function(t){this.loadFileForImage(t,this.background)},loadWatermark:function(t){this.loadFileForImage(t,this.watermark)},setWatermarkSrc:function(t){var a=_.findWhere(this.get("watermarkOpts"),{value:t}),r=a&&a.data||t;0===r.indexOf("data:")?this.watermark.removeAttribute("crossorigin"):this.watermark.setAttribute("crossorigin","anonymous"),this.watermark.src=r,this.set("watermarkSrc",t)}});