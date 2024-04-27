function Info(props: any) {
  return (
    <div className='item'>
      <div className='wrapper'>
        <img className='thumbnail' src={props.image} />
        <h2 className='title'>{props.title}</h2>
        <div className='inner__wrapper'>
          <span className='producer'>{props.producer}</span>
          <span className='year'>{props.year}</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
