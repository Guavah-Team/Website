const scrollTo = (y) => {
    window.scroll({
        top: y,
        behavior: 'smooth'
    })
}

const getCords = (id) => {
    const element = document.querySelector(`#${id}`)
    return element.getBoundingClientRect().top
}

const scrollToId = (id) => {
    const y = getCords(id)
    scrollTo(y)
}



