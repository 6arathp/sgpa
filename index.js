const in1 = document.getElementById('in-1')
const in2 = document.getElementById('in-2')
const in3 = document.getElementById('in-3')
const in4 = document.getElementById('in-4')
const in5 = document.getElementById('in-5')
const in6 = document.getElementById('in-6')
const in7 = document.getElementById('in-7')
const in8 = document.getElementById('in-8')
let sgpa = 0;

function calculate() {
console.log(process.env.API_KEY)
  
  sgpa += (Math.ceil(in1.value/10)+Math.ceil(in2.value/10))*4;
  sgpa += (Math.ceil(in3.value/10)+Math.ceil(in4.value/10)+Math.ceil(in5.value/10))*3
  sgpa += (Math.ceil(in6.value/10)+Math.ceil(in7.value/10)+Math.ceil(in8.value/10))
  sgpa /= 20
  const result = document.getElementById('result')
  result.innerHTML = ""
  pg = document.createElement("p")
  pg.innerText = "Result: " + sgpa.toString()
  console.log(pg.innerText)
  pg.classList.add("result")
  result.appendChild(pg)
}

function reset() {
  in1.value = ""
  in2.value = ""
  in3.value = ""
  in4.value = ""
  in5.value = ""
  in6.value = ""
  in7.value = ""
  in8.value = ""
  const result = document.getElementById('result')
  result.innerHTML = ""
}
