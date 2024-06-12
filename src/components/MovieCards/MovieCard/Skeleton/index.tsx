import Card from '../styled';
import Stub from '@/components/MovieCards/MovieCard/Skeleton/Stub/Stub';
import Flex from '@/components/styled/Flex/Flex';

function Skeleton() {
  return (
    <Card data-testid="skeleton">
      <Stub w={300} h={450} radius={0} />
      <Flex>
        <Stub w={36} h={50} radius={5.5} />
        <Flex fld="column" m={[12, 0, 0, 0]}>
          <Stub w={300} h={12} radius={10} />
          <Flex m={[10, 0, 0, 0]} jc="space-between">
            <Stub w={150} h={12} radius={10} />
            <Stub className="year" w={90} h={12} radius={10} />
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default Skeleton;
