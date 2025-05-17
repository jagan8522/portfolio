var typed =  new Typed(".text",{
    strings: ["frontend dvelopment" , "web developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
  } else {
    alert("Please fill in all fields.");
  }
});