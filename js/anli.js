//入口函数
$(function(){
	//案例内容开始
	ajax('anli.json', function (data) {
			var arr = data.anli;
			console.log(arr);
			var ul = document.querySelector(".anli-nr ul");
//			
			for (var i = 0; i < arr.length; i++) {
				var li = document.createElement("li");
				//遍历当前学院每个属性，写在td里面，拼接成字符串
				var html = '';
				for (var key in arr[i]) {
					console.log(arr[i][key]);
					html=`<div class="img"><img src="images/${arr[i]["img"]}"/></div>`+
						`<div class="white">
						<h3>${arr[i]["h3"]}</h3>
						<p>${arr[i]["p1"]}</p>
						<p>${arr[i]["p2"]}</p>
						<p>${arr[i]["p3"]}</p>
						</div>`
						
						
						
						
//					html =` <div class="pr"><img src="${arr[i]["src"]}"/></div>`+
//							"<h3>"+arr[i]["h3"]+"</h3>"+
//							"<p>"+arr[i]["p"]+"</p>"+
//							'<div class="download">下载</div>'
				}
				
				li.innerHTML = html;
				ul.appendChild(li)
			}
		})
	//案例内容结束
})