<template>
	<section class="commercial container-fluid p-0" id="about-info">
		<div class="dots-wrapper d-flex align-items-center">
			<ul class="dots-list ml-auto" id="dotted">
				<a href="#pageone">
					<li class="dot dot-1 dot-ring"></li>
				</a>
				<a href="#pagetwo">
					<li class="dot dot-2"></li>
				</a>
				<a href="#pagethree">
					<li class="dot dot-3"></li>
				</a>
			</ul>
		</div>

		<a name="pageone"></a>
		<div
			class="container-fluid d-flex justify-content-center align-items-center gallery bg-1"
		>
			<div class="row">
				<div class="col-12 page-one">
					<h1 class="display-4">Brewed Coffee</h1>
				</div>
			</div>
		</div>
		<a name="pagetwo"></a>
		<div
			class="container-fluid d-flex justify-content-center align-items-center gallery bg-2"
		>
			<div class="row">
				<div class="col-12 page-two">
					<h1 class="display-4">Takoyaki</h1>
				</div>
			</div>
		</div>
		<a name="pagethree"></a>
		<div
			class="container-fluid d-flex justify-content-center align-items-center gallery bg-3"
		>
			<div class="row">
				<div class="col-12 page-three">
					<h1 class="display-4">Chicken Wings</h1>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	mounted() {
		var isInViewport = function(elem) {
			var bounding = elem.getBoundingClientRect();
			return (
				bounding.top >= 0 &&
				bounding.left >= 0 &&
				bounding.bottom <=
					(window.innerHeight || document.documentElement.clientHeight) &&
				bounding.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			);
		};

		var page1 = document.querySelector('.page-one');
		var page2 = document.querySelector('.page-two');
		var page3 = document.querySelector('.page-three');
		var dot1 = document.querySelector('.dot-1');
		var dot2 = document.querySelector('.dot-2');
		var dot3 = document.querySelector('.dot-3');
		var current = document.getElementById('dotted');
		// var main = document.getElementsByClassName("commercial");

		document.addEventListener('scroll', function() {
			if (isInViewport(page1)) {
				dot1.classList.add('dots-active');
				if (current.style.display == 'none') {
					current.style.display = 'block';
				}
			} else {
				dot1.classList.remove('dots-active');
				current.style.display = 'none';
			}

			if (isInViewport(page2)) {
				dot2.classList.add('dots-active');
				if (current.style.display == 'none') {
					current.style.display = 'block';
				}
			} else {
				dot2.classList.remove('dots-active');
			}

			if (isInViewport(page3)) {
				dot3.classList.add('dots-active');
				if (current.style.display == 'none') {
					current.style.display = 'block';
				}
			} else {
				dot3.classList.remove('dots-active');
			}
		});
	},
};
</script>
<style scoped></style>
