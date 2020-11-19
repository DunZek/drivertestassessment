
const copies = document.querySelectorAll('.copy_to_clipboard')

copies.addEventListener('click', () => {

    let copyText = copies.innerHTML
    console.log(copyText)
    document.execCommand('copy')
})
