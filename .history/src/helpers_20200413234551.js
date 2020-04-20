export function setBgImage = (imageUrl) => {
  let bgImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '250px',
  };

  return bgImageStyle;
};
