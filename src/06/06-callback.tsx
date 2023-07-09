// const callback = () => {
//     alert('hillow')
// }
//
// setTimeout( callback, 1000)

 import {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert('user should be deleted')
    }
    const saveUser = () => {
        alert('user was saved')
    }

    const onNamedChanged = () => {
        console.log('changed')
    }
    const focusHandler = () => {
        console.log('focus lost')
    }
    const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed'+ e.currentTarget.value)
    }
    return <div>
        <textarea onChange={onNamedChanged}
        onBlur={focusHandler}>Nastya</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>safe</button>
    </div>
}