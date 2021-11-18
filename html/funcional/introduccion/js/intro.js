//Imperativa
const hola = "pedro";
const decirHola =()=>{
    console.log(`Hi ${hola}`);
}
//decirHola();

//const dHi=(name)=>`Hi ${name}`;
//console.log(dHi("jose"));

const sum = (a,b) => a + b
const sum2 = (a,b) => a - b
const suma = (a,b,ccc) =>ccc(a,b)

console.log(suma(2,2,sum2));