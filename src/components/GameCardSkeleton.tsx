/** @format */

import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={5} overflow="hidden" width="300px">
      <Skeleton height="200px">
        <SkeletonText></SkeletonText>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
