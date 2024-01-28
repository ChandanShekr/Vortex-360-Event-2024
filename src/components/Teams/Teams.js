import React from 'react';
import "./teams.css";
import profile from "./profile img.jpg";

const Teams = () => {
    return (
        <>
            <div id="teams">
                <h1>Registration</h1>
                <h2>Track name</h2>
                <div id="teams_profile">
                    <div id="teams_pro_img">
                        <img src={profile}></img>
                    </div>
                    <div id="track_info">

                    </div>
                    <div id="teams_info">
                        <h2>Team info</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Creating a 5x2 table */}
                                <tr>
                                    <td>Tanay</td>
                                    <td>tanaynaik@gmail.com</td>

                                </tr>

                                {/* <tr>
                                    <td>Name</td>
                                    <td>Tanay</td>
                                    <td>Tanay@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Tanay</td>
                                    <td>Tanay@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Name</td>
                                    <td>Tanay</td>
                                    <td>Tanay@gmail.com</td>
                                </tr> */}
                            </tbody>
                        </table></div>
                </div>
                <div id="teams_body">

                    <form>
                        <h2>Individual</h2>

                        <div className="input-box">

                            <input placeholder="Name" type="text" id="name" name="name" required />
                        </div>

                        <div className="input-box">

                            <input placeholder="E-mail" type="email" id="email" name="email" required />
                        </div>

                        <div className="input-box">

                            <input placeholder="Password" type="password" id="password" name="password" required />
                        </div>

                        <div className="input-box">

                            <input placeholder="Team code" type="text" id="teamCode" name="teamCode" />
                        </div>

                        <button type="submit">Register</button>
                    </form>


                    <form>
                        <h2>Team</h2>

                        <div className="input-box">

                            <input placeholder="Name" type="text" id="name" name="name" required />
                        </div>

                        <div className="input-box">

                            <input placeholder="E-mail" type="email" id="email" name="email" required />
                        </div>

                        <div className="input-box">

                            <input placeholder="Password" type="password" id="password" name="password" required />
                        </div>

                        <div className="input-box">

                            <input placeholder="Teammate 1 Email" type="email" id="teamCode" name="teamCode" required />
                        </div>

                        <button type="submit">Register</button>
                    </form>

                </div>
            </div>
        </>
    );
};

export default Teams;