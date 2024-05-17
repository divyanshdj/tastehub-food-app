// import { useEffect, useState } from "react";

const About = () =>{

    // const [userInfo, setUserInfo] = useState({});

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // async function fetchData(){
    //     const data = await fetch("https://api.github.com/users/divyanshdj");
    //     const json = await data.json();
    //     setUserInfo(json)
    //     console.log(json);
    // }

    // const { avatar_url, name, location, twitter_username } = userInfo;

    return(
        <div style={{textAlign:"center"}}>
            <h1>About Page....</h1>
            {/* <div className="avatar-card">
                <img width={"200"} src={avatar_url} alt="avatar" />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h3>Twitter : @{twitter_username}</h3>
            </div> */}
        </div>
    );
}

export default About;