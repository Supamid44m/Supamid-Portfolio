interface props{
    url:string
}

export default function DemoContriner({url}:props){
    return (
        <div >
            <iframe src={'https://www.google.com/?client=safari'} width="100%" height="100%"></iframe>
        </div>
    )
}