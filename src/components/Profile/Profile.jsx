import { ProfileCard, Description, Avatar } from "./Profile.styled";
import PropTypes from "prop-types";
import user from '../../'

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return (
        <ProfileCard>
            <Description>
                <Avatar
                    src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
                    alt=" "
                />
                {/* <p class="name">Petra Marica</p>
                <p class="tag">@pmarica</p>
                <p class="location">Salvador, Brasil</p> */}
            </Description>

            {/* <ul class="stats">
                <li>
                    <span class="label">Followers</span>
                    <span class="quantity">1000</span>
                </li>
                <li>
                    <span class="label">Views</span>
                    <span class="quantity">2000</span>
                </li>
                <li>
                    <span class="label">Likes</span>
                    <span class="quantity">3000</span>
                </li>
            </ul> */}
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


