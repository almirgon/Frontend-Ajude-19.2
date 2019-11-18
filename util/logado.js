function logado() {
	let logado = JSON.parse(localStorage.getItem("logado"));
    if (logado === null || (logado.value === false) || (logado.timestamp === (new Date().getTime().toString()))) {
		
		let object = {value: false, timestamp: logado.timestamp};
		sessionStorage.setItem("logado", JSON.stringify(object));
		
		return false;
	} else {
		return true;
	}
    
};
