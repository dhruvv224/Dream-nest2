// TestToast.js
import React from 'react';
import { Button, useToast, ChakraProvider } from '@chakra-ui/react';

const TestToast = () => {
    const toast = useToast();

    return (
        <div>
            <Button
                onClick={() =>
                    toast({
                        title: 'Test Toast',
                        description: 'This is a test toast notification',
                        status: 'info',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            >
                Show Test Toast
            </Button>
        </div>
    );
};



export default TestToast;
