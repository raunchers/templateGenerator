import NavBar from "../navBar/page";


export default function Offline(){
    return (
        <div>
            <NavBar/>
            <div className="formContainer">
                <div className="spacer"></div>
                <form className="offlineForm">
                    <div className="radioInput">
                        <div className="radioButtons">
                            <input type="radio" value="RTR" id="offlineRTR" name="offlineEquipment"/>
                            <input type="radio" value="ASTC" id="offlineASTC" name="offlineEquipment"/>
                            <input type="radio" value="WAN2" id="offlineWAN2" name="offlineEquipment"/>
                            <input type="radio" value="WAN3" id="offlineWAN3" name="offlineEquipment"/>
                            <input type="radio" value="IPSEC" id="offlineIPSEC" name="offlineEquipment"/>
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
                        <input type="text" id="alarm" placeholder="Alarm"/>
                        <input type="text" id="hexID" placeholder="HEX ID"/>
                        <input type="text" id="ticketNumber" placeholder="Ticket Number"/>
                        <textarea id="DRM" placeholder="DRM Output" cols="50" rows="10"></textarea>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div className="spacer"></div>
                <div></div>
            </div>
        </div>
    )
}