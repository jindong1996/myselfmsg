//拖拽函数
function drag(obj){
	obj.onmousedown=function(ev){
		var disX=ev.clientX-obj.offsetLeft;
		var disY=ev.clientY-obj.offsetTop;
		document.onmousemove=function(ev){
			var l=ev.clientX-disX;
			var t=ev.clientY-disY;
			l=l<0? 0:l;
			t=t<0? 0:t;
			if(l>document.documentElement.clientWidth-obj.offsetWidth){
				l=document.documentElement.clientWidth-obj.offsetWidth
			};
			if(t>document.documentElement.clientHeight-obj.offsetHeight){
				t=document.documentElement.clientHeight-obj.offsetHeight
			}
			obj.style.left=l+"px";
			obj.style.top=t+"px";
		}
	}
	obj.onmouseup=function(){
		document.onmousemove=null;
		console.log("a");
		document.onmouseup=null;
	}
}
//居中函数
function showCenter(obj){
			function fn(){
				var w=(document.documentElement.clientWidth-obj.offsetWidth)/2;
				var h=(document.documentElement.clientHeight-obj.offsetHeight)/2;
				obj.style.position='absolute';
				obj.style.left=w+'px';
				obj.style.top=h+'px';
			}
			fn()
			window.onresize=function(){
				fn()
			}
		}
		
//ajax
function ajax(url, callback) {
	var xhr = new XMLHttpRequest();
	//0请求未初始化
	xhr.open('GET', url);
	xhr.send();
	//1服务器连接已经创建
	xhr.onreadystatechange = function () {
		//2请求已经接收
		//3请求处理中
		//4请求处理完成，响应已经就绪
		if (xhr.readyState === 4) {
			if(xhr.status == 200){//数据返回成功
				setTimeout( function () {//模拟网络延迟
					var data = JSON.parse(xhr.responseText);
					callback&&callback(data)
				}, Math.random() * 2000)
			}
			if (xhr.status == 404) {
				alert('请求失败!!!');
			}
		}
	}
}
