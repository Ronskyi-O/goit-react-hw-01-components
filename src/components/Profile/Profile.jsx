import { ProfileCard, Description, Avatar, Name, Tag, Location, Stats, StatsItem, StatLabel, StatQuantity } from "./Profile.styled";
import PropTypes from "prop-types";

export const Profile = ({ user }) => {
    const { username, tag, location, avatar, stats } = user;
    return (
        <ProfileCard>
            <Description>
                <Avatar
                    src={avatar}
                    alt={username}
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <StatsItem>
                    <StatLabel>Followers</StatLabel>
                    <StatQuantity>{stats.followers}</StatQuantity>
                </StatsItem>
                <StatsItem>
                    <StatLabel>Views</StatLabel>
                    <StatQuantity>{stats.views}</StatQuantity>
                </StatsItem>
                <StatsItem>
                    <StatLabel>Likes</StatLabel>
                    <StatQuantity>{stats.likes}</StatQuantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    )
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        })
    })
}





