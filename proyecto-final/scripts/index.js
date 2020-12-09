import Curso from "./Curso.js";
import Profesor from "./Profesor.js";
import Alumno from "./Alumno.js";

/*
// Instanciando objetos de la clase curso
const html = new Curso('HTML desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png',10,23);
const css = new Curso('CSS desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png',8);
const js = new Curso('JS desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg',12);
*/
const elem = document.getElementById('cursos');



/* Agregando elem al DOM con funciones */
// Función que imprime un objeto en el DOM
// Recibe un objeto de tipo curso

function mostrarCurso(curso){
const hijo = document.createElement('div');
hijo.classList.add('card');
hijo.innerHTML = `
            	 <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
		 <img src=${curso.getPoster()} alt="${curso.getNombre()}">
         	</div>
         	<div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
		 <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
		<span class="small">Cantidad de clases: ${curso.getClases()}</span>
		</div>
	`; 

elem.appendChild(hijo);
}

const form = document.getElementById('formCursos');
form.addEventListener('submit', e => {
   e.preventDefault();
 const target = e.target;
 //console.log(target.clasesCurso.value); 
 const curso = new Curso(target.nombreCurso.value,target.posterCurso.value,target.clasesCurso.value);
 mostrarCurso(curso);
 form.reset();
})

const profe = new Profesor('Jorge','R','correo',true,["React","Drupal"],10);
console.log(profe.getCursosDictados());

const alumno = new Alumno('Juan', 'R','correo',false,["HTML","CSS"]);
const alumno2 = new Alumno('Maria', 'R','correo',true,["Drupal","CSS"]);

const html = new Curso("HTML desce cero","mi.png",7);
// usando spread operator para agegar elementos a un array que ya existe

html.setInscritos([...html.getInscritos(),alumno]);
console.log(html);
html.setInscritos([...html.getInscritos(),alumno2]);
console.log(html);



/*
// Llamadas a la función mostrar curso
mostrarCurso(html);
mostrarCurso(css);
mostrarCurso(js);
*/

/* Agregando elemtos al DOM Sin funciones 
const hijo = document.createElement('div');
hijo.innerHTML = `<img src=${html.getPoster()}>
		 <h3>${html.getNombre()}</h3>
		 <span>Cantidad de clases: ${html.getClases()}</span>
		 <p>Alumnos Inscritos: ${html.getInscritos()}</p>
	`; 

elem.appendChild(hijo);
*/

