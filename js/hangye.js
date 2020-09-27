$(function(){
	//入口函数开始
	//轮播图开始
	
	//自动轮播
	var timer;
	var $lb=$("#lb");
	console.log($lb);
	var l=0;
	var index=0;
	timer=setInterval(function(){
		l+=482;
		if(l>=1928){
			l=0;
		}
		$lb.css("left",-l)
		index++;
		if(index==4){
			index=0
		}
	},3000)
	//自动轮播结束
	
	//按钮轮播开始
	var $prev=$(".hy-lunbo .prev");
	var $next=$(".hy-lunbo .next");
	console.log($prev);
	
	
	
	
//	$prev.click(function(){
//		console.log(1);
//		l-=482;
//		if(l==-482){
//			l=1928;
//		}
//		$lb.css("left",l)
//	})
	//入口函数结尾
})
