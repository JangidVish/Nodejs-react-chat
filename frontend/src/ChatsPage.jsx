import.meta.env.MODE
import PropTypes from 'prop-types';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    
    const username = props.user.username;
    const secret = props.user.secret;
    const projectId = import.meta.env.VITE_PROJECT_ID;

    return (
        <div style={{ height: '100vh', backgroundColor: 'black' }}>
            <PrettyChatWindow
                projectId={projectId}
                username={username}
                secret={secret}
                style={{ height: '100vh' }}
            />
        </div>
    );
};

ChatsPage.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        secret: PropTypes.string.isRequired,
    }).isRequired,
};

export default ChatsPage;
