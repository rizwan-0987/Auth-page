// import React from "react";
// import styles from "./SocialLogins.module.css";

// export default function SocialLogins({ providers }) {
//   return (
//     <div className={styles.socialContainer}>
//       <p className={styles.orText}>Or sign in with</p>
//       <div className={styles.buttons}>
//         {providers.map((p, idx) => (
//           <button key={idx} className={styles.socialBtn} onClick={p.onClick}>
//             <img src={p.icon} alt={p.name} className={styles.icon} />
//             {p.name}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import styles from "./SocialLogins.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function SocialLogins() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.socialContainer}>
      <p className={styles.orText}>Or sign in with</p>
      <div className={styles.buttons}>
        <button
          className={styles.socialBtn}
          onClick={() =>
            loginWithRedirect({
              connection: "google-oauth2",
            })
          }
        >
          <img
            src="src\assets\auth_page\google.svg"
            alt="Google"
            className={styles.icon}
          />
          Google
        </button>
        <button
          className={styles.socialBtn}
          onClick={() =>
            loginWithRedirect({
              connection: "facebook",
            })
          }
        >
          <img
            src="src\assets\auth_page\Facebook.svg"
            alt="Facebook"
            className={styles.icon}
          />
          Facebook
        </button>
      </div>
    </div>
  );
}

