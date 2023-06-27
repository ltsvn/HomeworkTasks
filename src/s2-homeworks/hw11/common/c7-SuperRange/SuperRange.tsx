import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: 'primary.main',
                '& .MuiSlider-rail': {
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                },
                '& .MuiSlider-track': {
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.main',
                },
                '& .MuiSlider-thumb': {
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.3)',
                },
                '& .MuiSlider-valueLabel': {
                    color: '#ffffff',
                    backgroundColor: 'primary.main',
                    borderRadius: '4px',
                    padding: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    top: '-30px',
                },
            }}
            {...props}
        />
    );
};

export default SuperRange;
