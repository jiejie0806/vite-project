import { useState } from 'react';
import { routersArray } from '../../router/index';
import { Menu, MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

type ItemType = {
    path: String,
    element: JSX.Element,
    index?: Boolean,
}

interface RoutersType {
    path: String,
    type?: String,
    label?: String,
    element: JSX.Element,
    children?: ItemType[],
}

function Aside() {
    // 路由导航
    const navigate = useNavigate();
    // 获取默认选中的菜单项
    const sessionSelectKeys = sessionStorage.getItem('setSelectKeys') || '';
    const defaultOpenKeys = JSON.parse(sessionStorage.getItem('openKeys')) || [];
    const [routers, setRouters] = useState(routersArray);

    const [selectKeys, setSelectKeys] = useState<string >(sessionSelectKeys);
    const [openKeys, setOpenKeys] = useState<[]>(defaultOpenKeys);

    const handleClick: MenuProps['onClick'] = (e) => {
        const path = e.keyPath;
        const copyPath = JSON.parse(JSON.stringify(path));
        setOpenKeys(copyPath.slice(1));
        // 跳转对应路由的页面
        const keyPath = e.keyPath.reverse().join('/');
        navigate(`/${keyPath}`);
        setSelectKeys(e.key);
        // 存储数据在本地，刷新还能找到当前页面
        sessionStorage.setItem('setSelectKeys', e.key);
        sessionStorage.setItem('openKeys', JSON.stringify(copyPath.slice(1)));

    }
    return (
        <div>
            <Menu
                items={routers}
                onClick={handleClick}
                defaultOpenKeys={openKeys}
                defaultSelectedKeys={selectKeys}
                mode="inline"
                theme={'dark'} />
        </div>
    )
}

export default Aside;