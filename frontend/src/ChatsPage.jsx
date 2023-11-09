import {PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return(
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='2c71b9fd-8323-4171-b4ab-85946b647bdf'
        username={props.user.username}
        secret={props.user.secret}
       style={{height:'100%'}} />
    </div>
    )
}
export default ChatsPage