
logScreenSize();

function toggleMenu () {
  const sidebar = document.getElementById("sidebar-menu"); 
  const hamburgerBtn = document.getElementById("hamburgerButton"); 
  const mainContent =  document.getElementById("main-content");  
  
  if (sidebar.classList.contains('open')) {
	  sidebar.style.width = '70px';
	  sidebar.classList.remove('open');
	  sidebar.classList.add('close');
	  mainContent.classList.remove('ml-220');
	  mainContent.classList.add('ml-70');      
  } else {
	  sidebar.style.width = '220px';
	  sidebar.classList.add('open');
	  sidebar.classList.remove('close');
	  mainContent.classList.add('ml-220');
	  mainContent.classList.remove('ml-70');
    }	
}

//Captue Screen Size
function logScreenSize(){
	console.log(window.innerHeight)
	console.log(window.innerWidth)
}

window.addEventListener('resize', logScreenSize);
