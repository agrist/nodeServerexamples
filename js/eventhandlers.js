var element = document.getElementById('link');

element.addEventListener('click', function(){
  console.log('Clicked via eventlistener');
});

element.addEventListener('mouseenter', function(){ console.log('Mouse was over link');});
