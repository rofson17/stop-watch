import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const steps = [
    'English',
    'Accounting',
    'Finance/ Management',
    'Others',
];

export default function Stapper({ task }) {
    return (
        <Box sx={{ width: '100%', marginBottom: '3rem' }}>
            <Stepper activeStep={task} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}