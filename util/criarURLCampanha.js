function criarURLCampanha(nome) {
	nome = nome.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ");
	
	nome = nome.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	
	nome = nome.toLowerCase();
	
	nome = nome.replace(/\s\s+/g, ' ');
	
	nome = nome.replace(" ","-");
	
	return nome;
}

export {criarURLCampanha};
