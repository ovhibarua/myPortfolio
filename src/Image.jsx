function Image(prop) {
  const { addImg, addClass } = prop;
  return <img src={addImg} alt="img" className={addClass}></img>;
}

export default Image;
