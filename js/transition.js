document.querySelectorAll('[tw-nav]').forEach(link => {
    const content = document.getElementById('content')
    let flag = 0

    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('tw-nav'))
        .then(resp => resp.text())
        .then(html => content.innerHTML = html)

        flag++
    }

    if(flag == 0){
        fetch('../components/home.html')
        .then(resp => resp.text())
        .then(html => content.innerHTML = html)
    }

})