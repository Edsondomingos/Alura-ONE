
//Mensagem Secreta!
//pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober!

/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

let entrada = document.querySelector('#input-texto');
let cripto = document.querySelector('#btn-cripto');
let descripto = document.querySelector('#btn-descripto');
let msg = document.querySelector('#msg');


cripto.addEventListener('click', e =>{
	e.preventDefault();
	let novaMsg = '';
	let regex = new RegExp('^[a-z]+$');
	if (!regex.test(entrada.value)){
		document.querySelector('label').style.backgroundColor = 'red';
	} else{
		document.querySelector('label').style.backgroundColor = 'white';

		let arr = entrada.value.split('');
		arr.forEach((f,g) => {
			if (f == 'a'){
				arr[g] = 'ai';
				novaMsg += arr[g];
			} else if (f == 'e'){
				arr[g] = 'enter';
				novaMsg += arr[g];
			} else if (f == 'i'){
				arr[g] = 'imes';
				novaMsg += arr[g];
			} else if (f == 'o'){
				arr[g] = 'ober';
				novaMsg += arr[g];
			} else if (f == 'u'){
				arr[g] = 'ufat';
				novaMsg += arr[g];
			} else {
				novaMsg += f;
			}

		})
	}
	msg.value = novaMsg;
})

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/


descripto.addEventListener('click', e => {
	e.preventDefault();
	let regex = new RegExp('^[a-z]+$');
	if (!regex.test(entrada.value)){
		document.querySelector('label').style.backgroundColor = 'red';
	} else {
		let novaMsg = entrada.value;
		
		if (novaMsg.indexOf('imes') != -1){
			novaMsg = novaMsg.replace(/imes/g,'i');
		}
		if (novaMsg.indexOf('ai') != -1){
			novaMsg = novaMsg.replace(/ai/g,'a');
		} 
		if (novaMsg.indexOf('enter') != -1){
			novaMsg = novaMsg.replace(/enter/g,'e');
		} 
		if (novaMsg.indexOf('ober') != -1){
			novaMsg = novaMsg.replace(/ober/g,'o');
		} 
		if (novaMsg.indexOf('ufat') != -1){
			novaMsg = novaMsg.replace(/ufat/g,'u');
		}

		msg.value = novaMsg;
	}
})

let copiar = document.querySelector('#btn-copy');
copiar.addEventListener('click', async e => {
	await navigator.clipboard.writeText(msg.value);
})

let colar = document.querySelector('#btn-paste');
colar.addEventListener('click', async (e) => {
	e.preventDefault();
	await navigator.clipboard.readText().then(response => entrada.value = response);
})
