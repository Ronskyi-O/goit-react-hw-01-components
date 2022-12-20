import { Container } from "./App.styled";
import { Profile } from "../Profile/Profile"
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../FriendList/FriendList";
import { TransactionHistory } from "../TransactionHistory/TransactionHistory";
import user from '../../user.json'
import data from '../../Data.json'
import friends from '../../friends.json'
import transactions from '../../transactions.json'


export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );

};



