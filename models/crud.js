const fs = require('fs');

const crud  = {
    myData:[],
    read(filePath){
        if(fs.existsSync(filePath)){
            this.myData = JSON.parse(fs.readFileSync(filePath,{encoding:'utf-8'}))
            console.log (crud.myData)
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
                if (el.cpf === cpf) {
                    returnMessage = true
                }
            })
            if (returnMessage !== true) {
                returnMessage = false
            }
        }
        return returnMessage
    }
}
module.exports = crud