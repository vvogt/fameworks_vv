export function setBgImage(imageUrl, fixedOrScroll, height) {
  let bgImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: height,
    backgroundAttachment: fixedOrScroll
  };

  return bgImageStyle;
};
