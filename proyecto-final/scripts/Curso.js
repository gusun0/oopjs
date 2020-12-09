// Creando las estructuras del proyecto

export default class Curso{
	constructor(nombre,poster,clases){
		this.nombre = nombre;
		this.poster = poster;
		this.clases = clases;
		this.inscritos = [] /* Inicia como array vacio */
	}

	// Métodos
	// Buena práctica usetar setters y getters

	getNombre(){
		return this.nombre;
	}
	setNombre(nombre){
		this.nombre = nombre;
	}

	getPoster(){
		return this.poster;
	}
	setPoster(poster){
		this.poster = poster;
	}

	getClases(){
		return this.clases;
	}
	setClases(clases){
		this.clases = clases;
	}

	getInscritos(){
		return this.inscritos;
	}
	setInscritos(inscritos){
		this.inscritos = inscritos;
	}
}


