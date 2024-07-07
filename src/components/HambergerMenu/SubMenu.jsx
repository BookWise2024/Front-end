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
            console.log(token);
            if (token) {
                try {
                    const response = await axios.get('http://43.203.74.198:8000/api/user/profile', {
                        // headers: { 'Authorization': `Bearer ${token}` },
                        headers: { 'Authorization': `${token}` },
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
            await axios.post("http://43.203.74.198:8000/api/auth/logout", {}, { withCredentials: true });
            
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
    if(user) {
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
                {/*<div className={styles.logoutbutton} onClick={handleLogout}>*/}
                {/*    <img className={styles.menuicon} src={logoutIcon} alt="로그아웃" />*/}
                {/*    <span className={styles.menutext}>로그아웃</span>*/}
                {/*</div>*/}
                {logout}
            </div>
        </div>
    );
}