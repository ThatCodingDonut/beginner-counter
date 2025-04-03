var number = 0
var counter = document.getElementById('counter')
var up = document.getElementById('up')
var down = document.getElementById('down')
var setInput = document.getElementById('set')
var setbtn = document.getElementById('setbtn')
var reset = document.getElementById('reset')
function updateCounter() {
    counter.innerText = number
    counter.classList.add('pulse')
    setTimeout(() => counter.classList.remove('pulse'), 200)
}
up.addEventListener('click', () => {
    number++
    updateCounter()
})
down.addEventListener('click', () => {
    number--
    updateCounter()
})
setbtn.addEventListener('click', () => {
    number = Number(setInput.value)
    updateCounter()
})
reset.addEventListener('click', () => {
    number = 0
    updateCounter()
})