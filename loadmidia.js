let midiaCadastradas = document.getElementById('midiaCadastradas')

var Data = JSON.parse(localStorage.getItem('StarGeekBC'))
if (Data == null) {
    Data = []
}
midiaCadastradas.innerHTML = ""

Data.forEach(item => {
    var html = `
        <img src="${item.Foto}" alt="" class="anim">
    `
    midiaCadastradas.innerHTML += html

});