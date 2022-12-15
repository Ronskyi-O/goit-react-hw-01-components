import styled from "@emotion/styled"

export const StatisticsCard = styled.section`
  border: 1px solid grey;
  border-radius: 5px;
  width: 300px;
  background-color: white;
`

export const StatisticsTitle = styled.h2`
  flex-direction: column;
  padding-top: 40px;
  padding-right: 50px;
  padding-left: 50px;
  padding-bottom: 40px;
  text-align: center;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: grey;
`

export const StatisticsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StatisticsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 20px;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: #fff;
  background-color: red;
`

export const ItemLabel = styled.span`
  margin-bottom: 10px;
`

export const ItemProcentage = styled.span`
  font-size: 20px;
`