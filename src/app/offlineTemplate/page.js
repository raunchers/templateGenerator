import NavBar from "../navBar/page";

export default  function page(){
    return (
        <div>
                <NavBar/>
                <div className="templateBodyPage">
                        <div className="spacer"></div>
                        <div className="templateBody">
                                <div>
                                        ===================== <br/>
                                        GLS Alarm Information <br/>
                                        \===================== <br/>
                                        <br/>
                                        Site Hard Down: Depends on equipment<br/>
                                        <br/>
                                        Equipment in Alarm: RTR<br/>
                                        <br/>
                                        Current Alarm(s): Alarm<br/>
                                        <br/>
                                        ===============<br/>
                                        DRM Information<br/>
                                        \===============<br/>
                                        <br/>
                                        <pre>DRM output</pre><br/>
                                        ==================<br/>
                                        TMC Engaged: Yes<br/>
                                        \==================<br/>
                                        <br/>
                                        TMC Ticket #: Pending<br/>
                                        <br/>
                                        TMC Email String: NYCDOT HEX 5CEC | GLS TT#9751838 | Router Offline<br/>
                                        <br/>
                                        =====================<br/>
                                        Current Actions Taken<br/>
                                        \=====================<br/>
                                        <br/>
                                        Placeholder text<br/>
                                        <br/>
                                        ===========<br/>
                                        Next Action<br/>
                                        \===========<br/>
                                        <br/>
                                        Monitor the email string for updates. Request updates when necessary.<br/>
                                        <br/>
                                        <hr/>
                                        <p>
                                                <br/>
                                                Good evening, <br/>
                                                site HEXID is showing an offline EQUIPMENTINALARM. Could you investigate and dispatch a tech if needed?
                                        </p>
                                </div>
                        </div>
                        <div className="spacer"></div>
                </div>
        </div>
    );
}