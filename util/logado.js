function logado() {
	let logado = sessionStorage.getItem("logado");
    if (logado === null || (logado.value === false) || (logado.timestamp - (new Date().getTime()) < 1000)) {
		
		let object = {value: false, timestamp: new Date().getTime()};
		sessionStorage.setItem("logado", object);
		
		return false;
	} else {
		return true;
	}
    
}

export {logado};
