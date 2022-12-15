import { ProfileCard, Description, Avatar, Name, Tag, Location, Stats, StatsItem, StatLabel, StatQuantity } from "./Profile.styled";
import PropTypes from "prop-types";



export const Profile = () => {
    return (
        <ProfileCard>
            <Description>
                <Avatar
                    src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                    alt=" "
                />
                <Name>Petra Marica</Name>
                <Tag>@pmarica</Tag>
                <Location>Salvador, Brasil</Location>
            </Description>

            <Stats>
                <StatsItem>
                    <StatLabel>Followers</StatLabel>
                    <StatQuantity>1000</StatQuantity>
                </StatsItem>
                <StatsItem>
                    <StatLabel>Views</StatLabel>
                    <StatQuantity>2000</StatQuantity>
                </StatsItem>
                <StatsItem>
                    <StatLabel>Likes</StatLabel>
                    <StatQuantity>3000</StatQuantity>
                </StatsItem>
            </Stats>
        </ProfileCard>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}


