function logado() {
	let logado = sessionStorage.getItem("logado");
    if (logado === null || (logado.value === false) || (logado.timestamp - (new Date().getMilliseconds) < 86400000)) {
		
		let object = {value: false, timestamp: new Date().getMilliseconds};
		sessionStorage.setItem("logado", object);
		
		return false;
	} else {
		return true;
	}
    
}

export {logado};
