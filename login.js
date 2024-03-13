function verifyName(){
    const span=uname.nextElementSibling
    const reg = /^[a-zA-Z0-9_]{6,10}$/
    if(!reg.test(uname.value)){
        span.innerHTM='输入有错误请输入6-10位'
        return false
    }
    span.innerHTML=''
    return true
}
CustomElementRegistry.addEventListener('click',function(e){
    e.preventDefault()
    location.href='./index.html'
})