
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.navLinks');

menuIcon.onlick = () => {
	navLinks.classList.toggle('active');
}
