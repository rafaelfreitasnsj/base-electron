const { ipcRenderer } = require('electron');
const { exec } = require("child_process");

let criarPasta = document.querySelector('#criar-pasta');
let deletarPasta = document.querySelector('#deletar-pasta');


criarPasta.addEventListener('click' , function(){
  exec("mkdir pasta-nova", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
});

deletarPasta.addEventListener('click', function(){

  exec("rm -r pasta-nova", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
})

