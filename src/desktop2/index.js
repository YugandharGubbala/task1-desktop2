import {Component} from "react"
import { MdOutlineLocationOn } from "react-icons/md";
import "./index.css"

class Profiles extends Component{
    state={desktop:false}

    changestate = () => {
        this.setState(pre =>({desktop:!pre.desktop}))
    }
    render() {
        const {desktop} = this.state
        return (
            <div>
                <div className="header">
                <img className="headerimg" src="https://i.ibb.co/BBkYPSy/Frame-427319079.png" alt="Frame-427319079" border="0"/>
                </div>
                <div className="page2">
                    <h1>Find Expert Doctors For An In-Clinic Session Here</h1>
                    <div>
                        <input  placeHolder="SELECT LOCATION" className="input1"/>
                        <input placeholder="eg:doctor,clinic name." className="input2"/>
                    </div>
                    
                </div>
                <div className="filtercontainer">
                        <select className="filters">
                            <option>Experince</option>
                        </select>
                        <select className="filters">
                            <option>Gender</option>
                        </select>
                        <select className="filters">
                            <option>Fee</option>
                        </select>
                        <select className="filters">
                            <option>Language</option>
                        </select>
                        <select className="filters">
                            <option>All filters</option>
                        </select>
                    </div>
                    <div className="optionscontainer">
                        <div className="options">Hair care +</div>
                        <div className="options">Hair care +</div>
                        <div className="options">Hair care +</div>
                        <div className="options">Hair care +</div>
                    </div>

                    <div className="bookcontainer">
                        <div className="booking">
                        <img className="photo" src="https://i.ibb.co/RNQ4f00/Group-39487.png" alt="Group-39487" border="0"/>
                        <h3>Dr. prerna Narang</h3>
                        <p>Male-female
                            <br/>7years Experince<br/>speaks: English,Hindi,Telugu
                        </p>
                        <div className="consultioncontainer">
                            <div className="consultion">
                                <p>Video Consultion<br/>$999</p>
                            </div>
                            <div className="consultion">
                                <p>Chat Consultion <br/>Free</p>
                            </div>
                        </div>
                        <button className="btn1">View profile</button>
                        <button className="btn2">Book a consultation</button>
                        </div>
                       
                        <div className="booking">
                        <img className="photo" src="https://i.ibb.co/RNQ4f00/Group-39487.png" alt="Group-39487" border="0"/>
                        <h3>Dr. prerna Narang</h3>
                        <p>Male-female
                            <br/>7years Experince<br/>speaks: English,Hindi,Telugu
                        </p>
                        <div className="consultioncontainer">
                            <div className="consultion">
                                <p>Video Consultion<br/>$999</p>
                            </div>
                            <div className="consultion">
                                <p>Chat Consultion <br/>Free</p>
                            </div>
                        </div>
                        <button className="btn1">View profile</button>
                        <button className="btn2">Book a consultation</button>
                        </div>
                        <div className="booking">
                        <img className="photo" src="https://i.ibb.co/RNQ4f00/Group-39487.png" alt="Group-39487" border="0"/>
                        <h3>Dr. prerna Narang</h3>
                        <p>Male-female
                            <br/>7years Experince<br/>speaks: English,Hindi,Telugu
                        </p>
                        <div className="consultioncontainer">
                            <div className="consultion">
                                <p>Video Consultion<br/>$999</p>
                            </div>
                            <div className="consultion">
                                <p>Chat Consultion <br/>Free</p>
                            </div>
                        </div>
                        <button onClick={this.changestate} className="btn1">View profile</button>
                        <button className="btn2">Book a consultation</button>
                        </div>
                        
                    </div>
            </div>
        )
    }
}

export default Profiles
