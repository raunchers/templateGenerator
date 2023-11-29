"use client";
import NavBar from "../navBar/page";
import{useState} from "react";

export default function Offline(){

    const [equipment, setEquipment] = useState("");
    const [alarm, setAlarm] = useState("");
    const [hexID, setHexID] = useState("");
    const [ticketNumber, setTicketNumber] = useState("");
    const [drmOutput, setDrmOutput] = useState("");
    const [equipInAlarm, setEquipInAlarm] = useState("");

    function addEquipInfo(){
        const equipmentInAlarm = {
            equipment: equipment,
            alarm: alarm,
            hexID: hexID,
            ticketNumber: ticketNumber,
            drmOutput: drmOutput,
        }

        // Add to the post state
        setEquipInAlarm([...equipInAlarm, setEquipInAlarm]);
        setEquipment("");
        setAlarm("");
        setHexID("");
        setTicketNumber("");
        setDrmOutput("");

        console.log(equipmentInAlarm);
    }

    return (
        <div>
            <NavBar/>
            <div className="formContainer">
                <div className="spacer"></div>
                <div className="offlineForm"> {/* start of form */}
                    <div className="radioInput">
                        <div className="radioButtons">
                            <input type="radio"
                                   value="RTR"
                                   id="offlineRTR"
                                   name="offlineEquipment"
                                   onChange={(e) => setEquipment(e.target.value)}
                                   />
                            <input type="radio"
                                   value="ASTC"
                                   id="offlineASTC"
                                   name="offlineEquipment"
                                   onChange={(e) => setEquipment(e.target.value)}
                                   />
                            <input type="radio"
                                   value="WAN2"
                                   id="offlineWAN2"
                                   name="offlineEquipment"
                                   onChange={(e) => setEquipment(e.target.value)}
                                   />
                            <input type="radio"
                                   value="WAN3"
                                   id="offlineWAN3"
                                   name="offlineEquipment"
                                   onChange={(e) => setEquipment(e.target.value)}
                                   />
                            <input type="radio"
                                   value="IPSEC Tunnel"
                                   id="offlineIPSEC"
                                   name="offlineEquipment"
                                   onChange={(e) => setEquipment(e.target.value)}
                                   />
                        </div>
                        <div className="radioLabels">
                            <label htmlFor="offlineRTR">RTR</label>
                            <label htmlFor="offlineASTC">ASTC</label>
                            <label htmlFor="offlineWAN2">WAN2</label>
                            <label htmlFor="offlineWAN3">WAN3</label>
                            <label htmlFor="offlineIPSEC">IPSEC</label>
                        </div>
                    </div>
                    <div className="inputForm">
                        <input type="text"
                               id="alarm"
                               placeholder="Alarm"
                               onChange={(e) => setAlarm(e.target.value)}
                        />
                        <input type="text"
                               id="hexID"
                               placeholder="HEX ID"
                               onChange={(e) => setHexID(e.target.value)}
                        />
                        <input type="text"
                               id="ticketNumber"
                               placeholder="Ticket Number"
                               onChange={(e) => setTicketNumber(e.target.value)}
                        />
                        <textarea id="DRM"
                                  placeholder="DRM Output"
                                  cols="50"
                                  rows="10"
                                  onChange={(e) => setDrmOutput(e.target.value)}
                        >
                        </textarea>
                        <button type="submit" onClick={addEquipInfo}>Submit</button>
                    </div>
                </div> {/* end of form */}
                <div className="spacer"></div>
                <div></div>
            </div>
        </div>
    )
}