import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const SuccessAlert = ({ show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
  }, [show]);

  return (
    <>
      {isVisible && (
        <div className="transition-all duration-500 ease-in-out">
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="filled" severity="success">
              This is a filled success Alert.
            </Alert>
          </Stack>
        </div>
      )}
    </>
  );
};

export default SuccessAlert;
