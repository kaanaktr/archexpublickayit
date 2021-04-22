# v12 boş altyapı

## ArchéxMelih oluşturdu.
## Bu projeyi Glitch'te çalıştırmanızı tavsiye ederim, eğer diyorsanız ben normal çalıştıracağım, ayarlar.json oluşturun token ve prefix olarak yerler açın gerisini siz biliyorsunuzdur. Eğer yardıma ihtiyacınız olur ise Discord'um: **Mélih#0001**

## ayarlar.json örneği:

`{ 
    "token": "",
    "prefix": ""
    }`
    
## gerisi:

  * token için server.js içine gir en aşağı in process.env.token yazan yerini `require("./ayarlar.json").token` olarak değiştirin.
  * prefix için events klasöründen message.js klasörüne girip **let prefix = process.env.prefix** yazan yeri **let prefix = require("../ayarlar.json").prefix** olarak değiştirin.
