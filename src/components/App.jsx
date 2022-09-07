import user from '../json/user';
import data from '../json/data';

import { ProfileCard } from 'components/Profile/profile';
import { StatCard } from 'components/Statistic/Statistic';

export const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ProfileCard
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <StatCard title="Upload stats" stats={data} />
    </div>
  );
};
