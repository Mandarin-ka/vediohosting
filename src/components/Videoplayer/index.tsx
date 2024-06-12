import Title from '../StyledComponents/Title';
import { StyledIFrame } from './styles';

function Videoplayer({ videoUrl }: { videoUrl: string }) {
  if (videoUrl)
    return (
      <StyledIFrame
        src={`${videoUrl}?autoplay=1&mute=0&controls=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  return <Title>Видео не найдено</Title>;
}

export default Videoplayer;
