//событие - изменение, кторое браузер может отследить
//событие наступает - браузер вызывает функцию-обработчик(колбэк) /слушатель-listener, событие - event,
// подписчик - subscriber

const handler = (event) => {
    event.stopPropagation()
    if (event.target.tagName === 'BUTTON')
        alert('yo')
}

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const bg = document.getElementById('big')
sm.onClick = handler

sm.addEventListener("click", handler)
md.addEventListener("click", (e) => {
    e.stopPropagation()
    alert('sdsd')
})
bg.addEventListener("click", () => {
    alert('dswww')
})
const a=document.getElementById('a')
a.addEventListener("click", (e)=>{
    e.preventDefault()
    alert('wewewew')
})