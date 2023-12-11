const fs = require('fs');

const crud  = {
    myData:[],
    read(filePath,secondFilePath){

      if(filePath && secondFilePath) {
        this.myData = JSON.parse(fs.readFileSync(filePath,{encoding:'utf-8'}))
        this.myData += JSON.parse(fs.readFileSync(filePath,{encoding:'utf-8'}))
        return crud.myData
      }
      if(fs.existsSync(filePath)){
          this.myData = JSON.parse(fs.readFileSync(filePath,{encoding:'utf-8'}))
          return crud.myData;
      }
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
          if (cpf == el.cpf && senha == el.senha) {
             clientFounded = el
          }
        })
       return clientFounded
    }
}
module.exports = crud