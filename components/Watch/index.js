import { useState, useEffect } from "react";
import { Typography, Paper, Button, Modal } from "@mui/material";
import { Box, } from "@mui/system";
import Stapper from "./Stapper"
import { setCookie, getCookie, deleteCookie } from "cookies-next";


export default function index({ setLevel, level }) {
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [isStart, setIsStart] = useState(false);
    const [alert, setAlert] = useState(false);
    const [task, setTask] = useState(0);

    useEffect(() => {
        if (task >= 4) {
            setTask(0);
            deleteCookie('task')
            setLevel(pre => pre + 1);

            if (getCookie('level'))
                deleteCookie('level')
            setCookie('level', level + 1, { maxAge: 60 * 60 * 22 * 7 })
        } else {
            if (getCookie('task')) setTask(parseInt(getCookie('task')));
            else setCookie('task', task, { maxAge: 60 * 60 * 20 })
        }
    }, [task]);



    useEffect(() => {
        if (isStart)
            setTimeout(() => setSecond(pre => pre + 1), 1000);

        if (second >= 59) {
            setSecond(0);
            setMinute(pre => pre + 1);
        }
    }, [isStart, second])


    useEffect(() => {
        if (minute >= 45) {
            setIsStart(false)
            setAlert(true)
            setMinute(0);
            setSecond(0)

            if (getCookie('task'))
                deleteCookie('task')

            setTask(pre => pre + 1);
        }
    }, [minute])




    return (
        <Box sx={{ height: '80vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Stapper task={task} />

            <Modal
                open={alert}
                onClose={() => setAlert(pre => !pre)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'white', boxShadow: 24, p: 4, }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Time's Up
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Stop Your Study and Have a 10 Minutes Break - Day {level}
                    </Typography>
                </Box>
            </Modal>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Paper sx={{ margin: '1rem', padding: '1rem' }}>
                    <Typography variant="h1">{minute < 10 ? '0' + minute : minute}</Typography>
                </Paper>
                <Paper sx={{ margin: '1rem', padding: '1rem' }}>
                    <Typography variant="h1">{second < 10 ? '0' + second : second}</Typography>
                </Paper>
            </Box>
            <Box >
                <Button variant="contained" disabled={isStart} sx={{ marginRight: '0.5rem' }} color='primary' onClick={() => {
                    setIsStart(true);
                }}>Start</Button>

                <Button variant="contained" disabled={!isStart} sx={{ marginRight: '0.5rem' }} color='error' onClick={() => {
                    setIsStart(false);
                }}>Pause</Button>
            </Box>
        </Box >
    )
}