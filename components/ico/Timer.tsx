import { useEffect, useMemo, useState } from "react";
import { Text } from '@chakra-ui/react';

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, [parsedDeadline]);

    return (
        <div className="timer">
        <Text
          as="h2"
          fontSize="lg"
          fontWeight="thin"
          textAlign={{ base: 'center', md: 'center' }}
          color="KleoColor.white"
        >
        {`${Math.floor(time/DAY)}`.padStart(2, "0")}:{`${Math.floor((time / HOUR) % 24)}`.padStart(2, "0")}:{`${Math.floor((time / MINUTE) % 60)}`.padStart(2, "0")}:{`${Math.floor((time / SECOND) % 60)}`.padStart(2, "0")}
        </Text>
        </div>
    );
};
