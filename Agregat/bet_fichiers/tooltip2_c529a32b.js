$(function(){function t(){$.map($(".as-logo[data-title]"),function(t){var a=$(t).attr("data-title");if(a){future.tooltip(t,{className:"tooltip2",maxWidth:385,content:a,placement:"bottom"})}});$(".as-logo[data-title]").hover(function(){$(this).attr("data-title")&&$(this).addClass("has-tooltip")},function(){$(this).removeClass("has-tooltip")})}t();window.asLogoHoverEvent=t;var a={es:{title:"Proveedor Auditado",moreDetail:"Más detalles"},pt:{title:"Fornecedor Auditado",moreDetail:"Mais Detalhes"},fr:{title:"Fournisseur Audité",moreDetail:"Plus de Détails"},ru:{title:"Сертифицированный Поставщик",moreDetail:"Подробнее"},it:{title:"Fornitore Verificato",moreDetail:"Più Dettaglio"},de:{title:"Geprüfter Lieferant",moreDetail:"Mehr Details"},nl:{title:"Gecontroleerde Leverancier",moreDetail:"Meer detail"},sa:{title:"مورد تم المراجعة عليه",moreDetail:"تفاصيل اكثر"},kr:{title:"감사를 받은 공급업체",moreDetail:"자세한 세부 사항"},jp:{title:"認証済みサプライヤー",moreDetail:"詳細"},hi:{title:"आपूर्तिकर्ता की ऑडिट की गई",moreDetail:"ज्यादा जानकारी"},th:{title:"ตรวจสอบโดยซัพพลายเออร์แล้ว",moreDetail:"รายละเอี่ยดเพิ่มเติม"},tr:{title:"Tedarikçi denetlendi",moreDetail:"Daha Fazla Ayrıntı"},vi:{title:"Nhà cung cấp được kiểm tra",moreDetail:"Thêm Chi Tiết"},id:{title:"Pemasok yang diaudit",moreDetail:"Rincian Lainnya"}};var e="Audited Supplier";var i=location.hostname.split(".");var s=i[0]==="sa";if(i&&i[0]in a){i=i[0];e=a[i].title}var o='<div id="asContentDiv" class="tip as-tip arrow-bottom as-content" style="display:none;">'+'<div class="tip-con tip-as-content">'+'<div class="as-title">'+e+"</div>"+'<div id="asContentDetail" class="as-detail">'+"</div>"+"</div>"+'<span class="arrow arrow-out"><span class="arrow arrow-in"></span></span>'+"</div>";(function(){var a=null;$('.as-logo[reportUsable="reportUsable"]').hover(function(){var t=this;a=setTimeout(function(){e($(t))},500)},function(){var t=$(this);t.find("#asContentDiv").hide();clearTimeout(a);if(t.hasClass("as-logo-on")){t.removeClass("as-logo as-logo-on").addClass("as-logo as-logo-now")}});function e(n){if(n.find(".J-hasInfo").length==0){n.append(o);n.find(".J-as-more-detail").attr("href",n.find(".J-prod-reportUrl").attr("href"));var t=n.find("input[type=hidden]").eq(0).val();if(t!==null&&t!==""&&t!="undefined"){var a=$("input[name='lanCode']"),e=0;if(a.length>0){e=a.val()}var i="//www.made-in-china.com/multi-search/sgs/report?comId="+t;if(e>0){i="//www.made-in-china.com/multi-search/sgs/report?comId="+t+"&lanCode="+e}$.get(i,function(t){if(t.code===0&&t.data.length>0){var i=$("<ul>");$.each(t.data,function(t,a){var e="";if(a.audit){e=$("<li>").html('<i class="ob-icon icon-yes2"></i>'+a.content)}else{e=$("<li>").text(a.content)}if(!a.audit){s?e.addClass("sa-no-active"):e.addClass("no-active")}i.append(e)});n.find("#asContentDetail").html(i);var a=n.find("#asContentDiv").outerHeight();var e=n.find("#asContentDiv").innerWidth();var o=n.find("img").innerWidth();if(a>n.offset().top){n.find("#asContentDiv").css({left:-((e-o)/2),top:n.height()+15}).show();n.find(".arrow-out").css({left:(e-o)/2}).show().addClass("arrow-out-b")}else{n.find("#asContentDiv").css({left:-((e-o)/2),top:-(a+10)}).show();n.find(".arrow-out").css({left:(e-o)/2}).show()}n.find("#asContentDiv").addClass("J-hasInfo")}})}}else{n.find("#asContentDiv").show()}if(n.hasClass("as-logo-now")){n.removeClass("as-logo as-logo-now").addClass("as-logo as-logo-on")}}})()});
//# sourceMappingURL=../../../../__sources__/common/js/assets/tooltip2/tooltip2_c529a32b.js.map