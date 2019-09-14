window.addEventListener("load", () => {
	setTimeout(() => {
		let preloader = document.querySelector(".preloader");
		preloader.classList.add("preloader-finish")		
	}, 3000)
});

document.getElementById('register').addEventListener('click', function(){
	document.querySelector('.modal').style.display = 'flex';
});

document.getElementsByClassName('close')[0].addEventListener('click', function(){
	document.querySelector('.modal').style.display = 'none';
});