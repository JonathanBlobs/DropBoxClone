class DropBoxController{

  constructor(){

    this.btnSendFileEl = document.querySelector('#btn-send-file');
    this.inputFilesEl = document.querySelector('#files');
    this.snackModalEl = document.querySelector('#react-sanckbar-root');

    this.initEvents();

  }

  initEvents(){

    this.btnSendFileEl.addEventListener('click', event => {

      this.inputFilesEl.click();

    });

    this.inputFilesEl.addEventListener('change', event =>{

      

    });
  }

}