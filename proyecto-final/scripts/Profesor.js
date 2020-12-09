
import Usuario from './Usuario.js';

export default class Profesor extends Usuario{
 constructor(nombre,apellidos,correo,activo,cd,calificacion){
	 super(nombre,apellidos,correo,activo)
	 this.cursosDictados = cd;
	 this.calificacion = calificacion;
 }

	getCursosDictados(){
		return this.cursosDictados;
	}
	
	setCursosDictados(nuevoCurso){
		this.cursosDictados = nuevoCurso;
	}

	getCalificacion(){
		return this.cursosDictados;
	}
	
	setCalificacion(nuevaCal){
		this.calificacion = nuevaCal;
	}
}
