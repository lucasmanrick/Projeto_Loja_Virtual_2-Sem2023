const fs = require('fs');

const crud  = {
    myData:[],
    read(filePath='',secondFilePath=''){
      let dataReturn;
      if (filePath && secondFilePath) {
          if(fs.existsSync(filePath && secondFilePath)){
          this.myData = JSON.parse(fs.readFileSync(filePath,{encoding:'utf-8'}))
          this.myData.push (JSON.parse(fs.readFileSync(secondFilePath,{encoding:'utf-8'})))
          dataReturn = crud.myData
        }
      } else {
         if(fs.existsSync(filePath)){
          this.myData = JSON.parse(fs.readFileSync(filePath,{encoding:'utf-8'}))
          dataReturn = crud.myData;
         }
      }
      return dataReturn
    },
    create(obj,filePath){
        this.myData.push(obj),
        fs.writeFileSync(filePath,JSON.stringify(crud.myData),{encoding: 'utf-8'})
    },

    verificaId(){
        if(this.myData.length > 0){
            let idMaximo = crud.myData.at(-1).id;
            return ++idMaximo
        }
        return 1;
    },

    verificaCliente (cpf='')  {
        let returnMessage;
        if  (cpf) {
              this.myData.forEach((el) => {
                if (el.cpf == cpf) {
                    returnMessage = true
                }
            })
            if (returnMessage !== true) {
                returnMessage = false
            }
        }
        return returnMessage
    },

    validaLogin (cpf,senha) {
      let clientFounded = false;
       this.myData.forEach((el) => {
          if (el.cpf == cpf && el.senha == senha) {
             clientFounded = el
          }
        })
       return clientFounded
    },
    clienteLogado(logado,dataClient) {
      if(logado) {
        fs.writeFileSync('./data/logado.JSON',JSON.stringify(dataClient),{encoding: 'utf-8'})
      }
    },
}
module.exports = crud