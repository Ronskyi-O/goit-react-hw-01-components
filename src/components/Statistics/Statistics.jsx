import { StatisticsCard, StatisticsTitle, StatisticsList, StatisticsItem, ItemLabel, ItemProcentage } from "./Statistics.styled"

export const Statistics = () => {
    return (
        <StatisticsCard>
            <StatisticsTitle>Upload stats</StatisticsTitle>

            <StatisticsList>
                <StatisticsItem>
                    <ItemLabel>.docx</ItemLabel>
                    <ItemProcentage>4%</ItemProcentage>
                </StatisticsItem>
                <StatisticsItem>
                    <ItemLabel>.mp3</ItemLabel>
                    <ItemProcentage>14%</ItemProcentage>
                </StatisticsItem>
                <StatisticsItem>
                    <ItemLabel>.pdf</ItemLabel>
                    <ItemProcentage>41%</ItemProcentage>
                </StatisticsItem>
                <StatisticsItem>
                    <ItemLabel>.mp4</ItemLabel>
                    <ItemProcentage>12%</ItemProcentage>
                </StatisticsItem>
            </StatisticsList>
        </StatisticsCard>
    )
}