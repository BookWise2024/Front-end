// import { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import styles from './SubMenu.module.css'

// import img from '../../assets/img/menu/book_icon_black.svg'
// import img2 from '../../assets/img/menu/library.svg'
// import logoutimg from '../../assets/img/menu/logout.svg'

// export default function SubMenu() {
//     const [user, setUser] = useState(null);

//     const title = [
//         {key: 1, name: '내 선호책 리스트', image: img, link: '/BookLike'},
//         {key: 2, name: '공공 도서관 찾기', image: img2, link: '/library'}
//     ];

//     function route(link) {
//         navigate(link);
//     }

//     const lis = [];
//     const login = [];
//     const logout = [];

//     const baseUrl = "http://localhost:8080";
//     // 로그인 여부 확인
//     useEffect(() => {
//         const login_check = async() => {
//             const token = localStorage.getItem('accessToken');
//             if (token) {
//                 try {
//                     const response = await axios.get('http://localhost:8080/api/user', {
//                         headers: {
//                             'Authorization': `Bearer ${token}`,
//                         },
//                     });
//                     console.log(response.data);

//                     setUser(response.data);
//                 } catch (error) {
//                     console.error('Error fetching user info', error);
//                 }
//             }
//         }

//         login_check();
//     }, []);

//     // 로그아웃
//     const navigate = useNavigate();

//     const handleLogout = async () => {
//         try {
//             await axios.post(baseUrl + "/logout", {}, { withCredentials: true });

//             // token 제거
//             localStorage.removeItem('accessToken');
//             localStorage.removeItem('refreshToken');

//             navigate('/');
//         } catch (error) {
//             console.error('Logout failed:', error);
//         }
//     };

//     // 로그인 유무에 따른 사용자 계정 나타내기
//     if(user == null) {
//         login.push(
//             <div className={styles.identity} onClick={(e) => {
//                     navigate("/login");
//             }}>로그인이 필요합니다</div>
//         )
//     } else if (user != null) {
//         login.push(
//             <div className={styles.identity}>{user.email}</div>
//         )
//     }

//     // 메뉴 리스트 나열
//     for (let i = 0; i < title.length; i++) {
//         lis.push(
//             <div key={title[i].key} className={styles.menulist} onClick={() => route(title[i].link)}>
//             <div className={ styles.menuicon }>
//                     <img className={ styles.icon } src={title[i].image}/>
//                 </div>
//                 <div className={ styles.menutext }>{ title[i].name }</div>
//             </div>
//         );
//     }

//     // 로그인 여부에 따른 로그아웃 버튼 유무
//     if(user != null) {
//         logout.push(
//             <div key="logout" className={ styles.logoutbutton } onClick={handleLogout}>
//                 <div className={ styles.logouticon }>
//                     <img className={ styles.secicon } src={ logoutimg }/>
//                 </div>
//                 <div className={ styles.menutext }>로그아웃</div>
//             </div>
//         )
//     }
//     // -----------------------------------------------------------------------
//     return(
//         <div className={ styles.layout }>
//             <div className={ styles.sublayout }>
//                 { login }
//                 <div className={ styles.divide }></div>
//                 <div className={ styles.submenu }>
//                     {lis}
//                 </div>
//                 { logout }
//             </div>
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import styles from './SubMenu.module.css'

import bookIcon from '../../assets/img/menu/book_icon_black.svg'
import libraryIcon from '../../assets/img/menu/library.svg'
import logoutIcon from '../../assets/img/menu/logout.svg'

export default function SubMenu({ onClose }) {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const menuItems = [
        { key: 1, name: '내 선호책 리스트', image: bookIcon, link: '/BookLike' },
        { key: 2, name: '공공 도서관 찾기', image: libraryIcon, link: '/mainLib' }
    ];

    // 로그인과 로그아웃 표시하기
    const login = [];
    const logout = [];

    useEffect(() => {
        const checkLogin = async () => {
            const token = localStorage.getItem('accessToken');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8080/api/user', {
                        headers: { 'Authorization': `Bearer ${token}` },
                    });
                    console.log(response.data);
                    setUser(response.data);
                } catch (error) {
                    console.error('Error fetching user info', error);
                }
            }
        };
        checkLogin();
    }, []);

    // 로그아웃
    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:8080/logout", {}, { withCredentials: true });
            
            // token 제거
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            navigate('/');
            onClose();
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    const handleNavigation = (link) => {
        navigate(link);
        onClose();
    };

    // 로그인 유무에 따른 사용자 계정 나타내기
    if(user == null) {
        login.push(
            <div className={styles.identity} onClick={(e) => {
                    navigate("/login");
            }}>로그인이 필요합니다</div>
        )
    } else if (user != null) {
        login.push(
            <div className={styles.identity}>{user.email}</div>
        )
    }

    // 로그인 여부에 따른 로그아웃 버튼 유무
    if(user != null) {
        logout.push(
            <div className={styles.logoutbutton} onClick={handleLogout}>
                <img className={styles.menuicon} src={logoutIcon} alt="로그아웃" />
                <span className={styles.menutext}>로그아웃</span>
            </div>
        )
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.sublayout} onClick={(e) => e.stopPropagation()}>
                {/* <div className={styles.identity}>
                    {user ? user.email : "로그인이 필요합니다"}
                </div> */}
                {login}
                <div className={styles.divide}></div>
                <div className={styles.submenu}>
                    {menuItems.map((item) => (
                        <div key={item.key} className={styles.menulist} onClick={() => handleNavigation(item.link)}>
                            <img className={styles.menuicon} src={item.image} alt={item.name} />
                            <span className={styles.menutext}>{item.name}</span>
                        </div>
                    ))}
                </div>
                {/* <div className={styles.logoutbutton} onClick={handleLogout}>
                    <img className={styles.menuicon} src={logoutIcon} alt="로그아웃" />
                    <span className={styles.menutext}>로그아웃</span>
                </div> */}
                {logout}
            </div>
        </div>
    );
}