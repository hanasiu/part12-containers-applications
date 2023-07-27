import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavigationDiv } from '../style'
import { setNotification } from '../reducers/notificationReducer'
import { setUser } from '../reducers/loginUserReducer';
import { useDispatch } from 'react-redux'

const Navigation = () => {
    const loginUser = useSelector(({ loginUser }) => {
        return loginUser
    })
    const dispatch = useDispatch()

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogappUser');
        dispatch(setUser(null));
        dispatch(setNotification(`logout`, 'green', 5))
      };
    
    const padding = {
        padding: 5,
    }

    return (
        <NavigationDiv>
            <Link style={padding} to="/">
                home
            </Link>
            <Link style={padding} to="/blogs">
                blogs
            </Link>
            <Link style={padding} to="/users">
                users
            </Link>
            {loginUser?.username && window.localStorage.loggedBlogappUser? (
                <p>
                    <em>{loginUser.username} logged in</em>
                    <button id="logout-button" onClick={handleLogout}>
                        logout
                    </button>
                </p>
            ) : (
                <Link style={padding} to="/login">
                    login
                </Link>
            )}
        </NavigationDiv>
    )
}

export default Navigation
