const faqItem = document.querySelectorAll('.faq-item');
const faqItemDesc = document.querySelectorAll('.faq-item-desc');
const faqItemP = document.querySelectorAll('.faq-item-p');

for (let i=0; i < faqItem.length; i++){
	faqItem[i].onclick = function () {
		faqItemDesc[i].classList.toggle("faq-item-desc-click");
		faqItemP[i].classList.toggle("faq-item_p-bachground");
	};
}

const mobileBurger = document.querySelector('.mobile-buger');
const burgerMenu = document.querySelector('.mobile-burger-menu');
const body = document.querySelector('body');
const cross = document.querySelector('.cross');

mobileBurger.onclick = function () {
	burgerMenu.classList.add('active');
	body.classList.add('active');
};

cross.onclick = function () {
	burgerMenu.classList.remove('active');
	body.classList.remove('active');
};
