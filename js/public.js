$(function(){ 
	
	var allheight = document.body.scrollHeight+"px";//获取屏幕高度,遮罩层需要
// 搜索
	// 切换tab
	$(".search-navli").click(function(){
		$(this).addClass('keyed').siblings('li').removeClass('keyed');
		$(this).children('.search-keywordcenter').css("display","flex");
		$(this).siblings('li').children('.search-keywordcenter').css("display","none");
	});
	//专题
	$(".search-keywordli span").click(function(){
		
		$('.search-keywordli span').addClass('reddiv').siblings('span').removeClass('reddiv');
		$(this).addClass('reddiv').siblings('span').removeClass('reddiv');
	});
	// 搜索
	$('.search-btn').click(function(){
		$('.search-null02').css('display','flex');

	});
	$('.search-null-btn').click(function(){
		$('.search-null02').css('display','none');
		// $('.search-keywordli span').addClass('reddiv').siblings('span').removeClass('reddiv');
	});

// 作者详情页面
	// 切换tab

		function tabs(tabId, tabNum){
			//设置点击后的切换样式
			$(tabId + " ul li").removeClass(" listed");
			$(tabId + " ul li").eq(tabNum).addClass(" listed");
			//根据参数决定显示内容
			$(tabId + " .authorcenter01").hide();
			$(tabId + " .authorcenter01").eq(tabNum).show();
		}


	// 	authordiv[i].click(function(){
	// 		console.log('345');
	// 		$(this).addClass('listed').siblings('li').removeClass('listed');
	// 		$(this).children('.author03').css("display","flex");
	// }
	
// 底部导航切换
	$(".jinc").click(function(){
		$(this).addClass('onthis').siblings('a').removeClass('onthis');					
	});

//遮罩层---筛查排序
$(".purchasedheard").click(function(){
		$("#zhezhaoc1").css("display","flex");
		$("#zhezhaoc1").css("height",allheight);
		$("#zhezhao1").css("display","flex");
	});
// 遮罩层消失
	$(".scbtn").click(function(){
		$("#zhezhaoc1").css("display","none");
		$("#zhezhao1").css("display","none");
		});





// vip
	$('#vipshow').click(function(){
		$('#vipopen').slideToggle('fast');
	});
	$('#vipshow2').click(function(){
		$('#vipopen2').slideToggle('fast');
	});

//我的账号，充值
		//专题
	$(".czbtns a").click(function(){		
		$('.czbtns a').addClass('czdiv').siblings('a').removeClass('czed');
		$(this).addClass('czed').siblings('a').removeClass('czed');
	});



});