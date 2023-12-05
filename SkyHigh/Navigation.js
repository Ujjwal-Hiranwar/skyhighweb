import { Input, initMDB } from "mdb-ui-kit";
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')


myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

initMDB({ Input });





