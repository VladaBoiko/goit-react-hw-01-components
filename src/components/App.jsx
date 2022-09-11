import user from '../json/user';
import data from '../json/data';
import friends from '../json/friends';
import transactions from '../json/transactions';

import { ProfileCard } from 'components/Profile/profile';
import { StatCard } from 'components/Statistic/Statistic';
import { FriendsBlock } from 'components/Friends/Friends';
import { Transactions } from 'components/Transactions/Transactions';

export const App = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '1000px',
          margin: '0 auto',
        }}
      >
        {' '}
        <ProfileCard
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {' '}
          <FriendsBlock friends={friends} />
          <StatCard title="Upload stats" stats={data} />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <Transactions transactions={transactions} />
      </table>
    </div>
  );
};
