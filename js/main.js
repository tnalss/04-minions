window.addEventListener("DOMContentLoaded", function() {
	setTimeout(showAfterLoad, 3000);
	const POPUPOUTER = document.querySelector("#popup");
	const BODY = document.querySelector("#index-body");
	const CLOSE = document.querySelector("#close");
	function showAfterLoad() {
		//console.log(popupOuter);
		//console.dir(popupOuter);
		POPUPOUTER.style.display = "block";
		//console.dir(BODY);
		BODY.style.overflow = "hidden";
		/* 
		$("#popup").css("display","block"); */
	}
	CLOSE.addEventListener("click", function() {
		POPUPOUTER.style.display = "none";
		BODY.style.overflow = "auto";
	})
})