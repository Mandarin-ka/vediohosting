import { memo, useState } from 'react';

import Modal from '@/components/Modal';
import Skeleton from '@/components/MovieCards/MovieCard/Skeleton';
import Card from '@/components/MovieCards/MovieCard/styled';
import Flex from '@/components/StyledComponents/Flex';
import Image from '@/components/StyledComponents/Image';
import Text from '@/components/StyledComponents/Text';
import Title from '@/components/StyledComponents/Title';
import Videoplayer from '@/components/Videoplayer';
import { ClickEventType } from '@/types/clickEventType';
import { Movie } from '@/types/movies';
import { getDirector } from '@/utils/getDirector';

function MovieCard({ movie }: { movie?: Movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e: ClickEventType) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return movie ? (
    <>
      {isModalOpen && (
        <Modal setIsActive={setIsModalOpen} isActive={isModalOpen}>
          <Videoplayer videoUrl={movie.videos?.trailers[0]?.url || ''} />
        </Modal>
      )}

      <Card onClick={openModal} data-testid="card">
        <Image src={movie.poster?.previewUrl || 'https://cdn-icons-png.flaticon.com/512/4054/4054617.png'} alt="" height={450} />
        <Flex m={[13, 0, 0, 0]} ai="flex-start">
          <Image src={getDirector(movie)?.photo} alt="" width={36} radius={5.5} />
          <Flex fld="column" m={[0, 0, 0, 12]}>
            <Title data-testid="title">{movie.name || ' '}</Title>
            <Flex ai="center" m={[5, 0, 0, 0]}>
              <Text>{getDirector(movie)?.name || 'Неизвестен'}</Text>
              <Text className="year">{movie.year}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  ) : (
    <Skeleton />
  );
}

export default memo(MovieCard);
