import { StatisticsCard, StatisticsTitle, StatisticsList, StatisticsItem, ItemLabel, ItemProcentage } from "./Statistics.styled"
import PropTypes from "prop-types";


export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
            {title && (
                <StatisticsTitle>{title}</StatisticsTitle>
            )}

            <StatisticsList>

                {stats.map(({ id, label, percentage }) => {

                    const color = {
                        backgroundColor: `${generateRandomColor()}`,
                    }

                    return (
                        <StatisticsItem key={id} style={color}>
                            <ItemLabel>{label}</ItemLabel>
                            <ItemProcentage>{percentage}%</ItemProcentage>
                        </StatisticsItem >
                    )
                })
                }

            </StatisticsList>
        </StatisticsCard>
    )
}

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}


function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
}


