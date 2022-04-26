import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export const Analytics = ({ trackerId, ...rest }: any) => {
  const route = useRouter();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      ReactGA.initialize(trackerId, { ...rest });
      setInitialized(true);
    }
  }, [initialized, trackerId, rest]);

  useEffect(() => {
    if (process.browser && route.asPath) {
      ReactGA.set({ page: route.asPath });
      ReactGA.pageview(route.asPath);
    }
  }, [route]);

  return null;
};

Analytics.displayName = 'Analytics';
Analytics.propTypes = {
  trackerId: PropTypes.string.isRequired,
};