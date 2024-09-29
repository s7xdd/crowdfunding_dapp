import { Badge } from "@chakra-ui/react";
import React from "react";

const StatusBadge = ({status}) => {
  return (
      <Badge
        colorScheme="green"
        rounded="full"
        w={20}
        h={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {status}
      </Badge>
  );
};

export default StatusBadge;
