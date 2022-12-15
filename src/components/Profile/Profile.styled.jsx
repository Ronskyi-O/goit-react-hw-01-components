import styled from "@emotion/styled";

export const ProfileCard = styled.div`
border: 1px solid grey;
  border-radius: 5px;
  width: 300px;
  margin: 0;
`;

export const Description = styled.div`
   padding-top: 40px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 40px;
  text-align: center;
  background-color: white;
`;

export const Avatar = styled.img`
  max-width: 100px;
  border-radius: 50%;
  margin-bottom: 40px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`

export const Tag = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: grey;
`

export const Location = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.19;
  letter-spacing: 0.03em;
  color: grey;
  `

export const Stats = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(98, 96, 96, 0.2);
  border-top: 1px solid grey;
  `

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;

  font-size: 12px;
  line-height: 1.19;
  letter-spacing: 0.03em;
`

export const StatLabel = styled.span`
  margin-bottom: 10px;
  font-weight: 400;
  color: grey;
`

export const StatQuantity = styled.span`
  font-weight: 700;
`