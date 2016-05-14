var wrap=document.getElementById("wrap");
var ouls=wrap.getElementsByTagName("ul");
var oimg1=ouls[0].getElementsByTagName("img");
var oimg2=ouls[1].getElementsByTagName("img");
var oimg3=ouls[2].getElementsByTagName("img");
// alert(olis1.length)
wrap.style.width=ouls.length*ouls[0].offsetWidth+"px";
// alert(wrap.style.width)

var oprve=document.getElementById("prve");
var onext=document.getElementById("next");
var xuanzhe=document.getElementById("xuanzhe");
var ospans=xuanzhe.getElementsByTagName("span");

var num=0;
// alert(onext.tagName)
oprve.onclick=function(){
	num--
	if (num<0) {
		num=2	
	}
	wrap.style.left=-num*ouls[0].offsetWidth+"px";

	for (var i =0; i <ospans.length; i++){
		ospans[i].className="";
	} 
	ospans[num].className="active";
}

onext.onclick=function(){
	num++
	if (num>=3) {
		num=0	
	}
	wrap.style.left=-num*ouls[0].offsetWidth+"px";
	
	for (var i =0; i <ospans.length; i++){
		ospans[i].className="";
	} 
	ospans[num].className="active";
}



var arr="";
function tiao(tt){
	for(var i=0;i<oimg1.length;i++){
		tt[i].index=i
		tt[i].onclick=function(){

			for (var i = 0; i < tt.length; i++) {
				tt[i].src=tt[i].src.replace("gif","png")
			}

			arr=tt[this.index].src
			tt[this.index].src=arr.replace("png","gif")
		}
	
	}
}
tiao(oimg1)
tiao(oimg2)
tiao(oimg3)


