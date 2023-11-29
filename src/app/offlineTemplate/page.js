import NavBar from "../navBar/page";

export default  function page(){
    return (
        <div>
            <NavBar/>
            <div className="formContainer">
                <p>
                    ===================== <br/>
                    GLS Alarm Information <br/>
                    \===================== <br/>
                    <br/>
                    Site Hard Down: No <br/>
                    <br/>
                    Equipment in Alarm: RTR <br/>
                    <br/>
                    Current Alarm(s): <br/>
                    <br/>
                    ===============<br/>
                    DRM Information<br/>
                    \===============<br/>
                    <br/>
                    <p>DRM Output</p>
                    <br/>
                    ================= <br/>
                    TMC Engaged: Yes <br/>
                    \================= <br/>
                    <br/>
                    TMC TT#: Pending<br/>
                    <br/>
                    TMC Email String: NYCDOT HEX  | GLS TT# | IPSEC Tunnel Offline<br/>
                    <br/>
                    =====================<br/>
                    Current Actions Taken<br/>
                    \=====================<br/>
                    <br/>
                    The IPSEC tunnel is offline. I emailed TMC requesting they remotely reboot the router.<br/>
                    <br/>
                    ===========<br/>
                    Next Action<br/>
                    \===========<br/>
                    <br/>
                    Monitor the email string for updates. Request updates when necessary.<br/>
                    <br/>
                </p>
            </div>
        </div>
    );
}