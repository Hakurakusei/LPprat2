const io = new IntersectionObserver(cb);
const pics = document.querySelector('.header-img');
io.observe(pics);
io.observe(pics2);
io.observe(pics3);

const cb = function (entries,observer){

}