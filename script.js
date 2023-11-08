document.addEventListener('DOMContentLoaded', function() {
	const nightModeToggle = document.getElementById('nightModeToggle');
	
	nightModeToggle.addEventListener('change', function() {
	  if (this.checked) {
		enableNightMode();
	  } else {
		disableNightMode();
	  }
	});
	
	function enableNightMode() {
	  document.body.classList.add('night-mode');
	}
	
	function disableNightMode() {
	  document.body.classList.remove('night-mode');
	}
  });