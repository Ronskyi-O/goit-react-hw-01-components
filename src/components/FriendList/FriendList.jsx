import { FriendsList } from './FriendList.styled'
import { FriendListItem } from '../FriendListItem/FriendListItem'
import PropTypes from "prop-types"

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map((friend) => (
                <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
            ))}
        </FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}