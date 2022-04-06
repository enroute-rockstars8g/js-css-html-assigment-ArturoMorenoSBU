function fibo() {
    const fiboNumber = parseInt(document.getElementById("inputFibo").value);
  
    let a = 0;
    let b = 1;
    let c = 0;
    var fibb = [0, 1];
    var fiarr=[]
    if(fiboNumber === 1){
      console.log(1)
      return 1;
    }
    for (let i = 0; i < fiboNumber-1; i++) {
        c = a + b
        fibb.push(c);
        a = b ;
        b = c;
    
      //console.log(c)
      fibb = fibb.slice(-1)
    }
    
    const container = document.getElementById("fiboContainer");
    const praragraph = document.createElement("p");
    praragraph.innerText = fibb.join(",");
    praragraph.className = "numerosBonitos";
    container.appendChild(praragraph);
  }
//Función del factorial
  function facto() {
    const FactoNumber = parseInt(document.getElementById("inputFacto").value);
    let fact = 1; 

    for (i=1; i<=FactoNumber; i++) {
        
        fact = fact * i;
    }
    l1=[0,fact]
    l1 = l1.slice(-1)
    const container = document.getElementById("FactoContainer");
    const praragraph = document.createElement("p");
    praragraph.innerText = l1.join(",");
    praragraph.className = "numerosBonitos";
    container.appendChild(praragraph);
  }