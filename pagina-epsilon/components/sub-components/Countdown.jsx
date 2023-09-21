import React, { useState, useEffect } from 'react';
import '../../src/index.css';
import '../../src/assets/timer.json';


function Countdown() {
    // Define los estados para días, horas, minutos y segundos
    const [days, setDays] = useState(15);
    const [hours, setHours] = useState(10);
    const [minutes, setMinutes] = useState(24);
    const [seconds, setSeconds] = useState(50);

    useEffect(() => {
        // Cargar los valores iniciales desde el archivo JSON solo al montar el componente
        fetch('../../src/assets/timer.json')
            .then(response => response.json())
            .then(data => {
                setDays(data.days);
                setHours(data.hours);
                setMinutes(data.minutes);
                setSeconds(data.seconds);
            })
            .catch(error => {
                console.error('Error loading countdown data', error);
            });
    }, []); // El segundo argumento [] asegura que este efecto solo se ejecute al montar el componente

    useEffect(() => {
        // Función para actualizar el contador cada segundo
        const interval = setInterval(() => {
            // Resta un segundo a los segundos
            setSeconds(seconds => {
                if (seconds === 0) {
                    // Si los segundos llegan a 0, actualiza los minutos y reinicia los segundos
                    setMinutes(minutes => {
                        if (minutes === 0) {
                            // Si los minutos llegan a 0, actualiza las horas y reinicia los minutos
                            setHours(hours => {
                                if (hours === 0) {
                                    // Si las horas llegan a 0, actualiza los días y reinicia las horas
                                    setDays(days => {
                                        if (days === 0) {
                                            // Si todos los valores llegan a 0, detén el intervalo
                                            clearInterval(interval);
                                            return 0;
                                        }
                                        return days - 1;
                                    });
                                    return 23;
                                }
                                return hours - 1;
                            });
                            return 59;
                        }
                        return minutes - 1;
                    });
                    return 59;
                }
                return seconds - 1;
            });
        }, 1000);

        // Limpia el intervalo cuando el componente se desmonta
        return () => {
            clearInterval(interval);
        };
    }, []); // El segundo argumento [] asegura que este efecto solo se ejecute al montar el componente

    useEffect(() => {
        // Guardar los valores en el archivo JSON cada vez que cambien
        const countdownData = {
            days,
            hours,
            minutes,
            seconds
        };

        fetch('../../src/assets/timer.json', {
            method: 'PUT', // Utiliza el método PUT para actualizar el archivo JSON
            body: JSON.stringify(countdownData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .catch(error => {
            console.error('Error saving countdown data', error);
        });
    }, [days, hours, minutes, seconds]);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{days}</span>
                days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{hours}</span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{minutes}</span>
                min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">{seconds}</span>
                sec
            </div>
        </div>
    );
}

export default Countdown;
