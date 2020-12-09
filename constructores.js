// Función constructora
/*
function Usuario(nombres,apellidos,correo,activo){
	this.nombres = nombres;
	this.apellidos = apellidos;	
	this.correo = correo;
	this.activo = activo;
}
*/

// Pasando la función constructora a una clase

class Usuario {
	constructor(nombres, apellidos, correo, activo){
		this.nombre = nombres;
		this.apellidos = apellidos;
		this.correo = correo;
		this.activo = activo;
		this.activo = activo;
	}

	presentarse(){
		return `Hola ${this.nombre}`;
	}

	// Métodos getters y setters
	
	// Get
	
	getApellidos(){
		return this.apellidos;
	}
	getNombres(){
		return this.nombre;
	}
	getCorreo(){
		return this.correo;
	}

	// Set => sirve para dar nueva información al obj
 	setApellidos(newApellido){
		this.apellidos = newApellido;
	}

}





// Herencia

class Profesor extends Usuario{
	constructor(nombres,apellidos,correo,activo,cursosDictados){
		// con el método super indicamos que la clase usuario genere dichos atributos en Profesor
		super(nombres,apellidos,correo,activo);
		this.cursosDictados = cursosDictados;
	}
}

class Alumno extends Usuario{
	constructor(nombres,apellidos,correo,activo,cursosTomados){
		// con el método super indicamos que la clase usuario genere dichos atributos en Alumno
		super(nombres,apellidos,correo,activo);
		this.cursosTomados = cursosTomados;
	}
}




// Instancia de un objeto
// Instancias => objetos que fueron declarados a partir de una clase
//
const beto = new Usuario('Beto','Quiroga','correo',true);
const alexys = new Profesor('Alexys','Quiroga','correo',true,['Java','OOP']);
const jorge = new Alumno('Jorge','S','correo',true,['React','HTML']);



console.log(jorge.getApellidos());
console.log(alexys.getApellidos());

/*
console.log(beto.getApellidos());
console.log(beto.getNombres());
console.log(beto.getCorreo());
console.log(beto.presentarse());
beto.setApellidos('Ortiz');
console.log(beto.getApellidos());
*/



