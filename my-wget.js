const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const response = await axios.get('https://mockva.ru')
    let newFile = await fsPromises.writeFile('./index.html', response.data)
  }
  catch (e) {
    console.log(e.message)
  }
}

main()