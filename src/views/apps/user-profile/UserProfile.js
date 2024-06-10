import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from '../../../components/container/PageContainer';

import ProfileBanner from 'src/components/apps/userprofile/profile/ProfileBanner';
import IntroCard from 'src/components/apps/userprofile/profile/IntroCard';
import PhotosCard from 'src/components/apps/userprofile/profile/PhotosCard';
import Post from 'src/components/apps/userprofile/profile/Post';
import FormTabs from '../../../components/forms/form-horizontal/FormTabs';

const UserProfile = () => {
  return (
    <PageContainer title="User Profile" description="this is User Profile page">

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>

        {/* intro and Photos Card */}
        <Grid item sm={12} lg={4} xs={12}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              {/* <IntroCard /> */}
            </Grid>
            {/* <Grid item sm={12}>
              <PhotosCard />
            </Grid> */}
          </Grid>
        </Grid>
        {/* Posts Card */}
        <Grid item sm={12} lg={12} xs={12}>
          <FormTabs />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default UserProfile;
