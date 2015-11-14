window.onload=function(){
	var ROW=15;
	var sence =document.getElementById('sence');
	var el1,el2,el3;
	for (var i = 0; i <ROW; i++) {
	el1=document.createElement('div');
	el1.style.position='absolute';
	el1.style.top=(600/ROW)/2+(600/ROW)*i+'px';
	el1.style.width='600px';
	el1.style.height='1px';
	el1.style.background='#ff9900';
	sence.appendChild(el1);	

	el2=document.createElement('div');
	el2.style.position='absolute';
	el2.style.left=(600/ROW)/2+(600/ROW)*i+'px';
	el2.style.width='1px';
	el2.style.height='600px';
	el2.style.background='#ff9900';
	sence.appendChild(el2);	

	el3=document.createElement('div');
	el3.style.position='absolute';
	el3.style.width='600px';
	el3.style.height='600px';
	el3.style.background='black';
	el3.style.borderRadius='20px';
	el3.style.opacity=0.5;
	el3.style.color='white';
	el3.innerHTML='恭喜！你赢了！';

	el4=document.createElement('div');
	el4.style.position='absolute';
	el4.style.width='200px';
	el4.style.bottom='100px';
	el4.style.left='200px';
	el4.style.height='50px';
	el4.style.border='3px solid black';
	el4.style.background='white';
	el4.style.borderRadius='20px';
	el4.style.color='black';
	el4.style.lineHeight='50px';
	el4.style.fontSize='30px';
	el4.innerHTML='再来一局';

		el4.onclick=function(){
			location.reload();
		}
	}

	var aa=Math.floor((600-ROW)/ROW)+'px';

	for (var i = 0; i <ROW; i++) {
		for (var j = 0; j <ROW; j++) {
			var el=document.getElementById('sence');
			var div=document.createElement('div');		
			div.setAttribute('class','block');
			div.setAttribute('id',i+'-'+j);
			div.style.width=aa;
			div.style.height=aa;
			div.style.webkitTransform='scale(0.9)';
			el.appendChild(div);
		};
		
	};

	var blocks=document.getElementsByClassName('block');
	var kaiguan = true;
	var dict1={};
	var dict2={};
	var panduan=function(id,dic){
		var x=	Number(id.split('-')[0]);
		var y=  Number(id.split('-')[1]);
		var hang =1;
		var tx,ty;

		tx=x;ty=y;
		while(dic[tx+'-'+(ty+1)]){hang++;ty++;}
		tx=x;ty=y;
		while(dic[tx+'-'+(ty-1)]){hang++;ty--;}
		if(hang>=5) return true;

		var lie=1;
		tx=x;ty=y;
		while(dic[(tx-1)+'-'+ty]){lie++;tx--;}
		tx=x;ty=y;
		while(dic[(tx+1)+'-'+ty]){lie++;tx++;}
		if(lie>=5) return true;

		var xie=1;
		tx=x;ty=y;
		while(dic[(tx+1)+'-'+(ty+1)]){xie++;tx++;ty++;}
		tx=x;ty=y;
		while(dic[(tx-1)+'-'+(ty-1)]){xie++;tx--;ty--;}
		if(xie>=5) return true;

		var zxie=1;
		tx=x;ty=y;
		while(dic[(tx+1)+'-'+(ty-1)]){zxie++;tx++;ty--;}
		tx=x;ty=y;
		while(dic[(tx-1)+'-'+(ty+1)]){zxie++;tx--;ty++;}
		if(zxie>=5) return true;
	}
	for (var i = 0; i < blocks.length; i++) {
		blocks[i].onclick=function(){
			// if(!this.hasAttribute('hasColor')){
			// 	if(kaiguan){  
			// 	// console.log(this.getAttribute('id'));
			// 	this.style.background='black';kaiguan=false;
			// 	}else{
			// 	this.style.background='yellow';kaiguan=true;
			// 	}
			// 	this.setAttribute('hasColor','true');
			// }
			if(this.hasAttribute('hasColor')){return;}
				if(kaiguan){
				this.style.background='black';
				this.style.boxShadow='1px 5px 13px black';
				dict1[this.getAttribute('id')]=true;
				var id=this.getAttribute('id');
				kaiguan=false;
				if(panduan(id,dict1)){sence.appendChild(el3);sence.appendChild(el4);}
				}else{
				this.style.background='white';
				this.style.boxShadow='1px 5px 13px black';
				dict2[this.getAttribute('id')]=true;
				var id=this.getAttribute('id');
				kaiguan=true;

				if(panduan(id,dict2)){sence.appendChild(el3);sence.appendChild(el4);}
				}
				this.setAttribute('hasColor','true');								
		}
	
	};

}
	