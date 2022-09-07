import user from '../json/user';

import { ProfileCard } from 'components/Profile/profile';

export const App = () => {
  return (
    <ProfileCard
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};
