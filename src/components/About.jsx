import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

import React from 'react'; 

export const About = () => {
  return (
    <div>
        <div>
            <h1>Functional Component</h1>
            <Profile name={"mmm"} xyz="xyz"/>
        </div>
        <div>
            <h1>ClassComponent</h1>
            <ProfileClass name={"kkk"} />
        </div>
    </div>
  )
}

export default About;