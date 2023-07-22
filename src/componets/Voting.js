import React, { useState,useRef,useEffect } from 'react';
import "./Voting.css";
import { Button } from 'primereact/button';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';


const Voting = (props) =>{
    const styles ={
       width:"120px",
       marginTop: "1rem"
    }
    const [timer, setTimer] = useState(120);
    const [timerEnded, setTimerEnded] = useState(false);
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have successfully voted', life: 3000 });
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }
    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        if (timer === 0) {
          setTimerEnded(true);
        }
      }, [timer]);
    
      const formattedTime = `${Math.floor(timer / 60)
        .toString()
        .padStart(2, '0')}:${(timer % 60).toString().padStart(2, '0')}`;
    
    return(
        <div className="voting">
            <img src={props.img} style={styles}/>
            <div className="content">
            <h2>{props.name}</h2>
            {/* <button >Vote</button> */}
            <Toast ref={toast} />
            <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?" 
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <Button  onClick={() =>timerEnded? setVisible(false):setVisible(true)} icon="pi pi-check" label="Vote" className="mr-2"></Button>
            <div>
            </div>
            
            </div>
            

        </div>
    )
}

export default Voting
