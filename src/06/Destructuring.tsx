export type MenType = {
    name: string
    age: number
    lessons: Array<LessonsType>
}
type LessonsType={
    title: string
}

type PropsType = {
    title: string
    men: MenType
}

const MenComponent: React.FC<PropsType> = (props) => {
    const {title, men, ...restProps} = props
    return <div>
        <h1>{title}</h1>
        <div>{men.name}</div>
    </div>
}