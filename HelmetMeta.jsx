import { Helmet } from 'react-helmet';

const HelmetMeta = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {/* Add Open Graph etc. */}
  </Helmet>
);