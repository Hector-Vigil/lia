"use strict"

// ===========   MENU HAMBURGUESA  ===========

document.addEventListener('DOMContentLoaded',()=>{

// declarar variables seleccionano los elementos del men´´u
const menuContainer=document.querySelector('.menuContainer ul');
const menuContainerA=document.querySelectorAll('.menuContainer ul a');
const toggle=document.querySelector('.toggle');

// evento
toggle.addEventListener('click',()=>{
	menuContainer.classList.toggle('menuVisible'); //añadir clase para que se vea la hamburguesa
})

menuContainer.addEventListener('click',(ev)=>{


	if(ev.target.matches('a')){

		menuContainerA.forEach(item=>{
			item.classList.remove('active')
		})

		ev.target.classList.add('active');
	}
})


})//LOAD


// ===========   Barra sombra header  ===========



const cabecera = document.querySelector('.cabecera')

window.addEventListener('scroll',()=>{
	if(window.scrollY == 0){
		cabecera.style.setProperty('box-shadow','none')
	}else{
		cabecera.style.setProperty('box-shadow','0px 5px 12px rgba(7, 47, 56, 0.04)')
	}
    
})


// ===========   Sección mis proyectos  ===========
// Hover imagen



// document.addEventListener("mouseover",()=>{
// 	const fondo = document.querySelectorAll(".texto-imagen")
// 	const imagenBkg = document.querySelectorAll("overlay")
	
// 	imagenBkg.classList.add(".img-hover")
// 	fondo.classList.add(".texto-imagen-hover")
// })


