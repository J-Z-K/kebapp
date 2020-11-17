import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { auth } from "../../firebase.js";

const ProfilePage = () => {
    const user = useContext(UserContext);
    const { displayName, email } = user;
    let { photoURL } = user;
    photoURL = photoURL
        ? photoURL.replace(/"/g, "")
        : "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png";

    return (
        <div>
            <div>
                <div
                    style={{
                        background: `url(${
                            photoURL.replace(/"/g, "") ||
                            "https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png"
                        })  no-repeat center center`,
                        backgroundSize: "cover",
                        height: "200px",
                        width: "200px",
                    }}
                ></div>
                <div>
                    <h2>{displayName}</h2>
                    <h3>{email}</h3>
                </div>
            </div>
            <button
                onClick={() => {
                    auth.signOut();
                }}
            >
                Sign out
            </button>
        </div>
    );
};
export default ProfilePage;
