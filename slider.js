 $(document).ready(function(){
      $('.sl').slick({
      		autoplay: true,
      		autoplaySpeed: 3000,
      		dots:true
      	});
     });


// function changeLikeOnClick(elmnt, backgroundImage, backgroundColor) {
// 	if (elmnt.style.backgroundImage === backgroundImage, elmnt.style.backgroundColor === backgroundColor) {
// 		elmnt.style.backgroundColor = 'transparent';
// 		elmnt.style.backgroundImage = 'url(images/like.png)';
// 	} else {
// 		elmnt.style.backgroundColor = 'rgb(44, 113, 184)';
// 		elmnt.style.backgroundImage = 'url(images/likewhite.png)';
// 	}
// }


function changeLikeOnClick(elmnt, backgroundColor) {
	if (elmnt.style.backgroundColor === backgroundColor) {
		elmnt.style.backgroundColor = 'transparent';
		// elmnt.style.backgroundImage = 'url(images/like.png)';
	} else {
		elmnt.style.backgroundColor = 'rgb(44, 113, 184)';
		// elmnt.style.backgroundImage = 'url(images/likewhite.png)';
	}
}

	// var x = document.getElementById('like');
 //    if (x.style.backgroundColor =='red') {
 //        // x.style.backgroundImage = 'url(images/likewhite.png)';
 //        x.style.backgroundColor = 'blue';}
 //    else {
 //        // x.style.backgroundImage = 'url(images/like.png)';
 //        x.style.backgroundColor = 'red';
 //    }
