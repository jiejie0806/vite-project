
import React, { Suspense} from 'react';
import Loading from '../components/loading';

// 组件懒加载
const LazyLoad = (Comp: React.LazyExoticComponent<() => JSX.Element>) => {
    return (
        <Suspense fallback={<Loading/>}>
            <Comp />
        </Suspense>
    )
}

export default LazyLoad;