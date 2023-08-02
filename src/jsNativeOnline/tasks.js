//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает
// сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()
// function repeatString(substr, repeat, separator) {
//     let str = (substr+separator).repeat(repeat)
//     console.log(str.slice(0, -2))
// }
// repeatString("yo", 3, ", "   )


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает
// true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF
// function checkStart(str,substr){
//     return    str.toLowerCase().startsWith(substr.toLowerCase())
// }
//
// console.log(checkStart("Incubator", "sdfsf"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

// function truncateString(str, num) {
//     let newstr = str.slice(0,num)+'...'
//     return newstr
// }
//
// console.log(truncateString('s dfs sdfsdfsdfasdwer', 3))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в
// предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()
// function getMinLengthWord(str){
//     return str.split(' ')
// }
//
// console.log(getMinLengthWord('sdfsds, sdf!'))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает
// то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"
// function setUpperCase(str) {
//     let newstr= str.toLowerCase().split(' ')
//     return newstr.map(el=>el[0].toUpperCase()+el.slice(1))
// }
//
// console.log(setUpperCase('dvdv dfvd vFFvv'))

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учётом
// повторяющихся символов.
//* попробовать учитывать повтор символов в подстроке

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true
// isIncludes("Incubator", "inba") => true
// isIncludes("Incubator", "Incubatorrr")=> true
function isIncludes(str, substr){
    let count = 0
    substr=substr.toLowerCase()
    str=str.toLowerCase()
    // for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= substr.length; j++) {
            if(str.includes(substr[j])){
                count++
            }
        }
        return count===substr.length
    // }
}

console.log(isIncludes("Incubator", "inba"))






