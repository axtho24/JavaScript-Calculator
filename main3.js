
  (function() {
      var digits = document.querySelectorAll(".calculator .number");
      var results = document.querySelector(".area");
      var final = document.querySelector (".info")

      var values1 = []
      console.log(values1)
      var value2 = []
      console.log(value2)
      var operations = []
      console.log(operations)

      for(var i = 0; i < digits.length; i++){
        var amount=digits[i]
        amount.addEventListener ("click", display)
      }

      var decimal = document.querySelector('.calculator .dec')
      decimal.addEventListener ("click", display)

      function display(event) {
        results.innerText += event.target.innerText;
        final.innerText += event.target.innerText
      }

      var adding = document.querySelector('.calculator .add')
      adding.addEventListener ("click", addition)
      function addition () {
        values1.push(results.innerText)
        operations.push("+")
        results.innerText = ""
        final.innerText += event.target.innerText
      }

      var minus = document.querySelector('.calculator .sub')
      minus.addEventListener ("click", subtraction)
      function subtraction () {
        values1.push(results.innerText)
        operations.push("-")
        results.innerText = ""
        final.innerText += event.target.innerText
      }

      var multiply = document.querySelector('.calculator .mul')
      multiply.addEventListener ("click", multiplication)
      function multiplication () {
        values1.push(results.innerText)
        operations.push("*")
        results.innerText = ""
        final.innerText += event.target.innerText
      }

      var segregate = document.querySelector('.calculator .div')
      segregate.addEventListener ("click", division)
      function division () {
        values1.push(results.innerText)
        operations.push("/")
        results.innerText = ""
        final.innerText += event.target.innerText
      }

      var workit = document.querySelector('.calculator .equals')
      workit.addEventListener ("click", equal)
      function equal (solve) {
          value2.push(results.innerText)
          solve = operations[0]
          if  (solve === '+') {
             var z= parseFloat(values1) + parseFloat(value2)
          } else if (solve === '-') {
                var z= parseFloat(values1) - parseFloat(value2)
          } else if (solve === '*') {
                var z= parseFloat(values1) * parseFloat(value2)
          } else if (solve === '/') {
                var z= parseFloat(values1) / parseFloat(value2)
          } results.innerText = z
            final.innerText = z
        }

        var erase = document.querySelector ('.calculator .delete')
        erase.addEventListener ("click", clear)
        function clear (e) {
          final.innerText = ""
          results.innerText = ""
          values1.splice(0)
          value2.splice(0)
          operations.splice(0)
        }

        var negpos = document.querySelector('.calculator .posneg')
        negpos.addEventListener ("click", negative)
        function negative (){
          results.innerText = results.innerText*-1
          final.innerText = final.innerText*-1
        }
    })();
