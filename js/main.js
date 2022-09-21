window.addEventListener("DOMContentLoaded", function() {
	setTimeout(showAfterLoad, 3000);
	const POPUPOUTER = document.querySelector("#popup");
	const BODY = document.querySelector("#index-body");
	const CLOSE = document.querySelector("#close");
	
	const PREV = document.querySelector(".prev")
	const NEXT = document.querySelector(".next");
	const POSTS = document.querySelector("#posts");
	
	let postIndex=0;
	
	function showAfterLoad() {
		
		//console.log(popupOuter);
		//console.dir(popupOuter);
		//console.dir(BODY);
		POPUPOUTER.style.display = "block";
		BODY.style.overflow = "hidden";
	}
	CLOSE.addEventListener("click", function() {
		POPUPOUTER.style.display = "none";
		BODY.style.overflow = "auto";
	})

	NEXT.addEventListener("click", function(){
		postIndex++;
		if(postIndex>=3) postIndex=0;		
		let coords = -920 * postIndex + "px";
		POSTS.style.marginLeft=coords;
	})
	
	PREV.addEventListener("click", function(){
		postIndex--;
		if(postIndex<0) postIndex=2;		
		let coords = -920 * postIndex + "px";
		POSTS.style.marginLeft=coords;

				
	})

})