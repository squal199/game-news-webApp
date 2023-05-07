/** @format */

import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px">
        <SkeletonText></SkeletonText>
      </Skeleton>
    </Card>
  );
};

export default GameCardSkeleton;
