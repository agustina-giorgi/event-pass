alert('Bienvenido/a a EventPass! Para realizar la compra de tickets, presiona COMPRAR TICKETS');

const btn = document.getElementsByClassName('btn');

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', () => {
    let cancel = false; // Si el usuario clickea en cancel antes de ingresar datos, se cierra el modal.

    function askFullName() {
      if (cancel) return; // Se cierra el modal si el usuario cancela antes de ingresar algún dato. De lo contrario, debe ingresar los datos que siguen.

      let fullName = prompt('Ingresa tu nombre y apellido, como figura en tu DNI.');

      if (fullName === null) {
        cancel = true; // Si el usuario clickea OK sin ingresar ningún dato, se vuelve a mostrar el prompt para ingresar los datos.
        return;
      } else if (fullName.trim() === "") { // Si no ingresa ningun dato, sale la alerta.
        alert('Por favor, ingrese un dato válido.');
        return askFullName(); // Si clickea en OK, le vuelve a pedir los datos.
      } else { // Muestra los datos ingresados para que el usuario verifique si son correctos y procede a preguntarle el dato que sigue.
        let confirmation = confirm('Hola, ' + fullName + '!' + ' Si tus datos son correctos, presiona OK para continuar.');
        if (confirmation) {
          askDob();
        } else { // Si pone cancelar, es decir, que ingresó datos pero quiere corregirlos, vuelve a pedirle que los ingrese para que los pueda corregir.
          return askFullName();
        }
      }
    }

    function askDob() {
      if (cancel) return; 

      let dob = prompt('Ahora ingresa tu fecha de nacimiento, en formato DD/MM/AAAA.');

      if (dob === null) {
        cancel = true; 
        return;
      } else if (dob.trim() === "" || isNaN(new Date(dob))) { // Si deja el campo vacío o ingresa letras, se muestra la alerta.
        alert('Por favor, ingrese una fecha válida en formato DD/MM/AAAA.');
        return askDob();
      } else {
        confirmation = confirm('Tu fecha de nacimento es ' + dob + '. Si es correcto, presiona OK para continuar.');
        if (confirmation) {
          askDni();
        } else {
          return askDob();
        }
      }
    }

    function askDni() {
      if (cancel) return; 

      let dni = prompt('Ahora ingresa tu DNI.');

      if (dni === null) {
        cancel = true; 
        return;
      } else if (dni.trim() === "" || isNaN(parseInt(dni))) {
        alert('Por favor, ingrese un dato válido.');
        return askDni(); 
      } else {
        confirmation = confirm('Tu DNI es ' + dni + '. Si es correcto, presiona OK para continuar.');
        if (confirmation) {
          alert('Ya completaste tus datos! Ahora podemos seguir con la compra de las entradas. Haz click en OK para continuar.');
          askTktType();
        } else {
          return askDni();
        }
      }
    }

    function askTktType() {
        if (cancel) return;
      
        let tktType = true; 
      
        while (tktType === true) { 
          let options = prompt(`Selecciona una opción según el tipo de entradas que deseas adquirir:
          1- Entrada General: $15000
          2- Entrada VIP: $30000`);
      
          if (options === null) {
            cancel = true;
            return; 
          }
      
          // Transforma los datos ingresados en numeros
          let selectedNumber = parseInt(options);
      
          // Verifica si es un número válido y está dentro de las opciones disponibles (1 o 2)
          if (isNaN(selectedNumber) || selectedNumber === 1 || selectedNumber === 2) {
            alert("La opción ingresada no es válida. Por favor, selecciona 1 o 2.");
          } else {
            tktType = selectedNumber; 
            let confirmacion = confirm(`Has seleccionado Entrada ${selectedNumber === 1 ? 'General' : 'VIP'}. Si es correcto, selecciona OK para finalizar tu compra.`);
            if (confirmacion) {
              return askTktAmount(); 
            } else {
              tktType = true; 
            }
          }
        }
      }

    
    // aca deberia pedir al usuario que ingrese la cantidad de entradas que quiere comprar, despues mostrarle un confirm con el total de su compra y cuando confirma deberia salir la alerta de que ha finalizado su compra (pero lo dejo comentado porque no funciona) 

    //   function askTktAmount() {
    //     if (cancel) return;
  
    //     let tktAmount = true;
  
    //     while (tktAmount === true) {
    //       let numberOfTkts = prompt('Ingresa la cantidad de entradas que deseas adquirir.');
  
    //       if (tktAmount=== null) {
    //         cancel = true;
    //         return;
    //       }
  
    //       let amount = parseInt(numberOfTkts);
  
    //       if (isNaN(amount) || amount <= 0) {
    //         alert('Por favor, ingresa una cantidad válida de entradas.');
    //       } else {
    //         numberOfTkts = amount;
    //         let total = calcTotal(numberOfTkts);
    //         let confirmation = confirm(`Vas a comprar ${numberOfTkts} entradas. El total es de $${total}. ¿Es correcto?`);
    //         if (confirmation) {
    //           alert('Haz finalizado tu compra con éxito!');
    //         } else if (cancel = true) {
    //           return; // Termina la función y cierra el modal
    //         } else {
    //           askTktAmount(); // Vuelve a pedir la cantidad si el usuario cancela la confirmación
    //         }
    //       }
    //     }
    //   }
  
    //   function calcTotal(amount) {
    //     let total = 0;
    //     if (tktType === 1) {
    //       total = amount * 15000;
    //     } else if (tktType === 2) {
    //       total = amount * 30000;
    //     }
    //     return total;
    //   }


     
    askFullName(); // Llama a la función por primera vez y se inicia el proceso de pedir datos.
  });
}


