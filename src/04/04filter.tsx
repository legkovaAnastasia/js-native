const courses = [
    {title: 'css', price: 100},
    {title: 'js', price: 120},
    {title: 'react', price: 150}
]

let filter = courses.filter(el=>el.price>100)
