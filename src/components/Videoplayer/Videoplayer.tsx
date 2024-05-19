import * as styles from './Videoplayer.module.scss';

function Videoplayer({ videoUrl }: { videoUrl: string }) {
  return (
    <div className={styles.video__wrapper}>
      <iframe
        className={styles.youtube__video}
        src={`${videoUrl}`}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Videoplayer;
