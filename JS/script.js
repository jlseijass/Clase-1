const usuarios = [
{nombre: "Ana", edad:20,aceptoTerminos:false},
{nombre: "Luis", edad:17,aceptoTerminos:true},
{nombre: "Carlos", edad:18,aceptoTerminos:true},
{nombre: "María", edad:15,aceptoTerminos:true},
{nombre: "Angela", edad:21,aceptoTerminos:true}
]

for(let i = 0; i <usuarios.length; i++) {
   if(usuarios[i].edad >=18 && usuarios[i].aceptoTerminos) {
    alert(usuarios[i].nombre);
   }
}