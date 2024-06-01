import styles from './Videoplayer.module.scss';

function Videoplayer({ videoUrl }: { videoUrl: string }) {
  return (
    <div className={styles.wrapper}>
      {videoUrl ? (
        <iframe
          className={styles.video}
          src={`${videoUrl}?autoplay=1&mute=0&controls=1`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
          frameBorder={0}
        />
      ) : (
        <h1 className={styles.stub}>Видео не найдено</h1>
      )}
    </div>
  );
}

export default Videoplayer;
