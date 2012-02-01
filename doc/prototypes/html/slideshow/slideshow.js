var numSlides = 4;
var currentSlideIndex = 0;

var slideTimerMillisCount = 2000;
var slideTimer = setTimeout("next()", slideTimerMillisCount);

function next() {
	nextSlide();
	slideTimer = setTimeout("next()", slideTimerMillisCount);
}

function nextSlide() {
	//hide the current slide
	object = document.getElementById('slide' + currentSlideIndex);
	object.style.display = 'none';	

	//increment the current slide index
	currentSlideIndex = (currentSlideIndex + 1) % numSlides;
	
	//show the next slide
	object = document.getElementById('slide' + currentSlideIndex);
	object.style.display = 'block';
}

