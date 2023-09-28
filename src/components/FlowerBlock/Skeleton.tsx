import ContentLoader from 'react-content-loader';

export const Skeleton = (props: any) => (
  <ContentLoader
    className="flower-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="127" r="127" />
    <rect x="0" y="262" rx="10" ry="10" width="280" height="26" />
    <rect x="0" y="316" rx="10" ry="10" width="280" height="88" />
    <rect x="3" y="429" rx="10" ry="10" width="95" height="30" />
    <rect x="127" y="420" rx="25" ry="25" width="152" height="45" />
  </ContentLoader>
);
