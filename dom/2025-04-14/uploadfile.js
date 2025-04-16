
const inputE = document.querySelector('input')

inputE.addEventListener('change', async (e) => {
    const fileObj = await readFile(inputE.files[0])
    console.log(inputE.files[0])
    console.log(URL.createObjectURL(inputE.files[0]))
    // console.log(fileObj)
})

const readFile = (file) => {
    return new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onloadend = () => resolve(fileReader.result)
    })
}