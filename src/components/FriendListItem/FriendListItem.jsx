import { Friend, StatusOnline, StatusOffline, Avatar, Name } from './FriendListItem.styled'
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Friend>
            {isOnline
                ? <StatusOnline></StatusOnline>
                : <StatusOffline></StatusOffline>
            }
            <Avatar src={avatar} alt={name} width="48" />
            <Name>{name}</Name>
        </Friend>)

};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}