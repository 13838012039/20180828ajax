myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest()


    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {
            console.log('请求响应完毕')
            if (request.status >= 200 & request.status < 300) {
                console.log('请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                let object = window.JSON.parse(string)
                console.log(typeof object)
                console.log(object)
                console.log(object.note)
                console.log(object.note.from)

            } else if (request.status >= 400) {
                console.log('请求失败')
            }
        }
    }
    request.open('GET', '/xxx') //配置
    request.send()

    // console.log(request.readyState)
})







// myButton.addEventListener('click', (e) => {
//     let request = new XMLHttpRequest()


//     request.onreadystatechange = () => {
//         console.log(request.readyState)
//         if (request.readyState === 4) {
//             console.log('请求响应完毕')
//             if (request.status >= 200 & request.status < 300) {
//                 console.log('请求成功')

//                 console.log(request.responseText)
//                 let text = request.responseText
//                 let parser = new DOMParser()
//                 xmlDoc = parser.parseFromString(text, 'text/xml')
//                 let c = xmlDoc.getElementsByTagName('content')[0].textContent
//                 console.log(c)
//             } else if (request.status >= 400) {
//                 console.log('请求失败')
//             }
//         }
//     }
//     request.open('GET', '/xxx') //配置
//     request.send()

//     // console.log(request.readyState)
// })