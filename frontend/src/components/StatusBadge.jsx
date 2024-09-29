import { Badge } from "@chakra-ui/react";
import React from "react";

const StatusBadge = ({status}) => {
    const getColorScheme = (status) => {
        return status === 'active' ? 'green' : status === 'expired' ? 'red' : 'gray'
    } 
  return (
      <Badge
        colorScheme={getColorScheme(status)}
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
