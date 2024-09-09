import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardOutlined, DownOutlined,CalendarOutlined,ProjectOutlined ,ReadOutlined,AppstoreOutlined,CarryOutOutlined,TeamOutlined} from '@ant-design/icons';

const SideBar = () => {
    const [open, setOpen] = useState(true);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const menus = [
        { titre: 'Dashboard', icon: <DashboardOutlined />, gap: true, lien: '/Sig/Directeur' },
        { titre: 'Agents', icon: <TeamOutlined />, lien: '/Sig/Directeur/Liste des agents' },
        { titre: 'Projets', icon: <ProjectOutlined />, lien: '/Sig/Directeur/Projets' },
        { titre: 'Formations', icon: <ReadOutlined />, lien: '/Sig/Directeur/Formations' },
        { titre: 'Activités', icon: <AppstoreOutlined />, lien: '/Sig/Directeur/Activités' },
        {
            titre: 'Absences',
            icon: <DownOutlined />, 
            lien:'',
            submenu: true,
            sousMenus: [
                { titre: 'Ordre de Missions', icon: <CarryOutOutlined />, lien: '/Sig/Directeur/Absences/Missions' },
                { titre: 'Demandes de Congés', icon: <CalendarOutlined />, lien: '/Sig/Directeur/Absences/Congés' },
            ]
        },
        { titre: 'Planning', icon: <CalendarOutlined />, lien: '/Sig/Directeur/Planning' },
    ];  
    
    
    return (
        <div className='flex '>
            <div className={` ${open ? 'w-72' : 'w-20'} h-screen bg-vert duration-300`}>
                <h1 className={`cursor-pointer text-3xl font-bold text-orangePure text-center`} onClick={() => setOpen(!open)}>DTSI</h1>
                <div className='mx-3'>
                    <ul>
                        {menus.map((menu, index) => (
                            <React.Fragment key={index}>
                                <NavLink to={menu.lien}>
                                    <li
                                        className={`text-white text-xl flex items-center ${open ? null : 'justify-center'}  gap-x-4 cursor-pointer p-2 hover:bg-lime-600 rounded-md ${menu.gap ? 'mt-9' : 'mt-2'}`}
                                        onClick={() => menu.submenu && setSubmenuOpen(!submenuOpen)}
                                    >
                                        {menu.icon}
                                        <span className={`${!open && 'hidden'} origin-left duration-300`}>{menu.titre}</span>
                                    </li>
                                </NavLink>
                                {menu.submenu && submenuOpen && open && (
                                    <ul className="ml-6">
                                        {menu.sousMenus.map((sousMenu, index) => (
                                            <NavLink to={sousMenu.lien}>
                                                <li
                                                    key={index}
                                                    className='text-white text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-lime-600 rounded-md mt-2'
                                                >
                                                    {sousMenu.icon}
                                                    <span>{sousMenu.titre}</span>
                                                </li>
                                            </NavLink>
                                        ))}
                                    </ul>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
